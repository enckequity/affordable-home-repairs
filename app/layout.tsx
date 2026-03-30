import type { Metadata } from "next";
import { Bitter, Source_Sans_3 } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Affordable Home Repairs in Crestview, FL | Handyman, Painting, Carpentry & Roof Repair",
  description:
    "Affordable Home Repairs LLC offers professional handyman services, carpentry, interior & exterior painting, cabinet refinishing, roof repair, and more in Crestview, FL and the Florida Panhandle. 27+ years experience. Call (850) 496-2984 for a free estimate.",
  keywords: [
    "home repair Crestview FL",
    "handyman Crestview",
    "painting contractor Fort Walton Beach",
    "cabinet refinishing Florida Panhandle",
    "roof repair Crestview FL",
    "carpentry Niceville FL",
    "affordable handyman Destin",
    "drywall repair Okaloosa County",
  ],
  metadataBase: new URL(COMPANY.siteUrl),
  openGraph: {
    title: "Affordable Home Repairs LLC | Crestview, FL",
    description:
      "Professional home repair, painting, carpentry, and handyman services across the Florida Panhandle. 27+ years experience. Free estimates.",
    url: COMPANY.siteUrl,
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * JSON-LD structured data for local business SEO.
 * All values are static compile-time constants — no user input is involved,
 * so the use of dangerouslySetInnerHTML here is safe from XSS.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: COMPANY.name,
  description:
    "Professional home repair, painting, carpentry, cabinet refinishing, roof repair, and handyman services in Crestview, FL and the Florida Panhandle.",
  url: COMPANY.siteUrl,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3394 Highway 90 E",
    addressLocality: "Crestview",
    addressRegion: "FL",
    postalCode: "32539",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.7455,
    longitude: -86.5386,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    "Crestview",
    "Niceville",
    "Fort Walton Beach",
    "Destin",
    "Navarre",
    "DeFuniak Springs",
    "Valparaiso",
    "Shalimar",
    "Mary Esther",
  ],
  founder: {
    "@type": "Person",
    name: COMPANY.owner,
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bitter.variable} ${sourceSans.variable} h-full`}
    >
      <head>
        {/* Safe: jsonLd is a static object built from compile-time constants */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics — uncomment and replace GA_MEASUREMENT_ID when ready
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        */}
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
