"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        router.push(`/contact-us?email=${encodeURIComponent(email)}`);
      }, 700);
    }
  };

  return (
    <section
      className="hero-custom-section position-relative overflow-hidden"
      style={{
        paddingTop: "70px",
        paddingBottom: "90px",
        backgroundColor: "#F8FCFB",
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(30, 196, 182, 0.12) 0%, rgba(248, 252, 251, 0) 70%),
          radial-gradient(circle at 10% 20%, rgba(213, 247, 241, 0.5) 0%, transparent 40%),
          radial-gradient(circle at 90% 20%, rgba(213, 247, 241, 0.5) 0%, transparent 40%)
        `,
      }}
    >
      <div className="container" style={{ maxWidth: "1240px" }}>

        {/* HERO COPY & CTAs */}
        <div className="text-center mx-auto" style={{ maxWidth: "960px" }}>

          {/* Top Pill Badge */}


          {/* Main Title */}
          <h1
            className="fw-bold tracking-tight mb-3"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
              color: "#00384f",
              lineHeight: 1.15,
              letterSpacing: "-0.8px",
            }}
          >
            Smart Field Force &amp; MR Tracking Built for{" "}
            <span
              style={{
                color: "#1ec4b6",
                display: "inline-block",
              }}
            >
              Pharma Companies
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-muted mx-auto mb-4"
            style={{
              maxWidth: "760px",
              fontSize: "clamp(15.5px, 1.8vw, 18px)",
              lineHeight: "1.65",
              color: "#475569",
            }}
          >
            Empower your Medical Representatives with real-time GPS tracking, geo-fenced clinic attendance, automated doctor call reports (DCR), chemist order booking, and automated TA/DA payroll.
          </p>

          {/* Lead Capture Form & Buttons */}
          <div className="d-flex flex-column align-items-center justify-content-center mb-4">
            {submitted ? (
              <div
                className="d-inline-flex align-items-center gap-2 px-4 py-2.5 rounded-pill shadow-sm text-white"
                style={{ backgroundColor: "#1ec4b6", fontSize: "15px", fontWeight: "600" }}
              >
                <i className="fa-solid fa-circle-check"></i>
                <span>Redirecting to schedule your personalized live demo...</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column flex-sm-row align-items-center justify-content-between p-1.5 rounded-pill bg-white shadow-sm border w-100"
                style={{
                  maxWidth: "520px",
                  borderColor: "rgba(0, 56, 79, 0.12)",
                }}
              >
                <div className="d-flex align-items-center flex-grow-1 ps-3 w-100">
                  <i className="fa-solid fa-envelope text-muted me-2"></i>
                  <input
                    type="email"
                    placeholder="Enter your work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-0 bg-transparent flex-grow-1 py-2 text-dark"
                    style={{ outline: "none", fontSize: "15px" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn rounded-pill px-4 py-2.5 fw-bold text-white d-flex align-items-center gap-2 w-100 w-sm-auto justify-content-center"
                  style={{
                    backgroundColor: "#1ec4b6",
                    boxShadow: "0 4px 14px rgba(30, 196, 182, 0.35)",
                    fontSize: "14.5px",
                    border: "none",
                  }}
                >
                  <span>Book Free Demo</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            )}

            <div className="mt-2.5 d-flex align-items-center gap-2">
              <span className="text-muted small">No credit card required upfront.</span>
              <Link href="/pricing" className="small fw-bold text-decoration-none" style={{ color: "#00384f" }}>
                <span>View Transparent Pricing</span> <span style={{ color: "#1ec4b6" }}>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Key Value Badges */}
          <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 text-muted small mt-3">
            <div className="d-flex align-items-center gap-2 bg-white px-3 py-1.5 rounded-pill border shadow-xs">
              <i className="fa-solid fa-circle-check" style={{ color: "#1ec4b6" }}></i>
              <span className="fw-semibold" style={{ color: "#00384f" }}>Live MR GPS &amp; Route Playback</span>
            </div>
            <div className="d-flex align-items-center gap-2 bg-white px-3 py-1.5 rounded-pill border shadow-xs">
              <i className="fa-solid fa-circle-check" style={{ color: "#1ec4b6" }}></i>
              <span className="fw-semibold" style={{ color: "#00384f" }}>Geo-Fenced Clinic Attendance</span>
            </div>
            <div className="d-flex align-items-center gap-2 bg-white px-3 py-1.5 rounded-pill border shadow-xs">
              <i className="fa-solid fa-circle-check" style={{ color: "#1ec4b6" }}></i>
              <span className="fw-semibold" style={{ color: "#00384f" }}>Chemist Orders &amp; Secondary Sales</span>
            </div>
            <div className="d-flex align-items-center gap-2 bg-white px-3 py-1.5 rounded-pill border shadow-xs">
              <i className="fa-solid fa-circle-check" style={{ color: "#1ec4b6" }}></i>
              <span className="fw-semibold" style={{ color: "#00384f" }}>Automated TA/DA Payroll</span>
            </div>
          </div>
        </div>

        {/* HERO DASHBOARD SHOWCASE */}
        <div className="position-relative mt-5 pt-2">

          {/* Main Frame Container */}
          <div
            className="position-relative mx-auto rounded-4 overflow-hidden"
            style={{
              maxWidth: "1120px",
              boxShadow: "0 25px 60px rgba(0, 56, 79, 0.12), 0 10px 25px rgba(0, 56, 79, 0.06)",
              border: "1px solid rgba(0, 56, 79, 0.12)",
              backgroundColor: "#ffffff",
            }}
          >
            {/* Top Mac-style Window Controls */}
            <div
              className="d-flex align-items-center justify-content-between px-3 py-2.5 border-bottom"
              style={{ backgroundColor: "#f8fafc" }}
            >
              <div className="d-flex align-items-center gap-2">
                <span className="rounded-circle d-inline-block" style={{ width: "11px", height: "11px", backgroundColor: "#ff5f56" }}></span>
                <span className="rounded-circle d-inline-block" style={{ width: "11px", height: "11px", backgroundColor: "#ffbd2e" }}></span>
                <span className="rounded-circle d-inline-block" style={{ width: "11px", height: "11px", backgroundColor: "#27c93f" }}></span>
              </div>
              <div className="small fw-semibold text-muted d-none d-sm-block" style={{ fontSize: "12px" }}>
                <i className="fa-solid fa-lock me-1 text-success"></i> app.fieldomni.com/command-center
              </div>
              <div className="badge rounded-pill bg-light text-muted border small">
                Live Sync Active
              </div>
            </div>

            {/* Dashboard Image */}
            <img
              src="/assets/img/pharma-mr-dashboard.jpg"
              alt="Fieldomni Pharma MR Ground Staff Tracking Dashboard"
              className="img-fluid w-100"
              style={{ display: "block" }}
            />
          </div>

          {/* Floating Live Badge Left */}
          <div
            className="position-absolute d-none d-lg-flex align-items-center gap-3 p-3 rounded-4 bg-white border"
            style={{
              top: "14%",
              left: "-10px",
              maxWidth: "280px",
              zIndex: 10,
              boxShadow: "0 18px 40px rgba(0, 56, 79, 0.14)",
              borderColor: "rgba(30, 196, 182, 0.35)",
            }}
          >
            <div
              className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: "#d5f7f1",
                color: "#1ec4b6",
                fontSize: "20px",
              }}
            >
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text-start">
              <div className="fw-bold" style={{ fontSize: "14px", color: "#00384f" }}>
                48 MRs Active On Field
              </div>
              <div className="text-muted small" style={{ fontSize: "12px" }}>
                <span className="text-success fw-bold">● 98%</span> Doctor Visits Done
              </div>
            </div>
          </div>

          {/* Floating Sales Badge Right */}
          <div
            className="position-absolute d-none d-lg-flex align-items-center gap-3 p-3 rounded-4 bg-white border"
            style={{
              bottom: "16%",
              right: "-10px",
              maxWidth: "300px",
              zIndex: 10,
              boxShadow: "0 18px 40px rgba(0, 56, 79, 0.14)",
              borderColor: "rgba(30, 196, 182, 0.35)",
            }}
          >
            <div
              className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: "#d5f7f1",
                color: "#1ec4b6",
                fontSize: "20px",
              }}
            >
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <div className="text-start">
              <div className="fw-bold" style={{ fontSize: "14px", color: "#00384f" }}>
                Chemist Orders &amp; Payroll
              </div>
              <div className="small fw-semibold" style={{ fontSize: "12px", color: "#1ec4b6" }}>
                ₹48.5L Orders • Auto TA/DA Synced
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
