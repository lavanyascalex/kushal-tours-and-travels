import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/site";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Cab Rental, Airport Transfers & Travel Services in Pune",
  description:
    "Explore cab rentals, airport transfers, outstation trips and group travel with Kushal Tours & Travels in Pune.",
};

const serviceDetails = [
  { number: "01", bullets: ["One-way routes", "Pickup and drop-off"] },
  { number: "02", bullets: ["Airport pickup and drop", "Travel with luggage"] },
  { number: "03", bullets: ["One-day and longer trips", "Flexible routes"] },
  { number: "04", bullets: ["Local journeys", "Hourly rentals"] },
  { number: "05", bullets: ["Family and group trips", "Vehicle options by group size"] },
  
];

export default function ServicesPage() {
  return (
    <main id="main-content" className="services-redesign">
      <section className="sr-hero">
        <div className="sr-hero-inner">
          <div className="sr-hero-copy">
            <span className="sr-eyebrow">
              <span />
              KUSHAL TOURS &amp; TRAVELS · PUNE
            </span>
            <h1>
              Travel your way.
              <br />
              <em>We’ll get you there.</em>
            </h1>
          </div>

          <div className="sr-hero-visual">
            <Image
              src="/images/service-outstation.jpg"
              alt="Scenic road for an outstation journey"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="sr-services" id="service-options">
        <div className="sr-content">
          <div className="sr-section-head">
            <div>
              <span className="sr-kicker">TRAVEL YOUR WAY</span>
              <h2>Choose your service.</h2>
            </div>
          </div>

          <div className="sr-card-grid">
            {services.map((service, index) => {
              const detail = serviceDetails[index];
              if (!detail) return null;

              return (
                <article className="sr-card" id={service.id} key={service.id}>
                  <Link
                    className="sr-card-image"
                    href={`tel:${siteConfig.phoneHref}`}
                    aria-label={`Enquire about ${service.title}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                    <span className="sr-card-image-overlay" />
                  </Link>

                  <div className="sr-card-content">
                    <h3>{service.title}</h3>
                    <p className="sr-card-description">{service.description}</p>
                    <ul>
                      {detail.bullets.map((item) => (
                        <li key={item}>
                          <Check size={15} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="sr-card-link"
                      href={`tel:${siteConfig.phoneHref}`}
                    >
                      Book Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
