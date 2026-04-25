"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrnamentDivider from "./ui/OrnamentDivider";

gsap.registerPlugin(ScrollTrigger);

export default function TaglineHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // PARALLAX VIDEO (moves slower than scroll)
            gsap.to(videoRef.current, {
                y: "20%",          // controls speed (increase for stronger effect)
                scale: 1.15,         // prevents empty gaps during movement
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative m-6 h-[150vh] rounded-[20px] overflow-hidden"
        >
            {/* VIDEO BACKGROUND */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute left-0 -top-40 w-full h-full object-cover"
                aria-hidden="true"
            >
                <source src="/videos/tg.mp4" type="video/mp4" />
            </video>

            {/* Smooth sink gradient to blend video into the container background */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent z-[5]" />


            {/* CONTENT */}
            <div className="relative z-10 flex flex-col justify-around h-full p-8 md:p-16 text-white">

                {/* TOP TEXT */}
                <div className="max-w-4xl mt-12 md:mt-24">
                    <h1
                        className="font-sans font-bold text-[var(--ivory)] leading-[0.9] tracking-tighter"
                        style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}
                    >
                        <span className="block uppercase">For those who</span>
                        <span className="block uppercase">
                            Live{" "}
                            <span className="font-serif italic lowercase font-light tracking-normal">
                                devotionally.
                            </span>
                        </span>
                    </h1>
                </div>

                {/* BOTTOM TEXT */}
                <div className="self-end max-w-sm md:max-w-md text-right md:text-left flex flex-col items-end md:items-start gap-8 mb-8">
                    <p className="font-sans text-[var(--ivory)] text-sm md:text-base leading-relaxed opacity-80 font-light">
                        Aarna is more than a service; it is a companion to your daily ritual.
                        Every morning, we bring the essence of the sacred to your sanctuary—
                        curated with intent, delivered with grace. Because devotion is not a
                        destination, but a daily return.
                    </p>

                    <button className="group flex items-center gap-4 bg-[var(--ivory)] text-[var(--ink)] px-6 py-3 rounded-full hover:bg-[var(--gold)] transition-all duration-500">
                        <span className="font-sans text-xs font-bold tracking-widest uppercase">
                            Explore the Ritual
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[var(--ink)] flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-500">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14m-7-7 7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}