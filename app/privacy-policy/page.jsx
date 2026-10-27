"use client";

import React from "react";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="page-wrapper">
      <Header />

      <main style={{ backgroundColor: "#F8FCFB", paddingTop: "50px", paddingBottom: "90px" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-5">
            <span
              className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold"
              style={{
                backgroundColor: "#d5f7f1",
                color: "#008f84",
                fontSize: "13px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Legal &amp; Trust
            </span>
            <h1 className="fw-bold" style={{ color: "#00384f", fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
              Privacy Policy
            </h1>
            <p className="text-muted">Last Updated: January 1, 2026 | Compliant with DPDP Act (India) &amp; GDPR</p>
          </div>

          <div
            className="p-4 p-md-5 rounded-4 bg-white shadow-sm"
            style={{ border: "1px solid rgba(0, 56, 79, 0.1)", lineHeight: "1.8", color: "#334155" }}
          >
            <h4 className="fw-bold mb-3" style={{ color: "#00384f" }}>
              1. Introduction &amp; Scope
            </h4>
            <p>
              Fieldomni (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides field force automation, real-time GPS tracking, daily call reporting (DCR), and payroll allowance automation services designed for pharmaceutical organizations and field sales representatives. This Privacy Policy governs the manner in which Fieldomni collects, uses, maintains, and discloses information gathered from users across our mobile applications and web management portals.
            </p>

            <h4 className="fw-bold mt-4 mb-3" style={{ color: "#00384f" }}>
              2. Information We Collect
            </h4>
            <p>To deliver our core pharmaceutical field force operations, we collect the following categories of data:</p>
            <ul>
              <li>
                <b>Location Data (GPS Coordinates):</b> Real-time geographic location is collected while the Medical Representative (MR) or field staff member is clocked in on duty. This data is utilized strictly for route playback, geofence doctor clinic verification, chemist visit validation, and Travel Allowance (TA) kilometer calculation. Location tracking ceases automatically upon shift punch-out.
              </li>
              <li>
                <b>Identity &amp; Account Information:</b> Employee name, work email address, phone number, designated territory/headquarter, employee ID, and profile selfie for biometric attendance verification.
              </li>
              <li>
                <b>Pharma Commercial Records:</b> Doctor interaction logs, specialty detailing records, sample batches distributed, chemist order quantities, and expense receipts.
              </li>
              <li>
                <b>Device &amp; Telemetry Data:</b> Device model, operating system version, battery level, and mock-location detection flags to prevent fraudulent attendance spoofing.
              </li>
            </ul>

            <h4 className="fw-bold mt-4 mb-3" style={{ color: "#00384f" }}>
              3. How We Use Collected Information
            </h4>
            <p>We process collected data solely for legitimate business operations authorized by your employing pharmaceutical organization:</p>
            <ul>
              <li>Verifying attendance and presence at assigned doctor chambers and chemist retail outlets.</li>
              <li>Calculating automated daily travel allowance (TA) and daily allowance (DA) reimbursement slabs.</li>
              <li>Providing Area and Regional Sales Managers with live territory coverage analytics.</li>
              <li>Generating GST-compliant invoicing and sales performance reports.</li>
            </ul>

            <h4 className="fw-bold mt-4 mb-3" style={{ color: "#00384f" }}>
              4. Data Security &amp; Encryption
            </h4>
            <p>
              All customer data is encrypted in transit using TLS 1.3 (256-bit encryption) and encrypted at rest using AES-256 standards. Our cloud infrastructure is hosted within secure, ISO 27001-certified Tier-IV data centers located within the Republic of India, adhering strictly to Indian data sovereignty standards and the Digital Personal Data Protection (DPDP) Act.
            </p>

            <h4 className="fw-bold mt-4 mb-3" style={{ color: "#00384f" }}>
              5. Data Retention &amp; Deletion
            </h4>
            <p>
              Field movement breadcrumbs and DCR interaction histories are retained for the duration specified in your organization&apos;s enterprise agreement (typically 1 to 5 fiscal years for statutory tax audits). Upon account termination, data can be permanently purged upon written request by the corporate account administrator.
            </p>

            <h4 className="fw-bold mt-4 mb-3" style={{ color: "#00384f" }}>
              6. Contact Our Data Protection Officer (DPO)
            </h4>
            <p className="mb-0">
              If you have any questions or concerns regarding our privacy practices, please contact our privacy office at:
              <br />
              <b>Email:</b> privacy@fieldomni.com / support@fieldomni.com
              <br />
              <b>Address:</b> T3-236, Golden-I, Techzone IV, Greater Noida West, UP - 201306, India.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
