"use server";

import { rfqSchema } from "@/lib/validations/rfq";

export interface SubmitRfqResult {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
}

export async function submitRfqAction(data: unknown): Promise<SubmitRfqResult> {
  try {
    const parsed = rfqSchema.safeParse(data);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path[0] as string;
        if (path && !fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      }
      return {
        success: false,
        message: "Please correct the errors in the form.",
        errors: fieldErrors,
      };
    }

    const validData = parsed.data;

    // Persist to Firestore if initialized
    try {
      if (process.env.FIREBASE_PROJECT_ID || process.env.FIREBASE_CONFIG) {
        const { adminDb } = await import("@/lib/firebase/admin");
        if (adminDb) {
          await adminDb.collection("rfq_inquiries").add({
            ...validData,
            status: "pending_review",
            createdAt: new Date().toISOString(),
          });
        }
      }
    } catch (dbErr) {
      console.warn("Firestore RFQ storage skipped:", dbErr instanceof Error ? dbErr.message : "Not configured");
    }

    return {
      success: true,
      message: "Your shipment inquiry has been received.",
    };
  } catch (error) {
    console.error("RFQ submission error:", error);
    return {
      success: false,
      message: "An unexpected error occurred while processing your request. Please try again.",
    };
  }
}
