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


gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: "Book Series", price: "Explore keychains with your favorite book covers", image: "/dummy.jpg" },
  { id: 2, name: "Social Media Series", price: "Showcase your social media presence with custom keychains", image: "/dummy.jpg" },
  { id: 3, name: "Custom Icon Series", price: "Create unique keychains with your own icons", image: "/dummy.jpg" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Staggered card fade-in
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.set(cards, { opacity: 0, y: 40 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.15,
          delay: 1,
        });
      }

      // Buttons fade in
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.8 }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* LightRays background */}
      <div className="absolute inset-0 z-1">
        <LightRays
          raysOrigin="top-center"
          raysColor="#1E73FF"
          raysSpeed={0.8}
          lightSpread={1.2}
          rayLength={2.5}
          fadeDistance={1.2}
          saturation={1.0}
          className="h-full w-full"
        />
      </div>

      {/* Dark radial vignette for smooth edge transition */}
      <div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pb-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Heading with text reveal */}
          <Copy animateOnScroll={false} delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight tracking-tight mb-6">
              Tap Into the Future
            </h1>
          </Copy>

          {/* Subtitle with text reveal */}
          <Copy animateOnScroll={false} delay={0.5}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
              Custom NFC keychains, crafted in Melbourne. Share your world with
              a single tap.
            </p>
          </Copy>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ opacity: 0 }}
          >
            <Link
              href="/catalogue"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base font-semibold rounded-full bg-tapcraft-blue text-white hover:bg-blue-600 transition-colors no-underline shadow-lg shadow-blue-500/25"
            >
              Explore Catalogue
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/customize"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors no-underline backdrop-blur-sm"
            >
              <Paintbrush className="w-4 h-4" />
              Customize
            </Link>
          </div>
        </div>

        {/* Product Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/25 transition-[border-color] duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-base">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
