"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    {
        num: "01",
        title: "Choose your ritual",
        desc: "Select a subscription plan tailored to your household's needs. Daily flowers, essentials, or both — you decide what your altar deserves.",
        img: "/images/hiw-1.png",
        alt: "Choose your ritual",
    },
    {
        num: "02",
        title: "We curate, you pray",
        desc: "Our team sources the freshest flowers daily from farms within 50km. Every week's selection is chosen by our in-house ritual curator, not an algorithm.",
        img: "/videos/hiw-2.mp4",
        alt: "We curate your flowers",
    },
    {
        num: "03",
        title: "Delivered before dawn",
        desc: "At your door before your morning puja. Every single day. Miss a day? We deliver double the next. Your ritual never pauses.",
        img: "/videos/hiw-3.mp4",
        alt: "Delivered before dawn",
    },
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".hiw-card");

            // Main stacking timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top top",
                    end: () => `+=${(cards.length - 1) * 100}%`,
                    pin: true,
                    scrub: true,
                    anticipatePin: 1,
                }
            });

            // Animate each card (except the first) sliding up
            // and the previous card scaling down/fading back
            cards.forEach((card, i) => {
                if (i === 0) return;

                // Scale down and fade the previous card as the new one appears
                tl.to(cards[i - 1], {
                    scale: 0.8,
                    //transformPerspective: 1200,
                    rotationX: 8,
                    transformStyle: "preserve-3d",
                    duration: 1,
                    ease: "power1.inOut"
                }, i - 1);

                // Slide the current card up
                tl.fromTo(card,
                    { y: "100vh" },
                    { y: 0, ease: "none", duration: 1 },
                    i - 1
                );
            });

            // Header reveal
            gsap.fromTo(
                ".hiw-header",
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".hiw-header",
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".hiw-title-reveal",
                { yPercent: 100 },
                {
                    yPercent: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".hiw-header",
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="how-it-works"
            style={{ background: "var(--ink)" }}
            className="px-6 py-16"
        >
            {/* ── HEADER — sits above the stacking cards ── */}
            <div
                className="hiw-header max-w-full px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
            >
                {/* Left — large all-caps title like PieterKoopt */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-[var(--ivory)] rounded-full"></div>
                        <p className="text-sm text-[var(--taupe)] tracking-[0.2em] leading-relaxed font-sans font-light uppercase">Chapter Three</p>
                    </div>
                    <h2
                        className="font-serif leading-[0.88] uppercase"
                        style={{
                            fontSize: "clamp(40px, 6vw, 96px)",
                            color: "var(--ivory)",
                            fontWeight: 500,
                            letterSpacing: "0.02em",
                            lineHeight: "0.88",
                        }}
                    >
                        <span className="inline-block overflow-hidden">
                            <span className="hiw-title-reveal inline-block">The Ritual</span>
                        </span>
                        <br />
                        <span className="inline-block overflow-hidden" style={{ color: "var(--gold)" }}>
                            <span className="hiw-title-reveal inline-block">Made Simple.</span>
                        </span>
                    </h2>
                </div>

                {/* Right — description */}
                <div className="pl-70">
                    <p
                        className="font-sans font-base text-lg md:text-xl leading-relaxed"
                        style={{ color: "var(--taupe-lt)" }}
                    >
                        At Aarna, we keep things sacred, simple, and reliable.
                        Follow the steps below - we take care of everything else.
                    </p>
                </div>
            </div>

            <div
                ref={cardsRef}
                className="relative w-full overflow-hidden"
                style={{ height: "100vh", perspective: "1200px" }}
            >
                {STEPS.map((step, i) => (
                    <div
                        key={i}
                        className="hiw-card absolute p-10 inset-0 w-[90%] h-[70%] m-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] border border-[var(--gold)] rounded-lg"
                        style={{
                            background: "var(--ink)",
                            zIndex: i + 1,
                        }}
                    >
                        {/* Left — text content */}
                        <div className="flex flex-col justify-between h-full">
                            {/* Ghost number — top left */}
                            <span
                                className="inline-block font-serif italic font-light text-9xl leading-none select-none -mt-10"
                                style={{
                                    color: "rgba(201,168,108,0.5)",
                                }}
                            >
                                {step.num}
                            </span>

                            {/* Title + desc — bottom left */}
                            <div className="flex flex-col gap-6 w-1/2">
                                <h3
                                    className="font-serif uppercase"
                                    style={{
                                        fontSize: "clamp(24px, 3.5vw, 46px)",
                                        color: "var(--ivory)",
                                        letterSpacing: "0.04em",
                                        fontWeight: 500,
                                        lineHeight: 1,
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    className="font-sans font-light text-base leading-relaxed max-w-md"
                                    style={{ color: "var(--taupe-lt)" }}
                                >
                                    {step.desc}
                                </p>
                            </div>
                        </div>

                        {/* Right — media (Image or Video) */}
                        <div className="relative overflow-hidden h-full">
                            {step.img.endsWith('.mp4') ? (
                                <video
                                    src={step.img}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={step.img}
                                    alt={step.alt}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                            {/* Subtle dark overlay */}
                            <div
                                className="absolute inset-0"
                                style={{ background: "rgba(14,30,20,0.2)" }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}