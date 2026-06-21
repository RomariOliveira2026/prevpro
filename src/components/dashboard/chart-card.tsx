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
      className={`animate-fade-in-up min-w-0 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)] sm:p-6 ${className}`}
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-slate-800">
            {title}
          </h2>
          <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}
