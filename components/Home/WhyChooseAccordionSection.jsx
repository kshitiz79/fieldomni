"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    id: "collapseOne",
    title: "Built specifically for how Pharma MRs actually work in the field",
    content:
      "Unlike generic CRMs, Fieldomni comes pre-configured with doctor master lists, chemist mapping, sample distribution logs, and visual e-detailing that works completely offline in low-connectivity hospital basements.",
  },
  {
    id: "collapseTwo",
    title: "100% Geo-verified clinic visits to eliminate ghost reporting",
    content:
      "Our smart geofencing algorithm ensures that MRs can only check in and submit DCRs when they are physically within the verified clinic or hospital radius, providing bulletproof accountability for management.",
  },
  {
    id: "collapseThree",
    title: "Automated TA/DA & fuel reimbursement tied to real GPS distance",
    content:
      "Save hundreds of hours every month. Fieldomni calculates daily travel allowances and local conveyance automatically based on actual verified kilometers traveled between doctor clinics.",
  },
];

export default function WhyChooseAccordionSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="gt-why-choose-us-section-3" id="why-fieldomni">
      <div className="gt-why-choose-us-wrapper-3 section-padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Left Graphic */}
            <div className="col-lg-6">
              <div className="gt-choose-us-image appear_left text-center">
                <img
                  src="/assets/img/home-4/choose-us.png"
                  alt="Why Choose Fieldomni Pharma"
                  className="img-fluid rounded-4 shadow"
                />
              </div>
            </div>

            {/* Right Accordion Content */}
            <div className="col-lg-6">
              <div className="gt-choose-us-content ps-lg-4">
                <div className="gt-section-title style-3 mb-4">
                  <span
                    className="text-white d-inline-block px-3 py-1 rounded-pill mb-2"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Why Fieldomni Pharma
                  </span>
                  <h2
                    className="text-white fw-bold"
                    style={{
                      fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
                      lineHeight: 1.25,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Stop using slow, generic CRMs. <br />
                    Switch to Purpose-Built Pharma Tech.
                  </h2>
                </div>

                {/* Custom Accessible Accordion */}
                <div className="faq-items mt-0 ms-0 mb-4">
                  <div className="accordion d-flex flex-column gap-3">
                    {faqs.map((faq, idx) => {
                      const isOpen = openIdx === idx;
                      return (
                        <div
                          key={faq.id}
                          className="accordion-item rounded-3 overflow-hidden border-0"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                          }}
                        >
                          <h2 className="accordion-header mb-0">
                            <button
                              className="accordion-button text-white fw-semibold d-flex justify-content-between align-items-center w-100 p-3"
                              type="button"
                              onClick={() => toggleAccordion(idx)}
                              style={{
                                backgroundColor: isOpen
                                  ? "rgba(255, 255, 255, 0.12)"
                                  : "transparent",
                                boxShadow: "none",
                                fontSize: "15.5px",
                                border: "none",
                                cursor: "pointer",
                              }}
                            >
                              <span>{faq.title}</span>
                              <i
                                className={`fa-solid ${
                                  isOpen ? "fa-chevron-up" : "fa-chevron-down"
                                } ms-2 text-white-50`}
                                style={{ fontSize: "13px" }}
                              ></i>
                            </button>
                          </h2>
                          {isOpen && (
                            <div className="accordion-body p-3 text-white-50">
                              <p
                                className="mb-0"
                                style={{
                                  fontSize: "14.5px",
                                  lineHeight: "1.6",
                                  color: "rgba(255, 255, 255, 0.85)",
                                }}
                              >
                                {faq.content}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Button */}
                <Link className="theme-btn-main style-2" href="/contact-us">
                  <span className="theme-btn-arrow-left">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                  <span className="theme-btn">Get Started With Fieldomni</span>
                  <span className="theme-btn-arrow-right">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
