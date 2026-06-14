import type { Metadata } from "next";
import { ExamInstructionsPage } from "@/components/exam-instructions-page";

export const metadata: Metadata = {
  title: "Instruções para exames | Labioclin",
  description:
    "Orientações de preparo e coleta para os principais exames realizados no Labioclin.",
};

export default function InstrucoesParaExamesPage() {
  return <ExamInstructionsPage />;
}
