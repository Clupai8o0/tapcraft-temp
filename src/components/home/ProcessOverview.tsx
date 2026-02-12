"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: 1,
    title: "Design",
    description:
      "Share your vision with our team. We create a custom 3D model tailored to your brand, product, or event needs.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Print",
    description:
      "Your design is precision-printed using premium materials in our Melbourne studio with state-of-the-art 3D printers.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Integrate",
    description:
      "We embed and program NFC chips into your product, linking them to your chosen digital content or platform.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Deliver",
    description:
      "Quality-checked and carefully packaged, your smart products are delivered ready to impress and connect.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
];

export function ProcessOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stepsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stepsRef.current!.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tapcraft-dark">
            How It Works
          </h2>
          <p className="mt-4 text-tapcraft-gray max-w-2xl mx-auto text-lg">
            From concept to delivery, our streamlined process makes creating
            NFC-enabled products simple and seamless.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[3.25rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-tapcraft-blue/30 via-tapcraft-blue/60 to-tapcraft-blue/30" />
          <div className="md:hidden absolute top-8 bottom-8 left-8 w-0.5 bg-gradient-to-b from-tapcraft-blue/30 via-tapcraft-blue/60 to-tapcraft-blue/30" />

          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex md:flex-col items-start md:items-center text-left md:text-center"
                style={{ opacity: 0 }}
              >
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-tapcraft-blue text-white flex items-center justify-center shadow-lg shadow-tapcraft-blue/25">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <div className="ml-6 md:ml-0 md:mt-6">
                  <div className="w-12 h-12 rounded-lg bg-tapcraft-blue/10 text-tapcraft-blue flex items-center justify-center mx-0 md:mx-auto mb-3">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-tapcraft-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-tapcraft-gray leading-relaxed max-w-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
