"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Copy from "../Copy";

gsap.registerPlugin(ScrollTrigger);

export function ValueProposition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (videoRef.current) gsap.set(videoRef.current, { opacity: 0, y: 40 });
      if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          if (videoRef.current) {
            gsap.to(videoRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" });
          }
          if (ctaRef.current) {
            gsap.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 });
          }
        },
      });
    },
    { scope: sectionRef }
  );

  return (
		<section ref={sectionRef} className="py-20 md:py-28 bg-black">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16">
					<Copy animateOnScroll>
						<h2 className="text-5xl md:text-6xl text-tapcraft-white font-normal">
							Custom Made to Fit Your Needs
						</h2>
					</Copy>
				</div>

				<div ref={videoRef} className="mb-16">
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

				<div ref={ctaRef} className="text-center">
					<a
						href="/catalogue"
						className="inline-block px-8 py-4 bg-tapcraft-blue text-tapcraft-white text-lg font-medium rounded-full hover:bg-tapcraft-blue/90 transition-[background-color] duration-300"
					>
						View Catalogue
					</a>
				</div>
			</div>
		</section>
	);
}
