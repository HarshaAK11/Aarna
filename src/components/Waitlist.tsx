"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoMark from "./ui/LogoMark";
import OrnamentDivider from "./ui/OrnamentDivider";

gsap.registerPlugin(ScrollTrigger);

export default function Waitlist() {
    const sectionRef = useRef<HTMLElement>(null);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".wl-content",
                { opacity: 0, y: 40, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".wl-content",
                        start: "top 85%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="waitlist"
            className="relative py-24 md:py-32 px-6 overflow-hidden"
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

            <div className="wl-content relative z-10 max-w-2xl mx-auto text-center">
                <LogoMark size={50} light showWordmark={false} className="mx-auto mb-6" />

                <OrnamentDivider light />

                <h2
                    className="font-serif text-3xl md:text-5xl font-light mt-6 mb-6"
                    style={{ color: "var(--ivory)" }}
                >
                    Be first. Begin the ritual.
                </h2>

                <p
                    className="font-sans font-light text-base mb-10 leading-relaxed"
                    style={{ color: "var(--taupe-lt)" }}
                >
                    Aarna launches soon in Mangalore and Udupi. Join the waitlist and
                    receive your first week free.
                </p>

                {submitted ? (
                    <div className="py-8">
                        <p
                            className="font-serif italic text-xl"
                            style={{ color: "var(--gold)" }}
                        >
                            Thank you. Your ritual awaits.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            required
                            aria-label="Email address"
                            suppressHydrationWarning
                            className="flex-1 w-full px-5 py-3 font-sans font-light text-sm bg-transparent border outline-none transition-colors duration-200 focus:border-gold"
                            style={{
                                borderColor: "var(--taupe)",
                                color: "var(--ivory)",
                            }}
                            onFocus={(e) =>
                                (e.currentTarget.style.borderColor = "var(--gold)")
                            }
                            onBlur={(e) =>
                                (e.currentTarget.style.borderColor = "var(--taupe)")
                            }
                        />
                        <button
                            type="submit"
                            className="font-sans text-xs tracking-[0.18em] uppercase px-8 py-3.5 transition-all duration-300 whitespace-nowrap"
                            suppressHydrationWarning
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
                            aria-label="Join Waitlist"
                        >Join Waitlist</button>
                    </form>
                )}

                <p
                    className="font-sans font-light text-xs mt-6"
                    style={{ color: "var(--taupe)" }}
                >
                    No spam. No urgency. Just your flowers, on time.
                </p>
            </div>
        </section>
    );
}
