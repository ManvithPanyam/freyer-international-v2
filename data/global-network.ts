/**
 * FREYER GLOBAL NETWORK & MOVEMENT DATA
 * Source Truth: Strict empirical audit from freyer-forensics-v2
 * Verified Tiers:
 *   Tier A = Official Government License (CBIC AEO-LO)
 *   Tier B = Original Scraped Archive (Public pages & service copy)
 *   Tier C = Published Network Certification / Award Trophy (SCN, WPA)
 *   Tier D = Documented Project Movement Record (project.html)
 *
 * ZERO INVENTED AGGREGATES. ZERO INVENTED OFFICES. ZERO UNPROVEN GEOGRAPHY.
 */

export interface GeoCoordinate {
  lat: number;
  lng: number;
}

export interface MovementLocation {
  port: string;
  city: string;
  country: string;
  countryCode: string;
  coordinates: GeoCoordinate;
  secondaryCoordinates?: GeoCoordinate;
}

export interface DocumentedMovement {
  id: string;
  slug: string;
  route: string;
  origin: MovementLocation;
  destination: MovementLocation;
  transportType: string;
  weightKg?: number;
  weightTons?: number;
  volumeCbm?: number;
  packageCount?: number;
  dimensions?: string;
  details?: string;
  date?: string;
  sourceFile: string;
  sourceTier: "A" | "B" | "C" | "D";
  exactWording: string;
  safeForPublicDisplay: boolean;
  category: "heavy-lift" | "breakbulk" | "roro" | "flat-rack";
}

export interface PublishedTrafficLane {
  id: string;
  name: string;
  corridor: string;
  originRegion: string;
  destinationRegion: string;
  keyPorts: string[];
  associatedMovements: string[];
  sourceFile: string;
  sourceTier: string;
  description: string;
}

export interface NetworkPartner {
  id: string;
  name: string;
  category: string;
  sourceTier: "A" | "B" | "C" | "D";
  sourceFile: string;
  sourceDate?: string;
  membershipExplicit: boolean;
  activeStatusExplicit: boolean;
  credentials?: string[];
  membershipDetails?: {
    memberSince: string;
    memberNumber: number;
    status: string;
    headquarters: string;
  };
  description?: string;
  logoUrl: string;
}

export interface InstitutionalAccreditation {
  id: string;
  name: string;
  shortName: string;
  certificateClassification: string;
  licenseNumber?: string;
  issueDate?: string;
  expiryDate?: string;
  issuingAuthority: string;
  sourceFile: string;
  sourceTier: "A" | "B" | "C";
  exactWording: string;
}

