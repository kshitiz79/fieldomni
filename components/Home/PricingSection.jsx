"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

const PRICING_CONFIG = {
  currency: "INR",
  minimumUsers: 10,
  gstRate: 18,

  billingCycles: {
    monthly: {
      key: "monthly",
      label: "Monthly",
      rate: 249,
      months: 1,
      savingsBadge: null,
      billingText: "Billed monthly",
    },
    quarterly: {
      key: "quarterly",
      label: "Quarterly",
      rate: 229,
      months: 3,
      savingsBadge: "Save 8%",
      billingText: "Billed every 3 months",
    },
    half_yearly: {
      key: "half_yearly",
      label: "Half-Yearly",
      rate: 215,
      months: 6,
      savingsBadge: "Save 14%",
      billingText: "Billed every 6 months",
    },
    annual: {
      key: "annual",
      label: "Annual",
      rate: 200,
      months: 12,
      savingsBadge: "Save 20% + Volume Discount",
      billingText: "Billed annually",
    },
  },

  annualTiers: [
    { minUsers: 1, maxUsers: 25, rate: 200, label: "Starter (1-25)" },
    { minUsers: 26, maxUsers: 50, rate: 195, label: "Growth (26-50)" },
    { minUsers: 51, maxUsers: 100, rate: 190, label: "Scale (51-100)" },
    { minUsers: 101, maxUsers: 250, rate: 180, label: "Expansion (101-250)" },
    { minUsers: 251, maxUsers: 500, rate: 170, label: "Enterprise (251-500)" },
    { minUsers: 501, maxUsers: 1000, rate: 160, label: "Mega Fleet (501-1000)" },
  ],

  userPresets: [10, 25, 50, 100, 250, 500, 1000],
};

