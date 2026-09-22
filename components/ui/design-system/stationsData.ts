export interface StationDirectoryItem {
  id: string;
  name: string;
  short: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  isHQ?: boolean;
}

export const VERIFIED_STATIONS: StationDirectoryItem[] = [
  {
    id: "chennai_egmore",
    name: "Chennai (Egmore HQ)",
    short: "Chennai HQ",
    city: "Chennai",
    address: "TAGA Tower New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony, Egmore, Chennai-600008.",
    phone: "+91 44 43191919",
    email: "info@freyerinternational.com",
    isHQ: true,
  },
  {
    id: "chennai_airport",
    name: "Chennai Airport Office",
    short: "Chennai Air",
    city: "Chennai Airport",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai-600017.",
    phone: "+91 96000 41033",
    email: "info@freyerinternational.com",
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    short: "Bengaluru",
    city: "Bengaluru",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru-560037.",
    phone: "080 4120 0300",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "delhi",
    name: "Delhi / NCR",
    short: "Delhi / NCR",
    city: "Delhi / NCR",
    address: "Plot No. 524, First Floor, Udyog Vihar Phase 5, Gurugram-122016, Haryana.",
    phone: "0124-4068388",
    email: "info@freyerinternational.com",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    short: "Mumbai",
    city: "Mumbai",
    address: "A - 401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai-400059.",
    phone: "022-46191301",
    email: "raju.jamdar@freyerinternational.com",
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    short: "Hyderabad",
    city: "Hyderabad",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderbad-500003, Telangana.",
    phone: "040-48561797",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam",
    short: "Visakhapatnam",
    city: "Visakhapatnam",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam, Andhra Pradesh-530009.",
    phone: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "coimbatore",
    name: "Coimbatore",
    short: "Coimbatore",
    city: "Coimbatore",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Krisan Workspaces, Avinashi Road, Nava India, Coimbatore-641004.",
    phone: "+91 99625 41554",
    email: "shivakumar.ps@freyerinternational.com",
  },
  {
    id: "tuticorin",
    name: "Tuticorin",
    short: "Tuticorin",
    city: "Tuticorin",
    address: "J GARDEN 4A/C, 278, Housing Board RTC Nagar, Tuticorin-628001.",
    phone: "+91 87544 46077",
    email: "donald@freyerinternational.com",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    short: "Ahmedabad",
    city: "Ahmedabad",
    address: "Office No. 220, Flexi Business HUB, 2nd Floor, Madhur Complex, Near Stadium Cross Road, Navrangpur, Ahmedabad-380009.",
    phone: "+91 98214 65939",
    email: "raju.jamdar@freyerinternational.com",
  },
];
