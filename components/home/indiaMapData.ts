export interface HubCoord {
  id: string;
  city: string;
  shortLabel: string;
  state: string;
  cx: number;
  cy: number;
  labelPosition: "top" | "bottom" | "left" | "right";
}

// Exactly projected coordinates for 67°E-98°E, 6°N-38°N in 600x620 viewBox
// Simplified map labels for high-density elegance
export const HUB_COORDS: HubCoord[] = [
  {
    id: "delhi",
    city: "Delhi / NCR",
    shortLabel: "Delhi",
    state: "Haryana",
    cx: 194.13,
    cy: 184.64,
    labelPosition: "top",
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    shortLabel: "Ahmedabad",
    state: "Gujarat",
    cx: 108.19,
    cy: 290.04,
    labelPosition: "left",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    shortLabel: "Mumbai",
    state: "Maharashtra",
    cx: 113.61,
    cy: 365.8,
    labelPosition: "left",
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    shortLabel: "Hyderabad",
    state: "Telangana",
    cx: 222.39,
    cy: 398.35,
    labelPosition: "right",
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    shortLabel: "Visakhapatnam",
    state: "Andhra Pradesh",
    cx: 315.68,
    cy: 392.73,
    labelPosition: "right",
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    shortLabel: "Bengaluru",
    state: "Karnataka",
    cx: 204.97,
    cy: 484.96,
    labelPosition: "left",
  },
  {
    id: "chennai_egmore",
    city: "Chennai (Egmore)",
    shortLabel: "Chennai",
    state: "Tamil Nadu",
    cx: 256.84,
    cy: 476.0,
    labelPosition: "right",
  },
  {
    id: "chennai_airport",
    city: "Chennai (Airport)",
    shortLabel: "Airport",
    state: "Tamil Nadu",
    cx: 256.0,
    cy: 498.0,
    labelPosition: "right",
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    shortLabel: "Coimbatore",
    state: "Tamil Nadu",
    cx: 192.77,
    cy: 522.74,
    labelPosition: "left",
  },
  {
    id: "tuticorin",
    city: "Tuticorin",
    shortLabel: "Tuticorin",
    state: "Tamil Nadu",
    cx: 215.61,
    cy: 565.94,
    labelPosition: "bottom",
  },
];
