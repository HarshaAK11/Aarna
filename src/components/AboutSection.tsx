"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const img1Ref = useRef<HTMLDivElement>(null);
    const img2Ref = useRef<HTMLDivElement>(null);
    const img3Ref = useRef<HTMLDivElement>(null);
    const img4Ref = useRef<HTMLDivElement>(null);
    const subHeadingRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { duration: 1.2, ease: "power3.out" },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "40% 50%",
                    once: true,
                }
            });

            gsap.set(subHeadingRef.current, { opacity: 0 })

            // Initial scrambled state to final composed state
            tl.fromTo(img1Ref.current, { y: 0 }, { y: 0 }, 0)
                .fromTo(img2Ref.current, { y: 320 }, { y: 0 }, 0)
                .fromTo(img3Ref.current, { y: 880 }, { y: 0 }, 0)
                .fromTo(img4Ref.current, { y: 200 }, { y: 0 }, 0)
                .fromTo('.heading-1', { y: '-100px' }, { y: 0 }, 0)
                .fromTo('.heading-2', { y: '100px' }, { y: 0 }, 0)
                .fromTo('.heading-3', { y: '-360px' }, { y: 0 }, 0)
                .fromTo(descriptionRef.current, { y: '100px' }, { y: 0 }, 0)
                .to(subHeadingRef.current, { opacity: 1, ease: 'power2.out', delay: 1 }, 0)

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-24 md:py-32 px-6 bg-[var(--ivory)] overflow-hidden"
        >
            {/* ── IMAGE MOSAIC ── full bleed, no horizontal padding */}
            <div className="w-full">
                <div className="flex gap-2 md:gap-12 items-stretch w-full" style={{ height: "clamp(320px, 55vw, 600px)" }}>

                    {/* Image 1 — tall, left-aligned, full height */}
                    <div ref={img1Ref} className="relative overflow-hidden group flex-[1.4] self-end bg-[var(--cream)] h-[90%]">
                        <img
                            src="/images/About1.png"
                            alt="Sacred flowers at dawn"
                            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-[var(--ink)]/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Image 2 — small, vertically centered (doesn't touch top/bottom) */}
                    <div ref={img2Ref} className="relative overflow-hidden group flex-[1.1] self-end bg-[var(--cream)]"
                        style={{ height: "45%" }}
                    >
                        <img
                            src="/images/About2.png"
                            alt="Curated ritual essentials"
                            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-[var(--ink)]/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Image 3 — tallest, largest, full height */}
                    <div ref={img3Ref} className="relative overflow-hidden group flex-[1.5] self-stretch bg-[var(--cream)]">
                        <img
                            src="/images/About3.png"
                            alt="The Aarna morning ritual"
                            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-[var(--ink)]/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Image 4 — medium, slightly shorter, bottom aligned */}
                    <div ref={img4Ref} className="relative overflow-hidden group flex-[0.9] self-end bg-[var(--cream)]"
                        style={{ height: "70%" }}
                    >
                        <img
                            src="/images/About4.png"
                            alt="Fresh seasonal blooms"
                            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-[var(--ink)]/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                </div>
            </div>

            {/* ── CONTENT GRID ── */}
            <div className="max-w-full mt-20 md:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                    {/* Main Heading */}
                    <div className="md:col-span-9">
                        <div ref={subHeadingRef} className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-[var(--ink)] rounded-full"></div>
                            <p className="text-sm text-[var(--taupe)] tracking-[0.2em] leading-relaxed font-sans font-light uppercase">Chapter One</p>
                        </div>
                        <h2 className="font-serif text-[var(--ink)] space-x-6"
                            style={{ fontSize: "clamp(52px, 9vw, 140px)", fontWeight: 700 }}
                        >
                            <span className="heading-1 inline-block tracking-tight">Blooms</span><span className="heading-2 inline-block tracking-tight">before</span><span className="heading-3 inline-block tracking-tight">dawn</span>
                        </h2>
                    </div>

                    {/* Sidebar Description */}
                    <div className="md:col-span-3 md:pb-2">
                        <p ref={descriptionRef} className="text-lg text-[var(--taupe)] leading-relaxed font-sans font-light">
                            Aarna was born from a simple observation: the most devout households
                            in India spend more time sourcing flowers than praying with them.
                            We exist to change that.
                        </p>
                    </div>

                </div>

                {/* ── PULL QUOTE ── */}
                <div className="mt-16 md:mt-20 pl-8 py-6">
                    <p className="font-serif italic text-center text-xl md:text-2xl text-[var(--forest)] leading-relaxed"
                        style={{ letterSpacing: "0.02em" }}
                    >
                        "We do not sell flowers. We sustain a ritual."
                    </p>
                </div>

            </div>
        </section>
    );
}
