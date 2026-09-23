"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="pricing-section fix section-padding bg-light" id="pricing">
      <div className="container">
        {/* Section Title */}
        <div className="gt-section-title text-center mb-4">
          <span
            className="d-inline-block px-3 py-1 rounded-pill mb-2"
            style={{
              backgroundColor: "rgba(0, 123, 255, 0.08)",
              color: "#007BFF",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Transparent Pharma Pricing
          </span>
          <h2
            className="fw-bold"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              color: "#15171A",
              letterSpacing: "-0.5px",
            }}
          >
            Simple, Scalable Plans For Field Teams
          </h2>
          <p className="mt-2 text-muted mx-auto" style={{ maxWidth: "560px" }}>
            Equip your Medical Representatives with automated tracking and reporting.
            No hidden fees, cancel anytime.
          </p>

          {/* Monthly / Yearly Switch Toggle */}
          <div className="pricing-toggle-wrapper text-center mt-4 d-inline-flex align-items-center gap-2 p-1 rounded-pill bg-white border shadow-sm">
            <button
              type="button"
              className={`toggle-label btn btn-sm rounded-pill px-4 py-2 fw-semibold ${
                !isYearly ? "bg-primary text-white" : "text-muted"
              }`}
              onClick={() => setIsYearly(false)}
              style={{ border: "none", transition: "all 0.2s ease" }}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              className={`toggle-label btn btn-sm rounded-pill px-4 py-2 fw-semibold ${
                isYearly ? "bg-primary text-white" : "text-muted"
              }`}
              onClick={() => setIsYearly(true)}
              style={{ border: "none", transition: "all 0.2s ease" }}
            >
              Annual Billing <span className="badge bg-success ms-1">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="row g-4 justify-content-center align-items-stretch mt-2">
          {/* Plan 1: Starter Field */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="pricing-box-items h-100 p-4 p-lg-5 rounded-4 bg-white shadow-sm d-flex flex-column justify-content-between"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <div>
                <div className="pricing-header mb-4">
                  <span
                    className="sub-price d-inline-block px-3 py-1 rounded-pill fw-bold"
                    style={{
                      backgroundColor: "#eff6ff",
                      color: "#007BFF",
                      fontSize: "13px",
                    }}
                  >
                    Starter Field
                  </span>
                  <p className="price-text text-muted mt-2 mb-3" style={{ fontSize: "14px" }}>
                    Ideal for emerging pharma startups and local field teams up to 15 reps.
                  </p>
                  <h3 className="fw-bold mb-0" style={{ fontSize: "2.4rem", color: "#1e293b" }}>
                    ₹{isYearly ? "399" : "499"}
                    <sub style={{ fontSize: "14px", color: "#64748b", fontWeight: 500 }}>
                      / rep / month
                    </sub>
                  </h3>
                </div>

                <Link
                  className="theme-btn w-100 text-center d-flex align-items-center justify-content-center gap-2 mb-4 py-3 rounded-3 text-decoration-none fw-bold"
                  href="/contact-us"
                  style={{
                    backgroundColor: "#f1f5f9",
                    color: "#1e293b",
                    border: "1px solid #cbd5e1",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span>Start 14-Day Trial</span>
                  <i className="fa-solid fa-arrow-up-right fs-6"></i>
                </Link>

                <div className="pricing-list">
                  <span className="fw-bold d-block mb-3 text-dark" style={{ fontSize: "14px" }}>
                    What&apos;s Included:
                  </span>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    <li className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      Live MR GPS Tracking &amp; Route History
                    </li>
                    <li className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      Geo-Fenced Clinic &amp; Hospital Attendance
                    </li>
                    <li className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      Standard Doctor Call Report (DCR) Logging
                    </li>
                    <li className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      Android &amp; iOS Field App (Offline Mode)
                    </li>
                    <li className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      Email &amp; Chat Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Plan 2: Pro Pharma Suite (Featured) */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="pricing-box-items style-3 active h-100 p-4 p-lg-5 rounded-4 position-relative shadow-lg d-flex flex-column justify-content-between text-white"
              style={{
                background: "linear-gradient(135deg, #007BFF 0%, #3B82F6 100%)",
                border: "2px solid #0066d6",
              }}
            >
              <div
                className="position-absolute top-0 end-0 bg-warning text-dark px-3 py-1 rounded-bottom-start fw-bold"
                style={{ fontSize: "11px", letterSpacing: "0.5px" }}
              >
                MOST POPULAR
              </div>

              <div>
                <div className="pricing-header mb-4">
                  <span
                    className="sub-price d-inline-block px-3 py-1 rounded-pill fw-bold text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      fontSize: "13px",
                    }}
                  >
                    Pro Pharma Suite
                  </span>
                  <p className="price-text text-white-50 mt-2 mb-3" style={{ fontSize: "14px" }}>
                    Designed for growing pharmaceutical sales divisions &amp; state managers.
                  </p>
                  <h3 className="fw-bold mb-0 text-white" style={{ fontSize: "2.4rem" }}>
                    ₹{isYearly ? "719" : "899"}
                    <sub style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
                      / rep / month
                    </sub>
                  </h3>
                </div>

                <Link
                  className="theme-btn w-100 text-center d-flex align-items-center justify-content-center gap-2 mb-4 py-3 rounded-3 text-decoration-none fw-bold shadow"
                  href="/contact-us"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#007BFF",
                    border: "none",
                  }}
                >
                  <span>Book Free Live Demo</span>
                  <i className="fa-solid fa-arrow-up-right fs-6"></i>
                </Link>

                <div className="pricing-list">
                  <span className="fw-bold d-block mb-3 text-white" style={{ fontSize: "14px" }}>
                    Everything in Starter, plus:
                  </span>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    <li className="d-flex align-items-center gap-2 text-white" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-warning"></i>
                      Secondary Sales &amp; Chemist Order Booking
                    </li>
                    <li className="d-flex align-items-center gap-2 text-white" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-warning"></i>
                      Automated TA/DA Travel Mileage Calculation
                    </li>
                    <li className="d-flex align-items-center gap-2 text-white" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-warning"></i>
                      Sample Inventory &amp; Visual E-Detailing
                    </li>
                    <li className="d-flex align-items-center gap-2 text-white" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-warning"></i>
                      Tour Program (TP) Planning &amp; Manager Approvals
                    </li>
                    <li className="d-flex align-items-center gap-2 text-white" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-warning"></i>
                      Priority 24/7 Phone &amp; WhatsApp Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Plan 3: Enterprise Scale */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="pricing-box-items h-100 p-4 p-lg-5 rounded-4 bg-white shadow-sm d-flex flex-column justify-content-between"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <div>
                <div className="pricing-header mb-4">
                  <span
                    className="sub-price d-inline-block px-3 py-1 rounded-pill fw-bold"
                    style={{
                      backgroundColor: "#f5f3ff",
                      color: "#7c3aed",
                      fontSize: "13px",
                    }}
                  >
                    Enterprise Scale
                  </span>
                  <p className="price-text text-muted mt-2 mb-3" style={{ fontSize: "14px" }}>
                    For large multi-division pharma companies needing custom integrations.
                  </p>
                  <h3 className="fw-bold mb-0" style={{ fontSize: "2.4rem", color: "#1e293b" }}>
                    Custom
                    <sub style={{ fontSize: "14px", color: "#64748b", fontWeight: 500 }}>
                      / volume quote
                    </sub>
                  </h3>
                </div>

                <Link
                  className="theme-btn w-100 text-center d-flex align-items-center justify-content-center gap-2 mb-4 py-3 rounded-3 text-decoration-none fw-bold"
                  href="/contact-us"
                  style={{
                    backgroundColor: "#f1f5f9",
                    color: "#1e293b",
                    border: "1px solid #cbd5e1",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span>Talk to Enterprise Sales</span>
                  <i className="fa-solid fa-arrow-up-right fs-6"></i>
                </Link>

                <div className="pricing-list">
                  <span className="fw-bold d-block mb-3 text-dark" style={{ fontSize: "14px" }}>
                    Everything in Pro, plus:
                  </span>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    <li className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      SAP / ERP / Tally Billing Direct Integration
                    </li>
                    <li className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      Custom Hierarchy (ZSM, RSM, ASM, MR)
                    </li>
                    <li className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      Dedicated Account Manager &amp; Custom SLAs
                    </li>
                    <li className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      On-Premise or Private Cloud Deployment
                    </li>
                    <li className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      Custom Compliance &amp; Audit Logs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
