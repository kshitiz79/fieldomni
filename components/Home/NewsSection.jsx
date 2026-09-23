"use client";

import React from "react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "How Smart Geofencing Increases MR Doctor Call Coverage by 45%",
    image: "/assets/img/home-4/news/news-01.jpg",
    date: "Aug 14, 2026",
    readTime: "4 min read",
    category: "Field Operations",
    author: "Fieldomni Research",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Eliminating TA/DA Travel Allowance Leakage",
    image: "/assets/img/home-4/news/news-02.jpg",
    date: "Aug 02, 2026",
    readTime: "6 min read",
    category: "Payroll & Finance",
    author: "Fieldomni Research",
  },
  {
    id: 3,
    title: "Why Top Pharma Brands Move to Real-Time Chemist Secondary Booking",
    image: "/assets/img/home-4/news/news-03.jpg",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    category: "Secondary Sales",
    author: "Fieldomni Research",
  },
  {
    id: 4,
    title: "Interactive E-Detailing: Boosting Doctor Attention & Recall Rates",
    image: "/assets/img/home-4/news/news-04.jpg",
    date: "Jul 15, 2026",
    readTime: "3 min read",
    category: "Doctor Detailing",
    author: "Fieldomni Research",
  },
];

export default function NewsSection() {
  return (
    <section className="gt-news-section-3 fix section-padding bg-white" id="insights">
      <div className="container">
        {/* Section Header */}
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5">
          <div className="gt-section-title style-3 mb-0">
            <span
              className="d-inline-block px-3 py-1 rounded-pill mb-2"
              style={{
                backgroundColor: "rgba(0, 123, 255, 0.08)",
                color: "#007BFF",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Pharma Field Intelligence
            </span>
            <h2
              className="fw-bold"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                color: "#15171A",
                letterSpacing: "-0.5px",
              }}
            >
              Latest Insights &amp; Best Practices
            </h2>
          </div>

          <Link className="theme-btn-main style-2" href="/contact-us">
            <span className="theme-btn-arrow-left">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
            <span className="theme-btn">Subscribe To Newsletter</span>
            <span className="theme-btn-arrow-right">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </Link>
        </div>

        {/* Article Cards Grid */}
        <div className="row g-4">
          {articles.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="gt-news-box-items-3 h-100 rounded-4 overflow-hidden border shadow-sm d-flex flex-column justify-content-between transition-all"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#e2e8f0",
                }}
              >
                <div>
                  <div className="gt-thumb position-relative overflow-hidden" style={{ height: "190px" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{ transition: "transform 0.4s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <span
                      className="position-absolute top-0 start-0 m-3 badge px-3 py-1 bg-dark text-white"
                      style={{ fontSize: "11px", fontWeight: 600 }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div className="gt-content p-4">
                    <div className="d-flex align-items-center gap-2 text-muted mb-2" style={{ fontSize: "12.5px" }}>
                      <span>
                        <i className="fa-regular fa-calendar me-1"></i>
                        {item.date}
                      </span>
                      <span>•</span>
                      <span>
                        <i className="fa-regular fa-clock me-1"></i>
                        {item.readTime}
                      </span>
                    </div>

                    <h3
                      className="fw-bold mb-3"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.4",
                        color: "#1e293b",
                      }}
                    >
                      <Link
                        href="/contact-us"
                        className="text-decoration-none text-dark"
                        style={{ transition: "color 0.2s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#007BFF")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#1e293b")}
                      >
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-0 d-flex align-items-center justify-content-between border-top pt-3 mt-auto">
                  <span className="text-muted d-flex align-items-center gap-2" style={{ fontSize: "12.5px" }}>
                    <img
                      src="/assets/img/home-4/news/info.png"
                      alt="Author"
                      style={{ width: "20px", height: "20px" }}
                    />
                    {item.author}
                  </span>
                  <Link
                    href="/contact-us"
                    className="text-primary text-decoration-none fw-semibold"
                    style={{ fontSize: "13px" }}
                  >
                    Read <i className="fa-solid fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
