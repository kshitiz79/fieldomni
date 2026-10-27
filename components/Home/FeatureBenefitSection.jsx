"use client";

import React, { useState } from "react";
import Link from "next/link";

const benefits = [
  {
    number: "01",
    id: "doctor-master",
    icon: "fa-solid fa-user-doctor",
    title: "Centralized Doctor & Chemist Master Data",
    shortDesc: "Single source of truth for doctors, specialties, OPD timings, and territory chemist networks.",
    description:
      "Maintain a verified master registry of prescribers, clinic timings, and pharmacy retail touchpoints with automated territory allocations and Tier A/B/C call frequency quotas.",
    badge: "Master CRM",
  },
  {
    number: "02",
    id: "live-gps",
    icon: "fa-solid fa-satellite-dish",
    title: "Live GPS & Geo-Fenced Attendance",
    shortDesc: "Eliminate fake visits with biometric selfie check-in at verified clinic geofences.",
    description:
      "Patented anti-spoofing technology blocks mock GPS apps. Reps check in at clinic chambers with timestamped GPS coordinates and automated out-of-territory alerts.",
    badge: "Zero-Tamper GPS",
  },
  {
    number: "03",
    id: "dcr-detailing",
    icon: "fa-solid fa-clipboard-check",
    title: "Automated DCR & Digital E-Detailing",
    shortDesc: "1-tap mobile DCR filing, visual aid slide analytics, and digital sample batch logging.",
    description:
      "Replace tedious paperwork. Medical reps log doctor discussions, visual aid interactions, sample batches, and joint ASM visit notes right from their smartphone in seconds.",
    badge: "1-Tap Reporting",
  },
  {
    number: "04",
    id: "sales-orders",
    icon: "fa-solid fa-cart-shopping",
    title: "Secondary Sales & Chemist Order Booking",
    shortDesc: "Capture retail chemist orders and route purchase orders automatically to stockists.",
    description:
      "Empower field executives to book live secondary orders during chemist visits. Automated stockist notifications via WhatsApp/SMS accelerate fulfillment and reduce stock-outs.",
    badge: "Sales Acceleration",
  },
  {
    number: "05",
    id: "tada-payroll",
    icon: "fa-solid fa-calculator",
    title: "Automated TA/DA & Expense Processing",
    shortDesc: "Kilometer tracking from GPS route logs eliminates fake fuel bills and speeds up reimbursements.",
    description:
      "Daily Travel Allowances (TA) and Daily Allowances (DA) are calculated automatically based on actual GPS distance and HQ/Ex-HQ/Outstation policies with 1-click approvals.",
    badge: "Automated Payroll",
  },
  {
    number: "06",
    id: "manager-dashboard",
    icon: "fa-solid fa-chart-line",
    title: "Real-Time Manager Dashboards & Territory ROI",
    shortDesc: "Live team map locator, doctor coverage heatmaps, and target achievement leaderboards.",
    description:
      "Area & Regional Managers gain instant bird's-eye visibility into team movements, missed doctor visits, prescription trends, and secondary sales targets in real-time.",
    badge: "Executive Control",
  },
];

