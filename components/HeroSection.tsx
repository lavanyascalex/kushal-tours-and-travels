"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f2]">
      <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:px-14 lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce8d8] bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#176347] shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#a8cb45]" />
            Pune&apos;s Trusted Travel Partner
          </div>

          <h1 className="text-[clamp(2.8rem,5.5vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#123b35]">
            Every Journey
            <br />
            <span className="text-[#197451]">Starts Better.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#586761] sm:text-lg">
            Comfortable rides, memorable holidays and dependable group
            transportation. Discover a better way to travel with Kushal
            Tours &amp; Travels.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/918983343640"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#126344] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#126344]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#0c5036]"
            >
              Plan Your Journey
              <span aria-hidden="true" className="text-lg">↗</span>
            </a>

            <a
              href="#our-fleet"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-[#cbd8d0] bg-white px-7 py-4 text-sm font-bold text-[#164a39] transition duration-300 hover:border-[#126344] hover:bg-[#edf4ec]"
            >
              Explore Our Fleet
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-[#dfe5dc] pt-6">
            <div className="pr-3">
              <p className="text-2xl font-extrabold tracking-tight text-[#164a39] sm:text-3xl">
                4–50+
              </p>
              <p className="mt-1 text-xs leading-5 text-[#68766e] sm:text-sm">
                Passenger options
              </p>
            </div>

            <div className="border-l border-[#dfe5dc] px-4">
              <p className="text-2xl font-extrabold tracking-tight text-[#164a39] sm:text-3xl">
                All
              </p>
              <p className="mt-1 text-xs leading-5 text-[#68766e] sm:text-sm">
                Travel occasions
              </p>
            </div>

            <div className="border-l border-[#dfe5dc] pl-4">
              <p className="text-2xl font-extrabold tracking-tight text-[#164a39] sm:text-3xl">
                Pune
              </p>
              <p className="mt-1 text-xs leading-5 text-[#68766e] sm:text-sm">
                Based and serving
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#e6edc9] sm:-right-6 sm:-top-6 sm:h-40 sm:w-40" />
          <div className="absolute -bottom-5 -left-4 h-28 w-28 rounded-full border-[18px] border-[#dce8d8] sm:-left-6" />

          <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_25px_70px_rgba(21,65,47,0.16)] sm:rounded-[36px] sm:p-3">
            <Image
              src="/images/hero-road.jpg"
              alt="A scenic road journey with Kushal Tours and Travels"
              width={2016}
              height={780}
              priority
              sizes="(max-width: 1024px) 100vw, 650px"
              className="block h-[300px] w-full rounded-[21px] object-cover object-center sm:h-[400px] sm:rounded-[27px] lg:h-[475px]"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf1dd] text-2xl">
                  <span aria-hidden="true">↗</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[#163f34]">
                    Your next trip starts here
                  </p>
                  <p className="mt-1 text-sm leading-5 text-[#65716a]">
                    Local rides, outstation trips and group travel
                  </p>
                </div>
                <a
                  href="tel:+918983343640"
                  aria-label="Call Kushal Tours and Travels"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#126344] text-xl text-white transition hover:bg-[#0c5036]"
                >
                  <span aria-hidden="true">☎</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-7 flex items-center justify-center gap-2 text-sm font-medium text-[#65716a]">
            <span className="h-2 w-2 rounded-full bg-[#8eb83b]" />
            From everyday rides to unforgettable road trips
          </div>
        </div>
      </div>
    </section>
  );
}
