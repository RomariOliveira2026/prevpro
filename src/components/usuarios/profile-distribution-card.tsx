import type { ProfileDistribution } from "@/lib/usuarios-data";

interface ProfileDistributionCardProps {
  data: ProfileDistribution[];
}

export function ProfileDistributionCard({ data }: ProfileDistributionCardProps) {
  const total = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="animate-fade-in-up animate-delay-300 sticky top-24 rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-prevpro-blue/[0.04] to-white px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-prevpro-blue/10 text-prevpro-blue">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-800">
              Distribuição por Perfil
            </h2>
            <p className="text-xs text-slate-500">{total} usuários</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4">
        {data.map((item) => (
          <div key={item.role} className="group">
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-medium text-slate-700">{item.role}</span>
              </div>
              <span className="font-semibold text-slate-800">{item.count}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full transition-all duration-700 group-hover:opacity-80"
                style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
              />
            </div>
            <p className="mt-0.5 text-right text-[10px] text-slate-400">
              {item.percentage}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
