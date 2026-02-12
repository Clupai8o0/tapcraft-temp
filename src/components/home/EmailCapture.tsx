"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/shared/Button";

gsap.registerPlugin(ScrollTrigger);

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      console.log("Newsletter signup:", email);
      setSubmitted(true);
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    if (!formRef.current || submitted) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [submitted]);

  useEffect(() => {
    if (submitted && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [submitted]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-tapcraft-blue">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {!submitted ? (
          <div ref={formRef} style={{ opacity: 0 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get Design Updates & Innovation Tips
            </h2>
            <p className="mt-4 text-blue-200 text-lg max-w-xl mx-auto">
              Join our newsletter for the latest in 3D printing innovation, NFC
              technology trends, and exclusive offers from the TapCraft team.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full flex-1 h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all"
              />
              <Button
                type="submit"
                loading={loading}
                className="w-full sm:w-auto bg-white text-tapcraft-blue hover:bg-blue-100 font-semibold"
                size="lg"
              >
                Subscribe
              </Button>
            </form>

            <p className="mt-4 text-blue-300/70 text-xs">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        ) : (
          <div ref={successRef} style={{ opacity: 0 }}>
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">
              You&apos;re In!
            </h2>
            <p className="mt-3 text-blue-200 text-lg">
              Thanks for subscribing. Keep an eye on your inbox for design
              inspiration and the latest from TapCraft Studio.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
