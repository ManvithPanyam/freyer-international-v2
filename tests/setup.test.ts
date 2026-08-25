import { describe, it, expect } from "vitest";
import { rfqSchema } from "../lib/validations/rfq";

describe("RFQ Schema Validation", () => {
  it("validates a complete RFQ submission correctly", () => {
    const sampleRfq = {
      service: "air_freight" as const,
      origin: "Chennai (MAA)",
      destination: "Frankfurt (FRA)",
      cargoType: "general" as const,
      weightKg: 1250,
      companyName: "Automotive Precision Ltd",
      contactName: "John Doe",
      corporateEmail: "jdoe@autoprecision.com",
      phone: "+91 9876543210",
      specialInstructions: "Temperature sensitive cargo",
    };

    const result = rfqSchema.safeParse(sampleRfq);
    expect(result.success).toBe(true);
  });

  it("fails validation on invalid email or negative weight", () => {
    const invalidRfq = {
      service: "air_freight" as const,
      origin: "Chennai",
      destination: "Mumbai",
      cargoType: "general" as const,
      weightKg: -50,
      companyName: "Test Co",
      contactName: "Tester",
      corporateEmail: "not-an-email",
      phone: "123",
    };

    const result = rfqSchema.safeParse(invalidRfq);
    expect(result.success).toBe(false);
  });
});
