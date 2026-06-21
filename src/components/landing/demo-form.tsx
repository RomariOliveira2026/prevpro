"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PrevProLogo } from "@/components/dashboard/prevpro-logo";
import { PublicShell } from "./public-shell";
import { ThemeToggle } from "./theme-toggle";
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
    <PublicShell>
      <header className="border-b border-[var(--lp-border)] bg-[var(--lp-surface)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/">
            <PrevProLogo />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              href="/dashboard"
              className="text-sm font-medium text-[var(--lp-text-muted)] transition-colors hover:text-prevpro-blue"
            >
              Ver Plataforma
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--lp-text)] sm:text-3xl">
            Solicitar Demonstração
          </h1>
          <p className="mt-3 text-[var(--lp-text-muted)]">
            Preencha o formulário e nossa equipe entrará em contato.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lp-card mt-10 space-y-5 rounded-2xl p-6 sm:p-8"
        >
          <Field label="Nome" name="nome" required placeholder="Seu nome completo" />
          <Field label="Empresa" name="empresa" required placeholder="Nome da empresa" />
          <Field label="WhatsApp" name="whatsapp" required placeholder="(11) 99999-9999" type="tel" />
          <Field label="E-mail" name="email" required placeholder="seu@email.com" type="email" />
          <div>
            <label htmlFor="lojas" className="mb-1.5 block text-xs font-medium text-[var(--lp-text-muted)]">
              Quantidade de lojas
            </label>
            <select
              id="lojas"
              name="lojas"
              required
              className="w-full rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] px-3.5 py-2.5 text-sm text-[var(--lp-text)] focus:border-prevpro-blue/40 focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
            >
              <option value="">Selecione...</option>
              {storeCountOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="mensagem" className="mb-1.5 block text-xs font-medium text-[var(--lp-text-muted)]">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              placeholder="Conte um pouco sobre sua operação..."
              className="w-full resize-none rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] px-3.5 py-2.5 text-sm text-[var(--lp-text)] placeholder:text-[var(--lp-text-muted)] focus:border-prevpro-blue/40 focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-prevpro-blue px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-prevpro-blue/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d3f6b] disabled:opacity-70"
          >
            {loading ? "Enviando..." : "Solicitar Demonstração"}
          </button>
        </form>
      </main>
    </PublicShell>
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
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-[var(--lp-text-muted)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] px-3.5 py-2.5 text-sm text-[var(--lp-text)] placeholder:text-[var(--lp-text-muted)] focus:border-prevpro-blue/40 focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
      />
    </div>
  );
}
