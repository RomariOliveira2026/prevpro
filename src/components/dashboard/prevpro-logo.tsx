import Image from "next/image";
import { OFFICIAL_LOGO } from "@/lib/brand";

interface PrevProLogoProps {
  size?: "default" | "header" | "large" | "compact";
  className?: string;
}

const sizeClasses: Record<NonNullable<PrevProLogoProps["size"]>, string> = {
  compact: "h-8 w-auto",
  default: "h-10 w-auto",
  header: "h-[3.75rem] w-auto sm:h-[4.25rem]",
  large: "h-16 w-auto sm:h-[4.5rem]",
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
      className={`bg-transparent object-contain object-left ${sizeClasses[size]} ${className}`}
    />
  );
}

export function PrevProSidebarLogo({ className = "" }: { className?: string }) {
  return <PrevProLogo size="large" className={className} />;
}
