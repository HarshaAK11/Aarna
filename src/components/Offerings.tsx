"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrnamentDivider from "./ui/OrnamentDivider";

gsap.registerPlugin(ScrollTrigger);

const OFFERINGS = [
    {
        title: "Daily Flower Subscription",
        desc: "Fresh temple flowers delivered every morning. Curated weekly by bloom and season.",
        img: "/images/offering-daily.png",
        alt: "Fresh marigold flowers",
    },
    {
        title: "Ritual Essentials Box",
        desc: "Agarbatti, camphor, kumkum, vibhuti — restocked before you run out.",
        img: "/images/offering-ritual.png",
        alt: "Incense and ritual essentials",
    },
    {
        title: "Festival Collections",
        desc: "Specially curated arrangements for Navratri, Onam, Deepavali, and more.",
        img: "/images/offering-festival.png",
        alt: "Festival flower arrangements",
    },
    {
        id: "gifting",
        title: "Gift a Ritual",
        desc: "Send the gift of daily devotion to a family you love. Includes a handwritten card.",
        img: "/images/offering-gift.png",
        alt: "Gift wrapped flowers",
    },
];

export default function Offerings() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header reveal
            gsap.fromTo(
                ".offerings-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".offerings-header",
                        start: "top 85%",
                    },
                }
            );

            // Cards stagger
            gsap.fromTo(
                ".offering-card",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".offerings-grid",
                        start: "top 80%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="offerings"
            className="py-24 md:py-32 px-6"
            style={{ background: "var(--ivory)" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="offerings-header text-center mb-16">
                    <p className="chapter-label">Chapter Two</p>
                    <h2
                        className="font-serif text-3xl md:text-5xl font-light mb-6"
                        style={{ color: "var(--ink)" }}
                    >
                        What Aarna Offers
                    </h2>
                    <div
                        className="h-px w-16 mx-auto"
                        style={{ background: "var(--gold)" }}
                    />
                </div>

                {/* 2×2 Grid */}
                <div className="offerings-grid grid md:grid-cols-2 gap-8">
                    {OFFERINGS.map((item, i) => (
                        <div
                            key={i}
                            id={item.id}
                            className="offering-card group relative overflow-hidden bg-white cursor-pointer transition-shadow duration-300"
                            style={{
                                boxShadow: "0 2px 20px rgba(14,30,20,0.05)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow =
                                    "0 4px 30px rgba(201,168,108,0.15)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow =
                                    "0 2px 20px rgba(14,30,20,0.05)";
                            }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                                {/* Gold accent line */}
                                <div
                                    className="absolute top-0 left-0 w-12 h-0.5"
                                    style={{ background: "var(--gold)" }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <h3
                                    className="font-serif text-xl md:text-2xl font-light mb-3"
                                    style={{ color: "var(--ink)" }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="font-sans font-light text-sm leading-relaxed mb-4"
                                    style={{ color: "var(--taupe)" }}
                                >
                                    {item.desc}
                                </p>
                                <span
                                    className="font-sans text-xs tracking-wider uppercase transition-colors duration-200"
                                    style={{ color: "var(--gold)" }}
                                >
                                    Learn more →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <OrnamentDivider />
                </div>
            </div>
        </section>
    );
}
