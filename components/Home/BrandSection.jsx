"use client";

import React from "react";

const brands = [
  { id: 1, name: "PharmaCorp", logo: "/assets/img/home-4/brand/brand-01.png" },
  { id: 2, name: "BioHealth", logo: "/assets/img/home-4/brand/brand-02.png" },
  { id: 3, name: "MediLife", logo: "/assets/img/home-4/brand/brand-03.png" },
  { id: 4, name: "AstraCare", logo: "/assets/img/home-4/brand/brand-04.png" },
  { id: 5, name: "NovisLab", logo: "/assets/img/home-4/brand/brand-05.png" },
  { id: 6, name: "CuraPharma", logo: "/assets/img/home-4/brand/brand-06.png" },
];

export default function BrandSection() {
  return (
    <div className="gt-brand-section section-padding pb-0 pt-4">
      <div className="container">
        <div className="gt-brand-wrapper">
          <h2
            className="color-3 pt-0 text-center"
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#6c757d",
              textTransform: "uppercase",
              marginBottom: "30px",
            }}
          >
            TRUSTED BY <b style={{ color: "#007BFF" }}>500+</b> PHARMA &amp; HEALTHCARE ENTERPRISES
          </h2>

          <div className="row g-4 justify-content-center align-items-center">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
              >
                <div
                  className="gt-brand-image text-center hover-2 p-3 rounded-3"
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "72px",
                  }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                      maxHeight: "36px",
                      width: "auto",
                      opacity: 0.85,
                      filter: "grayscale(30%)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.filter = "grayscale(0%)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0.85";
                      e.currentTarget.style.filter = "grayscale(30%)";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
