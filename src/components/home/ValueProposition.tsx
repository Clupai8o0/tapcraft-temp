"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Copy from "../Copy";
import { Cpu, Wifi, Box, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Box className="w-6 h-6" />,
    title: "3D Printed",
    description: "Premium materials, precision crafted in our Melbourne studio with state-of-the-art printers.",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "NFC Enabled",
    description: "Embedded smart chips that share your digital content with a single tap from any smartphone.",
    accent: "from-cyan-500/20 to-transparent",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Fully Custom",
    description: "Every product is designed to your specifications. Your brand, your style, your vision.",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Updatable",
    description: "Change linked content anytime through our dashboard. No reprinting needed, ever.",
    accent: "from-emerald-500/20 to-transparent",
  },
];

export function ValueProposition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (videoRef.current) gsap.set(videoRef.current, { opacity: 0, scale: 0.98 });
      if (gridRef.current) gsap.set(gridRef.current.children, { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          if (videoRef.current) {
            gsap.to(videoRef.current, { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" });
          }
          if (gridRef.current) {
            gsap.to(gridRef.current.children, {
              opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.12, delay: 0.3,
            });
          }
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(30,115,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <Copy animateOnScroll>
            <p className="text-tapcraft-blue text-sm font-semibold tracking-widest uppercase mb-4">
              Why TapCraft
            </p>
          </Copy>
          <Copy animateOnScroll delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1]">
              Where Craft Meets
              <br />
              Smart Technology
            </h2>
          </Copy>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Large video card */}
          <div ref={videoRef} className="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10">
            <video
              className="w-full h-full object-cover min-h-[300px] lg:min-h-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/demo.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Feature cards */}
          <div ref={gridRef} className="contents">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-3xl bg-white/[0.04] border border-white/10 p-6 hover:border-tapcraft-blue/30 transition-all duration-500 overflow-hidden"
              >
                {/* Accent gradient */}
                <div
                  className={`absolute top-0 left-0 w-full h-32 bg-linear-to-b ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-tapcraft-blue/10 text-tapcraft-blue flex items-center justify-center mb-4 group-hover:bg-tapcraft-blue group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
