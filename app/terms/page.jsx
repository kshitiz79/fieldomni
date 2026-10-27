"use client";

import React from "react";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";

export default function TermsPage() {
  return (
    <div className="page-wrapper">
      <Header />

      <main style={{ backgroundColor: "#F8FCFB", paddingTop: "50px", paddingBottom: "90px" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-5">
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
              Terms of Agreement
            </span>
            <h1 className="fw-bold" style={{ color: "#00384f", fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
              Terms &amp; Conditions
            </h1>
            <p className="text-muted">Effective Date: January 1, 2026 | Fieldomni SaaS Platform Terms of Service</p>
          </div>

          <div
            className="p-4 p-md-5 rounded-4 bg-white shadow-sm"
            style={{ border: "1px solid rgba(0, 56, 79, 0.1)", lineHeight: "1.8", color: "#334155" }}
          >
            <h4 className="fw-bold mb-3" style={{ color: "#00384f" }}>
              1. Agreement to Terms
            </h4>
            <p>
              These Terms &amp; Conditions constitute a legally binding agreement between your pharmaceutical organization (&ldquo;Customer&rdquo;) and Fieldomni regarding your access to and use of the Fieldomni web portal, mobile applications, and cloud services. By signing up, configuring user licenses, or using any part of the service, you agree to be bound by these terms.
            </p>

            <h4 className="fw-bold mt-4 mb-3" style={{ color: "#00384f" }}>
              2. User Licenses &amp; Subscriptions
            </h4>
            <ul>
              <li>
                <b>License Allocation:</b> Access is licensed on a per-user, per-month/per-year basis. Standard plans require a minimum threshold of 10 active user licenses.
              </li>
              <li>
                <b>License Transfers:</b> You may reallocate user licenses between departing and incoming field employees at any time through the admin management console at no additional cost.
              </li>
              <li>
                <b>Scaling Fleets:</b> Additional user licenses can be provisioned at any point during your active billing period and will be billed on a pro-rata basis.
              </li>
            </ul>

            <h4 className="fw-bold mt-4 mb-3" style={{ color: "#00384f" }}>
              3. Invoicing, Taxes &amp; GST Compliance
            </h4>
            <p>
              All listed rates are exclusive of applicable Indian Goods and Services Tax (GST at 18%). Fieldomni generates valid tax invoices featuring your corporate GSTIN and SAC code (998313 - Information Technology Software Services), enabling 100% eligibility for Input Tax Credit (ITC). Payment is due upon receipt of invoice or as agreed under written enterprise purchase orders.
            </p>

            <h4 className="fw-bold mt-4 mb-3" style={{ color: "#00384f" }}>
              4. Service Availability &amp; SLA
            </h4>
            <p>
              Fieldomni commits to a 99.8% monthly uptime Service Level Agreement (SLA) for all cloud APIs and management dashboards, excluding scheduled maintenance notified at least 48 hours in advance. Emergency hotfixes and critical security patches may be deployed during off-peak hours (midnight to 4 AM IST).
            </p>

            <h4 className="fw-bold mt-4 mb-3" style={{ color: "#00384f" }}>
              5. Intellectual Property &amp; Customer Data
            </h4>
            <p>
              The Customer retains 100% ownership and proprietary rights to all doctor registries, chemist lists, prescription notes, orders, and field location logs inputted into Fieldomni. Fieldomni claims zero ownership over your operational commercial data and will never sell, lease, or monetize customer records.
            </p>

            <h4 className="fw-bold mt-4 mb-3" style={{ color: "#00384f" }}>
              6. Limitation of Liability
            </h4>
            <p className="mb-0">
              In no event shall Fieldomni be liable for any indirect, incidental, special, or consequential damages resulting from network connectivity loss in remote rural territories, third-party GPS satellite inaccuracies, or unauthorized credentials sharing by customer employees.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