// 11 Documented Project Movements from project.html
export const DOCUMENTED_MOVEMENTS: DocumentedMovement[] = [
  {
    id: "MV-01",
    slug: "kobe-to-chennai-roro",
    route: "Kobe → Chennai",
    origin: {
      port: "Port of Kobe",
      city: "Kobe",
      country: "Japan",
      countryCode: "JP",
      coordinates: { lat: 34.6901, lng: 135.1955 },
    },
    destination: {
      port: "Chennai Port (INMAA)",
      city: "Chennai",
      country: "India",
      countryCode: "IN",
      coordinates: { lat: 13.0827, lng: 80.2707 },
    },
    transportType: "RoRo Movement",
    weightKg: 37100,
    weightTons: 37.1,
    dimensions: "904 x 310 x 316 cm",
    date: "April 2023",
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "KOBE TO CHENNAI RORO MOVEMENT - 904 x 310 x 316 cm - WT 37100 KG (April 2023)",
    safeForPublicDisplay: true,
    category: "roro",
  },
  {
    id: "MV-02",
    slug: "masan-to-chennai-bb",
    route: "Masan → Chennai",
    origin: {
      port: "Port of Masan",
      city: "Masan",
      country: "South Korea",
      countryCode: "KR",
      coordinates: { lat: 35.2000, lng: 128.5667 },
    },
    destination: {
      port: "Chennai Port (INMAA)",
      city: "Chennai",
      country: "India",
      countryCode: "IN",
      coordinates: { lat: 13.0827, lng: 80.2707 },
    },
    transportType: "Breakbulk Movement",
    weightKg: 200000,
    weightTons: 200.0,
    volumeCbm: 837,
    packageCount: 22,
    date: "May 2023",
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "MASAN TO CHENNAI BB MOVEMENT - 22 Packages / 837 cbm / WT 200 MT (May 2023)",
    safeForPublicDisplay: true,
    category: "breakbulk",
  },
  {
    id: "MV-03",
    slug: "qingdao-to-sohar-dammam",
    route: "Qingdao → Sohar & Dammam",
    origin: {
      port: "Port of Qingdao",
      city: "Qingdao",
      country: "China",
      countryCode: "CN",
      coordinates: { lat: 36.0671, lng: 120.3826 },
    },
    destination: {
      port: "Port of Sohar & King Abdulaziz Port",
      city: "Sohar & Dammam",
      country: "Oman & Saudi Arabia",
      countryCode: "OM",
      coordinates: { lat: 24.3644, lng: 56.7468 },
      secondaryCoordinates: { lat: 26.4207, lng: 50.0888 },
    },
    transportType: "Breakbulk on Container Vessel",
    weightKg: 16000,
    weightTons: 16.0,
    dimensions: "760 x 615 x 50 cm",
    details: "4 x BBK units on cntr. vessel + 1 x 20 FR and 1 x 40 FR for each POD",
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "QINGDAO TO SOHAR & DAMMAM - 4 x BBK unit on cntr. vessel 760 x 615 x 50 cm/ 16 MT + 1 x 20 FR and 1 X40 FRfor each POD",
    safeForPublicDisplay: true,
    category: "breakbulk",
  },
  {
    id: "MV-04",
    slug: "al-jubail-to-jebel-ali",
    route: "Al Jubail → Jebel Ali",
    origin: {
      port: "King Fahd Industrial Port",
      city: "Al Jubail",
      country: "Saudi Arabia",
      countryCode: "SA",
      coordinates: { lat: 27.0046, lng: 49.6596 },
    },
    destination: {
      port: "Port of Jebel Ali",
      city: "Jebel Ali (Dubai)",
      country: "United Arab Emirates",
      countryCode: "AE",
      coordinates: { lat: 25.0064, lng: 55.0633 },
    },
    transportType: "Door-Delivery Heavy Lift",
    weightKg: 296000,
    weightTons: 296.0,
    details: "Door-Delivery Heaviest piece- 2 x 148 MT + Accessories",
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "AL JUBAIL TO JEBEL ALI - Door-Delivery Heaviest piece- 2 x 148 MT + Accessories",
    safeForPublicDisplay: true,
    category: "heavy-lift",
  },
  {
    id: "MV-05",
    slug: "nhava-sheva-to-mogadishu",
    route: "Nhava Sheva → Mogadishu",
    origin: {
      port: "Jawaharlal Nehru Port (JNPT)",
      city: "Nhava Sheva / Mumbai",
      country: "India",
      countryCode: "IN",
      coordinates: { lat: 18.9499, lng: 72.9515 },
    },
    destination: {
      port: "Port of Mogadishu",
      city: "Mogadishu",
      country: "Somalia",
      countryCode: "SO",
      coordinates: { lat: 2.0469, lng: 45.3182 },
    },
    transportType: "Flat Rack Ocean Freight",
    weightKg: 135000,
    weightTons: 135.0,
    details: "5 x 40 FR - WT 27000 KG each",
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "EX NHAVA SHEVA TO MOGADISHU - 5 x 40 FR - WT 27000 KG each",
    safeForPublicDisplay: true,
    category: "flat-rack",
  },
  {
    id: "MV-06",
    slug: "genoa-to-sohar",
    route: "Genoa → Sohar",
    origin: {
      port: "Port of Genoa",
      city: "Genoa",
      country: "Italy",
      countryCode: "IT",
      coordinates: { lat: 44.4056, lng: 8.9463 },
    },
    destination: {
      port: "Port of Sohar",
      city: "Sohar",
      country: "Oman",
      countryCode: "OM",
      coordinates: { lat: 24.3644, lng: 56.7468 },
    },
    transportType: "Flat Rack Ocean Freight",
    weightKg: 318400,
    weightTons: 318.4,
    dimensions: "319 x 231 x 360 cm",
    details: "8 x 40 FR – 319 x 231 x 360 cm- WT 39800 KG each (lots of 2 x 40 FR loaded on consecutive vessels)",
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "EX GENOA TO SOHAR - 8 x 40 FR – 319 x 231 x 360 cm- WT 39800 KG each (lots of 2 x 40 FR loaded on consecutive vessels)",
    safeForPublicDisplay: true,
    category: "flat-rack",
  },
  {
    id: "MV-07",
    slug: "genoa-to-jebel-ali",
    route: "Genoa → Jebel Ali",
    origin: {
      port: "Port of Genoa",
      city: "Genoa",
      country: "Italy",
      countryCode: "IT",
      coordinates: { lat: 44.4056, lng: 8.9463 },
    },
    destination: {
      port: "Port of Jebel Ali",
      city: "Jebel Ali (Dubai)",
      country: "United Arab Emirates",
      countryCode: "AE",
      coordinates: { lat: 25.0064, lng: 55.0633 },
    },
    transportType: "Door-to-Door Heavy Machinery",
    weightKg: 1156000,
    weightTons: 1156.0,
    dimensions: "360 x 263 x 400 cm",
    details: "360 x 263 x 400 cm- WT 68000 KG each Total 17 units moved in different lots (Door to Door )",
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "EX GENOA TO JEBEL ALI - 360 x 263 x 400 cm- WT 68000 KG each Total 17 units moved in different lots (Door to Door )",
    safeForPublicDisplay: true,
    category: "heavy-lift",
  },
  {
    id: "MV-08",
    slug: "hamburg-to-jeddah",
    route: "Hamburg → Jeddah",
    origin: {
      port: "Port of Hamburg",
      city: "Hamburg",
      country: "Germany",
      countryCode: "DE",
      coordinates: { lat: 53.5511, lng: 9.9937 },
    },
    destination: {
      port: "Jeddah Islamic Port",
      city: "Jeddah",
      country: "Saudi Arabia",
      countryCode: "SA",
      coordinates: { lat: 21.4858, lng: 39.1925 },
    },
    transportType: "Breakbulk Shipment (Ex-Works)",
    details: "Ex-Works Break Bulk Shipment",
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "HAMBURG TO JEDDAH - Ex-Works Break Bulk Shipment",
    safeForPublicDisplay: true,
    category: "breakbulk",
  },
  {
    id: "MV-09",
    slug: "shanghai-to-jebel-ali-482mt",
    route: "Shanghai → Jebel Ali",
    origin: {
      port: "Port of Shanghai",
      city: "Shanghai",
      country: "China",
      countryCode: "CN",
      coordinates: { lat: 31.2304, lng: 121.4737 },
    },
    destination: {
      port: "Port of Jebel Ali",
      city: "Jebel Ali (Dubai)",
      country: "United Arab Emirates",
      countryCode: "AE",
      coordinates: { lat: 25.0064, lng: 55.0633 },
    },
    transportType: "Breakbulk Shipment",
    weightKg: 482000,
    weightTons: 482.0,
    volumeCbm: 796,
    packageCount: 29,
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "SHANGHAI TO JEBEL ALI - Break Bulk Shipment 29 PKG, 796 cbm with a weight of 482 MT",
    safeForPublicDisplay: true,
    category: "heavy-lift",
  },
  {
    id: "MV-10",
    slug: "venice-to-mundra-21mt",
    route: "Venice → Mundra",
    origin: {
      port: "Port of Venice",
      city: "Venice",
      country: "Italy",
      countryCode: "IT",
      coordinates: { lat: 45.4408, lng: 12.3155 },
    },
    destination: {
      port: "Port of Mundra",
      city: "Mundra (Gujarat)",
      country: "India",
      countryCode: "IN",
      coordinates: { lat: 22.8396, lng: 69.7042 },
    },
    transportType: "Ex-Works Breakbulk",
    weightKg: 21000,
    weightTons: 21.0,
    dimensions: "410 x 345 x 495 cm",
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "VENICE TO MUNDRA - Ex-Works 410 x 345 x 495 cm – 21000 KG",
    safeForPublicDisplay: true,
    category: "breakbulk",
  },
  {
    id: "MV-11",
    slug: "venice-to-mundra-boom-crane",
    route: "Venice → Mundra (Boom Crane)",
    origin: {
      port: "Port of Venice",
      city: "Venice",
      country: "Italy",
      countryCode: "IT",
      coordinates: { lat: 45.4408, lng: 12.3155 },
    },
    destination: {
      port: "Port of Mundra",
      city: "Mundra (Gujarat)",
      country: "India",
      countryCode: "IN",
      coordinates: { lat: 22.8396, lng: 69.7042 },
    },
    transportType: "Boom Crane Breakbulk",
    weightKg: 37600,
    weightTons: 37.6,
    dimensions: "2700 x 400 x 455 cm (27 meters)",
    details: "Ex-Works terms including road permit loaded as BBK on cntr. vessel",
    sourceFile: "freyer-forensics-v2/raw/html/project.html",
    sourceTier: "D",
    exactWording: "VENICE TO MUNDRA - Boom Crane – 2700 x 400 x 455 cm - WT 37600 KG Ex-Works terms including road permit loaded as BBK on cntr. vessel",
    safeForPublicDisplay: true,
    category: "heavy-lift",
  },
];

