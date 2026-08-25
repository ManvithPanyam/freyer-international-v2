# Conceptual Data Model & Firestore Schema

---

## 1. Collection Schemas

### 1.1 `rfqs` (Inbound Request for Quotes)
```typescript
interface RfqDocument {
  id: string;                          // Auto-generated Firestore ID
  createdAt: FirebaseFirestore.Timestamp;
  status: "new" | "reviewing" | "quoted" | "closed";
  service: "air_freight" | "ocean_fcl" | "ocean_lcl" | "project_cargo" | "customs_brokerage" | "warehousing";
  origin: string;                      // e.g. "Chennai Port (INMAA)"
  destination: string;                 // e.g. "Hamburg Port (DEHAM)"
  shipmentDate?: string;               // ISO date string
  incoterms?: "EXW" | "FOB" | "CIF" | "DDP" | "DAP";
  cargoType: "general" | "hazardous" | "temperature_controlled" | "breakbulk_oversized";
  weightKg: number;
  dimensionsCm?: { length?: number; width?: number; height?: number };
  volumeCbm?: number;
  companyName: string;
  contactName: string;
  corporateEmail: string;
  phone: string;
  specialInstructions?: string;
  attachmentUrls?: string[];           // Firebase Storage download URLs
  source: "web_rfq_wizard";
  ipAddressHash?: string;              // Anonymized hash for anti-abuse
}
```

### 1.2 `branches` (10 Verified Hubs)
```typescript
interface BranchDocument {
  id: string;                          // e.g. "chennai_egmore", "bengaluru_marathahalli"
  city: string;
  hubName: string;
  address: string;
  phone?: string;
  mobile?: string;
  email: string;
  isRegisteredOffice?: boolean;
  isOperationalHub?: boolean;
  coordinates?: { lat: number; lng: number };
}
```

### 1.3 `projects` (Case Studies)
```typescript
interface ProjectDocument {
  id: string;
  title: string;
  category: "heavy_lift" | "breakbulk" | "plant_relocation" | "transformer" | "over_dimensional";
  summary: string;
  verifiedDetails: {
    origin?: string;
    destination?: string;
    weightTons?: number;
  };
  imageUrls: string[];
  featured: boolean;
}
```
