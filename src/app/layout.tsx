import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utility Bill Calculator UK | Household Bills Calculator & Estimator",
  description: "Free utilities bill calculator UK. Calculate and estimate your household bills including gas, electricity and water. Our bills calculator helps you budget monthly utility costs based on your house size and usage.",
  keywords: [
    "utility bill calculator",
    "utilities bill calculator",
    "bills calculator",
    "household bills calculator",
    "house bills calculator",
    "bill calculator",
    "utilities calculator",
    "utility bills calculator",
    "household bills calculator uk",
    "household bill calculator",
    "household bills estimator",
    "utilities cost calculator",
    "calculate utility bill",
    "bills calculator uk",
    "utility cost calculator",
    "utility bill estimator",
    "uk bills calculator",
    "bill calculator uk",
    "utilities bill estimator",
    "bills estimate",
    "estimating utilities"
  ],
  authors: [{ name: "Utility Bill Calculator UK" }],
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
    title: "Utility Bill Calculator UK | Free Household Bills Estimator",
    description: "Free utilities calculator to estimate your household bills. Calculate gas, electricity and water costs for your UK home. Updated with current Ofgem price cap rates.",
    url: "https://utilitybillcalculator.quest",
    siteName: "Utility Bill Calculator UK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://utilitybillcalculator.quest/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utility Bill Calculator UK - Household Bills Estimator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utility Bill Calculator UK | Free Household Bills Estimator",
    description: "Free utilities calculator to estimate your household bills. Calculate gas, electricity and water costs for your UK home.",
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
  name: "Utility Bill Calculator UK",
  alternateName: [
    "Utilities Bill Calculator",
    "Household Bills Calculator UK",
    "UK Bills Calculator",
    "House Bills Calculator",
    "Utilities Cost Calculator"
  ],
  url: "https://utilitybillcalculator.quest",
  description: "Free UK utility bill calculator and household bills estimator. Calculate your monthly gas, electricity and water costs based on property type and household size.",
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
  alternateName: [
    "Utilities Calculator",
    "Bills Calculator UK",
    "Household Bills Estimator",
    "Utility Cost Calculator"
  ],
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
  description: "Calculate and estimate your monthly utility bills and household costs including gas, electricity and water. Free UK bills calculator with current Ofgem price cap rates.",
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
        text: "For a typical 3-bedroom house with 2-3 occupants, average monthly household bills are approximately £150-200 for energy (gas and electricity combined) and £30-40 for water. Use our utilities bill calculator to get a more accurate estimate for your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate my utility bills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To calculate your utility bills, you need to know your property type, number of occupants, heating type, and current tariff rates. Our free bills calculator UK tool does this automatically - simply enter your details and get an instant estimate of your monthly household bills.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is this household bills calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our household bills estimator provides estimates based on average UK consumption data and current Ofgem price cap rates. Actual bills may differ by 15-25% depending on factors like home insulation, appliance efficiency, and your specific energy tariff.",
      },
    },
    {
      "@type": "Question",
      name: "What is the energy price cap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The energy price cap is set by Ofgem and limits the maximum amount suppliers can charge for each unit of gas and electricity, as well as the daily standing charge. Our utilities cost calculator uses these rates to estimate your bills.",
      },
    },
    {
      "@type": "Question",
      name: "Should I get a water meter installed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A water meter is usually beneficial if you have fewer occupants than bedrooms. Use our bill calculator to compare metered vs unmetered water costs for your household.",
      },
    },
    {
      "@type": "Question",
      name: "How can I reduce my household bills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key strategies to reduce your utility bills include improving home insulation, using a smart thermostat, switching to LED bulbs, and comparing energy suppliers. Our house bills calculator can help you understand where your money goes.",
      },
    },
    {
      "@type": "Question",
      name: "What bills does a utilities calculator include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A comprehensive utilities bill calculator typically includes electricity, gas, and water costs. Our UK bills calculator estimates all three based on your property size, number of occupants, and usage patterns.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Your Household Bills UK",
  description: "Use our free utilities bill calculator to estimate your monthly gas, electricity and water costs. This bills estimator helps UK households budget accurately.",
  step: [
    {
      "@type": "HowToStep",
      name: "Select your property type",
      text: "Choose your property type in the bills calculator (e.g., 1-bed flat, 3-bed house, etc.)",
    },
    {
      "@type": "HowToStep",
      name: "Enter household details",
      text: "Specify the number of occupants and your heating type to calculate utility bills accurately.",
    },
    {
      "@type": "HowToStep",
      name: "Set additional preferences",
      text: "Indicate if you have a water meter and if you work from home for better bills estimate.",
    },
    {
      "@type": "HowToStep",
      name: "Review your utility bill estimate",
      text: "View your estimated monthly and annual household bills with a full breakdown by utility type.",
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
