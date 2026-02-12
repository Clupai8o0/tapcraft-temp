"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
  initials: string;
  color: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    company: "Prestige Property Group",
    role: "Senior Real Estate Agent",
    quote:
      "The NFC-enabled property tags from TapCraft completely changed how we run open homes. Prospective buyers just tap their phone to see the full listing, floor plans, and inspection times. We've seen a 40% increase in follow-up enquiries.",
    initials: "SM",
    color: "bg-tapcraft-blue",
    rating: 5,
  },
  {
    name: "James Hartley",
    company: "Melbourne Fest Co.",
    role: "Event Director",
    quote:
      "We ordered 500 custom 3D-printed NFC badges for our annual festival. The quality was outstanding, and having attendees tap for schedules and artist bios eliminated the need for printed programs entirely. The team was incredibly responsive.",
    initials: "JH",
    color: "bg-blue-500",
    rating: 5,
  },
  {
    name: "Olivia Chen",
    company: "Aura Collective",
    role: "Brand Director",
    quote:
      "TapCraft helped us create smart product tags that link directly to our sustainability story and care instructions. Our customers love the interactive experience, and it elevated our packaging to a whole new level.",
    initials: "OC",
    color: "bg-emerald-500",
    rating: 5,
  },
];

const stats = [
  { label: "based on 47+ reviews", value: "4.9\u2605" },
  { label: "businesses served", value: "100+" },
  { label: "proudly local", value: "Made in Melbourne" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current!.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-tapcraft-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-tapcraft-dark">
            Trusted by Businesses Across Melbourne
          </h2>
          <p className="mt-4 text-tapcraft-gray max-w-2xl mx-auto text-lg">
            See what our clients have to say about working with TapCraft Studio.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ opacity: 0 }}
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 text-tapcraft-dark leading-relaxed text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-sm font-semibold`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-tapcraft-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-tapcraft-gray">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="bg-tapcraft-blue rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-blue-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
