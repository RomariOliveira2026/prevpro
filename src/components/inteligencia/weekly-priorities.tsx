import type { WeeklyPriority, WeeklyPriorityLevel } from "@/lib/inteligencia-data";

const levelStyles: Record<WeeklyPriorityLevel, string> = {
  Crítico: "bg-red-50 text-red-700 ring-red-200",
  Importante: "bg-amber-50 text-amber-700 ring-amber-200",
  Monitoramento: "bg-blue-50 text-blue-700 ring-blue-200",
  Preventivo: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const levelIcons: Record<WeeklyPriorityLevel, string> = {
  Crítico: "🔴",
  Importante: "🟡",
  Monitoramento: "🔵",
  Preventivo: "🟢",
};

interface WeeklyPrioritiesProps {
  priorities: WeeklyPriority[];
}

export function WeeklyPriorities({ priorities }: WeeklyPrioritiesProps) {
  return (
    <div className="animate-fade-in-up animate-delay-250 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)]">
      <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
        <h2 className="text-base font-semibold text-slate-800">Prioridades da Semana</h2>
        <p className="mt-0.5 text-sm text-slate-500">
          Ações recomendadas pela IA PrevPro para esta semana
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-5">
        {priorities.map((priority) => (
          <div
            key={priority.id}
            className="flex items-start gap-3 rounded-xl border border-slate-100 bg-prevpro-gray/20 p-4 transition-all duration-200 hover:border-prevpro-blue/20 hover:bg-white hover:shadow-sm"
          >
            <span className="text-lg" aria-hidden="true">
              {levelIcons[priority.level]}
            </span>
            <div className="min-w-0 flex-1">
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${levelStyles[priority.level]}`}
              >
                {priority.level}
              </span>
              <p className="mt-2 text-sm font-medium leading-snug text-slate-700">
                {priority.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
