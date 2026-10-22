import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tours } from "@/lib/site";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/tours" },
  title: "Tour Packages from Pune",
  description:
    "Explore pilgrimage trips, hill stations and coastal holidays from Pune. Enquire about your travel dates and vehicle with Kushal Tours & Travels.",
};

const shortDescriptions: Record<string, string> = {
  ashtavinayak:
    "Visit all eight Ashtavinayak temples with a route planned around your travel schedule.",
  shirdi:
    "Visit Shirdi Sai Baba Temple and Shani Shingnapur on the same trip.",
  mahabaleshwar:
    "Enjoy beautiful hills, scenic views and popular places in Mahabaleshwar and Panchgani.",
  konkan:
    "Explore beautiful beaches, coastal towns and popular places in Konkan.",
  goa:
    "Plan your Goa trip with pickup from Pune and a suitable vehicle for your journey.",
  jyotirlinga:
    "Visit the Jyotirlinga temples of your choice with travel planned around your route.",
  kolhapur:
    "Visit Mahalaxmi Temple in Kolhapur with convenient travel from Pune.",
  tuljapur:
    "Visit Tulja Bhavani Temple in Tuljapur with travel planned around your schedule.",
};

const orderedTours = [
  ...tours.filter((tour) => tour.id !== "goa" && tour.id !== "konkan"),
  ...tours.filter((tour) => tour.id === "goa"),
  ...tours.filter((tour) => tour.id === "konkan"),
];

export default function ToursPage() {
  return (
    <main id="main-content" className="tours-page">
      <section className="page-hero tours-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">TOUR PACKAGES · FROM PUNE</span>
          <h1>
            Find a place
            <br />
            <em>worth the journey.</em>
          </h1>
          <p>
            Pilgrimage, hill stations or a coastal escape. Choose your
            destination and let’s plan the journey together.
          </p>
        </div>
      </section>

      <section className="tours-list-section">
        <div className="container">
          <div className="tours-list-heading">
            <h2>Where would you like to go?</h2>
            <span className="tours-heading-accent" aria-hidden="true" />
          </div>

          <div className="tour-grid tour-grid-all tours-page-grid">
            {orderedTours.map((tour) => (
              <article className="tour-card" id={tour.id} key={tour.id}>
                <Link
                  className="tour-image-wrap"
                  href={`tel:${siteConfig.phoneHref}`}
                  aria-label={`Enquire about ${tour.title}`}
                >
                  <Image
                    src={tour.image}
                    alt={tour.imageAlt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                </Link>

                <div className="tour-card-content">
                  <h2>{tour.title}</h2>

                  <p className="tours-card-description">
                    {shortDescriptions[tour.id] ?? tour.description}
                  </p>

                  <Link className="tour-book-button" href={`tel:${siteConfig.phoneHref}`}>
                    Book Now <ArrowRight size={17} />
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
