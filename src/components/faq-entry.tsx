"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/faq";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ease-out motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function FaqEntry({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);
  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;

  return (
    <div className="border-b border-zinc-200 py-1 last:border-b-0">
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-medium text-zinc-900 transition-colors hover:text-[#bc7a9e]"
        >
          <span className="text-base leading-snug sm:text-lg">{question}</span>
          <ChevronIcon open={open} />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden transition-opacity duration-300 ease-in-out motion-reduce:transition-none ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="pb-5 pr-8 text-sm leading-relaxed text-zinc-600 sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
