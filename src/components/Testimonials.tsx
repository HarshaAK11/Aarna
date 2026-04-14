"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
    {
        quote:
            "I haven't worried about flowers for my puja in three months. Aarna has made my mornings peaceful.",
        name: "Lakshmi R.",
        city: "Mangalore",
    },
    {
        quote:
            "The quality is unlike anything from the local market. And it arrives before I wake up.",
        name: "Suresh K.",
        city: "Udupi",
    },
    {
        quote:
            "I gift this to my mother every month. She calls it the best thing anyone has ever done for her.",
        name: "Priya M.",
        city: "Bangalore",
    },
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".test-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".test-header", start: "top 85%" },
                }
            );

            gsap.fromTo(
                ".test-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".test-grid", start: "top 80%" },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 px-6"
            style={{ background: "var(--cream)" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="test-header text-center mb-16">
                    <p className="chapter-label">Chapter Six</p>
                    <h2
                        className="font-serif text-3xl md:text-5xl font-light"
                        style={{ color: "var(--ink)" }}
                    >
                        From our subscribers
                    </h2>
                </div>

                {/* Testimonial cards */}
                <div className="test-grid grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className="test-card p-8 bg-white border-t-2"
                            style={{
                                borderColor: "var(--gold)",
                                boxShadow: "0 2px 16px rgba(14,30,20,0.04)",
                            }}
                        >
                            <blockquote
                                className="font-serif italic text-base md:text-lg font-light leading-relaxed mb-6"
                                style={{ color: "var(--ink)" }}
                            >
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <div>
                                <p
                                    className="font-sans text-sm font-normal"
                                    style={{ color: "var(--ink)" }}
                                >
                                    {t.name}
                                </p>
                                <p
                                    className="font-sans text-xs font-light"
                                    style={{ color: "var(--taupe)" }}
                                >
                                    {t.city}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
