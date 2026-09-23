"use client";

import React, { useState } from "react";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <main style={{ paddingTop: "140px", paddingBottom: "80px", backgroundColor: "#f8fafc" }}>
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <span
              className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold"
              style={{
                backgroundColor: "rgba(0, 123, 255, 0.1)",
                color: "#007BFF",
                fontSize: "13px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Get In Touch
            </span>
            <h1 className="fw-bold" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", color: "#15171A" }}>
              Contact Fieldomni Support
            </h1>
            <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Have questions about our Pharma MR &amp; Ground Staff automation software or need a customized demo? Reach out to our team in India.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Contact Info Cards */}
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-3">
                {/* Phone Card */}
                <div className="p-4 rounded-4 bg-white border shadow-sm d-flex align-items-center gap-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(0, 123, 255, 0.1)",
                      color: "#007BFF",
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
                    <h6 className="fw-bold mb-1" style={{ color: "#1e293b" }}>Call / WhatsApp</h6>
                    <a
                      href="tel:+919204309173"
                      className="text-decoration-none fw-semibold"
                      style={{ color: "#007BFF", fontSize: "15px" }}
                    >
                      +91 92043 09173
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-4 rounded-4 bg-white border shadow-sm d-flex align-items-center gap-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      color: "#10B981",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: "#1e293b" }}>Support Email</h6>
                    <a
                      href="mailto:support@fieldomni.com"
                      className="text-decoration-none fw-semibold"
                      style={{ color: "#10B981", fontSize: "15px" }}
                    >
                      support@fieldomni.com
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-4 bg-white border shadow-sm d-flex align-items-center gap-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(124, 58, 237, 0.1)",
                      color: "#7c3aed",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: "#1e293b" }}>Headquarters</h6>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="p-4 p-md-5 rounded-4 bg-white border shadow-sm">
                <h4 className="fw-bold mb-3" style={{ color: "#1e293b" }}>Send Us a Message</h4>
                {submitted ? (
                  <div className="alert alert-success py-3">
                    <h5 className="alert-heading fw-bold mb-1">Thank you!</h5>
                    <p className="mb-0">Your request has been received. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold" style={{ fontSize: "13.5px" }}>Your Name *</label>
                        <input
                          type="text"
                          className="form-control py-2"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold" style={{ fontSize: "13.5px" }}>Work Email *</label>
                        <input
                          type="email"
                          className="form-control py-2"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@pharmaco.com"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold" style={{ fontSize: "13.5px" }}>Phone Number *</label>
                        <input
                          type="tel"
                          className="form-control py-2"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold" style={{ fontSize: "13.5px" }}>Company / Organization</label>
                        <input
                          type="text"
                          className="form-control py-2"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Pharma Ltd."
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold" style={{ fontSize: "13.5px" }}>Message / Requirements</label>
                        <textarea
                          className="form-control py-2"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your field team size and requirements..."
                        ></textarea>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="theme-btn-main style-2 w-100 justify-content-center">
                          <span className="theme-btn-arrow-left">
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </span>
                          <span className="theme-btn">Submit Inquiry</span>
                          <span className="theme-btn-arrow-right">
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </span>
                        </button>
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
