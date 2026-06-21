import type { Metadata } from "next";
import { DemoForm } from "@/components/landing/demo-form";

export const metadata: Metadata = {
  title: "Solicitar Demonstração | PrevPro BR",
  description: "Agende uma demonstração do PrevPro para sua operação de varejo.",
};

export default function DemoPage() {
  return <DemoForm />;
}
