"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";

export default function AboutPage() {
  const stats = [
    { value: "50,000+", label: "Field MRs Tracked Daily", icon: "fa-solid fa-users" },
    { value: "1,200+", label: "Pharma Companies & Brands", icon: "fa-solid fa-building-columns" },
    { value: "99.8%", label: "GPS Accuracy & Uptime", icon: "fa-solid fa-satellite" },
    { value: "₹18 Cr+", label: "TA/DA Payroll Automated", icon: "fa-solid fa-indian-rupee-sign" },
  ];

  const coreValues = [
    {
      title: "Zero-Tamper Integrity",
      desc: "Patented fake-GPS detection, mock location blockers, and geo-fencing ensure 100% verified doctor and chemist visits.",
      icon: "fa-solid fa-shield-halved",
      color: "#1ec4b6",
    },
    {
      title: "Offline-First Engineering",
      desc: "Works seamlessly in Tier-3 rural territories and basements with instant automatic sync once connectivity resumes.",
      icon: "fa-solid fa-cloud-arrow-up",
      color: "#00384f",
    },
    {
      title: "Doctor Relationship Intelligence",
      desc: "Deep DCR analytics, specialty doctor profiling, sampling records, and chemist inventory replenishment insights.",
      icon: "fa-solid fa-user-doctor",
      color: "#1ec4b6",
    },
    {
      title: "Complete Regulatory Compliance",
      desc: "GST input tax credit compliant invoicing, Indian DPDP data protection, and enterprise-grade 256-bit encryption.",
      icon: "fa-solid fa-lock",
      color: "#00384f",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Founded with a Vision",
      desc: "Fieldomni was founded by pharma industry veterans frustrated by manual paper DCRs, proxy attendance, and delayed chemist orders.",
    },
    {
      year: "2023",
      title: "Expansion across 18 States",
      desc: "Crossed 20,000 active Medical Representatives across top Indian generics, ayurvedic, and OTC healthcare manufacturers.",
    },
    {
      year: "2025",
      title: "AI-Powered Territory Automation",
      desc: "Introduced route optimization, instant TA/DA claim approvals, and multi-distributor chemist order syncing.",
    },
    {
      year: "2026",
      title: "Next-Gen Enterprise Suite",
      desc: "Empowering 50,000+ field reps with seamless offline mobile apps, ERP connectors (SAP/Tally), and live tracking dashboards.",
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />

      <main style={{ backgroundColor: "#F8FCFB", paddingTop: "50px", paddingBottom: "90px" }}>
        {/* HERO SECTION */}
        <section className="about-hero text-center mb-5">
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
              About Fieldomni
            </span>
            <h1
              className="fw-bold tracking-tight mb-3"
              style={{
                color: "#00384f",
                fontSize: "clamp(2.2rem, 4.2vw, 3.2rem)",
                lineHeight: 1.2,
              }}
            >
              Transforming Pharma Field Operations with{" "}
              <span style={{ color: "#1ec4b6" }}>Real-Time Intelligence</span>
            </h1>
            <p className="text-muted mx-auto mb-4" style={{ maxWidth: "720px", fontSize: "17px", lineHeight: 1.6 }}>
              Fieldomni is India&apos;s leading Field Force Automation (SFA) platform engineered specifically for pharmaceutical enterprises, OTC healthcare networks, and medical representative fleets.
            </p>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="container mb-5">
          <div
            className="p-4 p-md-5 rounded-4 text-white shadow-sm"
            style={{
              background: "linear-gradient(135deg, #00384f 0%, #002230 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="row g-4 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="col-6 col-md-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "48px", height: "48px", backgroundColor: "rgba(30, 196, 182, 0.2)", color: "#1ec4b6" }}
                  >
                    <i className={stat.icon} style={{ fontSize: "20px" }}></i>
                  </div>
                  <h3 className="fw-bold mb-1" style={{ color: "#1ec4b6", fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)" }}>
                    {stat.value}
                  </h3>
                  <p className="text-white-50 mb-0 small fw-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY & MISSION SECTION */}
        <section className="container mb-5 pb-4">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span
                className="d-inline-block px-3 py-1 rounded-pill mb-3 fw-semibold"
                style={{ backgroundColor: "#e8f7fa", color: "#00384f", fontSize: "12px", textTransform: "uppercase" }}
              >
                Our Purpose
              </span>
              <h2 className="fw-bold mb-3" style={{ color: "#00384f", fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                Built to Solve Ground Realities in Indian Pharma
              </h2>
              <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                Managing a distributed medical representative fleet across different territories, cities, and doctor chambers is traditionally plagued by fraudulent DCR entries, unverified chemist visits, and cumbersome month-end travel allowance paperwork.
              </p>
              <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                Fieldomni combines <b>military-grade GPS precision</b> with lightweight, battery-efficient mobile applications that work offline. We give Area Managers and Sales Directors live visibility, while empowering MRs with fast one-tap DCR reporting, digital doctor sampling, and instant expense claims.
              </p>

              <div className="row g-3 mt-2">
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 bg-white border d-flex align-items-center gap-3">
                    <i className="fa-solid fa-check-circle fs-4" style={{ color: "#1ec4b6" }}></i>
                    <div>
                      <div className="fw-bold" style={{ color: "#00384f", fontSize: "14px" }}>100% Verified Visits</div>
                      <div className="text-muted small">Geo-fenced Doctor Chambers</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 bg-white border d-flex align-items-center gap-3">
                    <i className="fa-solid fa-check-circle fs-4" style={{ color: "#1ec4b6" }}></i>
                    <div>
                      <div className="fw-bold" style={{ color: "#00384f", fontSize: "14px" }}>Instant Chemist Orders</div>
                      <div className="text-muted small">Auto-synced with Stockists</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="p-4 p-md-5 rounded-4 bg-white shadow-sm position-relative overflow-hidden"
                style={{ border: "1px solid rgba(0, 56, 79, 0.1)" }}
              >
                <div
                  className="position-absolute"
                  style={{ top: "-20px", right: "-20px", width: "120px", height: "120px", background: "radial-gradient(circle, rgba(30,196,182,0.15) 0%, transparent 70%)" }}
                ></div>
                <h4 className="fw-bold mb-4" style={{ color: "#00384f" }}>
                  The Fieldomni Advantage
                </h4>

                <div className="d-flex flex-column gap-4">
                  <div className="d-flex gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: "42px", height: "42px", backgroundColor: "#d5f7f1", color: "#1ec4b6" }}
                    >
                      <i className="fa-solid fa-bolt"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: "#00384f" }}>Zero Proxy Attendance</h6>
                      <p className="text-muted small mb-0">Biometric selfie check-in with live GPS location ensures field reps are physically at their designated territory.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: "42px", height: "42px", backgroundColor: "#e2f9f5", color: "#008f84" }}
                    >
                      <i className="fa-solid fa-file-invoice-dollar"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: "#00384f" }}>Automated TA/DA Payroll</h6>
                      <p className="text-muted small mb-0">Kilometer tracking calculated straight from GPS travel logs eliminates fake fuel bills and speeds up expense reimbursement.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: "42px", height: "42px", backgroundColor: "#e8f7fa", color: "#00384f" }}
                    >
                      <i className="fa-solid fa-database"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: "#00384f" }}>Complete Doctor &amp; Chemist CRM</h6>
                      <p className="text-muted small mb-0">Centralized database of doctors by specialization, prescription trends, visit frequency, and sampling records.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE PILLARS */}
        <section className="container mb-5 pb-3">
          <div className="text-center mb-5">
            <span
              className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold"
              style={{ backgroundColor: "#d5f7f1", color: "#008f84", fontSize: "12px", textTransform: "uppercase" }}
            >
              Why We Lead
            </span>
            <h2 className="fw-bold" style={{ color: "#00384f" }}>
              Our Architectural Pillars
            </h2>
          </div>

          <div className="row g-4">
            {coreValues.map((item, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div
                  className="p-4 rounded-4 bg-white h-100 shadow-sm transition-all"
                  style={{
                    border: "1px solid rgba(0, 56, 79, 0.08)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,56,79,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "50px", height: "50px", backgroundColor: "#d5f7f1", color: item.color }}
                  >
                    <i className={item.icon} style={{ fontSize: "22px" }}></i>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: "#00384f", fontSize: "17px" }}>
                    {item.title}
                  </h5>
                  <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE / JOURNEY */}
        <section className="container mb-5 pb-4">
          <div className="p-4 p-md-5 rounded-4 bg-white border shadow-sm">
            <div className="text-center mb-5">
              <span
                className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold"
                style={{ backgroundColor: "#e8f7fa", color: "#00384f", fontSize: "12px", textTransform: "uppercase" }}
              >
                Our Journey
              </span>
              <h2 className="fw-bold" style={{ color: "#00384f" }}>
                Pioneering Pharma Field Tech
              </h2>
            </div>

            <div className="row g-4">
              {milestones.map((m, i) => (
                <div key={i} className="col-md-6 col-lg-3">
                  <div className="p-3 rounded-3 bg-light h-100 border">
                    <span
                      className="badge rounded-pill fw-bold mb-2"
                      style={{ backgroundColor: "#1ec4b6", color: "#ffffff", fontSize: "13px" }}
                    >
                      {m.year}
                    </span>
                    <h6 className="fw-bold mb-2" style={{ color: "#00384f" }}>
                      {m.title}
                    </h6>
                    <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="container">
          <div
            className="p-5 rounded-4 text-center text-white"
            style={{
              background: "linear-gradient(135deg, #00384f 0%, #1ec4b6 100%)",
              boxShadow: "0 15px 40px rgba(0, 56, 79, 0.15)",
            }}
          >
            <h2 className="fw-bold mb-3 text-white" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}>
              Ready to Empower Your Pharma Field Fleet?
            </h2>
            <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: "600px", fontSize: "16px" }}>
              Join over 1,200 pharmaceutical enterprises and scale your field sales force with verified doctor tracking and automated payroll.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link
                href="/pricing"
                className="btn btn-light rounded-pill px-4 py-3 fw-bold text-dark"
                style={{ fontSize: "15px" }}
              >
                Explore Pricing Plans &rarr;
              </Link>
              <Link
                href="/contact-us"
                className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold"
                style={{ fontSize: "15px" }}
              >
                Schedule Live Product Demo
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
