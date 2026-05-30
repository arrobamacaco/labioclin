import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Equipe | Labioclin",
  description: "Conheça a equipe do Labioclin.",
};

export default function EquipePage() {
  return (
    <PageShell
      title="Equipe"
      description="Profissionais qualificados dedicados a oferecer atendimento humanizado e resultados confiáveis. Em breve, apresentaremos nossa equipe."
    />
  );
}
