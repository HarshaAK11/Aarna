"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            tl.fromTo(".reveal",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, stagger: 0.1, delay: 0.2 }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[var(--forest)] text-[var(--ivory)] pt-36 pb-12 px-6 md:px-6 gap-12"
        >
            {/* Left Column */}
            <div className="flex flex-col  justify-between h-full space-y-20 lg:space-y-0">
                <div className="max-w-xl">
                    <h1 className="reveal font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-light">
                        Decorative stone grating <br />
                        for modern urban living.
                    </h1>
                </div>

                <div className="reveal flex flex-col sm:flex-row gap-12 sm:gap-24 mb-12">
                    <div className="space-y-2">
                        <p className="label-caps !text-[10px] opacity-60">United States</p>
                        <p className="font-mono text-[11px] leading-relaxed tracking-wider">
                            06 : 10 : 15 <br />
                            +1 484 224 2972
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="label-caps !text-[10px] opacity-60">Singapore</p>
                        <p className="font-mono text-[11px] leading-relaxed tracking-wider">
                            18 : 10 : 15 <br />
                            +65 6383 3788
                        </p>
                    </div>
                    <div className="mt-auto">
                        <p className="label-caps !text-[10px] opacity-60 uppercase">Est. 1994</p>
                    </div>
                </div>

                {/* Bottom Left Image Placeholder */}
                <div className="reveal w-full aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/10] bg-white/5 border border-white/10 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                        Project Image Placeholder
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col h-full relative">
                <div className="reveal flex-grow bg-white/10 border border-white/10 relative overflow-hidden aspect-[3/4] lg:aspect-auto">
                    <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xs tracking-widest uppercase">
                        Editorial Image Placeholder
                    </div>

                    {/* CTA Button Overlay */}
                    <div className="absolute bottom-6 left-6">
                        <button className="bg-white/90 backdrop-blur-sm text-[var(--ink)] px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-sans hover:bg-white transition-colors">
                            Explore products ↗
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
