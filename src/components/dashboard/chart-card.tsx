interface ChartCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function ChartCard({
  title,
  subtitle,
  children,
  action,
  className = "",
}: ChartCardProps) {
  return (
    <div
      className={`platform-card animate-fade-in-up min-w-0 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--platform-shadow-hover)] sm:p-6 ${className}`}
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-[var(--platform-text)]">
            {title}
          </h2>
          <p className="mt-0.5 text-sm text-[var(--platform-text-muted)]">{subtitle}</p>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}
