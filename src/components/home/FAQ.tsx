"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is 3D + NFC printing?",
    answer:
      "3D + NFC printing combines custom 3D-printed physical products with embedded NFC (Near Field Communication) chips. This means your business card, product tag, or event badge is not only a beautifully crafted physical object, but also a smart device that can share digital content -- websites, contact info, portfolios, and more -- with a single tap from any smartphone.",
  },
  {
    question: "Why should I choose TapCraft over traditional printing?",
    answer:
      "Traditional printing gives you flat, static products. TapCraft creates three-dimensional, NFC-enabled pieces that are interactive, updatable, and unforgettable. Our products stand out physically and digitally, giving your brand a competitive edge. Plus, you can update the linked digital content anytime without reprinting.",
  },
  {
    question: "How long does production take?",
    answer:
      "Standard orders are produced and shipped within 5-7 business days. Rush orders can be completed in as fast as 2-3 business days. Larger bulk orders may require additional time, and we will provide an accurate timeline during the quoting process. We always keep you updated on progress.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across a wide range of industries including real estate, events and conferences, retail and e-commerce, hospitality, education, arts and design, and professional services. If your business can benefit from a smart, connected physical product, we can help. Get in touch and we will design something perfect for your use case.",
  },
  {
    question: "Can I update the NFC content after delivery?",
    answer:
      "Absolutely. One of the biggest advantages of NFC technology is that the linked content is fully updatable. Whether you want to change a URL, update your portfolio, or swap out event details, you can do it anytime through our management dashboard -- no need to reorder or reprint your products.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on the product type, complexity of the 3D design, materials chosen, and order quantity. We offer competitive per-unit pricing that decreases with larger orders. Custom designs start from $35, and we provide transparent quotes upfront so there are never any surprises. Contact us for a free quote.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship throughout Australia and internationally. Domestic orders typically arrive within 3-5 business days after production. International shipping timelines vary by destination but usually take 7-14 business days. All orders are carefully packaged to ensure your products arrive in perfect condition.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We use a range of premium 3D printing materials including PLA (plant-based biodegradable plastic), PETG (durable and chemical-resistant), resin (for ultra-fine detail work), and specialty materials like wood-fill and metal-infused filaments. We select the best material for each project based on durability requirements, aesthetics, and intended use.",
  },
];

function FAQItemComponent({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      gsap.set(contentRef.current, { display: "block" });
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.inOut" }
      );
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          if (contentRef.current) gsap.set(contentRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotation: isOpen ? 180 : 0,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium text-tapcraft-dark pr-4 group-hover:text-tapcraft-blue transition-colors">
          {item.question}
        </span>
        <span className="flex-shrink-0 text-tapcraft-gray">
          <svg
            ref={iconRef}
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, display: "none" }}>
        <p className="pb-5 text-tapcraft-gray leading-relaxed pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-tapcraft-light">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={contentRef} style={{ opacity: 0 }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tapcraft-dark">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-tapcraft-gray text-lg">
              Everything you need to know about our 3D + NFC products and
              process.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItemComponent
                key={index}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
