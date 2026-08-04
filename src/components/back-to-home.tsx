import Link from "next/link";

type BackToHomeProps = {
  className?: string;
};

function ArrowLeftIcon() {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function BackToHome({ className = "" }: BackToHomeProps) {
  return (
    <div className={`flex justify-center ${className}`.trim()}>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-[#bc7a9e]/40 hover:text-[#bc7a9e]"
      >
        <ArrowLeftIcon />
        Voltar à home
      </Link>
    </div>
  );
}
