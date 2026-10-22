import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand">
            <Image
              src="/kushal-logo-navbar.png"
              alt="Kushal Tours & Travels logo"
              width={58}
              height={58}
              className="footer-logo-image"
            />
            <span className="brand-copy">
              <strong>Kushal</strong>
              <small>TOURS &amp; TRAVELS</small>
            </span>
          </Link>

          <p>
            Thoughtful travel planning, practical vehicle choices and direct
            booking assistance for journeys big and small.
          </p>

          <a
            className="footer-map-link"
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={17} />
            <span>Wakad, Pune, Maharashtra</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/about">About us</Link>
          <Link href="/services">Travel services</Link>
          <Link href="/fleet">Our fleet</Link>
          <Link href="/tours">Tour packages</Link>
          </div>

        <div className="footer-column">
          <h3>Get in touch</h3>
          <a href={`tel:${siteConfig.phoneHref}`}>
            <Phone size={16} />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="footer-copyright">
          © {new Date().getFullYear()} Kushal Tours &amp; Travels. All rights
          reserved.
        </span>

        <span className="footer-disclaimer">
          Availability and fares are confirmed directly with the operator.
        </span>

        <span className="footer-credit">
          Made by{" "}
          <a
            href="https://www.instagram.com/scalexstudios?vrfl=MWRqMDhndzZ5eWgyOQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ScaleX Studios on Instagram"
          >
            ScaleX Studios <ArrowUpRight size={12} />
          </a>
        </span>
      </div>
    </footer>
  );
}
