import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";

export const metadata: Metadata = {
  title: "PrevPro BR | Sistema Inteligente de Prevenção de Perdas",
  description:
    "Plataforma para supermercados, atacarejos e varejistas reduzirem perdas, controlarem validades, monitorarem alertas e acompanharem indicadores em tempo real.",
};

export default function Home() {
  return <LandingPage />;
}
