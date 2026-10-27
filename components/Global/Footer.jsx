"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer
      className="footer-section fix hero-ptb image-distortion p-relative z-index-1"
      style={{
        backgroundImage: "url('/assets/img/home-2/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="footer-widget-wrapper">
          <div className="row justify-content-between">
            {/* Widget 1: Fieldomni Logo, Description & Contact Links */}
            <div className="col-xl-3 col-lg-5 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="footer-widget-items">
                <div className="widget-head mb-3">
                  <Link href="/" className="footer-logo d-inline-block text-decoration-none">
                    <img
                      src="/logo.jpg"
                      alt="Fieldomni"
                      style={{
                        height: "44px",
                        width: "auto",
                        objectFit: "contain",

                        padding: "6px 12px",
                        borderRadius: "8px",
                        display: "block",
                      }}
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    All-in-one Pharma Ground Staff &amp; MR Tracking Software with live GPS,
                    doctor visit DCR, chemist sales orders, and automated payroll.
                  </p>
                  <div className="d-flex flex-column gap-2 mt-3">
                    <a
                      href="mailto:support@fieldomni.com"
                      className="text-white-50 text-decoration-none d-flex align-items-center gap-2"
                      style={{ transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#1ec4b6")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                    >
                      <i className="fa-solid fa-envelope" style={{ color: "#1ec4b6" }}></i>
                      support@fieldomni.com
                    </a>

                    <a
                      href="mailto:sales@fieldomni.com"
                      className="text-white-50 text-decoration-none d-flex align-items-center gap-2"
                      style={{ transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#1ec4b6")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                    >
                      <i className="fa-solid fa-headset" style={{ color: "#1ec4b6" }}></i>
                      sales@fieldomni.com
                    </a>

                    <a
                      href="tel:+919204309173"
                      className="text-white-50 text-decoration-none d-flex align-items-center gap-2"
                      style={{ transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#1ec4b6")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                    >
                      <i className="fa-solid fa-phone" style={{ color: "#1ec4b6" }}></i>
                      +91 92043 09173
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Widget 2: Pharma MR Capabilities */}
            <div
              className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="footer-widget-items">
                <div className="widget-head">
                  <span className="widget-title">Capabilities</span>
                </div>
                <ul className="gt-list-area list-unstyled">
                  <li>
                    <Link href="/features#tracking">MR Live Tracking</Link>
                  </li>
                  <li>
                    <Link href="/features#attendance">Geo-fence Attendance</Link>
                  </li>
                  <li>
                    <Link href="/features#dcr">Daily Call Report (DCR)</Link>
                  </li>
                  <li>
                    <Link href="/features#orders">Chemist Orders</Link>
                  </li>
                  <li>
                    <Link href="/features#payroll">Payroll &amp; TA/DA</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Widget 3: Solutions */}
            <div
              className="col-xl-2 ps-lg-0 col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="footer-widget-items">
                <div className="widget-head">
                  <span className="widget-title">Solutions</span>
                </div>
                <ul className="gt-list-area list-unstyled">
                  <li>
                    <Link href="/solutions#pharma-enterprises">Pharma Enterprises</Link>
                  </li>
                  <li>
                    <Link href="/solutions#biotech">Biotech &amp; Generics</Link>
                  </li>
                  <li>
                    <Link href="/solutions#otc-chemist">OTC &amp; Chemist Sales</Link>
                  </li>
                  <li>
                    <Link href="/solutions#managers">Manager Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Enterprise Pricing</Link>
                  </li>
                  <li>
                    <Link href="/blog">Field Insights &amp; Blog</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Widget 4: Newsletter Subscription */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="footer-widget-items">
                <div className="widget-head">
                  <span className="widget-title">
                    Stay Ahead in Pharma <br /> Field Operations
                  </span>
                </div>
                <form onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="theme-btn-main style-2">
                    <span className="theme-btn-arrow-left">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                    <span className="theme-btn">
                      {subscribed ? "Subscribed!" : "Subscribe"}
                    </span>
                    <span className="theme-btn-arrow-right">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </button>
                </form>
                {subscribed && (
                  <p className="text-success mt-2 font-medium">
                    Thank you for subscribing to Fieldomni Pharma updates!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Area */}
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p>
              © 2026 <b>fieldomni.</b> Empowering Pharma Field Teams. All rights reserved.
            </p>
            <ul className="footer-list list-unstyled">
              <li>
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
              <li>।</li>
              <li>
                <Link href="/terms">Terms &amp; conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
