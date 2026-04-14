"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrnamentDivider from "./ui/OrnamentDivider";

gsap.registerPlugin(ScrollTrigger);

export default function TaglineHero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax on background
            gsap.fromTo(
                ".tagline-bg",
                { y: -40 },
                {
                    y: 40,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            // Text reveal
            gsap.fromTo(
                ".tagline-content",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".tagline-content",
                        start: "top 85%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-32 md:py-44 px-6 overflow-hidden"
            style={{ background: "var(--forest)" }}
        >
            {/* Background image with parallax */}
            <div className="tagline-bg absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1400&h=800&fit=crop&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.15, filter: "saturate(0.5)" }}
                    aria-hidden="true"
                />
            </div>

            {/* Concentric rings */}
            <div className="concentric-rings">
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
            </div>

            {/* Content */}
            <div className="tagline-content relative z-10 max-w-3xl mx-auto text-center">
                <OrnamentDivider light />
                <h2
                    className="font-serif italic text-3xl md:text-5xl lg:text-6xl font-light my-8 leading-tight"
                    style={{ color: "var(--ivory)" }}
                >
                    For those who live devotionally.
                </h2>
                <OrnamentDivider light />
            </div>
        </section>
    );
}
