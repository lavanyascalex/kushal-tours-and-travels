import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Route,
} from "lucide-react";
import GoogleReviews from "@/components/google-reviews";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Our Travel Services in Wakad, Pune",
  description:
    "Learn about Kushal Tours & Travels in Wakad, Pune. Discuss cab bookings, airport transfers, outstation journeys and group travel directly with our team.",
  alternates: { canonical: "/about" },
};

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;
const directionsUrl = "https://maps.app.goo.gl/w2sFgXPGxvccanoX6";
const mapEmbedUrl =
  "https://maps.google.com/maps?q=18.608001,73.762134&z=17&t=k&output=embed";

const steps = [
  {
    number: "01",
    label: "FIRST",
    title: "Tell us your plans",
    description:
      "Share your destination, travel date, pickup point, and requirements.",
    icon: MessageCircle,
  },
  {
    number: "02",
    label: "NEXT",
    title: "Discuss the details",
    description:
      "Go over timing, pricing, available options, and your journey arrangements.",
    icon: Route,
  },
  {
    number: "03",
    label: "THEN",
    title: "Confirm your booking",
    description:
      "Review the agreed details and confirm the arrangement before travelling.",
    icon: CheckCircle2,
  },
];

export default function AboutPage() {
  return (
    <main className="about-v2" id="main-content">
      {/* HERO */}
      <section className="about-v2-hero">
        <Image
          src="/images/hero-road.jpg"
          alt="A car travelling along an open road"
          fill
          priority
          sizes="100vw"
          className="about-v2-hero-image"
        />

        <div className="about-v2-hero-shade" />

        <div className="about-v2-hero-inner">
          <div className="about-v2-eyebrow about-v2-eyebrow-light">
            <span />
            KUSHAL TOURS &amp; TRAVELS
          </div>

          <h1>
            Every journey
            <br />
            deserves a
            <br />
            <em>better beginning.</em>
          </h1>

          <p>
            Thoughtful travel planning, direct communication, and a team
            ready to help you plan your next journey from Wakad, Pune.
          </p>

          <div className="about-v2-hero-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="about-v2-button about-v2-button-light"
            >
              <MessageCircle size={17} />
              Talk to us
              <ArrowUpRight size={17} />
            </a>

          </div>

          <div className="about-v2-hero-bottom">
            <span>BASED IN WAKAD, PUNE</span>
            <span>YOUR JOURNEY STARTS HERE</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-v2-intro" id="our-approach">
        <div className="about-v2-intro-grid">
          <div className="about-v2-intro-heading">
            <div className="about-v2-eyebrow">
              <span />
              A LITTLE ABOUT US
            </div>

            <h2>
              Travel should feel
              <br />
              <em>simple from the start.</em>
            </h2>

            <div className="about-v2-heading-mark" />
          </div>

          <div className="about-v2-intro-copy">
            <p className="about-v2-lead">
              A good journey begins long before you reach your destination.
            </p>

            <p>
              Kushal Tours &amp; Travels is based in Wakad, Pune. We help
              travellers discuss their plans, understand their travel
              requirements, and coordinate the details of their journey
              before setting off.
            </p>

            <p>
              Whether you are planning ahead or need to discuss a trip,
              contact us directly to talk through your requirements and
              available arrangements.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="about-v2-inline-link"
            >
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ONE BOOKING PROCESS SECTION — replaces both old step sections */}
      <section className="about-final-process" id="booking-process">
        <div className="about-final-process-header">
          <div>
            <div className="about-final-eyebrow">
              <span />
              FROM ENQUIRY TO DEPARTURE
            </div>

            <h2>
              Three steps.
              <br />
              <em>One clear plan.</em>
            </h2>
          </div>
        </div>

        <div className="about-final-steps">
          {steps.map((step) => {
            return (
              <article className="about-final-step-card" key={step.number}>
                <div className="about-final-step-top">
                  <span className="about-final-step-number">{step.number}</span>
                  <ArrowUpRight
                    size={19}
                    className="about-final-step-arrow"
                  />
                </div>

                <span className="about-final-step-label">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>

                <div className="about-final-step-bottom">
                  <span>STEP {step.number}</span>
                  <span className="about-final-step-rule" />
                </div>
              </article>
            );
          })}
        </div>

        
      </section>

      {/* SAMPLE REVIEW CARDS — illustrative content, not actual testimonials */}
      

      <GoogleReviews sectionId="about-google-reviews" />

      {/* CONTACT + SATELLITE MAP */}
      <section className="about-final-location" id="contact-location">
        <div className="about-final-location-heading">
          <div className="about-final-eyebrow">
            <span />
            COME FIND US
          </div>

          <h2>
            Your journey
            <br />
            starts in <em>Wakad.</em>
          </h2>

          <p>
            Have questions or want to discuss your travel plans? Get in touch
            or find us in Wakad, Pune.
          </p>
        </div>

        <div className="about-final-location-grid">
          <div className="about-final-contact-panel">
            <article className="about-final-contact-item">
              <span className="about-final-contact-icon">
                <MapPin size={20} />
              </span>
              <div>
                <span className="about-final-contact-label">OUR LOCATION</span>
                <p>{siteConfig.address}</p>
                <a href={directionsUrl} target="_blank" rel="noreferrer">
                  Get directions <ArrowUpRight size={15} />
                </a>
              </div>
            </article>

            <article className="about-final-contact-item">
              <span className="about-final-contact-icon">
                <Phone size={20} />
              </span>
              <div>
                <span className="about-final-contact-label">GIVE US A CALL</span>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="about-final-contact-value"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <p>Speak with us about your requirements.</p>
              </div>
            </article>

            <article className="about-final-contact-item">
              <span className="about-final-contact-icon">
                <MessageCircle size={20} />
              </span>
              <div>
                <span className="about-final-contact-label">MESSAGE US</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="about-final-contact-value"
                >
                  Chat on WhatsApp <ArrowUpRight size={15} />
                </a>
                <p>Share your trip details directly.</p>
              </div>
            </article>

            <div className="about-final-contact-bottom">
              <span>LOCAL KNOWLEDGE. DIRECT CONTACT.</span>
              <ArrowUpRight size={16} />
            </div>
          </div>

          <div className="about-final-map-panel">
            <iframe
              src={mapEmbedUrl}
              title="Satellite map showing Kushal Tours and Travels in Wakad, Pune"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <a
              className="about-final-map-open"
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={16} />
              Open in Google Maps
              <ArrowUpRight size={16} />
            </a>

          </div>
        </div>

      </section>
    </main>
  );
}
