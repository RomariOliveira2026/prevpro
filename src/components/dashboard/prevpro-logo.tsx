interface PrevProLogoProps {
  variant?: "light" | "dark";
  compact?: boolean;
  size?: "default" | "large";
}

export function PrevProLogo({
  variant = "dark",
  compact = false,
  size = "default",
}: PrevProLogoProps) {
  const isLight = variant === "light";
  const isLarge = size === "large";

  const iconSize = isLarge ? "h-14 w-14 rounded-2xl" : "h-9 w-9 rounded-lg";
  const svgSize = isLarge ? "h-8 w-8" : "h-5 w-5";
  const titleSize = isLarge ? "text-2xl" : "text-lg";
  const subtitleSize = isLarge ? "text-[11px]" : "text-[10px]";

  return (
    <div className={`flex items-center ${isLarge ? "gap-3.5" : "gap-2.5"}`}>
      <div
        className={`flex shrink-0 items-center justify-center ${iconSize} ${
          isLight
            ? isLarge
              ? "bg-white/20 shadow-lg shadow-black/10"
              : "bg-white/15"
            : "bg-prevpro-blue"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" className={svgSize} aria-hidden="true">
          <path
            d="M12 3L4 7v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7l-8-4z"
            className="fill-white"
          />
          <path
            d="M9.5 12.5l2 2 4-4"
            stroke={isLight ? "#0F4C81" : "#22C55E"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span
            className={`${titleSize} font-bold tracking-tight ${
              isLight ? "text-white" : "text-prevpro-blue"
            }`}
          >
            PrevPro
          </span>
          <span
            className={`${subtitleSize} mt-1 font-medium uppercase tracking-wider ${
              isLight ? "text-white/60" : "text-slate-500"
            }`}
          >
            Prevenção de Perdas
          </span>
        </div>
      )}
    </div>
  );
}