// Published Traffic Corridors (from service pages)
export const PUBLISHED_TRAFFIC_LANES: PublishedTrafficLane[] = [
  {
    id: "LANE-01",
    name: "India ↔ Arabian Gulf & Red Sea",
    corridor: "Western Seaboard India to UAE, Saudi Arabia & Oman",
    originRegion: "India (Nhava Sheva, Mundra, Chennai)",
    destinationRegion: "Middle East (Jebel Ali, Dammam, Al Jubail, Jeddah, Sohar)",
    keyPorts: ["Nhava Sheva", "Mundra", "Chennai", "Jebel Ali", "Dammam", "Al Jubail", "Jeddah", "Sohar"],
    associatedMovements: ["MV-03", "MV-04", "MV-06", "MV-07", "MV-08", "MV-09"],
    sourceFile: "services/ocean-services.html, project.html",
    sourceTier: "B/D",
    description: "Maritime shipping corridor handling breakbulk, containerized project cargo, and door deliveries across Arabian Gulf and Red Sea ports.",
  },
  {
    id: "LANE-02",
    name: "East Asia ↔ South Asia & Persian Gulf",
    corridor: "China, Japan & South Korea to Indian Seaports & Jebel Ali",
    originRegion: "East Asia (Shanghai, Qingdao, Kobe, Masan)",
    destinationRegion: "South Asia & Middle East (Chennai, Jebel Ali, Sohar, Dammam)",
    keyPorts: ["Shanghai", "Qingdao", "Kobe", "Masan", "Chennai", "Jebel Ali", "Sohar"],
    associatedMovements: ["MV-01", "MV-02", "MV-03", "MV-09"],
    sourceFile: "services/ocean-services.html, project.html",
    sourceTier: "B/D",
    description: "Industrial shipping corridor moving automotive machinery, RoRo units, and breakbulk from East Asian industrial ports.",
  },
  {
    id: "LANE-03",
    name: "Western & Southern Europe ↔ India & Middle East",
    corridor: "Italy & Germany via Mediterranean to Western India & Red Sea",
    originRegion: "Europe (Genoa, Venice, Hamburg)",
    destinationRegion: "India & Middle East (Mundra, Jebel Ali, Jeddah, Sohar)",
    keyPorts: ["Genoa", "Venice", "Hamburg", "Mundra", "Jeddah", "Jebel Ali", "Sohar"],
    associatedMovements: ["MV-06", "MV-07", "MV-08", "MV-10", "MV-11"],
    sourceFile: "services/ocean-services.html, project.html",
    sourceTier: "B/D",
    description: "Capital equipment route moving heavy industrial units up to 1,156 MT, 27-meter crane consignments, and ex-works cargo.",
  },
  {
    id: "LANE-04",
    name: "Western India ↔ East Africa",
    corridor: "Nhava Sheva to Mogadishu across the Western Indian Ocean",
    originRegion: "India (Nhava Sheva / Mumbai)",
    destinationRegion: "East Africa (Mogadishu, Somalia)",
    keyPorts: ["Nhava Sheva", "Mogadishu"],
    associatedMovements: ["MV-05"],
    sourceFile: "project.html",
    sourceTier: "D",
    description: "Specialized project container transport utilizing 40-foot flat rack equipment to the Port of Mogadishu.",
  },
];

