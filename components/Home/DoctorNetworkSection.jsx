"use client";

import React from "react";
import Link from "next/link";

export default function DoctorNetworkSection() {
  return (
    <section
      className="gt-contact-management-section pb-0 fix section-padding bg-cover position-relative"
      style={{
        backgroundImage: "url('/assets/img/home-4/contact-managenment-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="doctor-management"
    >
      <div className="container">
        {/* Section Header */}
        <div className="gt-section-title style-3 text-center mb-4">
          <span
            className="d-inline-block px-3 py-1 rounded-pill mb-2"
            style={{
              backgroundColor: "rgba(0, 123, 255, 0.1)",
              color: "#007BFF",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Doctor &amp; Chemist CRM
          </span>
          <h2
            className="fw-bold text-dark"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.5px",
            }}
          >
            Build Powerful Healthcare Relationships
          </h2>
          <p className="text-muted mt-2 mx-auto" style={{ maxWidth: "600px" }}>
            Unify your doctor call logs, sample dispatch records, chemist orders, and
            prescriber loyalty tracking in a single intelligent healthcare CRM.
          </p>
        </div>

        {/* Big Graphic Showcase */}
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="gt-contact-managenment-image text-center mt-3 position-relative item-hover">
              <div
                className="shape-3 position-absolute"
                style={{ top: "-30px", right: "20px", zIndex: 1, opacity: 0.8 }}
              >
                <img src="/assets/img/home-4/shape3.png" alt="Decorative Shape" />
              </div>
              <img
                src="/assets/img/home-4/customer-img.png"
                alt="Pharma Doctor and MR Relationship Network"
                className="w-100 rounded-4 shadow-lg position-relative"
                style={{ zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
