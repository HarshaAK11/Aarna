"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    {
        num: "01",
        title: "Choose your ritual",
        desc: "Select a subscription plan tailored to your household's needs.",
    },
    {
        num: "02",
        title: "We curate, you pray",
        desc: "Our team sources the freshest flowers daily from local farms.",
    },
    {
        num: "03",
        title: "Delivered before dawn",
        desc: "At your door before your morning puja. Every single day.",
    },
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hiw-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".hiw-header", start: "top 85%" },
                }
            );

            gsap.fromTo(
                ".hiw-step",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".hiw-grid", start: "top 80%" },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="how-it-works"
            className="py-24 md:py-32 px-6"
            style={{ background: "var(--forest)" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="hiw-header text-center mb-16 md:mb-20">
                    <p className="chapter-label">Chapter Three</p>
                    <h2
                        className="font-serif text-3xl md:text-5xl font-light"
                        style={{ color: "var(--ivory)" }}
                    >
                        The Ritual, Made Simple
                    </h2>
                </div>

                {/* 3-step grid */}
                <div className="hiw-grid grid md:grid-cols-3 gap-8 md:gap-12">
                    {STEPS.map((step, i) => (
                        <div key={i} className="hiw-step relative text-center px-4">
                            {/* Ghost number */}
                            <span
                                className="block font-serif text-[6rem] md:text-[8rem] font-light leading-none select-none"
                                style={{ color: "rgba(201,168,108,0.08)" }}
                            >
                                {step.num}
                            </span>

                            <h3
                                className="font-serif text-xl md:text-2xl font-light mb-4 -mt-8"
                                style={{ color: "var(--ivory)" }}
                            >
                                {step.title}
                            </h3>

                            <p
                                className="font-sans font-light text-sm leading-relaxed"
                                style={{ color: "var(--taupe-lt)" }}
                            >
                                {step.desc}
                            </p>

                            {/* Divider between steps (not after last) */}
                            {i < STEPS.length - 1 && (
                                <div
                                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24"
                                    style={{ background: "var(--rule)" }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
