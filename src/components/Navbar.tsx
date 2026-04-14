"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoMark from "./ui/LogoMark";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
    { label: "Offerings", href: "#offerings" },
    { label: "Our Story", href: "#about" },
    { label: "Ritual", href: "#how-it-works" },
    { label: "Gifting", href: "#gifting" },
    { label: "Join Waitlist", href: "#waitlist" },
];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        let lastScroll = 0;
        const showAnim = gsap.fromTo(
            nav,
            { yPercent: -100 },
            { yPercent: 0, duration: 0.4, ease: "power2.out", paused: true }
        );

        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                const scrollY = self.scroll();
                setScrolled(scrollY > 80);

                if (self.direction === -1) {
                    showAnim.play();
                } else if (scrollY > 200) {
                    showAnim.reverse();
                }
                lastScroll = scrollY;
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
                style={{
                    background: scrolled
                        ? "rgba(14,30,20,0.92)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <a href="#" className="flex-shrink-0">
                        <LogoMark size={36} showWordmark={false} light />
                    </a>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.slice(0, -1).map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-sans text-xs tracking-[0.18em] uppercase transition-colors duration-200"
                                style={{ color: "var(--taupe-lt)" }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--gold)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "var(--taupe-lt)")
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="#waitlist"
                        className="hidden md:inline-block font-sans text-xs tracking-[0.18em] uppercase px-5 py-2 border transition-all duration-300"
                        style={{
                            color: "var(--gold)",
                            borderColor: "var(--gold)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--gold)";
                            e.currentTarget.style.color = "var(--ink)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "var(--gold)";
                        }}
                        aria-label="Join Waitlist"
                    >
                        Join Waitlist
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className="block w-6 h-px transition-all duration-300"
                            style={{
                                background: "var(--gold)",
                                transform: mobileOpen
                                    ? "rotate(45deg) translate(3px,3px)"
                                    : "none",
                            }}
                        />
                        <span
                            className="block w-6 h-px transition-all duration-300"
                            style={{
                                background: "var(--gold)",
                                opacity: mobileOpen ? 0 : 1,
                            }}
                        />
                        <span
                            className="block w-6 h-px transition-all duration-300"
                            style={{
                                background: "var(--gold)",
                                transform: mobileOpen
                                    ? "rotate(-45deg) translate(3px,-3px)"
                                    : "none",
                            }}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            <div
                className="fixed inset-0 z-40 flex items-center justify-center transition-all duration-500 md:hidden"
                style={{
                    background: "var(--ink)",
                    opacity: mobileOpen ? 1 : 0,
                    pointerEvents: mobileOpen ? "auto" : "none",
                }}
            >
                <div className="flex flex-col items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="font-serif text-2xl tracking-widest"
                            style={{ color: "var(--ivory)" }}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
