import Image from "next/image";

interface PrevProLogoProps {
  compact?: boolean;
  size?: "default" | "large";
  className?: string;
}

export function PrevProLogo({
  size = "default",
  compact = false,
  className = "",
}: PrevProLogoProps) {
  const heightClass = compact ? "h-8" : size === "large" ? "h-12 sm:h-14" : "h-9";

  return (
    <Image
      src="/Logo.svg"
      alt="PrevPro BR — Prevenção de Perdas"
      width={385}
      height={103}
      unoptimized
      priority
      className={`${heightClass} w-auto object-contain object-left ${className}`}
    />
  );
}
