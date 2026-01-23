import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utility Bill Calculator - Calculate Your Monthly Utility Costs",
  description: "Estimate your monthly utility bill costs including gas, electricity, and water. Budget accurately with our free UK utility bill calculator.",
  keywords: ["utility bill calculator", "monthly bills estimate", "household utility costs", "UK bill calculator", "energy cost estimator"],
  openGraph: {
    title: "Utility Bill Calculator - Calculate Your Monthly Utility Costs",
    description: "Estimate your monthly utility bill costs including gas, electricity, and water. Budget accurately with our free UK utility bill calculator.",
    url: "https://utilitybillcalculator.quest",
    siteName: "Utility Bill Calculator",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utility Bill Calculator - Calculate Your Monthly Utility Costs",
    description: "Estimate your monthly utility bill costs including gas, electricity, and water. Budget accurately with our free UK utility bill calculator.",
  },
  alternates: { canonical: "https://utilitybillcalculator.quest" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Utility Bill Calculator",
              url: "https://utilitybillcalculator.quest",
              description: "Estimate your monthly utility bill costs including gas, electricity, and water. Budget accurately with our free UK utility bill calculator.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
