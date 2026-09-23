"use client";

import React from "react";
import Link from "next/link";


const testimonials = [
  {
    id: 1,
    name: "Vikram Singhania",
    designation: "National Sales Director, Apex LifeSciences",
    quote:
      "Fieldomni transformed our 600-member field force across 8 regional divisions. Ghost visits vanished because of strict geofencing, and our secondary chemist sales grew by 34% in just two quarters.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anita Roy",
    designation: "Head of Commercial Operations, BioCure Generics",
    quote:
      "The automated GPS distance calculation saved our payroll team 6 full days of manual TA/DA claim processing every month. The reps love the offline mode when visiting hospital basements.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="gt-testimonial-section-3 fix pb-5 bg-cover section-padding position-relative"
      style={{
        backgroundImage: "url('/assets/img/home-4/testimonial-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="testimonials"
    >
      <div className="container">
        {/* Section Header */}
        <div className="gt-section-title text-center style-3 mb-5">
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
            Client Endorsements
          </span>
          <h2
            className="text-white fw-bold"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.5px",
            }}
          >
            Trusted by Pharma Leaders Globally
          </h2>
        </div>

        {/* Top Flags & Stat Bar */}
        <div className="row g-4 align-items-center mb-5">
          <div className="col-xl-5">
            <div
              className="gt-flag-box p-4 rounded-4 d-flex align-items-center justify-content-between text-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              <div className="info-content d-flex align-items-center gap-3">
                <img
                  src="/assets/img/home-4/flag/client-info.png"
                  alt="Fieldomni Active Field Force"
                  style={{ width: "52px", height: "auto" }}
                />
                <div>
                  <h4 className="mb-0 fw-bold text-white" style={{ fontSize: "20px" }}>
                    25,000+ Active MRs
                  </h4>
                  <p className="mb-0 text-white-50" style={{ fontSize: "13.5px" }}>
                    Powering daily field operations worldwide
                  </p>
                </div>
              </div>
              <Link
                href="/contact-us"
                className="arrow-box d-flex align-items-center justify-content-center rounded-circle bg-white text-primary text-decoration-none shadow"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

       
        </div>

        {/* Testimonial Cards */}
        <div className="row g-4 justify-content-center">
          {testimonials.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-12">
              <div
                className="gt-testimonial-box-items-3 p-4 p-lg-5 rounded-4 shadow-lg position-relative text-start"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <h3
                      className="fw-bold mb-1"
                      style={{ fontSize: "18px", color: "#1e293b" }}
                    >
                      {item.name}
                    </h3>
                    <span className="text-primary fw-medium" style={{ fontSize: "13px" }}>
                      {item.designation}
                    </span>
                  </div>

                  <div className="d-flex gap-1 text-warning">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star fs-6"></i>
                    ))}
                  </div>
                </div>

                <p
                  className="text-muted mb-4 fst-italic"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                  <span
                    className="badge px-3 py-1 text-success"
                    style={{ backgroundColor: "#ecfdf5", fontSize: "12px" }}
                  >
                    <i className="fa-solid fa-badge-check me-1"></i> Verified Pharma Client
                  </span>
                  <div className="quote-icon opacity-25">
                    <img src="/assets/img/home-4/quote.svg" alt="Quote Icon" style={{ width: "32px" }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
