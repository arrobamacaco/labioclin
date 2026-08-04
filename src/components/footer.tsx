import Image from "next/image";
import Link from "next/link";
import { EXAM_RESULTS_URL, navLinks } from "@/lib/navigation";
import { getMapsDirectionsUrl, mainUnit } from "@/lib/units";

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

export function Footer() {
  const unit = mainUnit;
  const mapsDirectionsUrl = getMapsDirectionsUrl(unit.mapsQuery);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-[#000] text-zinc-300">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/labioclin_final_logo.png"
                alt="Labioclin Laboratório"
                width={184}
                height={51}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Laboratório de análises clínicas em Riacho de Santana, com rigor
              técnico e atendimento humanizado.
            </p>
            <a
              href={EXAM_RESULTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#434142] transition-colors hover:bg-zinc-100"
            >
              Resultados de Exames
              <ExternalLinkIcon />
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h2>
            <nav className="mt-4" aria-label="Links do rodapé">
              <ul className="space-y-2.5">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h2>
            <address className="mt-4 space-y-3 not-italic text-sm leading-relaxed">
              <p>
                <span className="block font-medium text-zinc-200">
                  {unit.street}
                </span>
                <span className="block text-zinc-400">
                  {unit.neighborhood} - {unit.city}/{unit.state}
                </span>
                <span className="block text-zinc-400">CEP {unit.zipCode}</span>
              </p>
              <p>
                {unit.phones.map((phone, index) => (
                  <span key={phone.href}>
                    {index > 0 ? " · " : null}
                    <a
                      href={phone.href}
                      className="text-zinc-400 transition-colors hover:text-[#bc7a9e]"
                    >
                      {phone.display}
                    </a>
                  </span>
                ))}
              </p>
              <p>
                <a
                  href={unit.email.href}
                  className="text-zinc-400 transition-colors hover:text-[#bc7a9e] break-all"
                >
                  {unit.email.display}
                </a>
              </p>
              <p className="flex flex-wrap gap-3 pt-1">
                <a
                  href={unit.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#bc7a9e] transition-colors hover:text-[#d49ab8]"
                >
                  WhatsApp
                </a>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-white"
                >
                  Como chegar
                  <ExternalLinkIcon />
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Horários
            </h2>
            <ul className="mt-4 space-y-4">
              {unit.schedules.map((schedule) => (
                <li key={schedule.label} className="text-sm">
                  <p className="font-medium text-zinc-200">{schedule.label}</p>
                  <p className="mt-1 leading-relaxed text-zinc-400">
                    {schedule.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-zinc-600/60 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Labioclin Laboratório. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://arrobamacaco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-[#bc7a9e]"
            >
              Arrobamacaco
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
