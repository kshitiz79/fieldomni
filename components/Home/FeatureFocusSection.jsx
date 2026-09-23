"use client";

import React from "react";
import Link from "next/link";

export default function FeatureFocusSection() {
  return (
    <section className="gt-feature-section-3 fix section-padding pt-0" id="features">
      <div className="gt-feature-focus-wrapper section-padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Left Feature Image */}
            <div className="col-lg-6">
              <div className="gt-feature-image position-relative">
                <img
                  src="/assets/img/home-4/feature-focus.png"
                  alt="Fieldomni Pharma MR Dashboard"
                  className="appear_left img-fluid rounded-4 shadow-lg"
                  style={{ position: "relative", zIndex: 2 }}
                />
                <div
                  className="bg-shape position-absolute"
                  style={{
                    top: "-20px",
                    left: "-20px",
                    zIndex: 1,
                    opacity: 0.6,
                    maxWidth: "100%",
                  }}
                >
                  <img src="/assets/img/home-4/focus-bg.png" alt="Decorative Shape" />
                </div>
              </div>
            </div>

            {/* Right Feature Content */}
            <div className="col-lg-6">
              <div className="gt-feature-content ps-lg-4">
                <div className="gt-section-title style-3 mb-3">
                  <span
                    className="text-white d-inline-block px-3 py-1 rounded-pill mb-2"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Smarter Field Automation
                  </span>
                  <h2
                    className="text-white fw-bold"
                    style={{
                      fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                      lineHeight: 1.25,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Automate the busy work, <br />
                    focus on doctor relationships
                  </h2>
                </div>

                {/* Key Metrics Counters */}
                <div className="gt-counter-items d-flex gap-4 my-4 flex-wrap">
                  <div
                    className="gt-counter p-3 rounded-3"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      flex: "1 1 200px",
                    }}
                  >
                    <h2
                      className="text-white fw-bold mb-1"
                      style={{ fontSize: "2.5rem" }}
                    >
                      <span className="gt-count">94</span>%
                    </h2>
                    <p
                      className="text-white-50 mb-0"
                      style={{ fontSize: "14px", lineHeight: "1.4" }}
                    >
                      On-Time DCR &amp; Tour Plan Submissions
                    </p>
                  </div>

                  <div
                    className="gt-counter p-3 rounded-3"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      flex: "1 1 200px",
                    }}
                  >
                    <h2
                      className="text-white fw-bold mb-1"
                      style={{ fontSize: "2.5rem" }}
                    >
                      <span className="gt-count">48</span>%
                    </h2>
                    <p
                      className="text-white-50 mb-0"
                      style={{ fontSize: "14px", lineHeight: "1.4" }}
                    >
                      Reduction in Allowance Fraud &amp; TA/DA Costs
                    </p>
                  </div>
                </div>

                <p
                  className="text-white mb-4"
                  style={{
                    fontSize: "15.5px",
                    lineHeight: "1.7",
                    opacity: 0.9,
                  }}
                >
                  Medical Representatives spend hours manually filling call logs and calculating
                  travel allowances. Fieldomni eliminates paperwork with automatic geo-tagging,
                  instant chemist order transmission, and one-click DCR generation.
                </p>

                {/* Action Buttons */}
                <div className="gt-btn-all d-flex gap-3 flex-wrap">
                  <Link className="theme-btn-main style-2" href="/contact-us">
                    <span className="theme-btn-arrow-left">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                    <span className="theme-btn">Get Started Now</span>
                    <span className="theme-btn-arrow-right">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>

                  <Link
                    className="theme-btn-main style-2 theme-2"
                    href="/contact-us"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      color: "#ffffff",
                    }}
                  >
                    <span className="theme-btn-arrow-left">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                    <span className="theme-btn">Schedule Demo</span>
                    <span className="theme-btn-arrow-right">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
