"use client";

import React, { useState } from "react";

const benefits = [
  {
    number: "01",
    title: "Centralized Doctor & Chemist Master Data",
    description:
      "Maintain a single source of truth for doctors, specialties, hospital timings, and retail chemists with territory-wise allocation.",
  },
  {
    number: "02",
    title: "Live GPS & Geo-Fenced Attendance",
    description:
      "Eliminate fake visits with automated geo-fenced check-ins at clinics, hospitals, and pharmacies with accurate timestamps.",
  },
  {
    number: "03",
    title: "Automated DCR & Digital E-Detailing",
    description:
      "Log doctor interactions, sample distributions, and visual e-detailing presentations instantly from the field mobile app.",
  },
  {
    number: "04",
    title: "Secondary Sales & Chemist Order Booking",
    description:
      "Empower MRs to capture retail chemist orders directly and route them automatically to assigned stockists and distributors.",
  },
  {
    number: "05",
    title: "Automated TA/DA & Expense Processing",
    description:
      "Calculate daily travel allowances (TA) and daily allowances (DA) based on actual GPS kilometers traveled and verified halts.",
  },
  {
    number: "06",
    title: "Real-Time Manager Dashboards & Territory ROI",
    description:
      "Area and regional managers gain instant visibility into doctor coverage, call frequencies, and target achievements.",
  },
];

export default function FeatureBenefitSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="gt-feature-benefit-section section-padding pt-0 tp-panel-pin-area" id="capabilities">
      <div className="container">
        {/* Section Header */}
        <div className="gt-section-title text-center mb-5">
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
            Key Capabilities
          </span>
          <h2
            className="fw-bold"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              color: "#15171A",
              letterSpacing: "-0.5px",
            }}
          >
            Fieldomni Pharma Benefits
          </h2>
          <p
            className="mt-3 text-muted mx-auto"
            style={{ maxWidth: "640px", fontSize: "16px" }}
          >
            Flexible field force management that scales from emerging pharma teams
            to large-scale pan-national sales organizations.
          </p>
        </div>

        {/* Benefit Wrapper */}
        <div className="gt-feature-benefit-wrapper">
          <div className="row g-4 align-items-center">
            {/* Left Benefit List */}
            <div className="col-lg-6">
              <div className="gt-feature-benefit-items">
                <div className="bg-shape">
                  <img src="/assets/img/home-4/bg-share.png" alt="Decorative background" />
                </div>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                  {benefits.map((item, idx) => (
                    <li
                      key={item.number}
                      className={`sticky-fixed-panel2 p-4 rounded-4 transition-all ${
                        activeIdx === idx ? "active-benefit shadow-sm" : ""
                      }`}
                      style={{
                        backgroundColor: activeIdx === idx ? "#ffffff" : "#f8fafc",
                        border: `1.5px solid ${
                          activeIdx === idx ? "#007BFF" : "#e2e8f0"
                        }`,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() => setActiveIdx(idx)}
                      onMouseEnter={() => setActiveIdx(idx)}
                    >
                      <div className="gt-benefit-content position-relative">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: 700,
                              color: activeIdx === idx ? "#007BFF" : "#15171A",
                              marginBottom: 0,
                              transition: "color 0.2s ease",
                            }}
                          >
                            {item.title}
                          </h3>
                          <span
                            className="gt-number fw-bold"
                            style={{
                              fontSize: "16px",
                              color: activeIdx === idx ? "#007BFF" : "#94a3b8",
                            }}
                          >
                            {item.number}
                          </span>
                        </div>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: "14.5px", lineHeight: "1.6" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Graphics Showcase */}
            <div className="col-lg-6">
              <div
                className="gt-feature-box-image tp-panel-pin position-relative p-4 text-center rounded-4"
                style={{
                  background: "linear-gradient(135deg, #f0f7ff 0%, #e6f0fa 100%)",
                  border: "1px solid #d0e2ff",
                  minHeight: "480px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="bg-shape position-absolute w-100 h-100 top-0 start-0 opacity-50">
                  <img
                    src="/assets/img/home-4/benefit-bg.png"
                    alt="Background Illustration"
                    className="w-100 h-100 object-fit-cover rounded-4"
                  />
                </div>

                <div className="position-relative z-2 d-flex flex-column align-items-center gap-3 w-100">
                  <div
                    className="image-1 item-hover bg-white p-3 rounded-4 shadow-sm w-100 text-start"
                    style={{
                      maxWidth: "420px",
                      border: "1px solid #e2e8f0",
                      transform: activeIdx % 2 === 0 ? "scale(1.02)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "10px",
                          backgroundColor: "#eff6ff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#007BFF",
                        }}
                      >
                        <i className="fa-solid fa-user-doctor fs-5"></i>
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold" style={{ fontSize: "15px", color: "#1e293b" }}>
                          Doctor Visit Verified
                        </h5>
                        <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>
                          Dr. S. Sharma (Cardiologist) • Geo-tagged @ 11:24 AM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="image-2 item-hover bg-white p-3 rounded-4 shadow-sm w-100 text-start"
                    style={{
                      maxWidth: "420px",
                      border: "1px solid #e2e8f0",
                      transform: activeIdx % 2 === 1 ? "scale(1.02)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "10px",
                          backgroundColor: "#ecfdf5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#10b981",
                        }}
                      >
                        <i className="fa-solid fa-file-invoice-dollar fs-5"></i>
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold" style={{ fontSize: "15px", color: "#1e293b" }}>
                          Chemist Order Booked
                        </h5>
                        <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>
                          Apollo Pharmacy #402 • ₹48,500 PO Sent to Stockist
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="image-3 item-hover bg-white p-3 rounded-4 shadow-sm w-100 text-start"
                    style={{
                      maxWidth: "420px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "10px",
                          backgroundColor: "#fff7ed",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#f97316",
                        }}
                      >
                        <i className="fa-solid fa-gas-pump fs-5"></i>
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold" style={{ fontSize: "15px", color: "#1e293b" }}>
                          TA/DA Calculated Automatically
                        </h5>
                        <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>
                          64.2 km Route Verified • Allowance Ready for Payroll
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