export default function FeatureBenefitSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeBenefit = benefits[activeIdx];

  return (
    <section className="gt-feature-benefit-section section-padding py-5" id="capabilities" style={{ backgroundColor: "#F8FCFB" }}>
      <div className="container" style={{ maxWidth: "1240px" }}>
        
        {/* Section Title */}
        <div className="gt-section-title text-center mb-5">
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
            Field Fleet Capabilities
          </span>
          <h2
            className="fw-bold"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              color: "#00384f",
              letterSpacing: "-0.5px",
            }}
          >
            Engineered Specifically for <span style={{ color: "#1ec4b6" }}>Pharma Field Teams</span>
          </h2>
          <p
            className="mt-2 text-muted mx-auto"
            style={{ maxWidth: "680px", fontSize: "16px", lineHeight: "1.6" }}
          >
            Scalable field force automation designed to streamline operations from emerging pharma brands to massive pan-India enterprise fleets.
          </p>
        </div>

        {/* Benefit Main Content Grid */}
        <div className="row g-4 align-items-stretch">
          
          {/* Left Column: Interactive Capability List */}
          <div className="col-lg-6 d-flex flex-column gap-3">
            {benefits.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveIdx(idx)}
                  className="p-3.5 p-md-4 rounded-4 transition-all position-relative"
                  style={{
                    backgroundColor: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
                    border: isActive ? "2px solid #1ec4b6" : "1px solid rgba(0, 56, 79, 0.08)",
                    boxShadow: isActive
                      ? "0 12px 30px rgba(30, 196, 182, 0.15), 0 2px 8px rgba(0, 56, 79, 0.04)"
                      : "0 2px 8px rgba(0, 56, 79, 0.02)",
                    cursor: "pointer",
                    transform: isActive ? "translateY(-2px)" : "none",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="d-flex align-items-start gap-3">
                    {/* Icon / Number Indicator */}
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "44px",
                        height: "44px",
                        backgroundColor: isActive ? "#1ec4b6" : "#e8f7fa",
                        color: isActive ? "#ffffff" : "#00384f",
                        fontSize: "18px",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <i className={item.icon}></i>
                    </div>

                    {/* Text Details */}
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4
                          className="fw-bold mb-0"
                          style={{
                            fontSize: "16px",
                            color: isActive ? "#00384f" : "#1e293b",
                            transition: "color 0.2s ease",
                          }}
                        >
                          {item.title}
                        </h4>
                        <span
                          className="badge rounded-pill fw-bold"
                          style={{
                            backgroundColor: isActive ? "#d5f7f1" : "transparent",
                            color: isActive ? "#008f84" : "#7aaac3",
                            fontSize: "11px",
                          }}
                        >
                          {item.number}
                        </span>
                      </div>

                      <p
                        className="mb-0 small"
                        style={{
                          color: isActive ? "#475569" : "#64748b",
                          lineHeight: "1.5",
                        }}
                      >
                        {isActive ? item.description : item.shortDesc}
                      </p>

                      {/* Active Indicator Bar */}
                      {isActive && (
                        <div className="mt-2.5 pt-2 border-top d-flex align-items-center justify-content-between">
                          <span className="badge rounded-pill" style={{ backgroundColor: "#d5f7f1", color: "#008f84", fontSize: "11px" }}>
                            {item.badge}
                          </span>
                          <span className="small fw-semibold" style={{ color: "#1ec4b6", fontSize: "12px" }}>
                            Live Preview Active &rarr;
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Live Preview Showcase */}
          <div className="col-lg-6">
            <div
              className="rounded-4 p-4 p-md-5 h-100 d-flex flex-column justify-content-between text-white position-relative overflow-hidden shadow-sm"
              style={{
                background: "linear-gradient(145deg, #00384f 0%, #002230 100%)",
                border: "1px solid rgba(0, 56, 79, 0.2)",
                minHeight: "520px",
              }}
            >
              {/* Top Bar with Status and Tab Identifier */}
              <div>
                <div className="d-flex align-items-center justify-content-between pb-3 border-bottom border-secondary mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="rounded-circle d-inline-block"
                      style={{ width: "10px", height: "10px", backgroundColor: "#1ec4b6", boxShadow: "0 0 10px #1ec4b6" }}
                    ></span>
                    <span className="text-uppercase fw-bold text-white small" style={{ letterSpacing: "1px", fontSize: "11px" }}>
                      Fieldomni Live System Mockup
                    </span>
                  </div>
                  <span
                    className="badge rounded-pill px-3 py-1 fw-bold"
                    style={{ backgroundColor: "rgba(30, 196, 182, 0.2)", color: "#1ec4b6", border: "1px solid rgba(30, 196, 182, 0.4)" }}
                  >
                    Module {activeBenefit.number} / 06
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="fw-bold text-white mb-2" style={{ fontSize: "22px" }}>
                    {activeBenefit.title}
                  </h3>
                  <p className="text-white-50 small mb-0" style={{ lineHeight: "1.6" }}>
                    {activeBenefit.description}
                  </p>
                </div>

                {/* DYNAMIC CARD MOCKUPS BASED ON ACTIVE IDX */}
                {activeIdx === 0 && (
                  /* 01: Doctor & Chemist Master Data Card */
                  <div className="p-3.5 rounded-3 bg-white text-dark shadow-sm">
                    <div className="d-flex align-items-center justify-content-between pb-2 border-bottom mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: "36px", height: "36px", backgroundColor: "#d5f7f1", color: "#1ec4b6" }}
                        >
                          <i className="fa-solid fa-user-doctor"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0" style={{ color: "#00384f", fontSize: "14px" }}>
                            Dr. Rajesh Mehta (MD, DM)
                          </h6>
                          <span className="text-muted" style={{ fontSize: "11px" }}>
                            Sr. Interventional Cardiologist • Fortis Hospital
                          </span>
                        </div>
                      </div>
                      <span className="badge rounded-pill bg-success small">Tier A (Core)</span>
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-6">
                        <div className="p-2 rounded bg-light border small">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>OPD Timings</span>
                          <span className="fw-bold" style={{ fontSize: "12px", color: "#00384f" }}>10:00 AM – 02:30 PM</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 rounded bg-light border small">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>Monthly Target Call</span>
                          <span className="fw-bold" style={{ fontSize: "12px", color: "#008f84" }}>3 / 3 Visits Done (100%)</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-light border d-flex align-items-center justify-content-between small">
                      <span className="text-muted" style={{ fontSize: "11px" }}>
                        <i className="fa-solid fa-pills me-1 text-primary"></i> Focus Brands: Cardivol 25mg, Lipitor
                      </span>
                      <span className="badge bg-dark text-white" style={{ fontSize: "10px" }}>Verified Doctor</span>
                    </div>
                  </div>
                )}

                {activeIdx === 1 && (
                  /* 02: Live GPS Tracking & Geofence Attendance */
                  <div className="p-3.5 rounded-3 bg-white text-dark shadow-sm">
                    <div className="d-flex align-items-center justify-content-between pb-2 border-bottom mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: "36px", height: "36px", backgroundColor: "#d5f7f1", color: "#1ec4b6" }}
                        >
                          <i className="fa-solid fa-satellite"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0" style={{ color: "#00384f", fontSize: "14px" }}>
                            MR Rahul Verma (South Delhi)
                          </h6>
                          <span className="text-muted" style={{ fontSize: "11px" }}>
                            Live GPS Geofenced • In Chamber (AI Verified)
                          </span>
                        </div>
                      </div>
                      <span className="badge rounded-pill bg-primary small">On Duty</span>
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-4">
                        <div className="p-2 rounded bg-light border text-center">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>GPS Accuracy</span>
                          <span className="fw-bold text-success" style={{ fontSize: "12px" }}>99.8% (5m)</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2 rounded bg-light border text-center">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>Shift Duration</span>
                          <span className="fw-bold" style={{ fontSize: "12px", color: "#00384f" }}>6h 24m Active</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2 rounded bg-light border text-center">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>Distance Covered</span>
                          <span className="fw-bold" style={{ fontSize: "12px", color: "#00384f" }}>32.4 km</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-success bg-opacity-10 border border-success d-flex align-items-center justify-content-between small">
                      <span className="text-success fw-semibold" style={{ fontSize: "11px" }}>
                        <i className="fa-solid fa-shield-check me-1"></i> Zero Mock GPS Detected (Anti-Tamper Lock)
                      </span>
                      <span className="badge bg-success text-white" style={{ fontSize: "10px" }}>100% Valid</span>
                    </div>
                  </div>
                )}

                {activeIdx === 2 && (
                  /* 03: Automated DCR & E-Detailing */
                  <div className="p-3.5 rounded-3 bg-white text-dark shadow-sm">
                    <div className="d-flex align-items-center justify-content-between pb-2 border-bottom mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: "36px", height: "36px", backgroundColor: "#d5f7f1", color: "#1ec4b6" }}
                        >
                          <i className="fa-solid fa-clipboard-check"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0" style={{ color: "#00384f", fontSize: "14px" }}>
                            Daily Call Report (DCR #8492)
                          </h6>
                          <span className="text-muted" style={{ fontSize: "11px" }}>
                            Joint Call with ASM • Max Super Speciality Hospital
                          </span>
                        </div>
                      </div>
                      <span className="badge rounded-pill bg-info text-white small">Auto-Filed</span>
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-6">
                        <div className="p-2 rounded bg-light border small">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>E-Detailing Deck</span>
                          <span className="fw-bold" style={{ fontSize: "12px", color: "#00384f" }}>Cardiology Q1 Deck (4m 20s)</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 rounded bg-light border small">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>Samples Distributed</span>
                          <span className="fw-bold" style={{ fontSize: "12px", color: "#00384f" }}>5 Units (Batch #CD-26)</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-light border d-flex align-items-center justify-content-between small">
                      <span className="text-muted" style={{ fontSize: "11px" }}>
                        <i className="fa-solid fa-circle-check text-success me-1"></i> Doctor Digital Signature Captured
                      </span>
                      <span className="badge bg-secondary text-white" style={{ fontSize: "10px" }}>Synced</span>
                    </div>
                  </div>
                )}

                {activeIdx === 3 && (
                  /* 04: Chemist Secondary Orders */
                  <div className="p-3.5 rounded-3 bg-white text-dark shadow-sm">
                    <div className="d-flex align-items-center justify-content-between pb-2 border-bottom mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: "36px", height: "36px", backgroundColor: "#d5f7f1", color: "#1ec4b6" }}
                        >
                          <i className="fa-solid fa-store"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0" style={{ color: "#00384f", fontSize: "14px" }}>
                            Apollo Pharmacy #104 (Retail Order)
                          </h6>
                          <span className="text-muted" style={{ fontSize: "11px" }}>
                            Routed to Stockist: Apex Healthcare Distributors
                          </span>
                        </div>
                      </div>
                      <span className="badge rounded-pill bg-success small">₹48,500 PO</span>
                    </div>

                    <div className="p-2 rounded bg-light border mb-3 small">
                      <div className="d-flex justify-content-between text-muted mb-1" style={{ fontSize: "11px" }}>
                        <span>• Azithro 500mg (20 Strips)</span>
                        <span className="fw-bold text-dark">₹6,400</span>
                      </div>
                      <div className="d-flex justify-content-between text-muted" style={{ fontSize: "11px" }}>
                        <span>• Cardivol 25mg (50 Strips - Scheme 10+1)</span>
                        <span className="fw-bold text-dark">₹42,100</span>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-primary bg-opacity-10 border border-primary d-flex align-items-center justify-content-between small">
                      <span className="text-primary fw-semibold" style={{ fontSize: "11px" }}>
                        <i className="fa-brands fa-whatsapp me-1"></i> Instant WhatsApp Dispatch Alert Sent to Stockist
                      </span>
                      <span className="badge bg-primary text-white" style={{ fontSize: "10px" }}>Dispatched</span>
                    </div>
                  </div>
                )}

                {activeIdx === 4 && (
                  /* 05: Automated TA/DA & Payroll */
                  <div className="p-3.5 rounded-3 bg-white text-dark shadow-sm">
                    <div className="d-flex align-items-center justify-content-between pb-2 border-bottom mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: "36px", height: "36px", backgroundColor: "#d5f7f1", color: "#1ec4b6" }}
                        >
                          <i className="fa-solid fa-receipt"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0" style={{ color: "#00384f", fontSize: "14px" }}>
                            Daily Travel Allowance Claim (Auto-Computed)
                          </h6>
                          <span className="text-muted" style={{ fontSize: "11px" }}>
                            GPS Traveled: 48.6 km • Ex-HQ Territory Route
                          </span>
                        </div>
                      </div>
                      <span className="badge rounded-pill bg-dark small">1-Click Approved</span>
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-4">
                        <div className="p-2 rounded bg-light border text-center">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>Travel (TA @ ₹4.5/km)</span>
                          <span className="fw-bold" style={{ fontSize: "12px", color: "#00384f" }}>₹218.70</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2 rounded bg-light border text-center">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>Daily Allowance (DA)</span>
                          <span className="fw-bold" style={{ fontSize: "12px", color: "#00384f" }}>₹350.00</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2 rounded bg-light border text-center">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>Toll &amp; Parking</span>
                          <span className="fw-bold" style={{ fontSize: "12px", color: "#00384f" }}>₹80.00</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-success bg-opacity-10 border border-success d-flex align-items-center justify-content-between small">
                      <span className="text-success fw-semibold" style={{ fontSize: "11px" }}>
                        <i className="fa-solid fa-circle-check me-1"></i> Total Claim: ₹648.70 (Exported to Monthly Salary Sheet)
                      </span>
                      <span className="badge bg-success text-white" style={{ fontSize: "10px" }}>Verified</span>
                    </div>
                  </div>
                )}

                {activeIdx === 5 && (
                  /* 06: Real-Time Manager Dashboards */
                  <div className="p-3.5 rounded-3 bg-white text-dark shadow-sm">
                    <div className="d-flex align-items-center justify-content-between pb-2 border-bottom mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: "36px", height: "36px", backgroundColor: "#d5f7f1", color: "#1ec4b6" }}
                        >
                          <i className="fa-solid fa-chart-pie"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0" style={{ color: "#00384f", fontSize: "14px" }}>
                            Area Sales Manager (ASM) Command Hub
                          </h6>
                          <span className="text-muted" style={{ fontSize: "11px" }}>
                            Region: North India • Active Fleet: 18 Reps Live
                          </span>
                        </div>
                      </div>
                      <span className="badge rounded-pill bg-success small">108% Target</span>
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-4">
                        <div className="p-2 rounded bg-light border text-center">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>Doctor Coverage</span>
                          <span className="fw-bold text-success" style={{ fontSize: "12px" }}>96.4% Visited</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2 rounded bg-light border text-center">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>Daily Call Avg</span>
                          <span className="fw-bold text-primary" style={{ fontSize: "12px" }}>12.6 Calls/MR</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2 rounded bg-light border text-center">
                          <span className="text-muted d-block" style={{ fontSize: "10px" }}>Secondary Sales</span>
                          <span className="fw-bold" style={{ fontSize: "12px", color: "#00384f" }}>₹18.4 Lakhs</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-info bg-opacity-10 border border-info d-flex align-items-center justify-content-between small">
                      <span className="text-info fw-semibold" style={{ fontSize: "11px" }}>
                        <i className="fa-solid fa-trophy me-1"></i> Top Territory: Delhi NCR (Rank #1 Pan-India)
                      </span>
                      <span className="badge bg-info text-white" style={{ fontSize: "10px" }}>Live Sync</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer with Actions */}
              <div className="mt-4 pt-3 border-top border-secondary d-flex flex-wrap align-items-center justify-content-between gap-2">
                <span className="small text-white-50">
                  <i className="fa-solid fa-lock me-1 text-info"></i> Enterprise 256-Bit Encrypted Pharma Platform
                </span>
                <Link
                  href="/features"
                  className="btn btn-sm rounded-pill fw-bold px-3 py-1.5"
                  style={{ backgroundColor: "#1ec4b6", color: "#ffffff", fontSize: "12px" }}
                >
                  Explore All Features &rarr;
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
