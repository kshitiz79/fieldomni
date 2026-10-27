"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";

export default function SolutionsPage() {
  const solutions = [
    {
      id: "pharma-enterprises",
      title: "Pharma Enterprises & Generic Manufacturers",
      subtitle: "Scalable Fleet Automation for 100 to 5,000+ Field Reps",
      icon: "fa-solid fa-pills",
      description:
        "Manage extensive pan-India medical representative networks across multiple divisions and therapeutic areas. Automate multi-level management hierarchies (MR -> ASM -> RSM -> ZSM -> NSM) with custom doctor target quotas.",
      benefits: [
        "Multi-division support with segregated doctor & product databases",
        "Seamless ERP integration with SAP, Oracle, Microsoft Dynamics & Tally",
        "Automated monthly Tour Program (TP) approvals and deviation alerts",
        "Comprehensive territory sales analytics and doctor prescription trends",
      ],
      badge: "Enterprise Fleet",
    },
    {
      id: "biotech",
      title: "Biotech & Specialty Therapeutics",
      subtitle: "High-Touch KOL & Hospital Network Engagement",
      icon: "fa-solid fa-dna",
      description:
        "Designed for specialized sales forces dealing in oncology, cardiology, neurology, and rare diseases. Track Key Opinion Leader (KOL) meetings, clinical presentation detailing times, and hospital procurement committees.",
      benefits: [
        "Visual aid detailing analytics with per-slide viewing timer",
        "Hospital formulary and institutional tender status monitoring",
        "Specialist doctor profiling and academic event / CME tracking",
        "High-security encrypted doctor interaction logs",
      ],
      badge: "Specialty Care",
    },
    {
      id: "otc-chemist",
      title: "OTC & Consumer Healthcare Networks",
      subtitle: "Chemist Beat Planning & High-Velocity Secondary Sales",
      icon: "fa-solid fa-store",
      description:
        "Empower retail field executives to cover maximum chemist counters and pharmacies each day. Enable instant secondary sales order booking with automated distributor dispatch notifications.",
      benefits: [
        "Optimized daily beat route planner with geofenced chemist stops",
        "Direct-to-stockist digital order routing via SMS & WhatsApp",
        "Live stockist inventory levels and payment collection tracking",
        "Retail trade scheme calculator and bonus sample allotment",
      ],
      badge: "OTC / FMCG",
    },
    {
      id: "ayurvedic",
      title: "Ayurvedic & Nutraceutical Fleets",
      subtitle: "Expanding Rural & Semi-Urban Distribution Channels",
      icon: "fa-solid fa-leaf",
      description:
        "Accelerate field sales in Tier-2, Tier-3, and rural markets. Fieldomni's offline-first architecture allows sales officers to record attendance, clinic visits, and distributor orders without requiring an active internet connection.",
      benefits: [
        "100% offline data entry with instant background cloud synchronization",
        "Distributor onboarding and stockist mapping workflows",
        "Target vs. achievement leaderboard to boost rep motivation",
        "Automated mileage & transit allowance for extensive rural travels",
      ],
      badge: "Herbal & Wellness",
    },
    {
      id: "managers",
      title: "Area & Regional Sales Managers (ASM / RSM)",
      subtitle: "Real-Time Field Visibility & Live Decision Support",
      icon: "fa-solid fa-user-tie",
      description:
        "Empower field managers to oversee their team effortlessly. Conduct joint doctor calls, monitor live GPS positions on interactive maps, approve DCR reports with 1-click, and track regional sales targets.",
      benefits: [
        "Live team locator with real-time active / inactive status",
        "Joint field call tagging with MR performance rating notes",
        "Instant push notifications for abnormal deviations & missed calls",
        "1-click bulk approvals for monthly DCRs and TA/DA expenses",
      ],
      badge: "Manager Command",
    },
    {
      id: "stockists",
      title: "Pharma Stockists & Carrying Forwarding Agents (CFA)",
      subtitle: "Frictionless Order Fulfillment & Supply Chain Linkage",
      icon: "fa-solid fa-truck-ramp-box",
      description:
        "Bridge the gap between field representatives and supply chain partners. Stockists receive verified orders in real-time, reducing dispatch lead times and eliminating communication errors.",
      benefits: [
        "Direct digital order receipts with chemist license & GST verification",
        "Credit limit validation and overdue balance warnings",
        "Order dispatch status updates sent back to reps and managers",
        "Primary vs. secondary sales gap reconciliation reports",
      ],
      badge: "Distribution",
    },
  ];

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
              Industry Tailored Solutions
            </span>
            <h1
              className="fw-bold tracking-tight mb-3"
              style={{
                color: "#00384f",
                fontSize: "clamp(2.2rem, 4.2vw, 3.2rem)",
                lineHeight: 1.2,
              }}
            >
              Custom-Built Field Force Solutions for{" "}
              <span style={{ color: "#1ec4b6" }}>Every Pharma Segment</span>
            </h1>
            <p className="text-muted mx-auto mb-4" style={{ maxWidth: "700px", fontSize: "17px", lineHeight: 1.6 }}>
              Whether you are a multinational pharma enterprise, an expanding generic manufacturer, or an OTC healthcare brand, Fieldomni adapts seamlessly to your operational workflows.
            </p>
          </div>
        </section>

        {/* SOLUTIONS GRID */}
        <section className="container mb-5">
          <div className="row g-4">
            {solutions.map((sol, index) => (
              <div key={sol.id} className="col-lg-6" id={sol.id}>
                <div
                  className="p-4 p-md-5 rounded-4 bg-white h-100 shadow-sm d-flex flex-column justify-content-between"
                  style={{
                    border: "1px solid rgba(0, 56, 79, 0.1)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 56, 79, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "50px", height: "50px", backgroundColor: "#d5f7f1", color: "#1ec4b6", fontSize: "22px" }}
                      >
                        <i className={sol.icon}></i>
                      </div>
                      <span
                        className="badge rounded-pill fw-bold px-3 py-1.5"
                        style={{ backgroundColor: "#00384f", color: "#ffffff", fontSize: "12px" }}
                      >
                        {sol.badge}
                      </span>
                    </div>

                    <h4 className="fw-bold mb-1" style={{ color: "#00384f" }}>
                      {sol.title}
                    </h4>
                    <p className="fw-semibold small mb-3" style={{ color: "#1ec4b6" }}>
                      {sol.subtitle}
                    </p>
                    <p className="text-muted small mb-4" style={{ lineHeight: "1.7", fontSize: "14px" }}>
                      {sol.description}
                    </p>

                    <h6 className="fw-bold mb-3" style={{ color: "#00384f", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      Key Capabilities:
                    </h6>
                    <div className="d-flex flex-column gap-2 mb-4">
                      {sol.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="d-flex align-items-start gap-2 small">
                          <i className="fa-solid fa-circle-check mt-1" style={{ color: "#1ec4b6", fontSize: "13px" }}></i>
                          <span style={{ color: "#475569" }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                    <Link
                      href={`/contact-us?solution=${sol.id}`}
                      className="text-decoration-none fw-bold small d-flex align-items-center gap-2"
                      style={{ color: "#00384f" }}
                    >
                      <span>Request Custom Blueprint</span>
                      <i className="fa-solid fa-arrow-right" style={{ color: "#1ec4b6" }}></i>
                    </Link>
                    <Link
                      href="/pricing"
                      className="badge rounded-pill bg-light text-muted border text-decoration-none px-3 py-2"
                    >
                      Check Pricing &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTEGRATION & SECURITY BANNER */}
        <section className="container mb-5">
          <div
            className="p-4 p-md-5 rounded-4 bg-white border shadow-sm"
            style={{ border: "1px solid rgba(0, 56, 79, 0.1)" }}
          >
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <span
                  className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold"
                  style={{ backgroundColor: "#d5f7f1", color: "#008f84", fontSize: "12px", textTransform: "uppercase" }}
                >
                  Enterprise Ready
                </span>
                <h3 className="fw-bold mb-3" style={{ color: "#00384f" }}>
                  Seamless Integration with Your Pharma ERP &amp; HRMS
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  Fieldomni connects seamlessly with your existing infrastructure, including SAP S/4HANA, Tally Prime, Marg ERP, Oracle NetSuite, and custom HRMS payroll systems. Zero data redundancy, instantaneous field synchronization.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row g-3 text-center">
                  <div className="col-6 col-sm-4">
                    <div className="p-3 rounded-3 bg-light border fw-bold text-muted small">SAP S/4HANA</div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="p-3 rounded-3 bg-light border fw-bold text-muted small">Tally Prime</div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="p-3 rounded-3 bg-light border fw-bold text-muted small">Marg ERP 9+</div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="p-3 rounded-3 bg-light border fw-bold text-muted small">Oracle Cloud</div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="p-3 rounded-3 bg-light border fw-bold text-muted small">Zoho People</div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="p-3 rounded-3 bg-light border fw-bold text-muted small">Custom APIs</div>
                  </div>
                </div>
              </div>
            </div>
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
            <h2 className="fw-bold mb-3 text-white">Find the Perfect Solution for Your Fleet</h2>
            <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: "600px", fontSize: "16px" }}>
              Our pharma solution consultants can help design a custom rollout plan for your field team.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="/pricing" className="btn btn-light rounded-pill px-4 py-3 fw-bold text-dark">
                View Pricing Plans &rarr;
              </Link>
              <Link href="/contact-us" className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold">
                Contact Solution Architects
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
