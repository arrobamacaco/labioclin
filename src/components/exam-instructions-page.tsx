import { ExamInstructionEntry } from "@/components/exam-instruction-entry";
import { examInstructions } from "@/lib/exam-instructions";
import { mainUnit } from "@/lib/units";

export function ExamInstructionsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <section
        aria-labelledby="exam-instructions-heading"
        className="px-6 pt-20 pb-8 sm:px-10 sm:pt-8 lg:px-16"
      >
        <div className="mx-auto w-full max-w-3xl text-left sm:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-[#bc7a9e]">
            Orientações de coleta
          </p>
          <h1
            id="exam-instructions-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Instruções para exames
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Selecione o exame abaixo para ver as orientações de preparo. Em caso
            de dúvida, confira também o pedido médico ou fale com nossa equipe.
          </p>
        </div>
      </section>

      <section
        aria-label="Lista de instruções por exame"
        className="px-6 pb-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 sm:gap-4">
          {examInstructions.map((exam) => (
            <ExamInstructionEntry key={exam.name} {...exam} />
          ))}
        </div>

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
      </section>
    </div>
  );
}
