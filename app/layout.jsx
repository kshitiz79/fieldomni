import "./globals.css";

export const metadata = {
  title: "Fieldomni -Ground Staff Tracking, Payroll & Sales Software",
  description:
    "Comprehensive Pharma Field Force Automation: Real-time GPS tracking,DCR reports, geo-fenced attendance, order tracking, and automated payroll allowances.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* FontAwesome & Bootstrap */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />

        {/* Main Theme CSS */}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
