"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Paintbrush } from "lucide-react";
import LightRays from "@/components/LightRays";
import Copy from "@/components/Copy";
import GradientText from "@/components/GradientText";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: "Book Series", desc: "Your favorite book covers, reimagined as keychains", image: "/dummy.jpg" },
  { id: 2, name: "Social Media Series", desc: "Showcase your digital presence physically", image: "/dummy.jpg" },
  { id: 3, name: "Custom Icon Series", desc: "Unique icons crafted just for you", image: "/dummy.jpg" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (badgeRef.current) {
        gsap.set(badgeRef.current, { opacity: 0, y: -20 });
        gsap.to(badgeRef.current, {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.1,
        });
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.set(cards, { opacity: 0, y: 60, scale: 0.95 });
        gsap.to(cards, {
          opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out", stagger: 0.2, delay: 1.2,
        });
      }

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.9 }
        );
      }

      if (scrollIndicatorRef.current) {
        gsap.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: 2 }
        );
        gsap.to(scrollIndicatorRef.current, {
          y: 8, duration: 1.2, ease: "power1.inOut", yoyo: true, repeat: -1,
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-black"
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* LightRays background */}
      <div className="absolute inset-0 z-1">
        <LightRays
          raysOrigin="top-left"
          raysColor="#1E73FF"
          raysSpeed={0.6}
          lightSpread={1.5}
          rayLength={3}
          fadeDistance={1.5}
          saturation={1.2}
          className="h-full w-full"
        />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 40%, transparent 10%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Main content - asymmetric layout */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Top badge */}
        <div ref={badgeRef} className="mb-8" style={{ opacity: 0 }}>
          <GradientText
            colors={["#1E73FF", "#60A5FA", "#ffffff", "#60A5FA", "#1E73FF"]}
            animationSpeed={6}
            showBorder
            className="text-sm font-semibold tracking-wider uppercase"
          >
            Melbourne&apos;s Creative Tech Studio
          </GradientText>
        </div>

        {/* Two-column hero layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Typography */}
          <div>
            <Copy animateOnScroll={false} delay={0.2}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter mb-6">
                Tap Into
                <br />
                <span className="text-gradient">the Future</span>
              </h1>
            </Copy>

            <Copy animateOnScroll={false} delay={0.5}>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mb-10">
                We craft smart NFC keychains and products that bridge your physical
                and digital worlds. Designed and 3D-printed in Melbourne.
              </p>
            </Copy>

            {/* Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-start gap-4"
              style={{ opacity: 0 }}
            >
              <Link
                href="/catalogue"
                className="group inline-flex items-center justify-center gap-3 h-14 px-8 text-base font-semibold rounded-full bg-tapcraft-blue text-white hover:bg-blue-600 transition-colors no-underline shadow-lg shadow-blue-500/30"
              >
                Explore Catalogue
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/customize"
                className="inline-flex items-center justify-center gap-3 h-14 px-8 text-base font-semibold rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors no-underline backdrop-blur-sm"
              >
                <Paintbrush className="w-4 h-4" />
                Design Your Own
              </Link>
            </div>
          </div>

          {/* Right: Stacked product cards with overlap */}
          <div
            ref={cardsRef}
            className="relative flex flex-col gap-4 lg:pl-8"
          >
            {products.map((product, i) => (
              <div
                key={product.id}
                className="group relative rounded-2xl overflow-hidden bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:border-tapcraft-blue/50 transition-all duration-500 flex items-center gap-5 p-3 pr-6"
                style={{ marginLeft: i * 16 }}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">{product.name}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{product.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600 ml-auto shrink-0 group-hover:text-tapcraft-blue group-hover:translate-x-1 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
