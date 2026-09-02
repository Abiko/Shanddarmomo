import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Header } from "@/components/Header";
import { OrderSystem } from "@/components/OrderSystem";
import { PageTransition } from "@/components/PageTransition";
import { restaurant } from "@/lib/restaurant";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${restaurant.name} | Nepali & Indo-Chinese Food in Tbilisi`,
    template: `%s | ${restaurant.name}`,
  },
  description: restaurant.description,
  keywords: ["Shanddar MoMo", "momo Tbilisi", "Nepali restaurant Tbilisi", "Indo-Chinese food Tbilisi", "Nutsubidze restaurant"],
  openGraph: {
    title: restaurant.name,
    description: restaurant.tagline,
    images: [{ url: "/images/home/momo-hero.jpg", width: 1200, height: 1200, alt: "Fresh momos at Shanddar MoMo in Tbilisi" }],
    type: "website",
    locale: "en_US",
  },
  icons: { icon: restaurant.logo, apple: restaurant.logo },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    image: restaurant.logo,
    logo: restaurant.logo,
    servesCuisine: ["Nepali", "Indo-Chinese", "Asian"],
    address: { "@type": "PostalAddress", streetAddress: "41 Shalva Nutsubidze St", addressLocality: "Tbilisi", postalCode: "0177", addressCountry: "GE" },
    telephone: restaurant.phoneHref,
    priceRange: "GEL",
  };

  return (
    <html lang="en">
      <body>
        <OrderSystem>
          <Header />
          <main className="site-main"><PageTransition>{children}</PageTransition></main>
          <FloatingContactButtons />
          <Footer />
        </OrderSystem>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
