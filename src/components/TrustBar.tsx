"use client";

const CITIES = [
    "Mangalore",
    "Udupi",
    "Bangalore",
    "Mumbai",
    "Dubai",
    "Singapore",
    "Mangalore",
    "Udupi",
    "Bangalore",
    "Mumbai",
    "Dubai",
    "Singapore",
];

export default function TrustBar() {
    return (
        <section
            className="relative py-6 overflow-hidden"
            style={{ background: "var(--cream)" }}
        >
            {/* Top rule */}
            <div className="gold-rule" />

            <div className="py-6">
                <p
                    className="label-caps text-center mb-4"
                    style={{ color: "var(--taupe)" }}
                >
                    Trusted by households across
                </p>

                {/* Marquee */}
                <div className="overflow-hidden">
                    <div className="marquee-track">
                        {CITIES.map((city, i) => (
                            <span
                                key={i}
                                className="font-sans font-light text-sm tracking-[0.2em] uppercase px-8 whitespace-nowrap"
                                style={{ color: "var(--taupe-lt)" }}
                            >
                                {city}
                                <span
                                    className="inline-block mx-4"
                                    style={{ color: "var(--gold)", opacity: 0.4 }}
                                >
                                    ·
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom rule */}
            <div className="gold-rule" />
        </section>
    );
}
