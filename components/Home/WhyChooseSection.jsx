"use client";

import React from "react";

const features = [
  {
    icon: "fa-solid fa-shield-halved",
    bgColor: "#d5f7f1",
    iconColor: "#1ec4b6",
    title: "Independent Solutions",
    description: "Each module is powerful on its own and built to deliver complete field automation.",
  },
  {
    icon: "fa-solid fa-layer-group",
    bgColor: "#d5f7f1",
    iconColor: "#00384f",
    title: "Flexible & Scalable",
    description: "Start with what you need and scale as your field medical team grows.",
  },
  {
    icon: "fa-solid fa-lock",
    bgColor: "#e8f7fa",
    iconColor: "#7aaac3",
    title: "Secure by Design",
    description: "Enterprise-grade security to keep doctor, clinic, and prescription audit data safe.",
  },
  {
    icon: "fa-solid fa-arrow-trend-up",
    bgColor: "#d5f7f1",
    iconColor: "#1ec4b6",
    title: "Insight Driven",
    description: "Make smarter decisions with real-time DCR insights and doctor call analytics.",
  },
  {
    icon: "fa-solid fa-headset",
    bgColor: "#e8f7fa",
    iconColor: "#00384f",
    title: "Reliable Support",
    description: "Our dedicated pharma domain experts in India are always here to support your success.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="why-choose-section py-5 bg-white border-top border-bottom border-light-subtle">
      <div className="container py-4">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <span
            className="d-inline-block text-uppercase fw-bold mb-2"
            style={{
              color: "#1ec4b6",
              fontSize: "13px",
              letterSpacing: "1.8px",
            }}
          >
            WHY CHOOSE FIELDOMNI?
          </span>
          <h2
            className="fw-bold"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              color: "#00384f",
              letterSpacing: "-0.5px",
            }}
          >
            Built to Help Your Business Grow
          </h2>
        </div>

        {/* 5 Feature Columns */}
        <div className="row g-0 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="col why-choose-item px-3 py-4 text-center d-flex flex-column align-items-center"
              style={{
                position: "relative",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Vertical border divider for desktop */}
              {index < features.length - 1 && (
                <div
                  className="d-none d-xl-block position-absolute end-0 top-50 translate-middle-y"
                  style={{
                    height: "70%",
                    width: "1px",
                    backgroundColor: "rgba(21, 23, 26, 0.08)",
                  }}
                ></div>
              )}

              {/* Circular Icon Badge with micro-hover pulse */}
              <div
                className="why-choose-icon mb-4 d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: item.bgColor,
                  color: item.iconColor,
                  fontSize: "22px",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: `0 4px 15px ${item.bgColor}`,
                }}
              >
                <i className={item.icon}></i>
              </div>

              {/* Title */}
              <h3
                className="why-choose-title fw-bold mb-2"
                style={{
                  fontSize: "17px",
                  color: "#15171A",
                  transition: "color 0.2s ease",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-muted m-0"
                style={{
                  fontSize: "13.5px",
                  lineHeight: "1.6",
                  maxWidth: "220px",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
