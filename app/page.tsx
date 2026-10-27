import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CarFront,
  Clock3,
  MapPinned,
  Plane,
  Route,
  Users,
  Phone,
  MapPin,
} from "lucide-react";
import HeroParallax from "@/components/hero-parallax";
import GoogleReviews from "@/components/google-reviews";
import { fleet, services, siteConfig, tours } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kushal Tours & Travels | Cab Rental, Tours & Group Travel in Pune",
  description:
    "Book cab rentals, airport transfers, outstation trips, family tours and group transport directly by phone with Kushal Tours & Travels in Wakad, Pune.",
  alternates: { canonical: "/" },
};

const phoneHref = `tel:${siteConfig.phoneHref}`;

function ServiceIcon({ name }: { name: string }) {
  const props = { size: 21, strokeWidth: 2 };
  switch (name) {
    case "route": return <Route {...props} />;
    case "plane": return <Plane {...props} />;
    case "map-pinned": return <MapPinned {...props} />;
    case "clock-3": return <Clock3 {...props} />;
    case "users": return <Users {...props} />;
    case "building-2": return <Building2 {...props} />;
    default: return <CarFront {...props} />;
  }
}

const popularRoutes = [
  "Pune to Mumbai Taxi Service",
  "Mumbai to Pune Taxi Service",
  "Pune Airport to Mumbai Cab Service",
  "Mumbai Airport to Pune Cab Service",
  "Pune Airport to Nashik Cab Service",
  "Mumbai Airport to Nashik Cab Service",
  "Pune to Nashik Cab Service",
  "Nashik to Pune Cab Service",
  "Pune Airport to Lonavala Cab Service",
  "Pune to Mahabaleshwar Cab Service",
  "Pune to Shirdi Cab Service",
  "Pune Airport to Shirdi Cab Service",
  "Pune to Kolhapur Cab Service",
  "Pune to Solapur Cab Service",
  "Pune to Sambhajinagar (Aurangabad) Cab Service",
  "Pune to Tuljapur Cab Service",
  "Pune to Akkalkot Darshan Cab Service",
  "Pune to Nagpur Cab Service",
  "Pune to Latur Cab Service",
  "Pune Airport to Hyderabad Cab Service",
  "Pune to Ujjain Mahakaleshwar Cab Service",
  "Pune to Bhimashankar Darshan Cab Service",
  "Pune to Trimbakeshwar Darshan Cab Service",
  "Pune to Goa Cab Service",
  "Pune to Ashtavinayak Darshan Cab Service",
];

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroParallax>
        <picture className="responsive-home-hero-picture"><source media="(max-width: 767px)" srcSet="/images/android_hero.jpg" /><Image
          src="/images/desktop_hero.png"
          alt="Coach travelling through a scenic mountain landscape"
          fill
          priority
          sizes="100vw"
          className="reference-hero-image"
          quality={95}
        /></picture>
        <div className="reference-hero-shade" aria-hidden="true" />
        <div className="reference-hero-inner">
          <div className="reference-hero-copy">
            <span className="reference-trust-label">
              <span aria-hidden="true" />
              KUSHAL TOURS &amp; TRAVELS
            </span>
            <h1>Your Journey.<br /><em>Our Promise.</em></h1>
            <p className="kushal-hero-tagline">Travel Safe. Travel Smart. Travel with Best.</p>
            <p className="kushal-hero-description">
              Comfortable, dependable travel for everyday rides, airport transfers,
              family getaways and group journeys.
            </p>
            <div className="home-hero-actions">
              <a className="home-hero-call" href={phoneHref}><Phone size={19} aria-hidden="true" /> Call to Book</a>
              <a className="home-hero-secondary" href="#tours">Explore Tour Packages <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </HeroParallax>

      <section className="home-trust-section trust-panel-redesign" aria-labelledby="home-trust-title">
        <div className="home-trust-inner trust-panel-layout">
          <div className="home-trust-heading trust-panel-copy">
            <span className="home-eyebrow">WHY TRAVEL WITH KUSHAL</span>
            <h2 id="home-trust-title">A better way to <em>travel.</em></h2>
            <p>
              From airport transfers to outstation journeys, arrange your travel
              directly with Kushal Tours &amp; Travels. Discuss your route, vehicle
              and plans with us before you book.
            </p>
            <a href={phoneHref} className="trust-panel-button">
              <Phone size={18} aria-hidden="true" />
              CALL TO BOOK
            </a>
          </div>

          <div className="trust-panel-metrics" aria-label="Kushal Tours highlights">
            <article className="trust-panel-metric">
              <span className="trust-metric-label">HAPPY CUSTOMERS</span>
              <strong>10,000+</strong>
              <span className="trust-metric-description">Making journeys memorable</span>
            </article>

            <article className="trust-panel-metric">
              <span className="trust-metric-label">TRIPS COMPLETED</span>
              <strong>30,000+</strong>
              <span className="trust-metric-description">Journeys near and far</span>
            </article>

            <article className="trust-panel-metric">
              <span className="trust-metric-label">GOOGLE CUSTOMER RATING</span>
              <strong>4.7<span className="trust-metric-denominator">/5</span></strong>
              <span className="trust-metric-description">Rated by customers on Google</span>
            </article>

            <article className="trust-panel-metric">
              <span className="trust-metric-label">EASY BOOKING</span>
              <strong className="trust-metric-words">Quick &amp; Simple</strong>
              <span className="trust-metric-description">Book your next trip with one call.</span>
            </article>
          </div>
        </div>
      </section>

      <section className="reference-services reference-services-redesign" id="services">
        <div className="reference-services-heading reference-services-heading-redesign home-services-heading">
          <div className="reference-services-title-wrap"><h2>Travel Services</h2></div>
        </div>
        <div className="reference-service-grid reference-service-grid-redesign">
          {services.map((service, index) => (
            <a href={phoneHref} className="reference-service-card reference-service-card-redesign" key={service.id} aria-label={`Call to book ${service.title}`}>
              <span className="reference-service-photo reference-service-photo-redesign">
                <Image src={service.image} alt={service.imageAlt} width={720} height={460} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                <span className="reference-service-image-shade" aria-hidden="true" />
                <span className="reference-service-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </span>
              <span className="reference-service-icon reference-service-icon-redesign"><ServiceIcon name={service.icon} /></span>
              <span className="reference-service-copy reference-service-copy-redesign">
                <strong>{service.title}</strong>
                <span className="reference-service-description-redesign">{service.description}</span>
                <span className="reference-service-arrow reference-service-arrow-redesign" aria-hidden="true"><Phone size={17} /></span>
              </span>
            </a>
          ))}
        </div>
        <div className="home-section-cta"><a className="home-section-cta-button" href={phoneHref}>Call to Enquire <Phone size={17} /></a></div>
      </section>

      <section className="section fleet-section" id="fleet">
        <div className="container">
          <div className="section-heading"><div><h2>Vehicle Options</h2></div></div>
          <div className="fleet-grid">
            {fleet.map((vehicle, index) => (
              <article className="fleet-card" key={vehicle.id}>
                <a className="fleet-image-link" href={phoneHref} aria-label={`Call to book ${vehicle.title}`}>
                  <Image src={vehicle.image} alt={vehicle.imageAlt} width={720} height={480} sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 25vw" className="fleet-image" />
                  {index === 1 && <span className="image-tag">Popular choice</span>}
                </a>
                <div className="fleet-card-body">
                  <span className="card-kicker">{vehicle.tag}</span>
                  <h3>{vehicle.title}</h3>
                  <span className="fleet-capacity"><Users size={15} /> {vehicle.capacity}</span>
                  <p>{vehicle.description}</p>
                  <span className="fleet-examples">{vehicle.examples}</span>
                  <a className="homepage-book-button" href={phoneHref}>Book Now <Phone size={17} /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="home-section-cta"><Link className="home-section-cta-button" href="/fleet">Explore All Vehicle Options <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section tours-section" id="tours">
        <div className="container">
          <div className="section-heading"><div><h2>Tour Packages</h2></div></div>
          <div className="tour-grid">
            {tours.filter((tour) => ["ashtavinayak", "shirdi", "mahabaleshwar", "kolhapur", "tuljapur"].includes(tour.id)).map((tour) => (
              <article className="tour-card" key={tour.id}>
                <a className="tour-image-wrap" href={phoneHref} aria-label={`Call to enquire about ${tour.title}`}>
                  <Image src={tour.image} alt={tour.imageAlt} width={800} height={900} sizes="(max-width: 680px) 100vw, 33vw" className="tour-image" />
                  <span className="tour-category">{tour.category}</span>
                </a>
                <div className="tour-card-content">
                  <span className="tour-duration">{tour.duration}</span>
                  <h3>{tour.title}</h3>
                  <p>{tour.description}</p>
                  <a className="homepage-book-button" href={phoneHref}>Call to Book <Phone size={17} /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="home-section-cta"><Link className="home-section-cta-button" href="/tours">Explore All Tour Packages <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="popular-routes-section" id="popular-routes" aria-labelledby="popular-routes-title">
        <div className="popular-routes-container">
          <div className="popular-routes-heading">
            <span className="home-eyebrow">POPULAR CAB ROUTES</span>
            <h2 id="popular-routes-title">Your route. <em>Your ride.</em></h2>
            <p>Planning a trip from Pune or Mumbai? Tap a route to call and discuss your pickup, timing and vehicle options.</p>
          </div>
          <div className="popular-routes-grid">
            {popularRoutes.map((routeName) => (
              <a className="popular-route-link" href={phoneHref} key={routeName}>
                <span className="popular-route-icon"><CarFront size={20} aria-hidden="true" /></span>
                <span>{routeName}</span>
                <ArrowRight className="popular-route-arrow" size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="popular-routes-footer"><MapPin size={16} aria-hidden="true" /><span>Need a different destination? Call us to discuss your route.</span><a href={phoneHref}>Call {siteConfig.phoneDisplay}</a></div>
        </div>
      </section>

      <GoogleReviews />

      <section className="faq-section section" id="faqs">
        <div className="container faq-layout">
          <div className="faq-intro"><h2>FAQs</h2><p>Need help choosing a vehicle or planning a route? Call us directly.</p><a className="home-trust-call" href={phoneHref}>Call Us <Phone size={16} aria-hidden="true" /></a></div>
          <div className="faq-list">
            <details><summary>What types of travel services do you offer?</summary><p>Call us about one-way cabs, airport transfers, local rentals, outstation trips, tour packages and transport for groups or events.</p></details>
            <details><summary>Which vehicle should I choose for my group?</summary><p>Vehicle options include sedans, SUVs, Tempo Travellers, Urbanias, minibuses and coaches. Tell us your passenger count and luggage needs so we can discuss suitable options and availability.</p></details>
            <details><summary>How is the final trip fare calculated?</summary><p>The quote can depend on the route, vehicle, travel dates, duration and trip requirements. Call us to confirm the total fare and any applicable tolls, parking, taxes, driver allowance or other trip charges.</p></details>
            <details><summary>Can I plan an outstation or multi-day tour?</summary><p>Yes. Call with your destinations, preferred dates, passenger count and number of travel days. The itinerary, vehicle availability and pricing will be confirmed directly.</p></details>
            <details><summary>How do I book?</summary><p>Tap any Call to Book or route option on this website. Your phone dialler will open with our number ready; press the call button to speak directly. Your booking is confirmed only after the trip details and availability are agreed.</p></details>
          </div>
        </div>
      </section>

      <section className="home-location-map-section" id="home-location-map" aria-labelledby="home-location-map-title">
        <div className="home-location-map-inner">
          <div className="home-location-map-heading">
            <span className="home-eyebrow">VISIT KUSHAL TOURS &amp; TRAVELS</span>
            <h2 id="home-location-map-title">Find Us in <em>Wakad, Pune.</em></h2>
            <p>View our location and get directions before visiting.</p>
          </div>
          <div className="home-location-map-panel">
            <iframe
              src="https://maps.google.com/maps?q=18.608001,73.762134&z=17&t=k&output=embed"
              title="Satellite map showing Kushal Tours and Travels in Wakad, Pune"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="home-location-map-directions"
              href="https://maps.app.goo.gl/w2sFgXPGxvccanoX6"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={17} aria-hidden="true" />
              Open in Google Maps
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
