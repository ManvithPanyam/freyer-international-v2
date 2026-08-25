import { z } from "zod";

export const RfqServiceTypeEnum = z.enum([
  "air_freight",
  "ocean_fcl",
  "ocean_lcl",
  "project_cargo",
  "customs_brokerage",
  "warehousing",
]);

export const IncotermsEnum = z.enum([
  "EXW",
  "FCA",
  "CPT",
  "CIP",
  "DAP",
  "DPU",
  "DDP",
  "FAS",
  "FOB",
  "CFR",
  "CIF",
]);

export const rfqSchema = z.object({
  service: RfqServiceTypeEnum,
  origin: z.string().min(2, "Origin location is required"),
  destination: z.string().min(2, "Destination location is required"),
  shipmentDate: z.string().optional(),
  incoterms: IncotermsEnum.optional(),
  cargoType: z.enum(["general", "hazardous", "temperature_controlled", "breakbulk_oversized"]),
  weightKg: z.number().positive("Weight must be greater than zero"),
  dimensionsCm: z
    .object({
      length: z.number().positive().optional(),
      width: z.number().positive().optional(),
      height: z.number().positive().optional(),
    })
    .optional(),
  volumeCbm: z.number().positive().optional(),
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  corporateEmail: z.string().email("Valid corporate email is required"),
  phone: z.string().min(8, "Valid phone number is required"),
  specialInstructions: z.string().max(2000).optional(),
});

export type RfqFormData = z.infer<typeof rfqSchema>;
