import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Sobre nós | Labioclin",
  description:
    "A Labioclin é um laboratório de análises clínicas que atua em Riacho de Santana e região, oferecendo exames com agilidade, precisão e cuidado no atendimento.",
};

export default function SobreNosPage() {
  return (
    <PageShell title="Sobre nós">
      <div className="space-y-5 text-lg leading-relaxed text-zinc-600">
        <p>
          A Labioclin é um laboratório de análises clínicas que atua em Riacho
          de Santana e região, oferecendo exames laboratoriais com agilidade,
          precisão e cuidado no atendimento a cada paciente.
        </p>
        <p>
          Nosso compromisso vai além da entrega de resultados: buscamos ser um
          elo de confiança entre pacientes, médicos e convênios, unindo
          tecnologia, processos rigorosos de controle de qualidade e um
          atendimento humano em cada etapa — da coleta à liberação do laudo.
        </p>
        <p>
          Atendemos pacientes particulares, convênios, médicos solicitantes e
          empresas, com estrutura pensada para dar suporte completo a quem
          precisa de diagnósticos confiáveis para cuidar da saúde.
        </p>
      </div>
    </PageShell>
  );
}
