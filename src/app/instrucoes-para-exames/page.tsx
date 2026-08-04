import type { Metadata } from "next";
import { ExamInstructionsPage } from "@/components/exam-instructions-page";

export const metadata: Metadata = {
  title: "Instruções para exames | Labioclin",
  description:
    "Orientações de preparo e coleta para os principais exames realizados no Labioclin.",
};

type InstrucoesParaExamesPageProps = {
  searchParams: Promise<{ busca?: string | string[] }>;
};

export default async function InstrucoesParaExamesPage({
  searchParams,
}: InstrucoesParaExamesPageProps) {
  const { busca } = await searchParams;
  const query = typeof busca === "string" ? busca : "";

  return <ExamInstructionsPage query={query} />;
}
