import type { FaqItem } from "@/lib/faq";

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

export function FaqEntry({ question, answer }: FaqItem) {
  return (
    <details className="group border-b border-zinc-200 py-1 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium text-zinc-900 transition-colors hover:text-[#bc7a9e] [&::-webkit-details-marker]:hidden">
        <span className="text-base leading-snug sm:text-lg">{question}</span>
        <ChevronIcon />
      </summary>
      <p className="pb-5 pr-8 text-sm leading-relaxed text-zinc-600 sm:text-base">
        {answer}
      </p>
    </details>
  );
}
