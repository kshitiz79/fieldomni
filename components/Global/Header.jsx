"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Exact sticky logic matching template main.js ($windowOn.scrollTop() >= 120)
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      // If mobile menu open, sticky is disabled
      if (isMobileMenuOpen) {
        return;
      }

      if (scroll < 120) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Handle body no-scroll class matching template main.js
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      setActiveSubMenu(null);
    }
  }, [isMobileMenuOpen]);

  const toggleSubMenu = (menuKey) => {
    setActiveSubMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  return (
    <>
      {/* Main Header (Exact matching template classes & structure) */}
      <header
        className={`header-section header-1 header-4 ${isSticky ? "sticky-menu" : ""}`}
        id="sticky-header"
      >
        <div className="header-main">
          <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
            {/* Fieldomni Custom Brand Logo */}
            <div className="header-logo">
              <Link className="d-flex align-items-center" href="/">
                <img
                  src="/logo.jpg"
                  alt="Fieldomni"
                  style={{
                    height: "44px",
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Link>
            </div>

            {/* Desktop Navbar Menu */}
            <div className="navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-lg-0">
                {/* Home */}
                <li className="nav-item">
                  <Link className="nav-link active" href="/">
                    Home
                  </Link>
                </li>

                {/* Features Dropdown */}
                <li className="nav-item">
                  <Link className="nav-link" href="#features">
                    Features <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu list-unstyled">
                    <li>
                      <Link href="#mr-tracking">
                        <i className="fa-solid fa-location-dot me-2 text-primary"></i> MR Live GPS Tracking
                      </Link>
                    </li>
                    <li>
                      <Link href="#attendance">
                        <i className="fa-solid fa-user-check me-2 text-primary"></i> Geo-fenced Attendance
                      </Link>
                    </li>
                    <li>
                      <Link href="#dcr">
                        <i className="fa-solid fa-clipboard-list me-2 text-primary"></i> Daily Call Reports (DCR)
                      </Link>
                    </li>
                    <li>
                      <Link href="#sales">
                        <i className="fa-solid fa-cart-shopping me-2 text-primary"></i> Chemist Sales Orders
                      </Link>
                    </li>
                    <li>
                      <Link href="#payroll">
                        <i className="fa-solid fa-calculator me-2 text-primary"></i> Payroll &amp; TA/DA Claims
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Solutions Dropdown */}
                <li className="nav-item">
                  <Link className="nav-link" href="#solutions">
                    Solutions <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu list-unstyled">
                    <li>
                      <Link href="#pharma-companies">Pharma Enterprises</Link>
                    </li>
                    <li>
                      <Link href="#biotech">Biotech &amp; Generics</Link>
                    </li>
                    <li>
                      <Link href="#otc-distribution">OTC &amp; Chemist Networks</Link>
                    </li>
                    <li>
                      <Link href="#managers">Area &amp; Regional Managers</Link>
                    </li>
                  </ul>
                </li>

                {/* Pricing */}
                <li className="nav-item">
                  <Link className="nav-link" href="/pricing">
                    Pricing
                  </Link>
                </li>

                {/* About Us */}
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    About Us
                  </Link>
                </li>

                {/* Contact */}
                <li className="nav-item">
                  <Link className="nav-link" href="/contact-us">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Header Right Action Button */}
              <div className="menu-right-info">
                <Link className="theme-btn-main style-2" href="/contact-us">
                  <span className="theme-btn-arrow-left">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                  <span className="theme-btn">Book Demo</span>
                  <span className="theme-btn-arrow-right">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Area (Matches template-source) */}
        <div className="mobile-menu-area d-block d-xl-none">
          <div className="container">
            <div className="mobile-topbar py-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo">
                  <Link className="d-flex align-items-center text-decoration-none" href="/">
                    <img
                      src="/logo.jpg"
                      alt="Fieldomni"
                      style={{
                        height: "36px",
                        width: "auto",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </Link>
                </div>
                <div className="menu-search d-flex align-items-center gap-4">
                  <div
                    className="bars"
                    onClick={() => setIsMobileMenuOpen(true)}
                    style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px" }}
                  >
                    <span style={{ width: "24px", height: "2px", background: "#15171A", display: "block" }}></span>
                    <span style={{ width: "24px", height: "2px", background: "#15171A", display: "block" }}></span>
                    <span style={{ width: "24px", height: "2px", background: "#15171A", display: "block" }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Overlay */}
          <div
            className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Mobile Sidebar Main */}
          <div className={`mobile-menu-main ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="logo d-flex justify-content-between align-items-center p-3">
              <Link className="d-flex align-items-center text-decoration-none" href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src="/logo.jpg"
                  alt="Fieldomni"
                  style={{
                    height: "36px",
                    width: "auto",
                    objectFit: "contain",
                    backgroundColor: "#ffffff",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    display: "block",
                  }}
                />
              </Link>
              <div
                className="close-mobile-menu text-white fs-4"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-times"></i>
              </div>
            </div>

            <div className="menu-body p-3">
              <div className="menu-list">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link className="d-block text-white text-decoration-none py-2" href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </Link>
                  </li>

                  <li className="sub-mobile-menu mb-2">
                    <a
                      href="#features-mobile"
                      className="d-flex justify-content-between align-items-center text-white text-decoration-none py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubMenu("features");
                      }}
                    >
                      <span>Features</span>
                      <i className={`fas ${activeSubMenu === "features" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                    </a>
                    {activeSubMenu === "features" && (
                      <ul className="list-unstyled ps-3 mt-2">
                        <li>
                          <Link className="text-white-50 text-decoration-none d-block py-1" href="#mr-tracking" onClick={() => setIsMobileMenuOpen(false)}>
                            MR Live GPS Tracking
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white-50 text-decoration-none d-block py-1" href="#attendance" onClick={() => setIsMobileMenuOpen(false)}>
                            Geo-fenced Attendance
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white-50 text-decoration-none d-block py-1" href="#dcr" onClick={() => setIsMobileMenuOpen(false)}>
                            Daily Call Reports (DCR)
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white-50 text-decoration-none d-block py-1" href="#sales" onClick={() => setIsMobileMenuOpen(false)}>
                            Chemist Sales Orders
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white-50 text-decoration-none d-block py-1" href="#payroll" onClick={() => setIsMobileMenuOpen(false)}>
                            Payroll &amp; TA/DA Claims
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="sub-mobile-menu mb-2">
                    <a
                      href="#solutions-mobile"
                      className="d-flex justify-content-between align-items-center text-white text-decoration-none py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubMenu("solutions");
                      }}
                    >
                      <span>Solutions</span>
                      <i className={`fas ${activeSubMenu === "solutions" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                    </a>
                    {activeSubMenu === "solutions" && (
                      <ul className="list-unstyled ps-3 mt-2">
                        <li>
                          <Link className="text-white-50 text-decoration-none d-block py-1" href="#pharma-companies" onClick={() => setIsMobileMenuOpen(false)}>
                            Pharma Enterprises
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white-50 text-decoration-none d-block py-1" href="#biotech" onClick={() => setIsMobileMenuOpen(false)}>
                            Biotech &amp; Generics
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white-50 text-decoration-none d-block py-1" href="#otc-distribution" onClick={() => setIsMobileMenuOpen(false)}>
                            OTC &amp; Chemist Networks
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="mb-2">
                    <Link className="d-block text-white text-decoration-none py-2" href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                      Pricing
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link className="d-block text-white text-decoration-none py-2" href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                      About Us
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link className="d-block text-white text-decoration-none py-2" href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="off-contact-area p-3 border-top border-secondary">
              <div className="off-contact-info text-white">
                <span className="info-title d-block fw-bold mb-2">Fieldomni Support (India)</span>
                <div className="contact-details mb-2">
                  <span className="sub-info d-block text-white-50 fs-sm">Phone / WhatsApp</span>
                  <p className="m-0">
                    <a className="text-white text-decoration-none" href="tel:+919204309173">
                      <i className="fa-solid fa-phone me-2 text-primary"></i>+91 92043 09173
                    </a>
                  </p>
                </div>
                <div className="contact-details mb-2">
                  <span className="sub-info d-block text-white-50 fs-sm">Email</span>
                  <p className="m-0">
                    <a className="text-white text-decoration-none" href="mailto:support@fieldomni.com">
                      <i className="fa-solid fa-envelope me-2 text-primary"></i>support@fieldomni.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
