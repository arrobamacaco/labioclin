import Image from "next/image";
import { EXAM_RESULTS_URL } from "@/lib/navigation";

type HomeExamResultsProps = {
  imageSrc?: string;
};

const steps = [
  "Acesse a plataforma com seus dados de login",
  "Consulte laudos liberados com segurança",
  "Baixe ou imprima quando precisar",
] as const;

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-[#bc7a9e]"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export function HomeExamResults({
  imageSrc = "/home-exam-results-placeholder.svg",
}: HomeExamResultsProps) {
  return (
    <section
      aria-labelledby="exam-results-heading"
      className="px-6 py-8 sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[#bc7a9e]">
              Resultados online
            </p>
            <h2
              id="exam-results-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            >
              Seus laudos, disponíveis quando você precisar
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Consulte os resultados dos seus exames com praticidade e
              segurança, direto no portal do Labioclin.
            </p>

            <ul className="mt-8 space-y-3">
              {steps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-zinc-700">
                  <CheckIcon />
                  <span className="text-sm leading-relaxed sm:text-base">
                    {step}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={EXAM_RESULTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#511134] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3d0d28] sm:text-base"
              >
                Resultados de Exames
                <ExternalLinkIcon />
              </a>
            </div>
          </div>

          <div className="order-2 relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#bc7a9e]/15 via-transparent to-[#434142]/10 sm:-inset-6"
            />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg">
              <Image
                src={imageSrc}
                alt="Ilustração de laudo de exame disponível para consulta online"
                width={800}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
