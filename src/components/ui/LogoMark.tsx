export default function LogoMark({
    className = "",
    size = 60,
    showWordmark = true,
    showTagline = false,
    light = false,
}: {
    className?: string;
    size?: number;
    showWordmark?: boolean;
    showTagline?: boolean;
    light?: boolean;
}) {
    const stroke = light ? "var(--ivory)" : "var(--gold)";
    const textColor = light ? "var(--ivory)" : "var(--gold)";

    return (
        <div className={`flex flex-col items-center ${className}`}>
            {/* Lotus SVG Mark */}
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Aarna logo mark"
            >
                {/* Central petal */}
                <path
                    d="M50 15 Q55 35 50 55 Q45 35 50 15Z"
                    stroke={stroke}
                    strokeWidth="0.8"
                    fill="none"
                />
                {/* Left petals */}
                <path
                    d="M50 55 Q30 40 25 20"
                    stroke={stroke}
                    strokeWidth="0.8"
                    fill="none"
                />
                <path
                    d="M50 55 Q35 45 20 30"
                    stroke={stroke}
                    strokeWidth="0.8"
                    fill="none"
                />
                <path
                    d="M50 55 Q38 50 18 42"
                    stroke={stroke}
                    strokeWidth="0.8"
                    fill="none"
                />
                {/* Right petals */}
                <path
                    d="M50 55 Q70 40 75 20"
                    stroke={stroke}
                    strokeWidth="0.8"
                    fill="none"
                />
                <path
                    d="M50 55 Q65 45 80 30"
                    stroke={stroke}
                    strokeWidth="0.8"
                    fill="none"
                />
                <path
                    d="M50 55 Q62 50 82 42"
                    stroke={stroke}
                    strokeWidth="0.8"
                    fill="none"
                />
                {/* Sunburst crown */}
                <line x1="50" y1="8" x2="50" y2="2" stroke={stroke} strokeWidth="0.5" />
                <line x1="40" y1="10" x2="36" y2="5" stroke={stroke} strokeWidth="0.5" />
                <line x1="60" y1="10" x2="64" y2="5" stroke={stroke} strokeWidth="0.5" />
                <line x1="32" y1="16" x2="26" y2="12" stroke={stroke} strokeWidth="0.5" />
                <line x1="68" y1="16" x2="74" y2="12" stroke={stroke} strokeWidth="0.5" />
                {/* Base arc */}
                <path
                    d="M35 58 Q50 68 65 58"
                    stroke={stroke}
                    strokeWidth="0.6"
                    fill="none"
                />
                <path
                    d="M30 62 Q50 75 70 62"
                    stroke={stroke}
                    strokeWidth="0.5"
                    fill="none"
                />
                {/* Stem */}
                <line x1="50" y1="68" x2="50" y2="85" stroke={stroke} strokeWidth="0.6" />
                <path
                    d="M50 78 Q44 74 40 78"
                    stroke={stroke}
                    strokeWidth="0.5"
                    fill="none"
                />
                <path
                    d="M50 82 Q56 78 60 82"
                    stroke={stroke}
                    strokeWidth="0.5"
                    fill="none"
                />
            </svg>

            {/* Wordmark */}
            {showWordmark && (
                <span
                    className="font-serif tracking-[0.35em] text-sm mt-2 font-light"
                    style={{ color: textColor }}
                >
                    AARNA
                </span>
            )}

            {/* Tagline */}
            {showTagline && (
                <span
                    className="font-serif italic text-xs mt-1 tracking-wider font-light"
                    style={{ color: "var(--gold)" }}
                >
                    Where Every Petal Has Purpose.
                </span>
            )}
        </div>
    );
}
