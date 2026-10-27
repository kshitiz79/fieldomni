"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminRootPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("fieldomni_admin_token");
    if (token) {
      router.replace("/admin/dashboard");
    } else {
      router.replace("/admin/login");
    }
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#001a24",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#1ec4b6",
      }}
    >
      <div className="spinner-border" role="status" />
    </div>
  );
}
