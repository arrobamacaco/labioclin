import { BackToHome } from "@/components/back-to-home";
import { Breadcrumb } from "@/components/breadcrumb";
import { ExamInstructionsList } from "@/components/exam-instructions-list";
import { mainUnit } from "@/lib/units";

type ExamInstructionsPageProps = {
  query?: string;
};

export function ExamInstructionsPage({
  query,
}: ExamInstructionsPageProps) {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <section
        aria-labelledby="exam-instructions-heading"
        className="px-6 pt-20 pb-6 sm:px-10 sm:pt-8 lg:px-16"
      >
        <div className="mx-auto w-full max-w-3xl text-left">
          <Breadcrumb current="Instruções para exames" />
          <p className="mt-4 text-sm font-medium uppercase tracking-wider text-[#bc7a9e]">
            Orientações de coleta
          </p>
          <h1
            id="exam-instructions-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Instruções para exames
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 sm:text-xl">
            Este guia reúne orientações gerais para os principais exames
            laboratoriais. As recomendações abaixo não substituem a orientação
            médica ou instruções específicas fornecidas pelo laboratório.
          </p>
        </div>
      </section>

      <section
        aria-label="Lista de instruções por exame"
        className="px-6 pb-16 sm:px-10 lg:px-16"
      >
        <ExamInstructionsList query={query} />

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
          Não encontrou o exame ou precisa de orientação específica? Entre em
          contato pelo{" "}
          <a
            href={mainUnit.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#bc7a9e] underline-offset-2 transition-colors hover:text-[#a5688a] hover:underline"
          >
            WhatsApp
          </a>{" "}
          ou ligue para{" "}
          <a
            href={mainUnit.phones[0].href}
            className="font-medium text-[#bc7a9e] underline-offset-2 transition-colors hover:text-[#a5688a] hover:underline"
          >
            {mainUnit.phones[0].display}
          </a>
          .
        </p>

        <BackToHome className="mx-auto mt-10 max-w-3xl border-t border-zinc-100 pt-10" />
      </section>
    </div>
  );
}
