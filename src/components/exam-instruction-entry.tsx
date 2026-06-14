"use client";

import { useId, useState } from "react";
import type { ExamInstruction } from "@/lib/exam-instructions";

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

export function ExamInstructionEntry({ name, instructions }: ExamInstruction) {
  const [open, setOpen] = useState(false);
  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;

  return (
    <div
      className={`rounded-2xl border bg-white shadow-sm transition-colors duration-300 ease-out motion-reduce:transition-none ${
        open
          ? "border-[#bc7a9e]/40 shadow-md"
          : "border-zinc-200 hover:border-zinc-300"
      }`}
    >
      <h2 className="text-base sm:text-lg">
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-medium text-zinc-900 transition-colors hover:text-[#bc7a9e] sm:px-6 sm:py-5"
        >
          <span className="leading-snug">{name}</span>
          <ChevronIcon open={open} />
        </button>
      </h2>
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
          <ul className="space-y-2.5 px-5 pb-5 text-sm leading-relaxed text-zinc-600 sm:px-6 sm:pb-6 sm:text-base">
            {instructions.map((instruction) => (
              <li key={instruction} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bc7a9e]"
                  aria-hidden
                />
                <span>{instruction}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