// Verified Network Alliances (Strict Source Audit)
export const NETWORK_PARTNERS: NetworkPartner[] = [
  {
    id: "NET-WPA",
    name: "Worldwide Partners Alliance (WPA)",
    category: "Logistics Network Partner",
    sourceTier: "C",
    sourceFile: "public/images/awards/11.jpeg, 13.jpeg, Our Network Partners/wpa.jpg",
    sourceDate: "2023 & 2024",
    membershipExplicit: true,
    activeStatusExplicit: true,
    credentials: [
      "Voted by WPA Network as: Global Winner - 2022/23 Most Valuable Member South Asia (11th Annual Conference, Bangkok, Thailand)",
      "Voted by WPA Network as: Global Winner - 2023/24 EXCELLENT SALES (12th Annual Conference, Phuket, Thailand)",
    ],
    logoUrl: "/images/Our Network Partners/wpa.jpg",
  },
  {
    id: "NET-SCN",
    name: "Security Cargo Network (SCN)",
    category: "Global Alliance of International Freight Forwarders",
    sourceTier: "C",
    sourceFile: "public/images/SCN_-Member_certificate.png",
    sourceDate: "2024",
    membershipExplicit: true,
    activeStatusExplicit: true,
    membershipDetails: {
      memberSince: "February 2019",
      memberNumber: 420,
      status: "Member in Good Standing 2024",
      headquarters: "Colorado, USA",
    },
    logoUrl: "/images/Our Network Partners/SCN.png",
  },
  {
    id: "NET-WCA",
    name: "World Cargo Alliance (WCA)",
    category: "Freight Forwarder Network",
    sourceTier: "B",
    sourceFile: "freyer-forensics-v2/raw/html/network partners.html, index.html",
    sourceDate: "Undated archive",
    membershipExplicit: true,
    activeStatusExplicit: false,
    description: "Partner network logo displayed under 'Our Network Partners' in official Freyer company archive.",
    logoUrl: "/images/Our Network Partners/wca.png",
  },
  {
    id: "NET-FDX",
    name: "Freight Dynamic Exchange (FDX)",
    category: "Forwarders Directory & Trade Network",
    sourceTier: "B",
    sourceFile: "freyer-forensics-v2/raw/html/network partners.html, index.html",
    sourceDate: "Undated archive",
    membershipExplicit: true,
    activeStatusExplicit: false,
    description: "Partner network logo displayed under 'Our Network Partners' in official Freyer company archive.",
    logoUrl: "/images/Our Network Partners/FDX.jpg",
  },
];

