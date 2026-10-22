"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/tours", label: "Tour Packages" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/about", label: "About Us" },
];

const phoneHref = `tel:${siteConfig.phoneHref}`;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="kt-header">
        <div className="kt-header-inner">
          <Link
            href="/"
            className="kt-brand"
            aria-label="Kushal Tours & Travels home"
            onClick={() => setOpen(false)}
          >
            <span className="kt-logo-wrap">
              <Image
                src="/kushal-logo-navbar.png"
                alt="Kushal Tours & Travels logo"
                width={76}
                height={76}
                priority
                className="kt-logo"
              />
            </span>

            <span className="kt-brand-copy">
              <strong>KUSHAL</strong>
              <span className="kt-brand-subtitle">TOURS & TRAVELS</span>
            </span>
          </Link>

          <nav
            id="kt-navigation"
            className={`kt-nav${open ? " kt-nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              className="kt-mobile-cta"
              href={phoneHref}
              onClick={() => setOpen(false)}
            >
              Call to Book <Phone size={18} aria-hidden="true" />
            </a>
          </nav>

          <a
            className="kt-header-cta"
            href={phoneHref}
          >
            <span>Call Now</span>
            <Phone size={19} aria-hidden="true" />
          </a>

          <button
            className="kt-menu-toggle"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="kt-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <style jsx global>{`
        .kt-header,
        .kt-header * {
          box-sizing: border-box;
        }

        .kt-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: #ffffff;
          border-bottom: 1px solid #e9ece8;
          font-family: inherit;
        }

        .kt-header-inner {
          width: 100%;
          max-width: 1600px;
          min-height: 84px;
          margin: 0 auto;
          padding: 7px clamp(20px, 3.2vw, 52px);
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: clamp(18px, 2vw, 30px);
        }

        .kt-brand {
          display: inline-flex;
          align-items: center;
          justify-self: start;
          gap: 7px;
          min-width: 0;
          color: #243B32;
          text-decoration: none;
        }

        .kt-logo-wrap {
          display: flex;
          flex: 0 0 54px;
          width: 54px;
          height: 54px;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #ffffff;
          border: none;
          outline: none;
          box-shadow: none;
          border-radius: 0;
        }

        .kt-logo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: transparent;
          border: none;
          outline: none;
          box-shadow: none;
          transform: scale(1.06);
        }

        .kt-brand-copy {
          display: flex;
          min-width: 0;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.15;
        }

        .kt-brand-copy strong {
          color: #243B32;
          font-size: clamp(24px, 1.8vw, 30px);
          font-weight: 800;
          letter-spacing: -1.25px;
        }

        .kt-brand-subtitle {
          margin-top: 3px;
          color: #77633B;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.15px;
          white-space: nowrap;
        }

        .kt-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 1.35vw, 22px);
        }

        .kt-nav > a {
          position: relative;
          padding: 10px 0;
          color: #35443D;
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .kt-nav > a:not(.kt-mobile-cta)::after {
          position: absolute;
          right: 0;
          bottom: 3px;
          left: 0;
          height: 2px;
          background: #e9b51d;
          content: "";
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 180ms ease;
        }

        .kt-nav > a:not(.kt-mobile-cta):hover {
          color: #173e38;
        }

        .kt-nav > a:not(.kt-mobile-cta):hover::after {
          transform: scaleX(1);
        }

        .kt-header-cta {
          justify-self: end;
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 17px;
          padding: 0 23px;
          border: 1px solid #ffcf3b;
          border-radius: 999px;
          background: #ffcf3b;
          color: #25382e;
          font-size: 14px;
          font-weight: 750;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 5px 16px rgb(38 47 35 / 5%);
          transition:
            background 180ms ease,
            border-color 180ms ease,
            transform 180ms ease;
        }

        .kt-header-cta:hover {
          transform: translateY(-1px);
          border-color: #f2bc22;
          background: #f8c52e;
        }

        .kt-header-cta svg,
        .kt-mobile-cta svg {
          transition: transform 180ms ease;
        }

        .kt-header-cta:hover svg,
        .kt-mobile-cta:hover svg {
          transform: translateX(3px);
        }

        .kt-menu-toggle,
        .kt-mobile-cta {
          display: none;
        }

        @media (min-width: 1500px) {
          .kt-header-inner {
            min-height: 112px;
          }

          .kt-nav > a {
            font-size: 15px;
          }

          .kt-header-cta {
            min-height: 54px;
            padding: 0 27px;
            font-size: 15px;
          }
        }

        @media (max-width: 1180px) {
          .kt-header-inner {
            grid-template-columns: minmax(205px, 1fr) auto auto;
            gap: 20px;
          }

          .kt-nav {
            gap: 16px;
          }

          .kt-nav > a {
            font-size: 13px;
          }

          .kt-logo-wrap {
            flex-basis: 62px;
            width: 62px;
            height: 62px;
          }

          .kt-brand {
            gap: 9px;
          }

          .kt-brand-copy strong {
            font-size: 27px;
          }

          .kt-brand-subtitle {
            font-size: 11px;
          }

          .kt-header-cta {
            gap: 10px;
            padding: 0 17px;
          }
        }

        @media (max-width: 960px) {
          .kt-header-inner {
            min-height: 86px;
            grid-template-columns: minmax(0, 1fr) auto auto;
            gap: 15px;
            padding: 10px 22px;
          }

          .kt-logo-wrap {
            flex-basis: 58px;
            width: 58px;
            height: 58px;
          }

          .kt-brand-copy strong {
            font-size: 25px;
          }

          .kt-nav {
            position: absolute;
            top: 100%;
            right: 0;
            left: 0;
            display: none;
            align-items: stretch;
            gap: 0;
            padding: 10px 22px 22px;
            border-top: 1px solid #eef0ec;
            border-bottom: 1px solid #e5e9e3;
            background: #ffffff;
            box-shadow: 0 14px 25px rgb(24 43 35 / 8%);
          }

          .kt-nav.kt-nav-open {
            display: flex;
            flex-direction: column;
          }

          .kt-nav > a {
            padding: 14px 5px;
            border-bottom: 1px solid #f0f1ed;
            font-size: 15px;
          }

          .kt-nav > a:not(.kt-mobile-cta)::after {
            display: none;
          }

          .kt-nav > .kt-mobile-cta {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 15px;
            padding: 14px 18px;
            border: 0;
            border-radius: 999px;
            background: #ffcf3b;
            color: #25382e;
            font-weight: 750;
          }

          .kt-header-cta {
            min-height: 44px;
            gap: 10px;
            padding: 0 17px;
            font-size: 13px;
          }

          .kt-menu-toggle {
            display: inline-flex;
            width: 44px;
            height: 44px;
            align-items: center;
            justify-content: center;
            border: 1px solid #e5e9e3;
            border-radius: 50%;
            background: #ffffff;
            color: #173e38;
            cursor: pointer;
          }
        }

        @media (max-width: 480px) {
          .kt-header-inner {
            min-height: 76px;
            gap: 10px;
            padding: 9px 14px;
          }

          .kt-brand {
            gap: 8px;
          }

          .kt-logo-wrap {
            flex-basis: 49px;
            width: 49px;
            height: 49px;
          }

          .kt-brand-copy strong {
            font-size: 22px;
            letter-spacing: -0.8px;
          }

          .kt-brand-subtitle {
            margin-top: 2px;
            font-size: 9px;
            letter-spacing: 0.75px;
          }

          .kt-header-cta {
            min-height: 40px;
            gap: 0;
            padding: 0 12px;
            font-size: 12px;
          }

          .kt-header-cta svg {
            display: none;
          }

          .kt-menu-toggle {
            width: 40px;
            height: 40px;
          }

          .kt-nav {
            padding-right: 16px;
            padding-left: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kt-header *,
          .kt-header *::before,
          .kt-header *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </>
  );
}
