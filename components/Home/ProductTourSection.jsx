"use client";

import React, { useState } from "react";
import Link from "next/link";

const tourSteps = [
  {
    id: "tracking",
    title: "MR Live Tracking & Routes",
    badge: "GPS Geo-fencing",
    image: "/assets/img/home-4/product-tour-01.png",
    description:
      "Real-time visibility into rep field locations, daily route compliance, travel speed, battery status, and unannounced detour alerts.",
  },
  {
    id: "dcr",
    title: "Doctor Call Reports (DCR)",
    badge: "E-Detailing & Samples",
    image: "/assets/img/home-4/product-tour-02.png",
    description:
      "Instant DCR logging with doctor specialty tags, discussion topics, promotional product samples, and immediate manager sign-off.",
  },
  {
    id: "orders",
    title: "Chemist Order Booking",
    badge: "Secondary Sales",
    image: "/assets/img/home-4/product-tour-03.png",
    description:
      "Record chemist purchase orders with product SKU pricing, quantity discounts, and automated dispatch routing to assigned stockists.",
  },
  {
    id: "allowance",
    title: "TA/DA & Payroll Engine",
    badge: "Expense Automation",
    image: "/assets/img/home-4/product-tour-01.png",
    description:
      "Automated mileage calculation based on verified GPS travel distance, daily allowance rules, and one-click payroll sync.",
  },
];

export default function ProductTourSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="gt-product-tour-section fix section-padding bg-light" id="product-tour">
      <div className="container">
        {/* Section Header */}
        <div className="gt-section-title style-3 text-center mb-4">
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
            Product Walkthrough
          </span>
          <h2
            className="fw-bold"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              color: "#15171A",
              letterSpacing: "-0.5px",
            }}
          >
            Take an Interactive Tour
          </h2>
          <p className="text-muted mt-2 mx-auto" style={{ maxWidth: "600px" }}>
            See how Fieldomni connects MRs in the field with regional managers and HQ
            in one seamless workflow.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {tourSteps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className="btn px-4 py-2 rounded-pill fw-semibold"
              style={{
                backgroundColor: activeStep === idx ? "#007BFF" : "#ffffff",
                color: activeStep === idx ? "#ffffff" : "#475569",
                border: `1.5px solid ${activeStep === idx ? "#007BFF" : "#cbd5e1"}`,
                boxShadow:
                  activeStep === idx
                    ? "0 4px 12px rgba(0, 123, 255, 0.25)"
                    : "none",
                transition: "all 0.3s ease",
                fontSize: "14px",
              }}
            >
              <span className="me-2">{idx + 1}.</span>
              {step.title}
            </button>
          ))}
        </div>

        {/* Active Slide Showcase */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="card border-0 shadow-lg rounded-4 overflow-hidden"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="p-4 bg-white border-bottom d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div>
                  <span
                    className="badge mb-1 px-3 py-1"
                    style={{
                      backgroundColor: "rgba(0, 123, 255, 0.1)",
                      color: "#007BFF",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {tourSteps[activeStep].badge}
                  </span>
                  <h3
                    className="fw-bold mb-1"
                    style={{ fontSize: "20px", color: "#1e293b" }}
                  >
                    {tourSteps[activeStep].title}
                  </h3>
                  <p
                    className="mb-0 text-muted"
                    style={{ fontSize: "14.5px", maxWidth: "650px" }}
                  >
                    {tourSteps[activeStep].description}
                  </p>
                </div>

                <Link
                  href="/contact-us"
                  className="theme-btn-main style-2"
                  style={{ padding: "10px 22px", fontSize: "14px" }}
                >
                  <span className="theme-btn">Request Live Demo</span>
                </Link>
              </div>

              {/* Screenshot Display */}
              <div
                className="text-center p-4"
                style={{
                  background: "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
                }}
              >
                <img
                  key={tourSteps[activeStep].image + activeStep}
                  src={tourSteps[activeStep].image}
                  alt={tourSteps[activeStep].title}
                  className="img-fluid rounded-3 shadow"
                  style={{
                    maxHeight: "520px",
                    width: "auto",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
