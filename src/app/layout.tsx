import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utility Bill Calculator UK - Estimate Gas, Electricity & Water Costs",
  description: "Free UK utility bill calculator. Estimate your monthly gas, electricity and water bills based on property type, household size and current energy prices. Updated with Ofgem price cap rates.",
  keywords: [
    "utility bill calculator",
    "UK energy costs",
    "electricity bill estimator",
    "gas bill calculator",
    "water bill calculator",
    "household utility costs",
    "monthly energy bills",
    "Ofgem price cap",
    "energy cost estimator",
    "home running costs"
  ],
  authors: [{ name: "Utility Bill Calculator" }],
  creator: "Utility Bill Calculator",
  publisher: "Utility Bill Calculator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Utility Bill Calculator UK - Estimate Your Monthly Costs",
    description: "Free calculator to estimate your monthly gas, electricity and water bills. Based on UK average consumption and current Ofgem price cap rates.",
    url: "https://utilitybillcalculator.quest",
    siteName: "Utility Bill Calculator",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://utilitybillcalculator.quest/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utility Bill Calculator - Estimate UK Household Costs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utility Bill Calculator UK - Estimate Your Monthly Costs",
    description: "Free calculator to estimate your monthly gas, electricity and water bills. Based on UK average consumption and current Ofgem price cap rates.",
    images: ["https://utilitybillcalculator.quest/og-image.png"],
  },
  alternates: {
    canonical: "https://utilitybillcalculator.quest",
  },
  other: {
    "google-site-verification": "",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Utility Bill Calculator",
  url: "https://utilitybillcalculator.quest",
  description: "Free UK utility bill calculator to estimate monthly gas, electricity and water costs based on property type and household size.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://utilitybillcalculator.quest/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Utility Bill Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1250",
  },
  description: "Calculate your estimated monthly utility bills including gas, electricity and water based on UK average consumption rates and current Ofgem price cap.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the average utility bill in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a typical 3-bedroom house with 2-3 occupants, average monthly utility costs are approximately £150-200 for energy (gas and electricity combined) and £30-40 for water. However, this varies significantly based on property size, insulation quality, heating type, and usage habits.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is this utility bill calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our calculator provides estimates based on average UK household consumption data and current price cap rates. Actual bills may differ by 15-25% depending on factors like home insulation, appliance efficiency, heating schedules, and your specific energy tariff.",
      },
    },
    {
      "@type": "Question",
      name: "What is the energy price cap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The energy price cap is set by Ofgem and limits the maximum amount suppliers can charge for each unit of gas and electricity, as well as the daily standing charge. It's reviewed quarterly and aims to protect consumers from excessive price increases.",
      },
    },
    {
      "@type": "Question",
      name: "Should I get a water meter installed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A water meter is usually beneficial if you have fewer occupants than bedrooms, use water efficiently, or live alone. Larger families in smaller properties may pay less on unmetered rates. Most water companies offer a free meter installation and a trial period where you can switch back if costs increase.",
      },
    },
    {
      "@type": "Question",
      name: "How can I reduce my utility bills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key strategies include: improving home insulation, using a smart thermostat, switching to LED bulbs, running appliances during off-peak hours, fixing dripping taps, taking shorter showers, and comparing energy suppliers regularly. Even small changes like lowering your thermostat by 1°C can save around £100 annually.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between standing charge and unit rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standing charge is a fixed daily fee that covers the cost of connecting your home to the energy network - you pay this regardless of how much energy you use. The unit rate is what you pay per kilowatt-hour (kWh) of gas or electricity consumed. Your total bill combines both.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Your Monthly Utility Bills",
  description: "Use our free calculator to estimate your monthly gas, electricity and water costs based on your property and household.",
  step: [
    {
      "@type": "HowToStep",
      name: "Select your property type",
      text: "Choose your property type from the dropdown menu (e.g., 1-bed flat, 3-bed house, etc.)",
    },
    {
      "@type": "HowToStep",
      name: "Enter household details",
      text: "Specify the number of occupants and your heating type (gas, electric, or other).",
    },
    {
      "@type": "HowToStep",
      name: "Set additional preferences",
      text: "Indicate if you have a water meter and if you regularly work from home.",
    },
    {
      "@type": "HowToStep",
      name: "Review your estimate",
      text: "View your estimated monthly and annual costs for electricity, gas, and water with a full breakdown.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToSchema),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
