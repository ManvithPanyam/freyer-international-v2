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

describe("Credibility & SEO Integrity Tests", () => {
  it("verifies all 11 documented projects data integrity", async () => {
    const projects = (await import("../freyer-forensics-v2/content/projects.json")).default;
    expect(projects).toHaveLength(11);

    for (const p of projects) {
      expect(p.id).toBeDefined();
      expect(p.route_origin).toBeTruthy();
      expect(p.route_destination).toBeTruthy();
      expect(p.transport_mode).toBeTruthy();
      expect(p.local_images.length).toBeGreaterThan(0);

      // Project 8 (Hamburg to Jeddah) has unverified weight, must remain null without fabricated values
      if (p.id === 8) {
        expect(p.weight_kg).toBeNull();
        expect(p.weight_mt).toBeNull();
        expect(p.incoterm).toBe("Ex-Works");
      }
    }
  });

  it("verifies all 9 distinct industry accolades exist on disk", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const awardsDir = path.join(process.cwd(), "public/images/awards");
    const files = fs.readdirSync(awardsDir).filter(f => /\.(jpe?g|png)$/i.test(f));
    expect(files).toHaveLength(9);
  });
});
