import Link from "next/link";
import type { ReactNode } from "react";

const faqLinkClassName =
  "font-semibold text-[#bc7a9e] underline underline-offset-2 transition-colors hover:text-[#a5688a]";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export const faqItems: FaqItem[] = [
  {
    question: "Preciso de jejum para fazer exames?",
    answer: (
      <>
        Depende do exame solicitado pelo seu médico. Alguns exames exigem jejum
        de 8 a 12 horas; outros não. Confira as orientações no pedido médico ou
        consulte nossa{" "}
        <Link href="/instrucoes-para-exames" className={faqLinkClassName}>
          página de instruções para exames
        </Link>{" "}
        antes da coleta para evitar a necessidade de refazer o exame.
      </>
    ),
  },
  {
    question: "Em quanto tempo o resultado fica disponível?",
    answer:
      "O prazo varia conforme o tipo de exame. Exames de rotina costumam ser liberados em poucos dias úteis; análises mais complexas podem levar mais tempo. Você será informado na recepção sobre a previsão do seu laudo.",
  },
  {
    question: "Como consulto meus resultados online?",
    answer:
      "Acesse o portal de resultados do Labioclin com o login e a senha fornecidos no atendimento. Lá você consulta laudos já liberados e pode baixar ou imprimir quando precisar.",
  },
  {
    question: "O laboratório atende convênios?",
    answer:
      "Trabalhamos com diversos convênios e planos de saúde. Consulte na recepção se o seu plano está credenciado ou se há necessidade de autorização prévia para os exames solicitados.",
  },
  {
    question: "O que devo levar no dia da coleta?",
    answer:
      "Leve documento com foto, pedido médico (quando houver), carteirinha do convênio se for o caso e qualquer orientação específica do seu médico. Em caso de jejum, evite café, chá e alimentos até a coleta, salvo orientação contrária.",
  },
  {
    question: "Posso retirar o laudo impresso na unidade?",
    answer:
      "Sim. Além da consulta online, você pode retirar a via impressa na unidade nos horários de atendimento. Se preferir, utilize o portal para baixar e imprimir em casa.",
  },
];
