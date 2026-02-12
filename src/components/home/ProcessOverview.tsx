"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Design",
    description:
      "Share your vision with our team. We create a custom 3D model tailored to your brand, product, or event needs.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Print",
    description:
      "Your design is precision-printed using premium materials in our Melbourne studio with state-of-the-art 3D printers.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Integrate",
    description:
      "We embed and program NFC chips into your product, linking them to your chosen digital content or platform.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Quality-checked and carefully packaged, your smart products are delivered ready to impress and connect.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
];

export function ProcessOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Animate the badge
      tl.fromTo(
        ".process-badge",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );

      // Animate heading
      tl.fromTo(
        ".process-heading",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

      // Animate the divider line
      tl.fromTo(
        ".process-divider",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
        "-=0.4"
      );

      // Stagger the step cards
      tl.fromTo(
        ".process-step",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.12,
        },
        "-=0.4"
      );

      // Animate the CTA bar
      tl.fromTo(
        ".process-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header area */}
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="process-badge flex items-center gap-2 mb-4" style={{ opacity: 0 }}>
              <span className="w-2.5 h-2.5 rounded-full bg-tapcraft-blue" />
              <span className="text-xs font-semibold tracking-widest uppercase text-tapcraft-blue">
                4 Simple Steps
              </span>
            </div>
            <h2
              className="process-heading text-4xl md:text-5xl font-semibold text-tapcraft-dark leading-tight tracking-tight"
              style={{ opacity: 0 }}
            >
              Effortless Process,
              <br />
              Continuous Quality
            </h2>
          </div>
          <div
            className="process-divider hidden md:block flex-1 max-w-sm h-px bg-linear-to-r from-tapcraft-dark/20 to-transparent origin-left ml-8 mb-3"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="process-step group relative rounded-2xl bg-gray-50 border border-gray-200 p-6 flex flex-col justify-between min-h-65 hover:bg-tapcraft-blue hover:border-tapcraft-blue transition-all duration-300 cursor-default"
              style={{ opacity: 0 }}
            >
              {/* Icon + Step number */}
              <div>
                <div className="w-9 h-9 rounded-lg bg-tapcraft-blue/10 text-tapcraft-blue flex items-center justify-center mb-3 group-hover:bg-white/15 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="text-3xl font-bold text-tapcraft-dark/80 group-hover:text-white/90 block mb-1 transition-colors duration-300">
                  {step.number}.
                </span>
                <h3 className="text-xl font-semibold text-tapcraft-dark group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
              </div>

              {/* Description at bottom */}
              <p className="text-sm text-tapcraft-gray leading-relaxed mt-6 group-hover:text-white/70 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div
          className="process-cta relative flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gray-50 border border-gray-200 px-6 py-4"
          style={{ opacity: 0 }}
        >
          <p className="text-tapcraft-gray text-sm">
            Trusted by businesses that choose{" "}
            <span className="text-tapcraft-dark font-semibold">
              Smart Products
            </span>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 h-11 px-7 rounded-full bg-tapcraft-blue text-white text-sm font-semibold hover:bg-blue-600 transition-colors no-underline shadow-lg shadow-tapcraft-blue/25 shrink-0"
          >
            <span className="w-7 h-7 rounded-full border-2 border-white/40 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
            Start Now
          </Link>
        </div>
      </div>
    </section>
  );
}
