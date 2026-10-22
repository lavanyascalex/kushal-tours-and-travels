import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Kushal Tours & Travels | Cab Rental, Tours & Group Travel in Pune",
    template: "%s | Kushal Tours & Travels",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: "Kushal Tours & Travels | Travel Your Way",
    description: siteConfig.description,
    images: [{ url: "/kushal-logo.png", width: 644, height: 408, alt: "Kushal Tours & Travels" }],
  },
  twitter: { card: "summary_large_image", title: "Kushal Tours & Travels", description: siteConfig.description, images: ["/kushal-logo.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f5ef" };

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteConfig.name,
  url: siteConfig.domain,
  image: `${siteConfig.domain}/kushal-logo.png`,
  logo: `${siteConfig.domain}/kushal-logo.png`,
  telephone: siteConfig.phoneHref,
  description: siteConfig.description,
  address: { "@type": "PostalAddress", addressLocality: "Wakad, Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
  areaServed: [{ "@type": "City", name: "Pune" }, { "@type": "State", name: "Maharashtra" }],
  contactPoint: [{ "@type": "ContactPoint", telephone: `+${siteConfig.whatsappNumber}`, contactType: "customer service", availableLanguage: ["English", "Hindi", "Marathi"] }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }} /><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><div className="site-main-content">{children}</div><SiteFooter /></body></html>;
}