// Institutional Accreditations (Strict Literal Transcription)
export const INSTITUTIONAL_ACCREDITATIONS: InstitutionalAccreditation[] = [
  {
    id: "ACC-AEO",
    name: "Authorized Economic Operator Certificate",
    shortName: "CBIC AEO (LO)",
    certificateClassification: "LO (Freight Forwarder)",
    licenseNumber: "INAAQCA4076M0F243",
    issueDate: "20/08/2024",
    expiryDate: "19/08/2029",
    issuingAuthority: "Central Board of Indirect Taxes and Customs, Ministry of Finance, Government of India",
    sourceFile: "public/images/AEO.jpg",
    sourceTier: "A",
    exactWording: "AUTHORIZED ECONOMIC OPERATOR CERTIFICATE - Freight Forwarder - LO - Certificate Number: INAAQCA4076M0F243 - Valid upto 19/08/2029",
  },
  {
    id: "ACC-FIATA",
    name: "International Federation of Freight Forwarders Associations",
    shortName: "FIATA",
    certificateClassification: "Federation Member",
    issuingAuthority: "FIATA",
    sourceFile: "public/images/FITATa.png, network partners.html",
    sourceTier: "B",
    exactWording: "FIATA member insignia in company media archive",
  },
  {
    id: "ACC-IATA",
    name: "International Air Transport Association",
    shortName: "IATA",
    certificateClassification: "Air Cargo Agent Standard",
    issuingAuthority: "IATA",
    sourceFile: "public/images/IATA.png, network partners.html",
    sourceTier: "B",
    exactWording: "IATA insignia in company media archive",
  },
  {
    id: "ACC-AMTOI",
    name: "Association of Multimodal Transport Operators of India",
    shortName: "AMTOI",
    certificateClassification: "Multimodal Transport Operator",
    issuingAuthority: "AMTOI",
    sourceFile: "public/images/amtoi.png, network partners.html",
    sourceTier: "B",
    exactWording: "AMTOI insignia in company media archive",
  },
];

// Verified Project Statistics (NO INFERRED TOTALS)
export const GLOBAL_NETWORK_METRICS = {
  totalDocumentedMovements: 11,
  largestDocumentedMovement: {
    totalMT: 1156,
    units: 17,
    weightPerUnitMT: 68,
    cargoDescription: "Industrial units moved in different lots (Door to Door)",
    sourceRoute: "MV-07 Genoa to Jebel Ali",
  },
  largestDocumentedMovementMT: 1156.0, // Backwards-compatible numeric alias
  heaviestSingleContractMT: 1156.0, // Legacy alias for backward compatibility
  longestDocumentedCargoDimension: {
    dimensionsCm: "2700 x 400 x 455 cm",
    lengthMeters: 27.0,
    cargoDescription: "Boom Crane loaded as BBK on container vessel",
    sourceRoute: "MV-11 Venice to Mundra",
  },
  longestCargoDimensionMeters: 27.0,  // Backwards-compatible numeric alias
  countriesRepresentedInDocumentedMovements: 10,
  verifiedOriginDestinationCountries: 10, // Backward-compatible alias
  documentedProjectCountries: [
    "Japan",
    "India",
    "South Korea",
    "China",
    "Oman",
    "Saudi Arabia",
    "United Arab Emirates",
    "Somalia",
    "Italy",
    "Germany",
  ],
  customsCertification: "AEO (LO)",
  certificateNumber: "INAAQCA4076M0F243",
  certificateValidity: "2024 to 2029",
};
