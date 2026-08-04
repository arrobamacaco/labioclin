export type ExamInstruction = {
  name: string;
  description: string;
  preparation: string;
};

export type ExamInstructionCategory = {
  id: string;
  title: string;
  shortTitle: string;
  exams: ExamInstruction[];
};

export const examInstructionCategories: ExamInstructionCategory[] = [
  {
    id: "hematologia-bioquimica",
    title: "Hematologia e bioquímica básica",
    shortTitle: "Bioquímica",
    exams: [
      {
        name: "Hemograma",
        description:
          "Avalia as células do sangue (hemácias, leucócitos e plaquetas). É útil na investigação de anemias, infecções, inflamações e diversas outras condições.",
        preparation:
          "Não necessita jejum. Mantenha hidratação habitual e evite atividade física intensa imediatamente antes da coleta.",
      },
      {
        name: "Glicemia de jejum",
        description:
          "Mede a quantidade de glicose no sangue após período de jejum. É utilizada no rastreamento e acompanhamento do diabetes.",
        preparation: "Jejum de 8 a 12 horas. Água é permitida.",
      },
      {
        name: "Hemoglobina glicada (HbA1c)",
        description:
          "Reflete a média da glicemia dos últimos 2 a 3 meses, sendo um dos principais exames para acompanhamento do diabetes.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Colesterol total",
        description:
          "Avalia a quantidade total de colesterol circulante e auxilia na estimativa do risco cardiovascular.",
        preparation:
          "Na maioria dos casos não exige jejum, salvo orientação médica.",
      },
      {
        name: "HDL e LDL",
        description:
          "Avaliam as frações do colesterol, importantes para estimar o risco de doenças cardiovasculares.",
        preparation:
          "Jejum conforme solicitação médica (geralmente 8–12 horas quando indicado).",
      },
      {
        name: "Triglicerídeos",
        description:
          "Mede os níveis de gordura circulante no sangue, importante para avaliação metabólica e cardiovascular.",
        preparation:
          "Jejum de 12 horas. Evite bebidas alcoólicas nas 72 horas anteriores.",
      },
      {
        name: "Ureia",
        description:
          "Exame utilizado para avaliar a função renal e o metabolismo das proteínas.",
        preparation: "Jejum de aproximadamente 4 horas, quando recomendado.",
      },
      {
        name: "Creatinina",
        description:
          "Principal marcador laboratorial da função dos rins, frequentemente solicitado junto com a ureia.",
        preparation:
          "Evite consumo excessivo de carne e exercícios intensos nas 24 horas anteriores.",
      },
      {
        name: "Ácido úrico",
        description:
          "Auxilia na investigação de gota, cálculos renais e distúrbios do metabolismo das purinas.",
        preparation:
          "Jejum de 4 horas. Evite álcool e alimentos ricos em purinas na véspera.",
      },
      {
        name: "TGO/TGP (AST/ALT)",
        description:
          "Enzimas que ajudam na avaliação da saúde do fígado e podem se alterar em doenças hepáticas ou musculares.",
        preparation:
          "Jejum de 4 horas. Evite bebidas alcoólicas e atividade física intensa nas 24 horas anteriores.",
      },
    ],
  },
  {
    id: "hormonais-tireoide",
    title: "Exames hormonais e da tireoide",
    shortTitle: "Hormônios",
    exams: [
      {
        name: "TSH",
        description:
          "Hormônio que avalia o funcionamento da tireoide, auxiliando no diagnóstico de hipotireoidismo e hipertireoidismo.",
        preparation:
          "Geralmente não exige jejum. Informe os medicamentos em uso; siga orientação sobre o horário da levotiroxina.",
      },
      {
        name: "T4 Livre",
        description: "Complementa a avaliação da função da tireoide.",
        preparation: "Normalmente não necessita jejum.",
      },
      {
        name: "T3 Livre",
        description: "Ajuda na investigação de alterações da tireoide.",
        preparation: "Não necessita jejum, salvo orientação médica.",
      },
      {
        name: "PSA Total",
        description:
          "Utilizado na avaliação da próstata e no acompanhamento de doenças prostáticas.",
        preparation:
          "Evite ejaculação, ciclismo e equitação por 48 horas antes da coleta. Informe procedimentos urológicos recentes.",
      },
      {
        name: "PSA Livre",
        description:
          "Solicitado juntamente com o PSA Total para auxiliar na diferenciação de alterações prostáticas.",
        preparation: "Mesmo preparo do PSA Total.",
      },
      {
        name: "Beta-hCG",
        description:
          "Exame utilizado para confirmar e acompanhar a gestação e, em situações específicas, investigar outras condições.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Vitamina D",
        description:
          "Avalia os níveis de vitamina D no organismo, importante para a saúde óssea e muscular.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Vitamina B12",
        description:
          "Importante para investigação de anemias e alterações neurológicas.",
        preparation: "Jejum de 4 horas é desejável em alguns protocolos.",
      },
      {
        name: "Ferritina",
        description: "Avalia os estoques de ferro do organismo.",
        preparation: "Não necessita jejum, salvo orientação específica.",
      },
      {
        name: "Ferro sérico",
        description: "Mede a quantidade de ferro circulante no sangue.",
        preparation:
          "Preferencialmente coletar pela manhã, com jejum de 8 horas.",
      },
    ],
  },
  {
    id: "coagulacao-inflamacao",
    title: "Exames de coagulação, inflamação e sorologias",
    shortTitle: "Coagulação",
    exams: [
      {
        name: "TAP/INR",
        description:
          "Avalia a capacidade de coagulação do sangue e é utilizado no acompanhamento de pacientes em uso de anticoagulantes.",
        preparation:
          "Geralmente não necessita jejum. Informe todos os medicamentos em uso, especialmente anticoagulantes.",
      },
      {
        name: "TTPA",
        description:
          "Exame que avalia outra via da coagulação, auxiliando na investigação de distúrbios hemorrágicos.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Fibrinogênio",
        description:
          "Proteína importante para a coagulação e que também pode aumentar em processos inflamatórios.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Dímero-D",
        description:
          "Auxilia na investigação de trombose venosa, embolia pulmonar e outras alterações da coagulação.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Proteína C Reativa (PCR)",
        description:
          "Marcador de inflamação e infecção utilizado para acompanhar diversas doenças.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Velocidade de Hemossedimentação (VHS)",
        description:
          "Exame inespecífico que auxilia na investigação de processos inflamatórios.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "ASLO",
        description:
          "Pesquisa anticorpos contra estreptococos, auxiliando no diagnóstico de infecções recentes.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Fator Reumatoide",
        description:
          "Auxilia na investigação de artrite reumatoide e outras doenças autoimunes.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "FAN",
        description:
          "Pesquisa autoanticorpos relacionados a doenças autoimunes.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Sorologia para HIV",
        description:
          "Detecta infecção pelo HIV por meio da pesquisa de antígenos e/ou anticorpos.",
        preparation:
          "Não necessita jejum. O resultado deve ser interpretado pelo médico considerando a janela imunológica.",
      },
    ],
  },
  {
    id: "sorologias-hepatites",
    title: "Sorologias, hepatites e doenças infecciosas",
    shortTitle: "Sorologias",
    exams: [
      {
        name: "Hepatite B (HBsAg)",
        description:
          "Pesquisa a presença do antígeno de superfície do vírus da hepatite B, auxiliando no diagnóstico da infecção.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Anti-HBs",
        description:
          "Avalia a presença de anticorpos contra a hepatite B, indicando imunidade por vacinação ou infecção prévia.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Anti-HCV",
        description: "Pesquisa anticorpos contra o vírus da hepatite C.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "VDRL",
        description:
          "Exame utilizado na triagem e acompanhamento da sífilis.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "FTA-ABS",
        description:
          "Exame confirmatório para sífilis quando indicado pelo médico.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Toxoplasmose IgG/IgM",
        description:
          "Avalia contato prévio ou infecção recente por Toxoplasma gondii, especialmente importante na gestação.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Rubéola IgG/IgM",
        description:
          "Verifica imunidade ou infecção recente pelo vírus da rubéola.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Citomegalovírus (CMV) IgG/IgM",
        description:
          "Auxilia na investigação de infecção por CMV, principalmente em gestantes e imunossuprimidos.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "Dengue (NS1/IgM/IgG)",
        description:
          "Exame para investigação de infecção pelo vírus da dengue. A escolha do teste depende do tempo de sintomas.",
        preparation:
          "Não necessita jejum. Informe a data de início dos sintomas.",
      },
      {
        name: "COVID-19 Sorologia",
        description:
          "Pesquisa anticorpos contra o SARS-CoV-2 para avaliação de resposta imunológica ou infecção passada.",
        preparation: "Não necessita jejum.",
      },
    ],
  },
  {
    id: "urina-fezes",
    title: "Exames de urina, fezes e função renal",
    shortTitle: "Urina e fezes",
    exams: [
      {
        name: "Urina Tipo I (EAS)",
        description:
          "Avalia características físicas, químicas e microscópicas da urina, auxiliando na investigação de infecções urinárias, doenças renais e metabólicas.",
        preparation:
          "Realizar higiene íntima. Coletar preferencialmente a primeira urina da manhã ou conforme orientação, desprezando o primeiro jato e coletando o jato médio em frasco estéril.",
      },
      {
        name: "Urocultura",
        description:
          "Identifica bactérias causadoras de infecção urinária e orienta o tratamento.",
        preparation:
          "Higiene íntima rigorosa. Coletar jato médio antes do início de antibióticos, quando possível.",
      },
      {
        name: "Proteinúria 24 horas",
        description:
          "Quantifica a perda de proteínas na urina ao longo de 24 horas.",
        preparation:
          "Seguir rigorosamente as orientações de coleta durante 24 horas e manter o recipiente conforme instruções do laboratório.",
      },
      {
        name: "Clearance de Creatinina",
        description:
          "Avalia a função dos rins por meio da creatinina no sangue e na urina de 24 horas.",
        preparation:
          "Coletar corretamente a urina de 24 horas e realizar a coleta de sangue no horário indicado.",
      },
      {
        name: "Microalbuminúria",
        description:
          "Detecta pequenas quantidades de albumina na urina, importante no acompanhamento do diabetes e da hipertensão.",
        preparation:
          "Coletar conforme orientação médica; evitar exercício intenso antes da coleta.",
      },
      {
        name: "Parasitológico de Fezes",
        description: "Pesquisa parasitas intestinais e seus ovos.",
        preparation:
          "Coletar as fezes em recipiente limpo, sem contaminação por urina ou água.",
      },
      {
        name: "Pesquisa de Sangue Oculto nas Fezes",
        description:
          "Auxilia na investigação de sangramento do trato gastrointestinal.",
        preparation:
          "Seguir as orientações do laboratório; alguns métodos dispensam restrições alimentares.",
      },
      {
        name: "Coprocultura",
        description:
          "Identifica bactérias causadoras de infecções intestinais.",
        preparation:
          "Coletar fezes recentes em frasco adequado e encaminhar rapidamente ao laboratório.",
      },
      {
        name: "Calprotectina Fecal",
        description:
          "Auxilia na investigação de doenças inflamatórias intestinais.",
        preparation:
          "Coletar amostra de fezes conforme orientação; não necessita jejum.",
      },
      {
        name: "Pesquisa de Gordura Fecal",
        description:
          "Avalia alterações na absorção de gorduras pelo intestino.",
        preparation:
          "Seguir a dieta e as orientações específicas fornecidas pelo laboratório, quando solicitadas.",
      },
    ],
  },
  {
    id: "hormonios-marcadores",
    title: "Hormônios, marcadores tumorais e exames especiais",
    shortTitle: "Especiais",
    exams: [
      {
        name: "Cortisol",
        description:
          "Avalia a produção do hormônio cortisol pelas glândulas suprarrenais.",
        preparation:
          "A coleta costuma ser realizada pela manhã. Siga rigorosamente o horário solicitado e informe os medicamentos em uso.",
      },
      {
        name: "ACTH",
        description:
          "Hormônio que auxilia na investigação de alterações da hipófise e das suprarrenais.",
        preparation:
          "Coleta geralmente pela manhã. Evite estresse intenso antes do exame.",
      },
      {
        name: "Prolactina",
        description:
          "Importante na investigação de alterações menstruais, infertilidade e produção de leite.",
        preparation:
          "Evite atividade física, relações sexuais e estímulo das mamas nas 24 horas anteriores. Repouse 20 a 30 minutos antes da coleta.",
      },
      {
        name: "Estradiol",
        description:
          "Hormônio utilizado na avaliação da função ovariana e fertilidade.",
        preparation:
          "Normalmente não exige jejum. A coleta pode depender da fase do ciclo menstrual.",
      },
      {
        name: "Progesterona",
        description:
          "Auxilia na avaliação da ovulação e da função ovariana.",
        preparation:
          "Realizar conforme o dia do ciclo menstrual indicado pelo médico.",
      },
      {
        name: "Testosterona Total",
        description:
          "Avalia a produção de testosterona em homens e mulheres.",
        preparation:
          "Preferencialmente coletar pela manhã. Jejum geralmente não é obrigatório.",
      },
      {
        name: "Testosterona Livre",
        description:
          "Complementa a avaliação da testosterona biologicamente ativa.",
        preparation: "Preferencialmente pela manhã; seguir orientação médica.",
      },
      {
        name: "CEA",
        description:
          "Marcador tumoral utilizado no acompanhamento de alguns tipos de câncer.",
        preparation:
          "Não necessita jejum. Não é indicado como exame isolado para diagnóstico.",
      },
      {
        name: "CA 125",
        description:
          "Marcador utilizado principalmente no acompanhamento de doenças ovarianas.",
        preparation: "Não necessita jejum.",
      },
      {
        name: "CA 19-9",
        description:
          "Marcador tumoral empregado no acompanhamento de doenças pancreáticas e gastrointestinais.",
        preparation: "Não necessita jejum.",
      },
    ],
  },
];
