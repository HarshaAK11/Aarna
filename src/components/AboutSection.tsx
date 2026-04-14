"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".about-reveal").forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-24 md:py-32 px-6"
            style={{ background: "var(--ivory)" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Two-column layout */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                    {/* Left column */}
                    <div>
                        <p className="about-reveal chapter-label">Chapter One</p>
                        <h2
                            className="about-reveal font-serif text-3xl md:text-5xl font-light leading-tight mb-6"
                            style={{ color: "var(--ink)" }}
                        >
                            Sacred living,
                            <br />
                            delivered daily.
                        </h2>
                        <div
                            className="about-reveal h-px w-16"
                            style={{ background: "var(--gold)" }}
                        />
                    </div>

                    {/* Right column */}
                    <div className="flex items-center">
                        <p
                            className="about-reveal font-sans font-light text-base md:text-lg leading-[2.05]"
                            style={{ color: "var(--ink)" }}
                        >
                            Aarna was born from a simple observation: the most devout
                            households in India spend more time sourcing flowers than praying
                            with them. We exist to change that. Every morning, before your
                            household stirs, Aarna ensures your altar is ready — with the
                            freshest flowers, curated for the season and your tradition.
                        </p>
                    </div>
                </div>

                {/* Pull quote */}
                <div
                    className="about-reveal mt-16 md:mt-24 py-8 px-8 md:px-12 border-l-2"
                    style={{
                        background: "var(--cream)",
                        borderColor: "var(--gold)",
                    }}
                >
                    <blockquote
                        className="font-serif italic text-xl md:text-2xl font-light"
                        style={{ color: "var(--ink)" }}
                    >
                        &ldquo;We do not sell flowers. We sustain a ritual.&rdquo;
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
