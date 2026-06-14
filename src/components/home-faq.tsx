import { FaqEntry } from "@/components/faq-entry";
import { faqItems } from "@/lib/faq";
import { EXAM_RESULTS_URL } from "@/lib/navigation";

export function HomeFaq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="px-6 py-8 sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#bc7a9e]">
            Dúvidas frequentes
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Perguntas e respostas
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Informações rápidas sobre coleta, prazos e consulta de resultados.
            Se não encontrar o que precisa, fale com nossa equipe na unidade.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-zinc-200 bg-white px-6 shadow-sm sm:px-8">
          {faqItems.map((item) => (
            <FaqEntry key={item.question} {...item} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
          Já tem login?{" "}
          <a
            href={EXAM_RESULTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#bc7a9e] underline-offset-2 transition-colors hover:text-[#a5688a] hover:underline"
          >
            Acesse seus resultados online
          </a>
          .
        </p>
      </div>
    </section>
  );
}
