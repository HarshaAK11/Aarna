"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
    {
        num: "01",
        title: "Freshness First",
        desc: "Flowers sourced same-day from farms within 50km. Never cold-stored, never compromised.",
    },
    {
        num: "02",
        title: "Zero Waste Promise",
        desc: "Every petal is composted after use. We are the only sacred brand that closes the loop.",
    },
    {
        num: "03",
        title: "Subscription Reliability",
        desc: "Miss a day? We deliver double the next. Your ritual never pauses.",
    },
    {
        num: "04",
        title: "Consciously Curated",
        desc: "Each week's selection is chosen by our in-house ritual curator, not an algorithm.",
    },
];

export default function Differentiators() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".diff-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".diff-header", start: "top 85%" },
                }
            );

            gsap.fromTo(
                ".diff-card",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".diff-grid", start: "top 80%" },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 px-6"
            style={{ background: "var(--ivory)" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="diff-header text-center mb-16">
                    <p className="chapter-label">Chapter Four</p>
                    <h2
                        className="font-serif text-3xl md:text-5xl font-light mb-6"
                        style={{ color: "var(--ink)" }}
                    >
                        Why Aarna
                    </h2>
                    <div
                        className="h-px w-16 mx-auto"
                        style={{ background: "var(--gold)" }}
                    />
                </div>

                {/* 2×2 grid */}
                <div className="diff-grid grid md:grid-cols-2 gap-8">
                    {FEATURES.map((feature, i) => (
                        <div
                            key={i}
                            className="diff-card relative p-8 md:p-10 border"
                            style={{ borderColor: "var(--rule)" }}
                        >
                            {/* Gold accent line */}
                            <div
                                className="absolute top-0 left-0 w-12 h-0.5"
                                style={{ background: "var(--gold)" }}
                            />

                            {/* Ghost number */}
                            <span
                                className="block font-serif text-5xl md:text-6xl font-light mb-4 select-none"
                                style={{ color: "rgba(201,168,108,0.12)" }}
                            >
                                {feature.num}
                            </span>

                            <h3
                                className="font-serif text-xl md:text-2xl font-light mb-3"
                                style={{ color: "var(--ink)" }}
                            >
                                {feature.title}
                            </h3>

                            <p
                                className="font-sans font-light text-sm leading-relaxed"
                                style={{ color: "var(--taupe)" }}
                            >
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
