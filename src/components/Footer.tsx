"use client";

import LogoMark from "./ui/LogoMark";

const NAV_LINKS = [
    { label: "Offerings", href: "#offerings" },
    { label: "Our Story", href: "#about" },
    { label: "Ritual", href: "#how-it-works" },
    { label: "Gifting", href: "#gifting" },
    { label: "Join Waitlist", href: "#waitlist" },
];

export default function Footer() {
    return (
        <footer style={{ background: "var(--ink)" }}>
            {/* Gold gradient rule */}
            <div className="gold-rule" />

            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                {/* Top row */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start mb-12">
                    {/* Logo + tagline */}
                    <div>
                        <LogoMark size={40} light showWordmark showTagline />
                    </div>

                    {/* Nav links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200"
                                style={{ color: "var(--taupe)" }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--gold)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "var(--taupe)")
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social icons */}
                    <div className="flex justify-center md:justify-end gap-4">
                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="transition-colors duration-200"
                            style={{ color: "var(--taupe)" }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--gold)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--taupe)")
                            }
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="5" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                            </svg>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="transition-colors duration-200"
                            style={{ color: "var(--taupe)" }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--gold)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--taupe)")
                            }
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Middle rule */}
                <div className="gold-rule mb-8" />

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p
                        className="font-sans font-light text-xs"
                        style={{ color: "var(--taupe)" }}
                    >
                        &copy; 2025 Aarna &middot; RJ Global Group &middot; Mangalore,
                        India
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="font-sans font-light text-xs transition-colors duration-200"
                            style={{ color: "var(--taupe)" }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--gold)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--taupe)")
                            }
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="font-sans font-light text-xs transition-colors duration-200"
                            style={{ color: "var(--taupe)" }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--gold)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--taupe)")
                            }
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
