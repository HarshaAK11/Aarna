export default function OrnamentDivider({
    className = "",
    light = false,
}: {
    className?: string;
    light?: boolean;
}) {
    const color = light ? "var(--ivory)" : "var(--gold)";
    const lineColor = light
        ? "rgba(250,248,242,0.2)"
        : "rgba(201,168,108,0.22)";

    return (
        <div
            className={`flex items-center justify-center gap-3 py-4 ${className}`}
            aria-hidden="true"
        >
            <span
                className="h-px flex-1 max-w-[80px]"
                style={{ background: lineColor }}
            />
            <span className="text-xs" style={{ color, opacity: 0.5 }}>
                &#9671;
            </span>
            <span className="text-lg" style={{ color }}>
                &#9671;
            </span>
            <span className="text-xs" style={{ color, opacity: 0.5 }}>
                &#9671;
            </span>
            <span
                className="h-px flex-1 max-w-[80px]"
                style={{ background: lineColor }}
            />
        </div>
    );
}
