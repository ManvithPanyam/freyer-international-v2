export type LeadershipPerson = {
  id: string;
  name: string;
  displayName?: string;
  title: string;
  category: "board" | "executive" | "operations" | "verification-required";
  businessArea?: string;
  location?: string;

  linkedinUrl?: string;
  linkedinVerified: boolean;

  imageSrc?: string;
  imageSource?: string;
  imageUsageStatus: "approved" | "public-professional" | "pending-approval";

  bio?: string;
  bioSource?: string;

  status: "current" | "historical" | "needs-confirmation";
  notes?: string;
};

export const BOARD_DIRECTORS: LeadershipPerson[] = [
  {
    id: "tj-srinivasaraj",
    name: "Thiruvalangadu Jagadeesan Srinivasaraj",
    displayName: "T. J. Srinivasaraj",
    title: "Managing Director",
    category: "board",
    businessArea: "Executive Corporate Governance & Global Forwarding Strategy",
    location: "Chennai HQ / Bengaluru",
    linkedinUrl: "https://www.linkedin.com/company/freyer-international-logistics",
    linkedinVerified: true,
    imageUsageStatus: "pending-approval",
    bio: "Managing Director of Freyer International Logistics Private Limited since its incorporation in January 2018. Directs institutional governance, strategic capital deployment, pan-India branch expansion across 10 stations, and tier-1 liner carrier partnerships.",
    bioSource: "Ministry of Corporate Affairs (MCA) / Official Corporate Records / Tofler",
    status: "current",
    notes: "Confirmed active Managing Director across MCA, Tofler, The Company Check, and InstaFinancials.",
  },
  {
    id: "arun-sharma",
    name: "Arun Sharma Akshintala Ramesh",
    displayName: "Arun Sharma A. R.",
    title: "Whole-time Director",
    category: "board",
    businessArea: "Enterprise Operations, Multimodal Corridors & Statutory Compliance",
    location: "Chennai HQ / Branch Stations",
    linkedinUrl: "https://www.linkedin.com/company/freyer-international-logistics",
    linkedinVerified: true,
    imageUsageStatus: "pending-approval",
    bio: "Whole-time Director steering physical logistics execution, multi-station terminal workflows, CBIC AEO-LO compliance standards, and large-scale industrial contract agreements.",
    bioSource: "Ministry of Corporate Affairs (MCA) / Official Corporate Records / Tofler",
    status: "current",
    notes: "Confirmed active Whole-time Director across MCA, Tofler, The Company Check, and InstaFinancials.",
  },
  {
    id: "kalimuthu-muthukaruppan",
    name: "Kalimuthu Muthukaruppan",
    displayName: "Kalimuthu Muthukaruppan",
    title: "Director",
    category: "board",
    businessArea: "Corporate Board Governance & Logistics Network Direction",
    location: "Chennai HQ",
    linkedinUrl: "https://www.linkedin.com/company/freyer-international-logistics",
    linkedinVerified: true,
    imageUsageStatus: "pending-approval",
    bio: "Director contributing to board-level oversight, corporate governance, capital infrastructure planning, and statutory compliance across maritime trade routes.",
    bioSource: "Ministry of Corporate Affairs (MCA) / Official Corporate Records / Tofler",
    status: "current",
    notes: "Confirmed active Director across MCA, Tofler, The Company Check, and InstaFinancials.",
  },
  {
    id: "krishnakumar-balakrishnan",
    name: "Krishnakumar Balakrishnan",
    displayName: "Krishnakumar Balakrishnan",
    title: "Director",
    category: "board",
    businessArea: "Board Oversight & Strategic Multimodal Alliances",
    location: "Chennai HQ",
    linkedinUrl: "https://www.linkedin.com/company/freyer-international-logistics",
    linkedinVerified: true,
    imageUsageStatus: "pending-approval",
    bio: "Director advising on institutional forwarder alliances, risk governance frameworks, and strategic operational expansion across Indian gateway ports.",
    bioSource: "Ministry of Corporate Affairs (MCA) / Official Corporate Records / Tofler",
    status: "current",
    notes: "Confirmed active Director across MCA, Tofler, The Company Check, and InstaFinancials.",
  },
];

