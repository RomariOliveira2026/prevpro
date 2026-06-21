import Image from "next/image";
import { OFFICIAL_LOGO } from "@/lib/brand";

interface PrevProLogoProps {
  size?: "default" | "header" | "large" | "compact";
  className?: string;
}

const sizeClasses: Record<NonNullable<PrevProLogoProps["size"]>, string> = {
  compact: "h-7 w-auto",
  default: "h-9 w-auto",
  header: "h-11 w-auto sm:h-12",
  large: "h-14 w-auto sm:h-[3.75rem]",
};

export function PrevProLogo({ size = "default", className = "" }: PrevProLogoProps) {
  return (
    <Image
      src={OFFICIAL_LOGO.src}
      alt={OFFICIAL_LOGO.alt}
      width={OFFICIAL_LOGO.width}
      height={OFFICIAL_LOGO.height}
      unoptimized
      priority
      className={`object-contain object-left ${sizeClasses[size]} ${className}`}
    />
  );
}

export function PrevProSidebarLogo({ className = "" }: { className?: string }) {
  return <PrevProLogo size="large" className={className} />;
}
