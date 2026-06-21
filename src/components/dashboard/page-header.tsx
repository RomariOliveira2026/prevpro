interface PageHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className = "" }: PageHeaderProps) {
  return (
    <div className={`animate-fade-in-up ${className}`}>
      <h1 className="text-2xl font-bold tracking-tight text-[var(--platform-text)] sm:text-3xl">
        {title}
      </h1>
      <p className="mt-1 text-sm text-[var(--platform-text-muted)] sm:text-base">{subtitle}</p>
    </div>
  );
}
