import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://borsoi.co.uk"),
  title: { default: "Mattia Borsoi", template: "%s · Mattia Borsoi" },
  description: "Software engineer. Building tools for transparency and open data.",
  openGraph: {
    siteName: "borsoi.co.uk",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
