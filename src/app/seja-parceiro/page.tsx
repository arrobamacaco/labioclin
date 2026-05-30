import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Seja parceiro | Labioclin",
  description: "Torne-se parceiro do Labioclin.",
};

export default function SejaParceiroPage() {
  return (
    <PageShell
      title="Seja parceiro"
      description="Interessado em uma parceria com o Labioclin? Entre em contato conosco para conhecer as possibilidades de colaboração. Em breve, mais detalhes sobre o programa de parceiros."
    />
  );
}