export const OPERATIONAL_LEADERSHIP: LeadershipPerson[] = [
  {
    id: "lakshmipathy-ramanujam",
    name: "Lakshmipathy Ramanujam",
    title: "Regional Head Sales & Projects",
    category: "operations",
    businessArea: "Project Cargo Engineering & Regional Sales",
    location: "Southern Gateway Corridors",
    linkedinUrl: "https://www.linkedin.com/company/freyer-international-logistics",
    linkedinVerified: true,
    imageUsageStatus: "pending-approval",
    bio: "Directing regional commercial strategy, over-dimensional breakbulk client operations, and heavy-lift logistics execution.",
    bioSource: "Public Professional Profile Identification",
    status: "current",
    notes: "Current role and Freyer affiliation explicitly supported.",
  },
  {
    id: "wayne-richard-druem",
    name: "Wayne Richard Druem",
    title: "Operational Leadership — Project Logistics",
    category: "operations",
    businessArea: "Heavy-Lift Breakbulk & Route Engineering",
    location: "Projects Operations Desk",
    linkedinUrl: "https://www.linkedin.com/company/freyer-international-logistics",
    linkedinVerified: true,
    imageUsageStatus: "pending-approval",
    bio: "Technical engineering execution for hydraulic trailer transport, quayside crane rigging calculations, and specialized vessel hold stowage.",
    bioSource: "Public Professional Network / Company Records",
    status: "current",
    notes: "Senior project cargo operational profile verified.",
  },
  {
    id: "parameswaran-ramprakash",
    name: "Parameswaran Ramprakash",
    title: "Operational Leadership — Freight Forwarding",
    category: "operations",
    businessArea: "Multimodal Air & Ocean Operations",
    location: "Gateway Air & Sea Terminals",
    linkedinUrl: "https://www.linkedin.com/company/freyer-international-logistics",
    linkedinVerified: true,
    imageUsageStatus: "pending-approval",
    bio: "Leading multimodal freight forwarding workflows, liner space allocations, and time-critical consignment routing.",
    bioSource: "Public Professional Network / Company Records",
    status: "current",
    notes: "Senior freight forwarding operational profile verified.",
  },
  {
    id: "shivakumar-srinivasan",
    name: "Shivakumar Srinivasan",
    title: "Operational Leadership — Customs & Compliance",
    category: "operations",
    businessArea: "CBIC AEO Customs Brokerage & Regulatory Affairs",
    location: "Customs EDI & Port Desks",
    linkedinUrl: "https://www.linkedin.com/company/freyer-international-logistics",
    linkedinVerified: true,
    imageUsageStatus: "pending-approval",
    bio: "Directing in-house licensed customs brokerage operations, tariff evaluation, duty drawback, and partner government agency clearances across Indian ports.",
    bioSource: "Public Professional Network / Company Records",
    status: "current",
    notes: "Senior customs and compliance operational profile verified.",
  },
  {
    id: "raju-j",
    name: "Raju J.",
    title: "Operational Leadership — Station Logistics",
    category: "operations",
    businessArea: "Terminal Operations & Branch Coordination",
    location: "Branch Station Network",
    linkedinUrl: "https://www.linkedin.com/company/freyer-international-logistics",
    linkedinVerified: true,
    imageUsageStatus: "pending-approval",
    bio: "Directing container freight station (CFS) handoffs, dockside cargo management, and interstate multimodal distribution.",
    bioSource: "Public Professional Network / Company Records",
    status: "current",
    notes: "Senior station operational profile verified.",
  },
];

export const VERIFICATION_REGISTRY: LeadershipPerson[] = [
  {
    id: "rajan-jagannathan",
    name: "Rajan Jagannathan",
    title: "Title Requires Confirmation",
    category: "verification-required",
    businessArea: "Corporate Board Record (Historical Discrepancy)",
    linkedinVerified: false,
    imageUsageStatus: "pending-approval",
    bio: "Zauba historical record cited Director status. Contemporary 2026 MCA and Tofler corporate records reflect exactly four active directors and do not list Rajan. Held in verification registry.",
    bioSource: "Corporate Registry Audit & Cross-Platform Reconciliation",
    status: "needs-confirmation",
    notes: "CURRENT STATUS REQUIRES CONFIRMATION. Excluded from active board display in accordance with forensic guidelines.",
  },
];
