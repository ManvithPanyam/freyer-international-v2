/**
 * CARGO IN MOTION — SOURCE-TRUTH AUDITED RECORD
 * 
 * Non-negotiable constraint (§0):
 * Every number, route, unit, and descriptor rendered in this scene MUST come verbatim
 * from the verified project record below. Do not infer, embellish, or "improve" any value.
 * Do not choose a transport mode (RoRo/breakbulk/container/etc.) unless it is explicitly
 * present in the source record.
 * 
 * Audited Source:
 * - freyer-forensics-v2/raw/html/project.html (Line 209-210)
 * - Heading: <h2>SHANGHAI TO JEBEL ALI</h2>
 * - Details: <h3>Break Bulk Shipment 29 PKG, 796 cbm with a weight of 482 MT</h3>
 */

export interface CargoProjectRecord {
  id: string;
  route_origin: string;
  route_destination: string;
  weight_mt: number | null;
  volume_cbm: number | null;
  packages: number | null;
  shipment_type: "Break Bulk" | "Container" | "RoRo" | null;
  date: string | null;
  dimensions_cm: string | null;
  weight_kg?: number | null;
}

export const VERIFIED_SHANGHAI_RECORD: CargoProjectRecord = {
  id: "cargo-01",
  route_origin: "Shanghai",
  route_destination: "Jebel Ali",
  weight_mt: 482,
  volume_cbm: 796,
  packages: 29,
  shipment_type: "Break Bulk",
  date: null,
  dimensions_cm: null,
};
