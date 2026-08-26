# Asset Licenses & Data Provenance

This document tracks all external photographic, cartographic, and media assets used in the Freyer International Logistics web application to ensure compliance with attribution, copyright, and licensing requirements.

---

## Cartographic & Satellite Assets

### 1. Indian Subcontinent Satellite Artwork (`/public/images/india-satellite.webp`, `india-satellite.jpg`)
- **Origin / Source**: NASA Earth Observatory / Visible Earth, NASA Goddard Space Flight Center (GSFC).
- **Dataset**: *Blue Marble: Next Generation with Topography and Bathymetry* (July composite).
- **Master Resolution**: 21,600 × 10,800 pixels (Global Equirectangular / Plate Carrée projection).
- **Catalog URI**: `https://visibleearth.nasa.gov/images/73751/july-blue-marble-next-generation-w-topography-and-bathymetry`
- **Acquisition / Composite Date**: July 2004 (Terra/MODIS composite).
- **License / Terms of Use**: Public Domain (NASA Open Data & Image Use Policy). Free for commercial and non-commercial educational and informational use. Does not imply NASA endorsement of commercial logistics operations.
- **Transformation Performed**:
  - Exact geographic bounding crop: Longitude 67.0°E – 98.0°E, Latitude 6.0°N – 38.0°N.
  - High-fidelity Lanczos resampling to 1200 × 1239 px.
  - Editorial color grade: -22% Saturation reduction, +10% contrast enhancement, +20% high-pass sharpness filter.
  - Optimized to multi-generation WebP (Q90, 339 KB) and JPEG (Q92, 428 KB).

---

## Corporate Video & Media

### 2. Freyer Corporate Hero Video (`/public/video/freyer-hero.mp4`, `/public/images/hero-poster.jpg`)
- **Source**: Freyer International Logistics Official Corporate Film (`https://www.youtube.com/watch?v=KEFt2quibkg`).
- **Owner**: Freyer International Logistics Pvt. Ltd.
- **Processing**: Video-only H.264 compression (`crf=24 -preset slow -maxrate 900k -movflags +faststart -an`), ~1.8 MB payload.

### 3. Project Cargo Photographic Evidence (`/public/images/11.3.jpg`, `11.4.jpg`, `slide2.jpg`)
- **Source**: Freyer International Logistics operational case archive (real port and multimodal handling operations, Chennai/Ennore/Tuticorin).
- **Owner**: Freyer International Logistics Pvt. Ltd.

---

## Institutional Marks & Accreditations

### 4. Certification Marks (`/public/images/`)
- **AEO (Authorized Economic Operator)**: Indian Customs / Central Board of Indirect Taxes and Customs (CBIC), Ministry of Finance, Government of India. (Certificate No. `INAAQCA4076M0F243`).
- **IATA**: International Air Transport Association.
- **WCA World**: WCA Inter Global Network.
- **SCN**: Security Cargo Network.
- **AMTOI**: Association of Multimodal Transport Operators of India.
- **ACAAI**: Air Cargo Agents Association of India.
