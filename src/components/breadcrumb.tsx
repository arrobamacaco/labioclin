import Link from "next/link";

type BreadcrumbProps = {
  current: string;
  className?: string;
};

function ChevronSeparator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0 text-zinc-300"
      aria-hidden
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function Breadcrumb({ current, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-500">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-[#bc7a9e]"
          >
            Home
          </Link>
        </li>
        <li aria-hidden>
          <ChevronSeparator />
        </li>
        <li className="font-medium text-zinc-900" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}
