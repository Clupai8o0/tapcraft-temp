"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Copy";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Innovation",
    description:
      "We combine the latest in 3D printing technology with NFC chip integration, creating products that exist at the intersection of physical craftsmanship and digital intelligence.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Craftsmanship",
    description:
      "Every piece is precision-engineered and hand-finished in our Melbourne studio. We obsess over material quality, structural integrity, and fine details so you never have to.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a3.12 3.12 0 114.41-4.42l.68.69.69-.69a3.12 3.12 0 014.41 0 3.12 3.12 0 010 4.42l-5.1 5.1zM21.13 7.2l-2.33-2.33M15.54 12.79l5.59-5.59M11.42 15.17L4 22.59M7.17 19.41l2.83-2.83" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L4.83 8.58a3.12 3.12 0 010-4.42 3.12 3.12 0 014.42 0l.68.69" />
      </svg>
    ),
  },
  {
    title: "Connection",
    description:
      "Our NFC-enabled products create seamless bridges between your physical brand touchpoints and your digital ecosystem -- websites, apps, social media, and beyond.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.34 8.374" />
      </svg>
    ),
  },
];

export function ValueProposition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );

      if (itemsRef.current) {
        gsap.fromTo(
          itemsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.15,
            scrollTrigger: { trigger: itemsRef.current, start: "top 85%", once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
		<section ref={sectionRef} className="py-20 md:py-28 bg-black">
			<div className="max-w-6xl mx-auto px-6">
				<div
					ref={headingRef}
					className="text-center mb-16"
					style={{ opacity: 0 }}
				>
					<Copy animateOnScroll>
						<h2 className="text-5xl md:text-6xl text-tapcraft-white font-normal">
							Custom Made to Fit Your Needs
						</h2>
					</Copy>
				</div>

				<div className="mb-16">
					<video
						className="w-full max-w-6xl mx-auto rounded-2xl"
						autoPlay
						muted
						loop
						playsInline
						preload="metadata"
					>
						<source src="/demo.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</section>
	);
}
