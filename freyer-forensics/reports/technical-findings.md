# Consolidated Technical Findings & Security Reconnaissance

**Target**: `https://www.freyerinternational.com/`  
**Assessment Type**: Passive Web Forensics & Architectural Reverse-Engineering

---

## 1. Major Technical Flaws & Vulnerabilities

1. **Exposed Legacy PHP 7.4.33 Server Header**:
   - `x-powered-by: PHP/7.4.33` broadcast on every HTTP transaction. Provides immediate reconnaissance for automated exploit bots targeting unpatched PHP 7.4 bugs.
2. **Orphan PHP Endpoints**:
   - `career-plus.php` accessible on live server without authentication or strict input sanitization.
3. **Missing Security Headers**:
   - Zero `Content-Security-Policy` (CSP) header.
   - Zero `Strict-Transport-Security` (HSTS) header.
   - Zero `X-Frame-Options` or `X-Content-Type-Options: nosniff` headers.
   - Vulnerable to clickjacking and MIME-type sniffing.
4. **Unoptimized Asset Delivery & Missing Compression**:
   - Large raw media assets (16MB MP4, 2.3MB JPGs) delivered without CDN caching headers or Brotli compression.
5. **Form Handling Vulnerabilities**:
   - Careers form submits over HTTP POST to `#` without CSRF token protection or server-side handler verification.
