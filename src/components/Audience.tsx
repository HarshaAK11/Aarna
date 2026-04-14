"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SEGMENTS = [
    {
        label: "Primary",
        title: "Daily Ritual Households",
        details: "28–55 yrs · Devout, quality-conscious · Mangalore–Udupi corridor",
    },
    {
        label: "Secondary",
        title: "Urban Professionals",
        details: "25–40 yrs · Want ritual, not the effort of sourcing it",
    },
    {
        label: "Occasion",
        title: "Gifters & Events",
        details: "Weddings, festivals, corporate, housewarming",
    },
    {
        label: "Future",
        title: "Global Indian",
        details: "Diaspora in UAE, UK, Singapore — gifting home",
    },
];

export default function Audience() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".aud-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".aud-header", start: "top 85%" },
                }
            );

            gsap.fromTo(
                ".aud-card",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".aud-grid", start: "top 80%" },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 px-6"
            style={{ background: "var(--ink)" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="aud-header text-center mb-16">
                    <p className="chapter-label">Chapter Five</p>
                    <h2
                        className="font-serif text-3xl md:text-5xl font-light mb-6"
                        style={{ color: "var(--ivory)" }}
                    >
                        Made for those who know
                    </h2>
                    <div
                        className="h-px w-16 mx-auto"
                        style={{ background: "var(--gold)" }}
                    />
                </div>

                {/* 4-column grid */}
                <div className="aud-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SEGMENTS.map((seg, i) => (
                        <div
                            key={i}
                            className="aud-card p-6 md:p-8 border"
                            style={{ borderColor: "var(--rule)" }}
                        >
                            <span
                                className="label-caps block mb-4"
                                style={{ color: "var(--gold)" }}
                            >
                                {seg.label}
                            </span>
                            <h3
                                className="font-serif text-lg md:text-xl font-light mb-3"
                                style={{ color: "var(--ivory)" }}
                            >
                                {seg.title}
                            </h3>
                            <p
                                className="font-sans font-light text-xs leading-relaxed"
                                style={{ color: "var(--taupe-lt)" }}
                            >
                                {seg.details}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
