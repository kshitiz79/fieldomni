"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("tracking");

  const featureModules = [
    {
      id: "tracking",
      title: "Live GPS Tracking & Route Playback",
      badge: "Real-Time Fleet Visibility",
      icon: "fa-solid fa-location-dot",
      headline: "Know Where Every Medical Representative Is in Real-Time",
      description:
        "Track your entire field force across designated territories with military-grade GPS accuracy. View live movements, route replays, chamber wait times, and travel distance with zero battery drain.",
      bullets: [
        "Live breadcrumb GPS tracking updated every 30 seconds",
        "Full day route playback with stop-duration markers",
        "Patented anti-mock location and fake GPS blocker",
        "Out-of-territory alerts and geofence boundary warnings",
      ],
      tag: "Live GPS",
    },
    {
      id: "attendance",
      title: "Geo-Fenced Biometric Attendance",
      badge: "Zero Proxy Punching",
      icon: "fa-solid fa-user-check",
      headline: "Foolproof Field Check-In at Assigned Doctor Chambers",
      description:
        "Eliminate proxy attendance and late logins. MRs punch attendance via selfie with timestamped GPS coordinates, strictly validated within authorized hospital or doctor clinic geofences.",
      bullets: [
        "Selfie check-in with AI facial validation & GPS coordinates",
        "Custom working hours, lunch break pauses, and shift tracking",
        "Automatic day-end punch out reminders and overtime logs",
        "Direct synchronization with HRMS & month-end salary calculations",
      ],
      tag: "Attendance",
    },
    {
      id: "dcr",
      title: "Digital Daily Call Reports (DCR)",
      badge: "1-Tap Field Reporting",
      icon: "fa-solid fa-clipboard-list",
      headline: "Faster DCR Logging with Doctor Detailing & Sampling",
      description:
        "Replace bulky paper diaries with swift, 1-tap mobile DCR filing. Reps log doctor discussions, visual aid slide interactions, sample batch quantities, and chemist feedback right from their smartphone.",
      bullets: [
        "Pre-loaded doctor lists categorized by specialty and tier (Core/Non-core)",
        "Sample & promotional input allocation tracking with batch numbers",
        "Joint visit logging with Area & Regional Sales Managers",
        "Manager instant digital sign-off and audio notes capability",
      ],
      tag: "DCR Automation",
    },
    {
      id: "orders",
      title: "Chemist Order Booking & Primary/Secondary Sales",
      badge: "Sales Acceleration",
      icon: "fa-solid fa-cart-shopping",
      headline: "Close Chemist Orders Faster & Notify Stockists Instantly",
      description:
        "Empower MRs to take live orders during chemist visits. Orders are instantly categorized into primary and secondary sales, mapped to local stockists with invoice generation and credit checks.",
      bullets: [
        "Interactive product catalog with live stock visibility and schemes",
        "Automatic stockist dispatch notifications via SMS & WhatsApp",
        "Outstanding payment reminders and collection tracking",
        "Chemist inventory audit and replenishment triggers",
      ],
      tag: "Sales Orders",
    },
    {
      id: "payroll",
      title: "Automated TA/DA Travel Allowance & Payroll",
      badge: "Zero-Fraud Expense Claims",
      icon: "fa-solid fa-calculator",
      headline: "Automatic Kilometer Calculations & 1-Click Reimbursement",
      description:
        "Stop fake fuel bills and tedious spreadsheets. Fieldomni automatically calculates daily Travel Allowances (TA) and Daily Allowances (DA) based on actual GPS kilometers travelled and company travel policies.",
      bullets: [
        "Automated distance calculation from GPS route logs (HQ/Ex-HQ/Outstation)",
        "Custom allowance slabs for 2-wheeler, 4-wheeler, and public transit",
        "Digital receipt capture for lodging, tolls, parking, and client meals",
        "1-click manager approval flow with direct payroll CSV exports",
      ],
      tag: "TA/DA Claims",
    },
    {
      id: "doctor-crm",
      title: "Doctor Master Database & Territory CRM",
      badge: "Healthcare CRM",
      icon: "fa-solid fa-user-doctor",
      headline: "Comprehensive 360° Profile of Every Prescribing Doctor",
      description:
        "Maintain a centralized master repository of all doctors, clinics, and hospitals. Track prescribing behaviors, brand preferences, birthday/anniversary reminders, and target call frequencies.",
      bullets: [
        "Doctor master categorized by Speciality (Cardio, Neuro, Ortho, GP, etc.)",
        "Prescription potential scoring (A/B/C tiering) and call cycle planning",
        "Tour Program (TP) monthly scheduler with territory route optimization",
        "Doctor history log: all past interactions, samples given, and gifts logged",
      ],
      tag: "Doctor CRM",
    },
  ];

  const currentModule = featureModules.find((m) => m.id === activeTab) || featureModules[0];

  return (
    <div className="page-wrapper">
      <Header />

      <main style={{ backgroundColor: "#F8FCFB", paddingTop: "50px", paddingBottom: "90px" }}>
        
        {/* HERO SECTION */}
        <section className="text-center mb-5">
          <div className="container" style={{ maxWidth: "1140px" }}>
            <span
              className="d-inline-block px-3 py-1 rounded-pill mb-3 fw-semibold"
              style={{
                backgroundColor: "#d5f7f1",
                color: "#008f84",
                fontSize: "13px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Enterprise Pharma Capabilities
            </span>
            <h1
              className="fw-bold tracking-tight mb-3"
              style={{
                color: "#00384f",
                fontSize: "clamp(2.2rem, 4.2vw, 3.2rem)",
                lineHeight: 1.2,
              }}
            >
              Everything Your Pharma Fleet Needs to{" "}
              <span style={{ color: "#1ec4b6" }}>Outperform Competitors</span>
            </h1>
            <p className="text-muted mx-auto mb-4" style={{ maxWidth: "700px", fontSize: "17px", lineHeight: 1.6 }}>
              A complete, modular software suite engineered specifically for Medical Representatives, Area Managers, and National Sales Heads.
            </p>
          </div>
        </section>

        {/* INTERACTIVE FEATURE SHOWCASE TABS */}
        <section className="container mb-5 pb-4">
          {/* Tab Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {featureModules.map((m) => {
              const isActive = activeTab === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveTab(m.id)}
                  className="btn rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-2 transition-all"
                  style={{
                    backgroundColor: isActive ? "#00384f" : "#ffffff",
                    color: isActive ? "#ffffff" : "#00384f",
                    border: isActive ? "1px solid #00384f" : "1px solid #e2e8f0",
                    fontSize: "14px",
                    boxShadow: isActive ? "0 4px 14px rgba(0, 56, 79, 0.2)" : "none",
                  }}
                >
                  <i className={m.icon} style={{ color: isActive ? "#1ec4b6" : "#7aaac3" }}></i>
                  <span>{m.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Card */}
          <div
            className="p-4 p-md-5 rounded-4 bg-white shadow-sm"
            style={{ border: "1px solid rgba(0, 56, 79, 0.1)" }}
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <span
                  className="badge rounded-pill fw-bold mb-3 px-3 py-1.5"
                  style={{ backgroundColor: "#d5f7f1", color: "#008f84", fontSize: "12px" }}
                >
                  {currentModule.badge}
                </span>
                <h3 className="fw-bold mb-3" style={{ color: "#00384f", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
                  {currentModule.headline}
                </h3>
                <p className="text-muted mb-4" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  {currentModule.description}
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  {currentModule.bullets.map((b, idx) => (
                    <div key={idx} className="d-flex align-items-start gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mt-1"
                        style={{ width: "22px", height: "22px", backgroundColor: "#1ec4b6", color: "#ffffff", fontSize: "11px" }}
                      >
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span className="fw-medium" style={{ color: "#00384f", fontSize: "14px" }}>
                        {b}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="d-flex gap-3">
                  <Link
                    href="/contact-us"
                    className="btn rounded-pill px-4 py-2.5 fw-bold text-white"
                    style={{ backgroundColor: "#1ec4b6" }}
                  >
                    Request Feature Demo &rarr;
                  </Link>
                  <Link
                    href="/pricing"
                    className="btn rounded-pill px-4 py-2.5 fw-bold border"
                    style={{ color: "#00384f", borderColor: "#cbd5e1" }}
                  >
                    View Pricing
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="p-4 p-md-5 rounded-4 text-white"
                  style={{
                    background: "linear-gradient(145deg, #00384f 0%, #002230 100%)",
                    boxShadow: "0 15px 35px rgba(0, 56, 79, 0.15)",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-secondary">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px", backgroundColor: "#1ec4b6", color: "#ffffff", fontSize: "20px" }}
                      >
                        <i className={currentModule.icon}></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-0 text-white">{currentModule.title}</h5>
                        <span className="text-white-50 small">Fieldomni Core Module</span>
                      </div>
                    </div>
                    <span className="badge rounded-pill bg-success small">Active &amp; Ready</span>
                  </div>

                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary d-flex justify-content-between align-items-center">
                      <span className="text-white-50 small">Accuracy SLA</span>
                      <span className="fw-bold text-white">99.8% GPS Geofence</span>
                    </div>
                    <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary d-flex justify-content-between align-items-center">
                      <span className="text-white-50 small">Network Mode</span>
                      <span className="fw-bold text-white">100% Offline-Enabled</span>
                    </div>
                    <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary d-flex justify-content-between align-items-center">
                      <span className="text-white-50 small">Device Support</span>
                      <span className="fw-bold text-white">Android &amp; iOS Mobile</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="small text-white-50">
                      <i className="fa-solid fa-lock me-1" style={{ color: "#1ec4b6" }}></i>
                      256-Bit Encrypted Pharma Cloud Data
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ALL 6 GRID CARDS */}
        <section className="container mb-5">
          <div className="text-center mb-5">
            <span
              className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold"
              style={{ backgroundColor: "#e8f7fa", color: "#00384f", fontSize: "12px", textTransform: "uppercase" }}
            >
              Full Feature Directory
            </span>
            <h2 className="fw-bold" style={{ color: "#00384f" }}>
              Explore Every Capability
            </h2>
          </div>

          <div className="row g-4">
            {featureModules.map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4" id={item.id}>
                <div
                  className="p-4 rounded-4 bg-white h-100 shadow-sm d-flex flex-column justify-content-between"
                  style={{ border: "1px solid rgba(0, 56, 79, 0.08)" }}
                >
                  <div>
                    <div
                      className="rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "48px", height: "48px", backgroundColor: "#d5f7f1", color: "#1ec4b6" }}
                    >
                      <i className={item.icon} style={{ fontSize: "20px" }}></i>
                    </div>
                    <h5 className="fw-bold mb-2" style={{ color: "#00384f", fontSize: "18px" }}>
                      {item.title}
                    </h5>
                    <p className="text-muted small mb-3" style={{ lineHeight: "1.6" }}>
                      {item.description}
                    </p>
                  </div>

                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2 pt-3 border-top">
                    {item.bullets.slice(0, 2).map((b, idx) => (
                      <li key={idx} className="small text-muted d-flex align-items-center gap-2">
                        <i className="fa-solid fa-check" style={{ color: "#1ec4b6" }}></i>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="container">
          <div
            className="p-5 rounded-4 text-center text-white"
            style={{
              background: "linear-gradient(135deg, #00384f 0%, #1ec4b6 100%)",
              boxShadow: "0 15px 40px rgba(0, 56, 79, 0.15)",
            }}
          >
            <h2 className="fw-bold mb-3 text-white">Start With Fieldomni Today</h2>
            <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: "600px", fontSize: "16px" }}>
              Experience the power of real-time pharma MR tracking and automated TA/DA claims for your field team.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="/pricing" className="btn btn-light rounded-pill px-4 py-3 fw-bold text-dark">
                View Pricing Plans &rarr;
              </Link>
              <Link href="/contact-us" className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold">
                Talk to Sales Support
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
