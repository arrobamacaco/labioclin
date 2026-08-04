import type { ExamInstruction } from "@/lib/exam-instructions";

function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ease-out motion-reduce:transition-none group-open:rotate-180"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ExamInstructionEntry({
  name,
  description,
  preparation,
}: ExamInstruction) {
  return (
    <details className="group rounded-2xl border border-zinc-200 bg-white shadow-sm transition-colors open:border-[#bc7a9e]/40 open:shadow-md">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-medium text-zinc-900 transition-colors hover:text-[#bc7a9e] [&::-webkit-details-marker]:hidden sm:px-6 sm:py-5 sm:text-lg">
        <span className="leading-snug">{name}</span>
        <ChevronIcon />
      </summary>
      <div className="space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#bc7a9e]">
                O que é?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {description}
              </p>
            </div>
            <div className="border-t border-zinc-100 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#bc7a9e]">
                Preparo
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {preparation}
              </p>
            </div>
      </div>
    </details>
  );
}
