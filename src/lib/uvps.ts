export type Uvp = {
  title: string;
  description: string;
  icon: "shield" | "clock" | "microscope" | "users" | "clipboard" | "heart";
};

export const uvps: Uvp[] = [
  {
    title: "Resultados confiáveis",
    description:
      "Análises realizadas com rigor técnico e controle de qualidade em todas as etapas do processo.",
    icon: "shield",
  },
  {
    title: "Agilidade no atendimento",
    description:
      "Processos otimizados para entregar seus exames com rapidez, sem abrir mão da precisão.",
    icon: "clock",
  },
  {
    title: "Tecnologia de ponta",
    description:
      "Equipamentos modernos que garantem laudos precisos, seguros e alinhados às melhores práticas.",
    icon: "microscope",
  },
  {
    title: "Equipe especializada",
    description:
      "Profissionais qualificados e em constante atualização para cuidar de cada resultado.",
    icon: "users",
  },
  {
    title: "Ampla variedade de exames",
    description:
      "Portfólio completo para atender rotina clínica, acompanhamento e necessidades específicas.",
    icon: "clipboard",
  },
  {
    title: "Atendimento humanizado",
    description:
      "Cuidado e acolhimento em cada etapa, porque por trás de cada exame há uma pessoa.",
    icon: "heart",
  },
];
