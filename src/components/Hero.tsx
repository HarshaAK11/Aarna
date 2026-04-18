"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const subHeadingRef = useRef<HTMLDivElement>(null);
    const videoLeftRef = useRef<HTMLDivElement>(null);
    const videoRightRef = useRef<HTMLDivElement>(null);
    const cursorLeftRef = useRef<HTMLDivElement>(null);
    const cursorRightRef = useRef<HTMLDivElement>(null);

    const [isHoveringLeft, setIsHoveringLeft] = useState(false);
    const [isHoveringRight, setIsHoveringRight] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial Reveals
            gsap.set(videoRightRef.current, { clipPath: "inset(100% 0% 0% 0%)" });
            gsap.set(subHeadingRef.current, { y: "18px" });
            gsap.set(videoLeftRef.current, { height: 0 });
            gsap.set(".heading", { y: "100px" });

            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            tl
                .to(subHeadingRef.current, { opacity: 1, duration: 0.6, delay: 2 })
                .to(videoLeftRef.current, { height: 280, duration: 1.6, ease: "power3.inOut" }, "<0.2")
                .to(videoRightRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.8, ease: "power3.inOut" }, "<")
                .add(() => {
                    window.dispatchEvent(new CustomEvent("hero:navbarReveal"));
                }, "<0.9")
                .to(".heading", { y: 0, stagger: 0.12 });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
        if (!ref.current) return;
        // Zero-lag tracking using gsap.set
        gsap.set(ref.current, {
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
        });
    };

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[var(--forest)] text-[var(--ivory)] pt-36 pb-12 px-6 md:px-6 gap-6"
        >
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col justify-between h-full">
                <div className="px-20">
                    <div className="text-right font-serif italic text-2xl md:text-2xl lg:text-5xl leading-[1.1] font-light">
                        <div className="overflow-hidden"><h1 className="heading">Fresh Flowers.</h1></div>
                        <div className="overflow-hidden"><h1 className="heading">Daily Ritual.</h1></div>
                        <div className="overflow-hidden"><h1 className="heading">Delivered.</h1></div>
                    </div>
                </div>

                <div className="flex flex-col gap-18">
                    <div ref={subHeadingRef} className="px-2">
                        <p className="text-base md:text-md text-center text-[var(--gold)]">
                            Aarna brings curated temple flowers and sacred essentials to your door — every morning, every day.
                        </p>
                    </div>

                    <div
                        ref={videoLeftRef}
                        className={`w-full overflow-hidden relative group transition-all duration-500 ${isHoveringLeft ? "cursor-none" : ""}`}
                        style={{ height: 0 }}
                        onMouseEnter={() => setIsHoveringLeft(true)}
                        onMouseLeave={() => setIsHoveringLeft(false)}
                        onMouseMove={(e) => handleMouseMove(e, cursorLeftRef)}
                    >
                        {/* Custom Cursor Local */}
                        <div
                            ref={cursorLeftRef}
                            className={`absolute pointer-events-none z-[100] flex items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--forest)] text-[10px] tracking-widest uppercase font-sans font-bold transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${isHoveringLeft ? "w-24 h-24 opacity-100 scale-100" : "w-0 h-0 opacity-0 scale-0"
                                }`}
                            style={{ top: 0, left: 0 }}
                        >
                            <span className="text-center px-4 leading-tight">Our Story ↗</span>
                        </div>

                        <video
                            src="/videos/video1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute bottom-0 left-0 w-full object-cover group-hover:scale-105 transition-transform duration-700"
                            style={{ height: "280px" }}
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                    </div>
                </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="flex flex-col h-full">
                <div
                    ref={videoRightRef}
                    className={`flex-1 relative overflow-hidden group min-h-full transition-all duration-500 ${isHoveringRight ? "cursor-none" : ""}`}
                    onMouseEnter={() => setIsHoveringRight(true)}
                    onMouseLeave={() => setIsHoveringRight(false)}
                    onMouseMove={(e) => handleMouseMove(e, cursorRightRef)}
                >
                    {/* Custom Cursor Local */}
                    <div
                        ref={cursorRightRef}
                        className={`absolute pointer-events-none z-[100] flex items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--forest)] text-[10px] tracking-widest uppercase font-sans font-bold transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${isHoveringRight ? "w-24 h-24 opacity-100 scale-100" : "w-0 h-0 opacity-0 scale-0"
                            }`}
                        style={{ top: 0, left: 0 }}
                    >
                        <span className="text-center px-4 leading-tight">Explore Offerings ↗</span>
                    </div>

                    <video
                        src="/videos/video2.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                </div>
            </div>
        </section>
    );
}
