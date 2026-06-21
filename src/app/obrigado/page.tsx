import type { Metadata } from "next";
import Link from "next/link";
import { PrevProLogo } from "@/components/dashboard/prevpro-logo";

export const metadata: Metadata = {
  title: "Demonstração Solicitada | PrevPro BR",
  description: "Recebemos sua solicitação de demonstração do PrevPro.",
};

export default function ObrigadoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-prevpro-gray">
      <header className="border-b border-slate-200/60 bg-white">
        <div className="mx-auto flex max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/">
            <PrevProLogo />
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-lg text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
            ✓
          </span>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Demonstração solicitada com sucesso!
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Recebemos seus dados. Nossa equipe entrará em contato para apresentar
            o PrevPro e entender a realidade da sua operação.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-prevpro-blue/30 hover:shadow-md sm:w-auto"
            >
              Voltar para o site
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex w-full items-center justify-center rounded-xl bg-prevpro-blue px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-prevpro-blue/20 transition-all hover:bg-[#0d3f6b] sm:w-auto"
            >
              Entrar na plataforma
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
