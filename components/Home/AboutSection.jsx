"use client";

import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="gt-about-section fix section-padding pt-0 bg-white">
      <div className="container">
        <div className="gt-about-wrapper-3 section-padding pb-0">
          {/* Decorative Clip Shape */}
          <div className="clicp-shape">
            <img src="/assets/img/home-4/clip-path.png" alt="Decorative Shape" />
          </div>

          <div className="row g-4 align-items-center">
            {/* Left Content Column */}
            <div className="col-xl-6">
              <div className="gt-about-content">
                <div className="gt-section-title mb-0">
                  <span
                    className="tt-capitalize d-inline-block px-3 py-1 rounded-pill mb-3"
                    style={{
                      backgroundColor: "rgba(0, 123, 255, 0.08)",
                      color: "#007BFF",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    Why Fieldomni Pharma
                  </span>
                  <h2
                    className="char-animation fw-bold"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                      lineHeight: 1.2,
                      color: "#15171A",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Deliver Unforgettable <br />
                    Field Force Experiences
                  </h2>
                </div>

                <p className="gt-text" style={{ fontSize: "16px", color: "#54595F", marginTop: "20px" }}>
                  Empower your medical representatives and managers with unified tools for live
                  doctor visits, chemist order management, geo-verified attendance, and automated
                  allowance tracking on a single intuitive dashboard.
                </p>

                {/* Feature Bullet List with vertical timeline line */}
                <ul className="gt-list-items list-unstyled">
                  <li>
                    <span className="gt-circle-box"></span>
                    <div className="gt-content">
                      <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#15171A", marginBottom: "6px" }}>
                        All-in-One Field Automation
                      </h3>
                      <span style={{ fontSize: "14.5px", color: "#686866", lineHeight: "1.6" }}>
                        Plan doctor tours, capture chemist orders, and manage daily call reports (DCR)
                        seamlessly without data loss or paperwork.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="gt-circle-box"></span>
                    <div className="gt-content">
                      <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#15171A", marginBottom: "6px" }}>
                        Geo-fenced &amp; Accurate
                      </h3>
                      <span style={{ fontSize: "14.5px", color: "#686866", lineHeight: "1.6" }}>
                        Validate clinic check-ins with automated geo-fencing, ensuring accurate field
                        attendance and transparent MR route verification.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="gt-circle-box"></span>
                    <div className="gt-content">
                      <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#15171A", marginBottom: "6px" }}>
                        Next-Generation Payroll &amp; Claims
                      </h3>
                      <span style={{ fontSize: "14.5px", color: "#686866", lineHeight: "1.6" }}>
                        Instantly calculate kilometer allowances, TA/DA reimbursements, and performance
                        incentives tied directly to verified field visits.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="col-xl-6">
              <div className="gt-about-image agn-choose-5-img mx-auto">
                <div className="crm-image">
                  <img
                    src="/assets/img/home-4/crm-img.png"
                    alt="Fieldomni Pharma MR CRM Platform"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
