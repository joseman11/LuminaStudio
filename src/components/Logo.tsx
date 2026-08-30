export default function Logo({ withLocation = true, size = "default" }: { withLocation?: boolean; size?: "small" | "default" | "large" }) {
  const isSmall = size === "small";
  const isLarge = size === "large";
  return (
    <span className="flex items-center gap-3" suppressHydrationWarning>
      <span suppressHydrationWarning className={`font-display leading-none tracking-[-0.04em] ${isSmall ? "text-[20px]" : isLarge ? "text-[30px]" : "text-[24px]"}`}>
        lúmina
      </span>
      {withLocation && (
        <span className={`hidden sm:flex items-center gap-2 ${isLarge ? "ml-1" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--terracotta)]" aria-hidden />
          <span className={`tracking-[0.14em] text-[var(--stone)] font-[600] ${isSmall ? "text-[9px]" : "text-[10px]"}`}>CUERNAVACA</span>
        </span>
      )}
    </span>
  );
}
