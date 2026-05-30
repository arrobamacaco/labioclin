import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Sobre nós | Labioclin",
  description: "Conheça a história e os valores do Labioclin.",
};

export default function SobreNosPage() {
  return (
    <PageShell
      title="Sobre nós"
      description="O Labioclin é um laboratório comprometido com a qualidade, a precisão dos resultados e o cuidado com cada paciente. Em breve, mais informações sobre nossa história e estrutura."
    />
  );
}
