import Link from "next/link";
import { LANDING_CONTACT } from "@/lib/landing-data";

export function FinalCta() {
  const whatsappUrl = `https://wa.me/${LANDING_CONTACT.whatsapp}?text=${encodeURIComponent(LANDING_CONTACT.whatsappMessage)}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-prevpro-blue via-[#0d3f6b] to-[#0a3d6b] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Pronto para reduzir perdas e aumentar resultados?
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-white/85">
          Solicite uma demonstração personalizada e descubra quanto sua operação
          pode economizar.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/demo"
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-semibold text-prevpro-blue shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-prevpro-gray hover:shadow-2xl sm:w-auto"
          >
            Solicitar Demonstração
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
          >
            <span aria-hidden="true">📲</span>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
