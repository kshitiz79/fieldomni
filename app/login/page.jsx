"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";

export default function GeneralLoginPage() {
  const [role, setRole] = useState("mr"); // 'mr' | 'manager' | 'enterprise'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in as ${role.toUpperCase()} with ${email}. Demo environment: Please launch Fieldomni Mobile App or access Web ERP.`);
  };

  return (
    <div className="page-wrapper">
      <Header />

      <main
        style={{
          minHeight: "85vh",
          backgroundColor: "#F8FCFB",
          padding: "60px 20px 90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "520px" }}>
          <div
            className="card border-0 rounded-4 shadow-sm p-4 p-md-5"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Header */}
            <div className="text-center mb-4">
              <span
                className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold"
                style={{
                  backgroundColor: "#d5f7f1",
                  color: "#008f84",
                  fontSize: "12px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                Fieldomni Enterprise Suite
              </span>
              <h2 className="fw-bold mb-1" style={{ color: "#00384f", fontSize: "26px" }}>
                Sign In to Your Workspace
              </h2>
              <p className="text-muted small">
                Access your real-time field tracking, DCR, and sales dashboards.
              </p>
            </div>

            {/* Role Selector Tabs */}
            <div
              className="d-flex rounded-3 p-1 mb-4"
              style={{ backgroundColor: "#f1f5f9" }}
            >
              <button
                type="button"
                onClick={() => setRole("mr")}
                className={`btn btn-sm flex-fill rounded-2 fw-semibold ${
                  role === "mr" ? "bg-white shadow-sm" : "text-muted"
                }`}
                style={{ color: role === "mr" ? "#00384f" : "#64748b", fontSize: "13px" }}
              >
                Medical Rep
              </button>
              <button
                type="button"
                onClick={() => setRole("manager")}
                className={`btn btn-sm flex-fill rounded-2 fw-semibold ${
                  role === "manager" ? "bg-white shadow-sm" : "text-muted"
                }`}
                style={{ color: role === "manager" ? "#00384f" : "#64748b", fontSize: "13px" }}
              >
                Area Manager
              </button>
              <button
                type="button"
                onClick={() => setRole("enterprise")}
                className={`btn btn-sm flex-fill rounded-2 fw-semibold ${
                  role === "enterprise" ? "bg-white shadow-sm" : "text-muted"
                }`}
                style={{ color: role === "enterprise" ? "#00384f" : "#64748b", fontSize: "13px" }}
              >
                Corporate HQ
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-semibold text-dark">
                  Work Email or Mobile Number
                </label>
                <div className="position-relative">
                  <i
                    className="fa-regular fa-envelope position-absolute"
                    style={{
                      left: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#94a3b8",
                    }}
                  />
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rep@yourpharma.com"
                    className="form-control rounded-3 ps-5 py-2"
                    style={{ fontSize: "14.5px" }}
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label small fw-semibold text-dark mb-0">
                    Password
                  </label>
                  <a href="#" className="small text-decoration-none" style={{ color: "#1ec4b6" }}>
                    Forgot password?
                  </a>
                </div>
                <div className="position-relative">
                  <i
                    className="fa-solid fa-lock position-absolute"
                    style={{
                      left: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#94a3b8",
                    }}
                  />
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="form-control rounded-3 ps-5 pe-5 py-2"
                    style={{ fontSize: "14.5px" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted text-decoration-none"
                    style={{ fontSize: "14px" }}
                  >
                    <i className={showPass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="theme-btn-main style-2 w-100 mt-2 rounded-3 border-0 py-3 fw-bold"
                style={{ backgroundColor: "#00384f", color: "#1ec4b6" }}
              >
                Sign In to Fieldomni
              </button>
            </form>

            <div className="mt-4 pt-3 border-top text-center text-muted small">
              Need to request access for your field team?{" "}
              <Link href="/contact-us" className="fw-semibold text-decoration-none" style={{ color: "#1ec4b6" }}>
                Contact Admin
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
