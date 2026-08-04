import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Equipe | Labioclin",
  description:
    "Por trás de cada resultado da Labioclin está uma equipe técnica qualificada e comprometida com a excelência em medicina laboratorial.",
};

export default function EquipePage() {
  return (
    <PageShell title="Equipe">
      <div className="space-y-5 text-lg leading-relaxed text-zinc-600">
        <p>
          Por trás de cada resultado da Labioclin está uma equipe técnica
          qualificada e comprometida com a excelência em medicina laboratorial.
        </p>
        <p>
          Nosso time reúne biomédicos, farmacêuticos-bioquímicos, técnicos de
          coleta e colaboradores administrativos dedicados a garantir que cada
          etapa do processo — do agendamento à entrega do laudo — seja conduzida
          com precisão e cuidado.
        </p>
      </div>
    </PageShell>
  );
}
