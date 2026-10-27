"use client";

import React, { useState } from "react";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";

// Customer Support Representative Image
// Place your custom image in /public/assets/img/inner-page/contact-agent.png
const DEFAULT_AGENT_IMAGE = "women.png";
const FALLBACK_AGENT_IMAGE =
  "./women.png";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [agentSrc, setAgentSrc] = useState(DEFAULT_AGENT_IMAGE);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    company: "",
    helpType: "Request a Demo",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      company: "",
      helpType: "Request a Demo",
      message: "",
    });
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: "#f6f9fb", minHeight: "100vh" }}>
      <Header />

      <main style={{ paddingTop: "130px", paddingBottom: "90px" }}>
        <div className="container" style={{ maxWidth: "1140px" }}>

          {/* ========================================================
              TOP HERO CARD (Proposed New Contact Page Design)
             ======================================================== */}
          <div
            className="top-hero-card mb-4"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "28px",
              border: "1px solid #e7eff2",
              boxShadow: "0 6px 30px rgba(0, 56, 79, 0.04)",
              padding: "42px 48px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="row align-items-center g-4">
              {/* Left Column: Heading, Subtitle & Value Highlights */}
              <div className="col-lg-7 col-md-12">
                {/* Badge */}
                <div className="mb-3">
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "#e0f8f4",
                      color: "#00a896",
                      fontSize: "11.5px",
                      fontWeight: 700,
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                      padding: "5px 14px",
                      borderRadius: "999px",
                    }}
                  >
                    GET IN TOUCH
                  </span>
                </div>

                {/* Main Heading */}
                <h1
                  style={{
                    color: "#00384f",
                    fontSize: "clamp(28px, 3.2vw, 38px)",
                    fontWeight: 800,
                    lineHeight: 1.22,
                    letterSpacing: "-0.5px",
                    marginBottom: "16px",
                  }}
                >
                  Let&apos;s Talk About Your{" "}
                  <span style={{ color: "#00bba6" }}>
                    Pharma Field Force Needs
                  </span>
                </h1>

                {/* Description */}
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14.5px",
                    lineHeight: 1.65,
                    maxWidth: "540px",
                    marginBottom: "28px",
                  }}
                >
                  Whether you have questions about our features, need a personalized
                  demo, or want to discuss your field force requirements — our team
                  is here to help.
                </p>

                {/* Feature Highlights Row */}
                <div className="d-flex flex-wrap gap-4 align-items-center">
                  {/* Feature 1 */}
                  <div className="d-flex align-items-center gap-2">
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "#e0f8f4",
                        color: "#00bba6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "15px",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fa-solid fa-bolt"></i>
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#00384f", lineHeight: 1.2 }}>
                        Quick Response
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#64748b", lineHeight: 1.2 }}>
                        Within 24 hours
                      </div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="d-flex align-items-center gap-2">
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "#e0f8f4",
                        color: "#00bba6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#00384f", lineHeight: 1.2 }}>
                        Talk to Experts
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#64748b", lineHeight: 1.2 }}>
                        Pharma domain specialists
                      </div>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="d-flex align-items-center gap-2">
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "#e0f8f4",
                        color: "#00bba6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#00384f", lineHeight: 1.2 }}>
                        India Based Team
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#64748b", lineHeight: 1.2 }}>
                        Local support &amp; onboarding
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Support Agent Graphic with floating badges */}
              <div className="col-lg-5 col-md-12 d-flex justify-content-center justify-content-lg-end">
                <div
                  style={{
                    position: "relative",
                    width: "340px",
                    maxWidth: "100%",
                    height: "290px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  {/* Circular mint backdrop glow */}
                  <div
                    style={{
                      position: "absolute",
                      width: "270px",
                      height: "270px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, #baf2e8 0%, #dffaf5 60%, rgba(223, 250, 245, 0.4) 100%)",
                      top: "8px",
                      zIndex: 1,
                    }}
                  />



                  {/* Floating Chat Bubble (Top Right) */}


                  {/* Support Agent Photo */}
                  <img
                    src={agentSrc}
                    alt="Fieldomni Pharma Support Specialist"
                    onError={() => setAgentSrc(FALLBACK_AGENT_IMAGE)}
                    style={{
                      position: "relative",
                      zIndex: 2,
                      width: "245px",
                      height: "275px",
                      objectFit: "cover",
                      objectPosition: "top center",
                      borderRadius: "0 0 20px 20px",
                    }}
                  />


                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              BOTTOM SECTION: CONTACT INFO CARDS & MESSAGE FORM
             ======================================================== */}
          <div className="row g-4 align-items-stretch">
            {/* Left Column: Contact Channels & Follow Us */}
            <div className="col-lg-5 col-md-12">
              <div className="d-flex flex-column gap-3 h-100 justify-content-between">
                {/* 1. Call or WhatsApp Us */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    border: "1px solid #e7eff2",
                    padding: "22px 24px",
                    boxShadow: "0 4px 16px rgba(0, 56, 79, 0.02)",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#e0f8f4",
                      color: "#00bba6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#64748b", marginBottom: "2px" }}>
                      Call or WhatsApp Us
                    </div>
                    <a
                      href="tel:+919204309173"
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "#00bba6",
                        textDecoration: "none",
                        lineHeight: 1.2,
                        display: "block",
                      }}
                    >
                      +91 92043 09173
                    </a>
                    <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "3px" }}>
                      Mon – Sat, 9:00 AM – 7:00 PM IST
                    </div>
                  </div>
                </div>

                {/* 2. Email Us */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    border: "1px solid #e7eff2",
                    padding: "22px 24px",
                    boxShadow: "0 4px 16px rgba(0, 56, 79, 0.02)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#e0f8f4",
                      color: "#00bba6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#64748b", marginBottom: "3px" }}>
                      Email Us
                    </div>
                    <a
                      href="mailto:sales@fieldomni.com"
                      style={{
                        fontSize: "14.5px",
                        fontWeight: 600,
                        color: "#00bba6",
                        textDecoration: "none",
                        display: "block",
                        marginBottom: "2px",
                      }}
                    >
                      sales@fieldomni.com
                    </a>
                    <a
                      href="mailto:support@fieldomni.com"
                      style={{
                        fontSize: "14.5px",
                        fontWeight: 600,
                        color: "#00bba6",
                        textDecoration: "none",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      support@fieldomni.com
                    </a>
                    <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                      We typically reply within 24 hours.
                    </div>
                  </div>
                </div>

                {/* 3. Our Office */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    border: "1px solid #e7eff2",
                    padding: "22px 24px",
                    boxShadow: "0 4px 16px rgba(0, 56, 79, 0.02)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#e0f8f4",
                      color: "#00bba6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#64748b", marginBottom: "3px" }}>
                      Our Office
                    </div>
                    <p
                      style={{
                        fontSize: "13.5px",
                        color: "#334155",
                        lineHeight: 1.45,
                        marginBottom: "6px",
                      }}
                    >
                      T3-236, Golden-I, Techzone IV,<br />
                      Greater Noida West, UP – 201306, India
                    </p>
                    <a
                      href="https://maps.google.com/?q=Golden-I+Techzone+IV+Greater+Noida+West+201306"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#00bba6",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                {/* 4. Follow Us */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    border: "1px solid #e7eff2",
                    padding: "16px 24px",
                    boxShadow: "0 4px 16px rgba(0, 56, 79, 0.02)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#00384f" }}>
                    Follow Us
                  </span>
                  <div className="d-flex align-items-center gap-2">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "#0077b5",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        textDecoration: "none",
                        transition: "transform 0.18s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "#ff0000",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        textDecoration: "none",
                        transition: "transform 0.18s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>

                    {/* X (Twitter) */}
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "15px",
                        textDecoration: "none",
                        transition: "transform 0.18s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Send Us a Message Form */}
            <div className="col-lg-7 col-md-12">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "28px",
                  border: "1px solid #e7eff2",
                  padding: "38px 42px",
                  boxShadow: "0 6px 30px rgba(0, 56, 79, 0.04)",
                  height: "100%",
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#00384f",
                    marginBottom: "24px",
                    letterSpacing: "-0.3px",
                  }}
                >
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div
                    style={{
                      backgroundColor: "#e0f8f4",
                      border: "1px solid #baf2e8",
                      borderRadius: "18px",
                      padding: "36px 28px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#00bba6",
                        color: "#ffffff",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "26px",
                        marginBottom: "16px",
                      }}
                    >
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h4 style={{ color: "#00384f", fontWeight: 700, marginBottom: "8px" }}>
                      Thank You!
                    </h4>
                    <p style={{ color: "#475569", fontSize: "14.5px", maxWidth: "460px", margin: "0 auto 20px" }}>
                      Your inquiry has been received. One of our Pharma domain specialists will reach out to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      style={{
                        backgroundColor: "#00384f",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "10px",
                        padding: "10px 24px",
                        fontSize: "13.5px",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {/* Your Name */}
                      <div className="col-md-6">
                        <label
                          htmlFor="nameInput"
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1e293b",
                            marginBottom: "7px",
                          }}
                        >
                          Your Name <span style={{ color: "#00bba6" }}>*</span>
                        </label>
                        <input
                          id="nameInput"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          style={{
                            width: "100%",
                            padding: "11px 16px",
                            borderRadius: "10px",
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#ffffff",
                            fontSize: "14px",
                            color: "#1e293b",
                            outline: "none",
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#00bba6";
                            e.target.style.boxShadow = "0 0 0 3px rgba(0, 187, 166, 0.15)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e2e8f0";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      {/* Work Email */}
                      <div className="col-md-6">
                        <label
                          htmlFor="emailInput"
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1e293b",
                            marginBottom: "7px",
                          }}
                        >
                          Work Email <span style={{ color: "#00bba6" }}>*</span>
                        </label>
                        <input
                          id="emailInput"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          style={{
                            width: "100%",
                            padding: "11px 16px",
                            borderRadius: "10px",
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#ffffff",
                            fontSize: "14px",
                            color: "#1e293b",
                            outline: "none",
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#00bba6";
                            e.target.style.boxShadow = "0 0 0 3px rgba(0, 187, 166, 0.15)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e2e8f0";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      {/* Phone Number with Country Code */}
                      <div className="col-md-6">
                        <label
                          htmlFor="phoneInput"
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1e293b",
                            marginBottom: "7px",
                          }}
                        >
                          Phone Number <span style={{ color: "#00bba6" }}>*</span>
                        </label>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "10px",
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#ffffff",
                            overflow: "hidden",
                            transition: "border-color 0.2s ease",
                          }}
                        >
                          <select
                            value={formData.countryCode}
                            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                            aria-label="Country Code"
                            style={{
                              border: "none",
                              backgroundColor: "#f8fafc",
                              padding: "11px 10px 11px 14px",
                              fontSize: "13.5px",
                              fontWeight: 600,
                              color: "#334155",
                              outline: "none",
                              borderRight: "1px solid #e2e8f0",
                              cursor: "pointer",
                            }}
                          >
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+971">+971</option>
                            <option value="+65">+65</option>
                          </select>
                          <input
                            id="phoneInput"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="98765 43210"
                            style={{
                              flex: 1,
                              border: "none",
                              padding: "11px 14px",
                              fontSize: "14px",
                              color: "#1e293b",
                              outline: "none",
                            }}
                            onFocus={(e) => {
                              const parent = e.target.parentElement;
                              if (parent) {
                                parent.style.borderColor = "#00bba6";
                                parent.style.boxShadow = "0 0 0 3px rgba(0, 187, 166, 0.15)";
                              }
                            }}
                            onBlur={(e) => {
                              const parent = e.target.parentElement;
                              if (parent) {
                                parent.style.borderColor = "#e2e8f0";
                                parent.style.boxShadow = "none";
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Company / Organization */}
                      <div className="col-md-6">
                        <label
                          htmlFor="companyInput"
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1e293b",
                            marginBottom: "7px",
                          }}
                        >
                          Company / Organization
                        </label>
                        <input
                          id="companyInput"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Pharma Ltd."
                          style={{
                            width: "100%",
                            padding: "11px 16px",
                            borderRadius: "10px",
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#ffffff",
                            fontSize: "14px",
                            color: "#1e293b",
                            outline: "none",
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#00bba6";
                            e.target.style.boxShadow = "0 0 0 3px rgba(0, 187, 166, 0.15)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e2e8f0";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      {/* How can we help you? */}
                      <div className="col-12">
                        <label
                          htmlFor="helpSelect"
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1e293b",
                            marginBottom: "7px",
                          }}
                        >
                          How can we help you? <span style={{ color: "#00bba6" }}>*</span>
                        </label>
                        <select
                          id="helpSelect"
                          required
                          value={formData.helpType}
                          onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "11px 16px",
                            borderRadius: "10px",
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#ffffff",
                            fontSize: "14px",
                            color: "#1e293b",
                            outline: "none",
                            cursor: "pointer",
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#00bba6";
                            e.target.style.boxShadow = "0 0 0 3px rgba(0, 187, 166, 0.15)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e2e8f0";
                            e.target.style.boxShadow = "none";
                          }}
                        >
                          <option value="Request a Demo">Request a Demo</option>
                          <option value="Product Pricing & Quotation">Product Pricing &amp; Quotation</option>
                          <option value="Field Force & MR Automation">Field Force &amp; MR Automation Features</option>
                          <option value="Enterprise Customization">Enterprise Customization &amp; Integration</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Other Inquiries">Other Inquiries</option>
                        </select>
                      </div>

                      {/* Message / Requirements */}
                      <div className="col-12">
                        <label
                          htmlFor="messageInput"
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1e293b",
                            marginBottom: "7px",
                          }}
                        >
                          Message / Requirements
                        </label>
                        <textarea
                          id="messageInput"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your team size, requirements, or any specific questions..."
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            borderRadius: "10px",
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#ffffff",
                            fontSize: "14px",
                            color: "#1e293b",
                            outline: "none",
                            resize: "vertical",
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#00bba6";
                            e.target.style.boxShadow = "0 0 0 3px rgba(0, 187, 166, 0.15)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e2e8f0";
                            e.target.style.boxShadow = "none";
                          }}
                        ></textarea>
                      </div>

                      {/* Submit Inquiry Button */}
                      <div className="col-12 mt-3">
                        <button
                          type="submit"
                          style={{
                            width: "100%",
                            height: "52px",
                            borderRadius: "14px",
                            background: "linear-gradient(90deg, #00bba6 0%, #009688 45%, #004d40 100%)",
                            border: "none",
                            color: "#ffffff",
                            fontSize: "15px",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px",
                            cursor: "pointer",
                            boxShadow: "0 4px 18px rgba(0, 150, 136, 0.25)",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 150, 136, 0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 18px rgba(0, 150, 136, 0.25)";
                          }}
                        >
                          <span>Submit Inquiry</span>
                          <span
                            style={{
                              width: "28px",
                              height: "28px",
                              borderRadius: "50%",
                              backgroundColor: "rgba(0, 0, 0, 0.25)",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "12px",
                              color: "#ffffff",
                            }}
                          >
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </span>
                        </button>

                        {/* Security Disclaimer */}
                        <div
                          className="d-flex align-items-center justify-content-center gap-2 mt-3"
                          style={{ fontSize: "12px", color: "#64748b" }}
                        >
                          <i className="fa-solid fa-lock" style={{ fontSize: "11px", color: "#64748b" }}></i>
                          <span>Your information is secure and will never be shared with third parties.</span>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
