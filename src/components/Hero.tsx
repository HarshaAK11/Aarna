"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import OrnamentDivider from "./ui/OrnamentDivider";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            tl.fromTo(
                ".hero-label",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
            )
                .fromTo(
                    ".hero-heading",
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 1 },
                    "-=0.4"
                )
                .fromTo(
                    ".hero-sub",
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.5"
                )
                .fromTo(
                    ".hero-ornament",
                    { opacity: 0, scaleX: 0 },
                    { opacity: 1, scaleX: 1, duration: 0.8 },
                    "-=0.4"
                )
                .fromTo(
                    ".hero-ctas",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.7 },
                    "-=0.3"
                )
                .fromTo(
                    ".hero-image",
                    { opacity: 0, y: 60 },
                    { opacity: 1, y: 0, duration: 1 },
                    "-=0.3"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
            style={{ background: "var(--ink)" }}
        >
            {/* Concentric rings */}
            <div className="concentric-rings">
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
            </div>

            {/* Ambient glow */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(201,168,108,0.04) 0%, transparent 70%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <p
                    className="hero-label label-caps mb-6 opacity-0"
                    style={{ color: "var(--gold)" }}
                >
                    Est. 2025 &middot; Mangalore, India
                </p>

                <h1
                    className="hero-heading font-serif italic font-light text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-8 opacity-0"
                    style={{ color: "var(--ivory)" }}
                >
                    Fresh flowers.
                    <br />
                    Daily ritual. Delivered.
                </h1>

                <p
                    className="hero-sub font-sans font-light text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed opacity-0"
                    style={{ color: "var(--taupe-lt)" }}
                >
                    Aarna brings curated temple flowers and sacred essentials to your
                    door — every morning, every day.
                </p>

                <div className="hero-ornament opacity-0">
                    <OrnamentDivider light />
                </div>

                <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 opacity-0">
                    <a
                        href="#waitlist"
                        className="font-sans text-xs tracking-[0.18em] uppercase px-8 py-3 transition-all duration-300"
                        style={{
                            background: "var(--gold)",
                            color: "var(--ink)",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "var(--gold-lt)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "var(--gold)")
                        }
                        aria-label="Join the Waitlist"
                    >
                        Join the Waitlist
                    </a>
                    <a
                        href="#offerings"
                        className="font-sans text-xs tracking-[0.18em] uppercase px-8 py-3 border transition-all duration-300"
                        style={{
                            borderColor: "var(--gold)",
                            color: "var(--gold)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(201,168,108,0.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                        }}
                        aria-label="Explore Offerings"
                    >
                        Explore Offerings
                    </a>
                </div>
            </div>

            {/* Hero editorial image */}
            <div className="hero-image relative z-10 w-full max-w-5xl mx-auto mt-20 opacity-0">
                <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: "16/9" }}
                >
                    <img
                        src="/images/hero-flowers.png"
                        alt="Sacred flowers arranged for morning ritual"
                        className="w-full h-full object-cover"
                        style={{ filter: "brightness(0.85) saturate(0.9)" }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to bottom, transparent 60%, var(--ink))",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
