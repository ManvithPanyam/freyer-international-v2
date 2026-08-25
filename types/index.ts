export type ServiceType =
  | "air_freight"
  | "ocean_freight"
  | "customs_brokerage"
  | "warehousing"
  | "project_cargo"
  | "risk_management";

export interface BranchLocation {
  id: string;
  city: string;
  hubName: string;
  address: string;
  phone?: string;
  mobile?: string;
  email: string;
  landmark?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: "heavy_lift" | "breakbulk" | "plant_relocation" | "transformer" | "over_dimensional";
  summary: string;
  verifiedDetails: {
    origin?: string;
    destination?: string;
    weightTons?: number;
    challengesSolved?: string;
  };
  imageUrls: string[];
}

export interface AccreditationBadge {
  id: string;
  name: string;
  issuingBody: string;
  verificationSource: string;
  badgeUrl: string;
}
