"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! Demo request submitted for ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="gt-hero-section gt-hero-4 p-relative overflow-hidden">
      {/* Background Decorative Shape */}
      <div className="hero-circle-shape">
        <img src="/assets/img/home-4/hero-circle.png" alt="Decorative Background Shape" />
      </div>

      <div className="container">
        <div className="gt-hero-content text-center">
          {/* Badge */}


          <h1 className="char-animation">
            Smart Ground Staff
            Built for Pharma Companies
          </h1>
          <p className="wow fadeInUp" data-wow-delay=".3s" style={{ maxWidth: "720px", margin: "0 auto" }}>
            Empower your Medical Representatives (MRs) with real-time GPS tracking, geo-fenced
            attendance, automated doctor call reports (DCR), chemist order booking, and instant
            payroll &amp; TA/DA allowance processing.
          </p>

          {/* Quick Demo Sign-up */}
          <form
            onSubmit={handleSubmit}
            className="wow fadeInUp d-flex align-items-center justify-content-center mx-auto"
            data-wow-delay=".5s"
          >
            <input
              type="email"
              placeholder="Enter your work email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="theme-btn-main style-2">
              <span className="theme-btn-arrow-left">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
              <span className="theme-btn">Book Free Demo</span>
              <span className="theme-btn-arrow-right">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </button>
          </form>

          {/* Key Capabilities Checklist */}
          <ul
            className="wow fadeInUp list-unstyled d-flex flex-wrap justify-content-center gap-4 mt-4"
            data-wow-delay=".7s"
          >
            <li className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-circle-check text-primary"></i>
              Live MR GPS &amp; Route Tracking
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-circle-check text-primary"></i>
              Geo-fenced Doctor Clinic Attendance
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-circle-check text-primary"></i>
              Automated Payroll &amp; TA/DA Claims
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-circle-check text-primary"></i>
              Chemist Sales &amp; Secondary Order Booking
            </li>
          </ul>
        </div>

        {/* Hero Dashboard Preview Showcase */}
        <div className="gt-hero-image text-center p-relative mt-5">
          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0, 123, 255, 0.18), 0 10px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
            }}
          >
            <img
              src="/assets/img/pharma-mr-dashboard.jpg"
              alt="Fieldomni Pharma MR Ground Staff Tracking Dashboard"
              className="img-fluid w-100"
              style={{ display: "block" }}
            />
          </div>

          {/* Floating Live Badge Left */}
          <div
            className="gt-hero-left"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              padding: "12px 18px",
              borderRadius: "14px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0, 123, 255, 0.15)",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "rgba(16, 185, 129, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10B981",
                fontSize: "18px",
              }}
            >
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#15171A" }}>
                48 MRs Active On Field
              </div>
              <div style={{ fontSize: "12px", color: "#64748B" }}>
                98% Doctor Visits Done
              </div>
            </div>
          </div>

          {/* Floating Sales Badge Right */}
          <div
            className="gt-hero-right"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              padding: "12px 18px",
              borderRadius: "14px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0, 123, 255, 0.15)",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "rgba(0, 123, 255, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#007BFF",
                fontSize: "18px",
              }}
            >
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#15171A" }}>
                Chemist Orders &amp; Payroll
              </div>
              <div style={{ fontSize: "12px", color: "#10B981", fontWeight: 600 }}>
                ₹4.8M Orders + Auto TA/DA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
