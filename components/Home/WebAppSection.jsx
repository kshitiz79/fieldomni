"use client";

import React from "react";
import Link from "next/link";

export default function WebAppSection() {
  return (
    <section className="gt-web-app-section fix section-padding bg-white" id="mobile-web-app">
      <div className="container">
        <div className="gt-web-app-wrapper">
          <div className="row g-4 align-items-center">
            {/* Left Content Column */}
            <div className="col-lg-7">
              <div className="gt-web-app-content pe-lg-4">
                <div className="gt-section-title style-3 mb-3">
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
                    Mobile &amp; Web Platforms
                  </span>
                  <h2
                    className="fw-bold"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                      color: "#15171A",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Everything you need to lead your field force, all in one spot
                  </h2>
                </div>

                <p
                  className="web-text text-muted mb-4"
                  style={{ fontSize: "16px", lineHeight: "1.7" }}
                >
                  Whether your Medical Representatives are visiting urban specialty clinics or
                  remote rural stockists, the Fieldomni mobile app operates seamlessly online
                  and offline. Meanwhile, area managers and sales heads track real-time field
                  movements and secondary sales trends from any desktop browser.
                </p>

                {/* Client Quote Highlight Box */}
                <div
                  className="gt-client-box-items p-4 rounded-4 shadow-sm position-relative"
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #007BFF",
                  }}
                >
                  <p
                    className="fst-italic text-dark mb-3"
                    style={{ fontSize: "15px", lineHeight: "1.6" }}
                  >
                    &ldquo;Fieldomni helped us increase our daily doctor call average from 6 to
                    11 calls per MR, while cutting travel expense dispute resolution time by 80%.
                    It is an indispensable asset for our 450+ field sales force.&rdquo;
                  </p>
                  <div className="gt-info d-flex align-items-center gap-3">
                    <img
                      src="/assets/img/home-4/client.png"
                      alt="Dr. Rajesh Mehra"
                      className="rounded-circle"
                      style={{ width: "48px", height: "48px", objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold" style={{ color: "#1e293b", fontSize: "15px" }}>
                        Dr. Rajesh Mehra
                      </h6>
                      <span className="text-muted" style={{ fontSize: "13px" }}>
                        VP Commercial Operations, SunCare LifeSciences
                      </span>
                    </div>
                  </div>
                </div>

                {/* App Store / Google Play download badges */}
                <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
                  <a
                    href="#"
                    className="d-flex align-items-center gap-2 px-3 py-2 rounded-3 text-white text-decoration-none shadow-sm"
                    style={{ backgroundColor: "#1e293b" }}
                  >
                    <i className="fa-brands fa-google-play fs-5 text-warning"></i>
                    <div className="text-start">
                      <div style={{ fontSize: "10px", lineHeight: "1" }}>GET IT ON</div>
                      <div style={{ fontSize: "14px", fontWeight: 700, lineHeight: "1.2" }}>
                        Google Play
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="d-flex align-items-center gap-2 px-3 py-2 rounded-3 text-white text-decoration-none shadow-sm"
                    style={{ backgroundColor: "#1e293b" }}
                  >
                    <i className="fa-brands fa-apple fs-5"></i>
                    <div className="text-start">
                      <div style={{ fontSize: "10px", lineHeight: "1" }}>Download on the</div>
                      <div style={{ fontSize: "14px", fontWeight: 700, lineHeight: "1.2" }}>
                        App Store
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Showcase Image */}
            <div className="col-lg-5">
              <div className="gt-web-app-image text-center">
                <img
                  src="/assets/img/home-4/web-app.png"
                  alt="Fieldomni Mobile and Web Application"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
