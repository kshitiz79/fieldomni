"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginAdmin } from "@/lib/blogService";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@fieldomni.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem("fieldomni_admin_token");
    if (token) {
      router.push("/admin/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const data = await loginAdmin(email, password);

      if (data.success && data.token) {
        localStorage.setItem("fieldomni_admin_token", data.token);
        localStorage.setItem("fieldomni_admin_user", JSON.stringify(data.user));
        // Set cookie as well for server requests if needed
        document.cookie = `admin_token=${data.token}; path=/; max-age=604800; SameSite=Lax`;
        router.push("/admin/dashboard");
      } else {
        setErrorMsg(data.message || "Invalid credentials. Please verify your login details.");
      }
    } catch (err) {
      setErrorMsg("Unable to connect to authentication server. Please check backend status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #001924 0%, #002b3d 50%, #00151f 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Decorative ambient background glows */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "20%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(30,196,182,0.12) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "20%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0,56,79,0.3) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          backgroundColor: "rgba(0, 43, 61, 0.75)",
          backdropFilter: "blur(16px)",
          borderRadius: "20px",
          border: "1px solid rgba(30, 196, 182, 0.25)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
          padding: "40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Brand Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "16px" }}>
            <img
              src="/logo.jpg"
              alt="Fieldomni"
              style={{
                height: "42px",
                width: "auto",
                objectFit: "contain",
                display: "inline-block",
              }}
            />
          </Link>
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "999px",
              backgroundColor: "rgba(30, 196, 182, 0.15)",
              color: "#1ec4b6",
              fontSize: "11.5px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            <i className="fa-solid fa-lock" style={{ marginRight: "6px" }}></i> Blog CMS Administration
          </div>
          <h2 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700, margin: "0 0 6px" }}>
            Admin Portal Login
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", margin: 0 }}>
            Sign in to publish, edit, and optimize SEO blog posts.
          </p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div
            style={{
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              color: "#fca5a5",
              padding: "12px 16px",
              borderRadius: "10px",
              fontSize: "13.5px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <i className="fa-solid fa-triangle-exclamation"></i>
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                color: "#e2e8f0",
                fontSize: "13.5px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Admin Email / Username
            </label>
            <div style={{ position: "relative" }}>
              <i
                className="fa-solid fa-envelope"
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94a3b8",
                  fontSize: "14px",
                }}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@fieldomni.com"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(0, 25, 36, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "10px",
                  padding: "12px 14px 12px 40px",
                  color: "#ffffff",
                  fontSize: "14.5px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#1ec4b6")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.15)")}
              />
            </div>
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <label
                style={{
                  color: "#e2e8f0",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Password
              </label>
            </div>
            <div style={{ position: "relative" }}>
              <i
                className="fa-solid fa-lock"
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94a3b8",
                  fontSize: "14px",
                }}
              />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(0, 25, 36, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "10px",
                  padding: "12px 42px 12px 40px",
                  color: "#ffffff",
                  fontSize: "14.5px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#1ec4b6")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.15)")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} />
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "26px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255, 255, 255, 0.7)", fontSize: "13px", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: "#1ec4b6" }}
              />
              Remember my session
            </label>
            <span style={{ color: "#1ec4b6", fontSize: "12.5px" }}>Protected PHP Session</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              backgroundColor: "#1ec4b6",
              color: "#002b3d",
              border: "none",
              borderRadius: "10px",
              padding: "13px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "transform 0.15s, opacity 0.15s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {loading ? (
              <>
                <div
                  className="spinner-border spinner-border-sm"
                  style={{ width: "18px", height: "18px", borderWidth: "2px" }}
                  role="status"
                />
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>Access Admin Panel</span>
                <i className="fa-solid fa-arrow-right"></i>
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Helper Box */}
        <div
          style={{
            marginTop: "28px",
            padding: "14px",
            backgroundColor: "rgba(30, 196, 182, 0.08)",
            borderRadius: "10px",
            border: "1px dashed rgba(30, 196, 182, 0.3)",
            fontSize: "12.5px",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <div style={{ fontWeight: 600, color: "#1ec4b6", marginBottom: "4px" }}>
            <i className="fa-solid fa-circle-info me-1"></i> Default Credentials:
          </div>
          <div>
            Email: <code style={{ color: "#ffffff", background: "rgba(0,0,0,0.3)", padding: "2px 6px", borderRadius: "4px" }}>admin@fieldomni.com</code>
          </div>
          <div style={{ marginTop: "4px" }}>
            Password: <code style={{ color: "#ffffff", background: "rgba(0,0,0,0.3)", padding: "2px 6px", borderRadius: "4px" }}>admin123</code>
          </div>
        </div>

        {/* Return to website */}
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Link
            href="/"
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "13px",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#1ec4b6")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.6)")}
          >
            ← Back to Fieldomni Home
          </Link>
        </div>
      </div>
    </div>
  );
}
