import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Users } from "lucide-react";
import { fleet } from "@/lib/site";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/fleet" },
  title: "Our Fleet | Sedan, SUV, Tempo Traveller & Bus Hire in Pune",
  description:
    "Explore sedans, SUVs, Tempo Travellers and coaches for local travel, family holidays and group journeys with Kushal Tours & Travels in Pune.",
};

export default function FleetPage() {
  return (
    <main id="main-content" className="fleet-page">
      <section className="page-hero fleet-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">FIND YOUR RIDE · PUNE</span>
          <h1>
            The right vehicle.
            <br />
            <em>For every journey.</em>
          </h1>
          <p>
            From everyday cab rides to comfortable group travel, explore
            vehicle options for your next trip.
          </p>
        </div>
      </section>

      <section className="fleet-options-section">
        <div className="container">
          <div className="fleet-page-grid">
            {fleet.map((vehicle, index) => (
              <article className="fleet-page-card" id={vehicle.id} key={vehicle.id}>
                <Link
                  href={`tel:${siteConfig.phoneHref}`}
                  className="fleet-page-image"
                  aria-label={`Enquire about ${vehicle.title}`}
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 560px"
                    priority={index < 2}
                  />
                  <span className="fleet-image-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="fleet-image-action" aria-hidden="true">
                    <ArrowUpRight size={19} />
                  </span>
                </Link>

                <div className="fleet-page-content">
                  <span className="fleet-card-kicker">{vehicle.tag}</span>
                  <h2>{vehicle.title}</h2>

                  <div className="fleet-capacity">
                    <Users size={16} aria-hidden="true" />
                    <span>{vehicle.capacity}</span>
                  </div>

                  <p className="fleet-description">{vehicle.description}</p>

                  <div className="fleet-examples">
                    <span>VEHICLE OPTIONS</span>
                    <p>{vehicle.examples}</p>
                  </div>

                  <Link href={`tel:${siteConfig.phoneHref}`} className="fleet-enquire-link">
                    Book now <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>


        </div>
      </section>
    </main>
  );
}
