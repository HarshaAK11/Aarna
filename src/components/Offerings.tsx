"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrnamentDivider from "./ui/OrnamentDivider";

gsap.registerPlugin(ScrollTrigger);

const OFFERINGS = [
    {
        category: "Subscription",
        title: "Daily Flower Subscription",
        desc: "Fresh temple flowers delivered every morning. Curated weekly by bloom and season.",
        img: "/images/offering-daily.png",
        alt: "Fresh marigold flowers",
    },
    {
        category: "Essentials",
        title: "Ritual Essentials Box",
        desc: "Agarbatti, camphor, kumkum, vibhuti — restocked before you run out.",
        img: "/images/offering-ritual.png",
        alt: "Incense and ritual essentials",
    },
    {
        category: "Collections",
        title: "Festival Collections",
        desc: "Specially curated arrangements for Navratri, Onam, Deepavali, and more.",
        img: "/images/offering-festival.png",
        alt: "Festival flower arrangements",
    },
    {
        id: "gifting",
        category: "Gifting",
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
            // Header reveal (Synchronized)
            gsap.fromTo(
                ".offerings-header",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".offerings-header",
                        start: "top 90%",
                    },
                }
            );

            // Cards reveal (Simultaneous, no stagger)
            gsap.fromTo(
                ".offering-card",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".offerings-grid",
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
            id="offerings"
            className="py-24 md:py-0 px-6"
            style={{ background: "var(--ivory)" }}
        >
            <div className="max-w-full mx-auto">
                {/* Header */}
                <div className="offerings-header mb-16 border-b border-[rgba(0,0,0,0.1)] pb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-1.5 h-1.5 bg-[var(--ink)] rounded-full"></div>
                        <p className="text-xs tracking-[0.2em] font-sans font-light uppercase text-[var(--taupe)]">
                            Chapter Two
                        </p>
                    </div>
                    <h1
                        className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight"
                        style={{ color: "var(--ink)", fontWeight: 700 }}
                    >
                        What Aarna offers
                    </h1>
                </div>

                {/* 4-column Grid */}
                <div className="offerings-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                    {OFFERINGS.map((item, i) => (
                        <div
                            key={i}
                            id={item.id}
                            className="offering-card group flex flex-col"
                        >
                            {/* Card Header (Text Above) */}
                            <div className="mb-6">
                                <p className="text-xs tracking-[0.2em] uppercase mb-2 font-sans font-light text-[var(--taupe)]">
                                    {item.category}
                                </p>
                                <h3
                                    className="font-serif text-2xl flex items-center justify-between"
                                    style={{ color: "var(--ink)", fontWeight: 500 }}
                                >
                                    <span>{item.title}</span>
                                    <span className="text-xl opacity-40 transition-opacity group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                                        ↗
                                    </span>
                                </h3>
                            </div>

                            {/* Image Container */}
                            <div className="relative overflow-hidden bg-[var(--cream)]" style={{ aspectRatio: "9/16" }}>
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.1]"
                                />
                                {/* Bottom overlay for desc or hover effect */}
                                <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/5 transition-colors duration-500" />
                            </div>

                            {/* Optional Description (placed subtle below) */}
                            <p className="mt-4 font-sans font-light text-sm leading-relaxed max-w-[95%]" style={{ color: "var(--taupe)" }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24">
                    <OrnamentDivider />
                </div>
            </div>
        </section>
    );
}