const getAnnualTier = (users) =>
  PRICING_CONFIG.annualTiers.find(
    (tier) => users >= tier.minUsers && users <= tier.maxUsers
  );

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("annual");
  const [userCount, setUserCount] = useState(10);
  const [showTierTable, setShowTierTable] = useState(false);

  const safeUsers = Math.max(1, Number(userCount) || 1);

  const pricing = useMemo(() => {
    const cycle = PRICING_CONFIG.billingCycles[billingCycle];

    if (billingCycle === "annual") {
      if (safeUsers > 1000) {
        return {
          custom: true,
          rate: null,
          subtotal: 0,
          gst: 0,
          total: 0,
          tier: null,
          annualSavings: 0,
        };
      }

      const tier = getAnnualTier(safeUsers) || PRICING_CONFIG.annualTiers[0];
      const effectiveUsers = Math.max(PRICING_CONFIG.minimumUsers, safeUsers);
      const subtotal = effectiveUsers * tier.rate * cycle.months;
      const gst = subtotal * (PRICING_CONFIG.gstRate / 100);
      const standardMonthlyCost = effectiveUsers * 249 * 12;
      const annualSavings = Math.max(0, standardMonthlyCost - subtotal);

      return {
        custom: false,
        rate: tier.rate,
        subtotal,
        gst,
        total: subtotal + gst,
        tier,
        annualSavings,
      };
    }

    const effectiveUsers = Math.max(PRICING_CONFIG.minimumUsers, safeUsers);
    const subtotal = effectiveUsers * cycle.rate * cycle.months;
    const gst = subtotal * (PRICING_CONFIG.gstRate / 100);

    return {
      custom: false,
      rate: cycle.rate,
      subtotal,
      gst,
      total: subtotal + gst,
      tier: null,
      annualSavings: 0,
    };
  }, [billingCycle, safeUsers]);

  const cycle = PRICING_CONFIG.billingCycles[billingCycle];

  const handleUserChange = (val) => {
    const parsed = parseInt(val, 10);
    if (isNaN(parsed)) {
      setUserCount("");
    } else {
      setUserCount(Math.min(2500, Math.max(1, parsed)));
    }
  };

  const handleStep = (step) => {
    const current = Number(userCount) || PRICING_CONFIG.minimumUsers;
    const nextVal = Math.min(2500, Math.max(PRICING_CONFIG.minimumUsers, current + step));
    setUserCount(nextVal);
  };

  const contactUrl = `/contact-us?plan=${billingCycle}&users=${safeUsers > 1000 ? "1000+" : safeUsers}`;

  return (
    <section className="pricing-section fix section-padding bg-light" id="pricing" style={{ padding: "80px 0" }}>
      <div className="container" style={{ maxWidth: "1240px" }}>
        
        {/* Section Header */}
        <div className="gt-section-title text-center mb-5">
          <span
            className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold"
            style={{
              backgroundColor: "#d5f7f1",
              color: "#008f84",
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Transparent Pharma Pricing
          </span>
          <h2
            className="fw-bold"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              color: "#00384f",
              letterSpacing: "-0.5px",
            }}
          >
            Simple, Predictable Pricing for Your <span style={{ color: "#1ec4b6" }}>Field Team</span>
          </h2>
          <p className="mt-2 text-muted mx-auto" style={{ maxWidth: "620px", fontSize: "15px" }}>
            Real-time MR GPS tracking, doctor visit DCR, chemist orders, and automated TA/DA payroll with 100% GST ITC compliance.
          </p>
        </div>

        {/* 4 Plan Selectors Grid */}
        <div className="mb-4">
          <div className="row g-3">
            {Object.entries(PRICING_CONFIG.billingCycles).map(([key, item]) => {
              const isActive = billingCycle === key;
              return (
                <div key={key} className="col-6 col-md-3">
                  <div
                    onClick={() => setBillingCycle(key)}
                    className="p-3 rounded-4 bg-white h-100 position-relative transition-all d-flex flex-column justify-content-between"
                    style={{
                      cursor: "pointer",
                      border: isActive ? "2px solid #1ec4b6" : "1px solid rgba(0, 56, 79, 0.1)",
                      boxShadow: isActive ? "0 10px 25px rgba(30, 196, 182, 0.18)" : "0 4px 12px rgba(0, 56, 79, 0.03)",
                      transform: isActive ? "translateY(-4px)" : "none",
                      transition: "all 0.22s ease",
                    }}
                  >
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-bold mb-0" style={{ color: "#00384f", fontSize: "15px" }}>
                          {item.label}
                        </h6>
                        {isActive && (
                          <i className="fa-solid fa-circle-check" style={{ color: "#1ec4b6", fontSize: "14px" }}></i>
                        )}
                      </div>

                      <div className="my-1">
                        <span className="fw-bold fs-5" style={{ color: "#00384f" }}>
                          {formatCurrency(item.rate)}
                        </span>
                        <span className="text-muted small"> /user/mo</span>
                      </div>
                      
                      {item.savingsBadge && (
                        <div className="mt-1">
                          <span
                            className="badge rounded-pill"
                            style={{
                              backgroundColor: "#d5f7f1",
                              color: "#008f84",
                              fontSize: "11px",
                              fontWeight: "600",
                            }}
                          >
                            {item.savingsBadge}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Pricing Calculator Card */}
        <div
          className="rounded-4 overflow-hidden bg-white mb-5 shadow-sm"
          style={{
            border: "1px solid rgba(0, 56, 79, 0.1)",
            boxShadow: "0 20px 50px rgba(0, 56, 79, 0.07)",
          }}
        >
          <div className="row g-0">

            {/* Left Config Column */}
            <div className="col-lg-7 p-4 p-md-5 d-flex flex-column justify-content-between">
              <div>
                {/* Plan Badge & Title */}
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <span
                      className="text-uppercase fw-bold"
                      style={{ fontSize: "11px", letterSpacing: "1.2px", color: "#7aaac3" }}
                    >
                      Active Configuration
                    </span>
                    <h3 className="fw-bold mb-0 mt-1" style={{ color: "#00384f" }}>
                      {cycle.label} Subscription
                    </h3>
                    <p className="text-muted small mb-0 mt-1">{cycle.billingText}</p>
                  </div>

                  {billingCycle === "annual" && (
                    <span
                      className="badge rounded-pill fw-bold px-3 py-2"
                      style={{ backgroundColor: "#d5f7f1", color: "#008f84", fontSize: "12px" }}
                    >
                      <i className="fa-solid fa-sparkles me-1"></i> Best Value
                    </span>
                  )}
                </div>

                {/* Stepper & Slider */}
                <div className="p-4 rounded-4 mb-4" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <label className="fw-bold mb-0" style={{ color: "#00384f", fontSize: "15px" }}>
                      Number of Field Staff / MRs
                    </label>
                    <span
                      className="badge rounded-pill fw-bold"
                      style={{ backgroundColor: "#00384f", color: "#ffffff", fontSize: "13px", padding: "5px 12px" }}
                    >
                      {safeUsers > 1000 ? "1,000+ (Enterprise)" : `${safeUsers} Users`}
                    </span>
                  </div>

                  {/* Stepper Buttons */}
                  <div className="d-flex align-items-center gap-3 my-3">
                    <button
                      type="button"
                      onClick={() => handleStep(-10)}
                      className="btn d-flex align-items-center justify-content-center rounded-3 fw-bold"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #cbd5e1",
                        color: "#00384f",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      title="Decrease by 10"
                    >
                      −
                    </button>

                    <input
                      type="number"
                      min="1"
                      max="2500"
                      value={userCount}
                      onChange={(e) => handleUserChange(e.target.value)}
                      className="form-control text-center fw-bold rounded-3"
                      style={{
                        height: "48px",
                        fontSize: "20px",
                        color: "#00384f",
                        border: "2px solid #1ec4b6",
                        backgroundColor: "#ffffff",
                        maxWidth: "180px",
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => handleStep(10)}
                      className="btn d-flex align-items-center justify-content-center rounded-3 fw-bold"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #cbd5e1",
                        color: "#00384f",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      title="Increase by 10"
                    >
                      +
                    </button>
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="mt-3">
                    <div className="text-muted small fw-semibold mb-2">Quick Select Team Size:</div>
                    <div className="d-flex flex-wrap gap-2">
                      {PRICING_CONFIG.userPresets.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setUserCount(preset)}
                          className="btn btn-sm rounded-pill fw-semibold transition-all"
                          style={{
                            backgroundColor: safeUsers === preset ? "#1ec4b6" : "#ffffff",
                            color: safeUsers === preset ? "#ffffff" : "#00384f",
                            border: safeUsers === preset ? "1px solid #1ec4b6" : "1px solid #cbd5e1",
                            fontSize: "12px",
                            padding: "4px 12px",
                          }}
                        >
                          {preset >= 1000 ? "1000+" : preset} Users
                        </button>
                      ))}
                    </div>
                  </div>

                  {safeUsers < 10 && (
                    <div className="mt-3 small text-warning fw-semibold d-flex align-items-center gap-1">
                      <i className="fa-solid fa-circle-exclamation"></i>
                      Standard plan minimum is 10 licenses. (Billing calculated at minimum 10 users).
                    </div>
                  )}
                </div>

                {/* Volume Discount Banner */}
                {billingCycle === "annual" && pricing.tier && (
                  <div
                    className="d-flex align-items-center gap-3 p-3 rounded-3 mb-3"
                    style={{ backgroundColor: "#d5f7f1", border: "1px solid rgba(30, 196, 182, 0.3)" }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: "36px", height: "36px", backgroundColor: "#1ec4b6", color: "#ffffff" }}
                    >
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-bold" style={{ color: "#00384f", fontSize: "14px" }}>
                        Volume Discount Active ({pricing.tier.minUsers}–{pricing.tier.maxUsers} Users)
                      </div>
                      <div className="small text-muted">
                        Rate discounted to <b>{formatCurrency(pricing.rate)}/user/month</b> (Save ₹{249 - pricing.rate}/user/mo vs monthly).
                      </div>
                    </div>
                  </div>
                )}

                {/* Features Highlights */}
                <div className="d-flex flex-wrap gap-3 mt-4 pt-2">
                  <div className="d-flex align-items-center gap-2 small text-muted">
                    <i className="fa-solid fa-circle-check" style={{ color: "#1ec4b6" }}></i>
                    <span>Live GPS Tracking &amp; Geo-fence</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 small text-muted">
                    <i className="fa-solid fa-circle-check" style={{ color: "#1ec4b6" }}></i>
                    <span>DCR &amp; Chemist Orders</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 small text-muted">
                    <i className="fa-solid fa-circle-check" style={{ color: "#1ec4b6" }}></i>
                    <span>Automated TA/DA Payroll</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 small text-muted">
                    <i className="fa-solid fa-circle-check" style={{ color: "#1ec4b6" }}></i>
                    <span>GST Invoicing for ITC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Summary Column */}
            <div
              className="col-lg-5 p-4 p-md-5 text-white d-flex flex-column justify-content-between"
              style={{
                background: "linear-gradient(145deg, #00384f 0%, #002230 100%)",
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span
                    className="text-uppercase fw-bold"
                    style={{ fontSize: "11px", letterSpacing: "1.2px", color: "#7aaac3" }}
                  >
                    Cost Breakdown
                  </span>
                  <span className="badge rounded-pill bg-white text-dark small fw-bold px-3 py-1">
                    {cycle.label} Plan
                  </span>
                </div>

                {pricing.custom ? (
                  <div className="my-5 py-4 text-center">
                    <div className="display-6 fw-bold mb-2" style={{ color: "#1ec4b6" }}>
                      Custom Pricing
                    </div>
                    <p className="text-white-50 small mb-4">
                      Teams with over 1,000 active field users qualify for custom SLAs, dedicated servers, and customized enterprise discounts.
                    </p>
                    <Link
                      href="/contact-us?plan=enterprise"
                      className="btn w-100 rounded-pill py-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                      style={{ backgroundColor: "#1ec4b6", color: "#ffffff", fontSize: "16px", boxShadow: "0 8px 25px rgba(30, 196, 182, 0.35)" }}
                    >
                      <span>Talk to Enterprise Sales</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                ) : (
                  <>
                    {/* Price Per User Tag */}
                    <div className="my-4">
                      <div className="d-flex align-items-baseline gap-2">
                        <span className="display-5 fw-bold text-white">
                          {formatCurrency(pricing.rate)}
                        </span>
                        <span className="text-white-50" style={{ fontSize: "15px" }}>
                          / user / month
                        </span>
                      </div>
                      <div className="small fw-semibold mt-1" style={{ color: "#1ec4b6" }}>
                        {cycle.billingText} ({Math.max(PRICING_CONFIG.minimumUsers, safeUsers)} Licenses)
                      </div>
                    </div>

                    {/* Annual Savings pill */}
                    {pricing.annualSavings > 0 && (
                      <div
                        className="d-flex align-items-center gap-2 p-2.5 rounded-3 mb-4"
                        style={{ backgroundColor: "rgba(30, 196, 182, 0.15)", border: "1px solid rgba(30, 196, 182, 0.3)" }}
                      >
                        <i className="fa-solid fa-piggy-bank" style={{ color: "#1ec4b6" }}></i>
                        <span className="small text-white">
                          You save <b>{formatCurrency(pricing.annualSavings)}/yr</b> with Annual Billing!
                        </span>
                      </div>
                    )}

                    <hr style={{ borderColor: "rgba(255, 255, 255, 0.15)", margin: "20px 0" }} />

                    {/* Line Items */}
                    <div className="d-flex flex-column gap-2 mb-3">
                      <div className="d-flex justify-content-between text-white-50 small">
                        <span>User Licenses</span>
                        <span className="text-white fw-bold">
                          {Math.max(PRICING_CONFIG.minimumUsers, safeUsers)} Active Users
                        </span>
                      </div>

                      <div className="d-flex justify-content-between text-white-50 small">
                        <span>Billing Duration</span>
                        <span className="text-white fw-bold">
                          {cycle.months} {cycle.months === 1 ? "Month" : "Months"}
                        </span>
                      </div>

                      <div className="d-flex justify-content-between text-white-50 small">
                        <span>Base Software Subtotal</span>
                        <span className="text-white fw-bold">
                          {formatCurrency(pricing.subtotal)}
                        </span>
                      </div>

                      <div className="d-flex justify-content-between text-white-50 small">
                        <span>GST (18% ITC Eligible)</span>
                        <span className="text-white fw-bold">
                          {formatCurrency(pricing.gst)}
                        </span>
                      </div>
                    </div>

                    <hr style={{ borderColor: "rgba(255, 255, 255, 0.15)", margin: "20px 0" }} />

                    {/* Grand Total */}
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div>
                        <div className="fw-bold text-white" style={{ fontSize: "14px" }}>
                          Total Payable
                        </div>
                        <div className="text-white-50" style={{ fontSize: "11px" }}>Inclusive of 18% GST</div>
                      </div>
                      <div className="text-end">
                        <div className="h2 mb-0 fw-bold" style={{ color: "#1ec4b6" }}>
                          {formatCurrency(pricing.total)}
                        </div>
                      </div>
                    </div>

                    {/* Checkout CTA */}
                    <Link
                      href={contactUrl}
                      className="btn w-100 rounded-pill py-3 fw-bold d-flex align-items-center justify-content-between px-4 transition-all"
                      style={{
                        backgroundColor: "#1ec4b6",
                        color: "#ffffff",
                        fontSize: "15px",
                        boxShadow: "0 8px 24px rgba(30, 196, 182, 0.35)",
                        textDecoration: "none",
                      }}
                    >
                      <span>Get Started / Request Quote</span>
                      <span
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "30px", height: "30px", backgroundColor: "rgba(255,255,255,0.25)" }}
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>

                    <div className="text-center mt-3 text-white-50" style={{ fontSize: "11px" }}>
                      <i className="fa-solid fa-shield-halved me-1 text-info"></i>
                      Instant deployment &amp; dedicated onboarding support.
                    </div>
                  </>
                )}
              </div>

              {/* View Full Pricing Page Link */}
              <div className="mt-4 pt-3 border-top border-secondary text-center text-white-50 small">
                Looking for detailed tier comparisons &amp; FAQs?{" "}
                <Link href="/pricing" className="text-white fw-bold text-decoration-underline ms-1">
                  View Full Pricing Page &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
