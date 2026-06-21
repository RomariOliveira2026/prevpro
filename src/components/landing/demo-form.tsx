"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PrevProLogo } from "@/components/dashboard/prevpro-logo";
import { storeCountOptions } from "@/lib/landing-data";

export function DemoForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/obrigado");
    }, 600);
  }

  return (
    <div className="min-h-screen bg-prevpro-gray">
      <header className="border-b border-slate-200/60 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/">
            <PrevProLogo />
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-slate-600 hover:text-prevpro-blue"
          >
            Ver Plataforma
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Solicitar Demonstração
          </h1>
          <p className="mt-3 text-slate-600">
            Preencha o formulário e nossa equipe entrará em contato.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_3px_rgba(15,76,129,0.06),0_8px_24px_rgba(15,76,129,0.06)] sm:p-8"
        >
          <Field label="Nome" name="nome" required placeholder="Seu nome completo" />
          <Field label="Empresa" name="empresa" required placeholder="Nome da empresa" />
          <Field label="WhatsApp" name="whatsapp" required placeholder="(11) 99999-9999" type="tel" />
          <Field label="E-mail" name="email" required placeholder="seu@email.com" type="email" />
          <div>
            <label htmlFor="lojas" className="mb-1.5 block text-xs font-medium text-slate-500">
              Quantidade de lojas
            </label>
            <select
              id="lojas"
              name="lojas"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 focus:border-prevpro-blue/40 focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
            >
              <option value="">Selecione...</option>
              {storeCountOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="mensagem" className="mb-1.5 block text-xs font-medium text-slate-500">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              placeholder="Conte um pouco sobre sua operação..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-prevpro-blue/40 focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-prevpro-blue px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-prevpro-blue/20 transition-all hover:bg-[#0d3f6b] disabled:opacity-70"
          >
            {loading ? "Enviando..." : "Solicitar Demonstração"}
          </button>
        </form>
      </main>
    </div>
  );
}

function Field({
  label,
  name,
  required,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-slate-500">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-prevpro-blue/40 focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
      />
    </div>
  );
}
