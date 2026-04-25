"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
    {
        num: "01",
        title: "Freshness First",
        subdesc: "Same-day sourcing, always.",
        desc: "Flowers sourced same-day from farms within 50km. Never cold-stored, never compromised.",
    },
    {
        num: "02",
        title: "Zero Waste Promise",
        subdesc: "Every petal returns to the earth.",
        desc: "Every petal is composted after use. We are the only sacred brand that closes the loop.",
    },
    {
        num: "03",
        title: "Subscription Reliability",
        subdesc: "Your ritual never pauses.",
        desc: "Miss a day? We deliver double the next. Your ritual never pauses.",
    },
    {
        num: "04",
        title: "Consciously Curated",
        subdesc: "Chosen by hand, not algorithm.",
        desc: "Each week's selection is chosen by our in-house ritual curator, not an algorithm.",
    },
];

const CARD_RESTING = [
  { rotate: -10, x: -70, y: 15 },
  { rotate: -4,  x: -25, y: -5 },
  { rotate: 4,   x: 35,  y: -10 },
  { rotate: 10,  x: 80,  y: 10 },
];

export default function Differentiators() {
    const sectionRef = useRef<HTMLElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

            // Initial Hidden State
            cards.forEach((card) => {
                gsap.set(card, { rotate: 0, x: 0, y: "100vh" });
            });

            // Unified Timeline for pinned fanning
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${FEATURES.length * 600}vh`,
                    pin: stickyRef.current,
                    pinSpacing: true,
                    scrub: 3,
                    anticipatePin: 1,
                }
            });

            // Sequence each card fanning out from the bottom
            cards.forEach((card, i) => {
                const { rotate, x, y } = CARD_RESTING[i];

                // Overlap card entries slightly for a more organic feel
                // i * 1 means they start at regular intervals on the scroll
                tl.fromTo(card,
                    { y: "100vh", rotate: 0, x: 0 },
                    {
                        y: y,
                        rotate: rotate,
                        x: x,
                        duration: 2,
                        ease: "back.out(1.2)"
                    },
                    i * 2.2
                );  
            });

            tl.to({}, { duration: 2 }); 

            // Header reveal
            gsap.fromTo(
                ".diff-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".diff-header",
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
                id="differentiators"
                className="m-6 rounded-[20px]"
                style={{
                    background: "var(--forest)",
                    minHeight: 'calc(100vh - 3rem)',
                }}
            >
                {/* ── STICKY CONTAINER — left + right side pinned together ── */}
                <div
                    ref={stickyRef}
                    className="w-full h-screen grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16 gap-12"
                >
                    {/* ── LEFT — stays fixed, never changes ── */}
                    <div className="diff-header flex flex-col gap-8">

                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ background: "var(--gold)" }} />
                            <p className="text-xs font-sans font-light uppercase tracking-[0.22em]"
                                style={{ color: "var(--taupe)" }}>
                                Chapter Four
                            </p>
                        </div>

                        <h2
                            className="font-serif"
                            style={{
                                fontSize: "clamp(36px, 5vw, 80px)",
                                color: "var(--ivory)",
                                fontWeight: 400,
                                lineHeight: 1,
                            }}
                        >
                            <span className="block uppercase">Why choose</span>
                            <span className="italic text-8xl" style={{ color: "var(--gold)" }}>
                                Aarna.
                            </span>
                        </h2>

                        <p
                            className="font-sans font-light text-base md:text-lg leading-relaxed max-w-md"
                            style={{ color: "var(--taupe-lt)" }}
                        >
                            At Aarna, your ritual takes centre stage. We treat each
                            delivery with devotion and personal care — our goal is to
                            ensure your altar is never without its offering.
                        </p>

                    </div>

                    {/* ── RIGHT — stacked cards that fan out on scroll ── */}
                    <div className="relative flex items-center justify-center h-full">
                        {/* Card stack wrapper — centered with perspective */}
                        <div className="relative w-72 h-96 md:w-100 md:h-[380px]" style={{ perspective: "1200px" }}>
                            {FEATURES.map((feature, i) => (
                                <div
                                    key={i}
                                    ref={(el) => { cardRefs.current[i] = el; }}
                                    className="absolute inset-0 flex flex-col justify-between p-8 md:p-4"
                                    style={{
                                        background: "var(--moss)",
                                        border: "0.5px solid rgba(201,168,108,0.2)",
                                        borderRadius: "8px",
                                        // Cards stack on top of each other as they appear (01 on bottom, 04 on top)
                                        zIndex: i + 1,
                                        transformOrigin: "bottom center",
                                    }}
                                >
                                    {/* Card top — title */}
                                    <div>
                                        <p
                                            className="font-serif text-2xl italic uppercase mb-3"
                                            style={{ color: "rgba(201,168,108,0.5)" }}
                                        >
                                            {feature.num}
                                        </p>
                                        <h3
                                            className="font-serif leading-tight"
                                            style={{
                                                fontSize: "clamp(22px, 2.5vw, 60px)",
                                                color: "var(--ivory)",
                                                fontWeight: 400,
                                            }}
                                        >
                                            {/* First word uppercase, rest italic — matching PieterKoopt */}
                                            {(() => {
                                                const words = feature.title.split(" ");
                                                const first = words[0];
                                                const rest = words.slice(1).join(" ");
                                                return (
                                                    <>
                                                        <span className="uppercase tracking-wider">{first}</span>
                                                        {rest && (
                                                            <><br />
                                                                <span className="italic" style={{ color: "var(--gold-lt)" }}>
                                                                    {rest}
                                                                </span></>
                                                        )}
                                                    </>
                                                );
                                            })()}
                                        </h3>
                                    </div>

                                    {/* Card bottom — description */}
                                    <p
                                        className="font-serif italic text-base md:text-2xl leading-relaxed"
                                        style={{ color: "var(--taupe-lt)" }}
                                    >
                                        {feature.subdesc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

        </section>
    );
}