export type ExamInstruction = {
  name: string;
  instructions: string[];
};

export const examInstructions: ExamInstruction[] = [
  {
    name: "Hemograma completo",
    instructions: [
      "Não é necessário jejum.",
      "Mantenha sua alimentação e hidratação habituais no dia da coleta.",
      "Informe na recepção o uso de medicamentos contínuos.",
    ],
  },
  {
    name: "Glicemia em jejum",
    instructions: [
      "Jejum de 8 a 12 horas.",
      "Pode beber água durante o jejum.",
      "Evite café, chá, sucos e alimentos até a coleta.",
      "Não interrompa medicamentos sem orientação médica.",
    ],
  },
  {
    name: "Perfil lipídico (colesterol e triglicerídeos)",
    instructions: [
      "Jejum de 12 horas.",
      "Evite bebidas alcoólicas nas 72 horas anteriores.",
      "Mantenha a alimentação habitual nos dias que antecedem o exame.",
    ],
  },
  {
    name: "TSH",
    instructions: [
      "Não é necessário jejum.",
      "Se você usa levotiroxina, consulte seu médico sobre o horário da dose no dia da coleta.",
    ],
  },
  {
    name: "Urina tipo I (EAS)",
    instructions: [
      "Prefira a primeira urina da manhã.",
      "Realize a higiene íntima com água e sabonete neutro antes da coleta.",
      "Descarte o primeiro jato e colete o jato médio em frasco estéril.",
      "Entregue a amostra em até 2 horas ou conforme orientação da recepção.",
    ],
  },
  {
    name: "Urocultura",
    instructions: [
      "Colete preferencialmente a primeira urina da manhã.",
      "Realize higiene íntima cuidadosa antes da coleta.",
      "Use frasco estéril fornecido pelo laboratório.",
      "Evite coletar durante o uso de antibióticos, salvo orientação médica.",
    ],
  },
  {
    name: "PSA total",
    instructions: [
      "Jejum não é obrigatório, salvo outras solicitações no mesmo pedido.",
      "Evite ejaculação e ciclismo intensos por 48 horas antes da coleta.",
      "Informe procedimentos urológicos recentes na recepção.",
    ],
  },
  {
    name: "Beta HCG",
    instructions: [
      "Não é necessário jejum.",
      "Informe a data da última menstruação ou suspeita de gravidez.",
    ],
  },
  {
    name: "Creatinina e ureia",
    instructions: [
      "Jejum de 8 horas, quando solicitado em conjunto com outros exames que exijam jejum.",
      "Mantenha boa hidratação, salvo orientação médica em contrário.",
    ],
  },
  {
    name: "TGO e TGP",
    instructions: [
      "Jejum de 8 a 12 horas, quando indicado no pedido médico.",
      "Evite bebidas alcoólicas nas 72 horas anteriores.",
      "Informe o uso de suplementos e medicamentos.",
    ],
  },
];
