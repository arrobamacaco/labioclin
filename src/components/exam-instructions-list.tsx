import { ExamInstructionEntry } from "@/components/exam-instruction-entry";
import { examInstructionCategories } from "@/lib/exam-instructions";

function normalize(value: string) {
  const normalized =
    typeof value.normalize === "function" ? value.normalize("NFD") : value;

  return normalized.replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

type ExamInstructionsListProps = {
  query?: string;
};

export function ExamInstructionsList({
  query = "",
}: ExamInstructionsListProps) {
  const normalizedQuery = normalize(query);

  const filteredCategories = !normalizedQuery
    ? examInstructionCategories
    : examInstructionCategories
        .map((category) => ({
          ...category,
          exams: category.exams.filter(
            (exam) =>
              normalize(exam.name).includes(normalizedQuery) ||
              normalize(exam.description).includes(normalizedQuery) ||
              normalize(exam.preparation).includes(normalizedQuery),
          ),
        }))
        .filter((category) => category.exams.length > 0);

  const totalResults = filteredCategories.reduce(
    (count, category) => count + category.exams.length,
    0,
  );

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form role="search">
        <label className="sr-only" htmlFor="exam-search">
          Buscar exame
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-zinc-400">
            <SearchIcon />
          </span>
          <input
            id="exam-search"
            type="search"
            name="busca"
            defaultValue={query}
            placeholder="Buscar exame (ex.: TSH, urina, PSA…)"
            autoComplete="off"
            className="w-full rounded-2xl border border-zinc-200 bg-white py-3.5 pr-4 pl-12 text-base text-zinc-900 shadow-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-[#bc7a9e]/50 focus:ring-2 focus:ring-[#bc7a9e]/20"
          />
        </div>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <button
            type="submit"
            className="w-full rounded-full bg-[#511134] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3d0d28] sm:w-auto"
          >
            Buscar exame
          </button>
          {normalizedQuery ? (
            <a
              href="/instrucoes-para-exames"
              className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 sm:w-auto"
            >
              Limpar busca
            </a>
          ) : null}
        </div>

        {/* {!normalizedQuery ? (
          <nav
            aria-label="Categorias de exames"
            className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none"
          >
            {examInstructionCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="shrink-0 rounded-full border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-[#bc7a9e]/40 hover:text-[#bc7a9e]"
              >
                {category.shortTitle}
              </a>
            ))}
          </nav>
        ) : null} */}
      </form>

      {totalResults === 0 ? (
        <p className="mt-8 text-center text-base leading-relaxed text-zinc-600">
          Nenhum exame encontrado para{" "}
          <span className="font-medium text-zinc-900">“{query.trim()}”</span>.
          Tente outro nome ou fale com a recepção.
        </p>
      ) : (
        <div className="mt-4 flex flex-col gap-10 sm:mt-6 sm:gap-12">
          {filteredCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-heading`}
              className="scroll-mt-24"
            >
              <div className="mb-4">
                <h2
                  id={`${category.id}-heading`}
                  className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
                >
                  {category.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  {category.exams.length}{" "}
                  {category.exams.length === 1 ? "exame" : "exames"}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                {category.exams.map((exam) => (
                  <ExamInstructionEntry key={exam.name} {...exam} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
