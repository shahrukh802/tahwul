import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin", "arabic"], // Include necessary subsets
  variable: "--font-cairo", // CSS variable name
  display: "swap", // Optimizes rendering
});

export const metadata: Metadata = {
  title: "Tahwul",
  description: "Technical Assessment for Tahwul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} antialiased`}>{children}</body>
    </html>
  );
}
