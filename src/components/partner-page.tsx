import { mainUnit } from "@/lib/units";

const amenities = [
  "Salas climatizadas",
  "Mobiliário completo",
  "Maca para atendimento",
  "Recepção para suporte ao agendamento",
  "Sala de espera confortável",
  "Ambiente acolhedor e profissional",
] as const;

type PartnerSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlight: string;
  reversed?: boolean;
};

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

function PartnerSection({
  id,
  eyebrow,
  title,
  paragraphs,
  highlight,
  reversed = false,
}: PartnerSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className={`px-6 py-8 sm:px-10 sm:py-20 lg:px-16 ${reversed ? "bg-zinc-50" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[#bc7a9e]">
              {eyebrow}
            </p>
            <h2
              id={id}
              className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            >
              {title}
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-zinc-600">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-[#bc7a9e]/20 bg-[#bc7a9e]/5 px-5 py-4 text-base leading-relaxed text-zinc-800 sm:text-lg">
              {highlight}
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#bc7a9e]/15 via-transparent to-[#434142]/10 sm:-inset-6"
            />
            <ul className="relative space-y-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              {amenities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-700">
                  <CheckIcon />
                  <span className="text-sm leading-relaxed sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerHero() {
  return (
    <section
      aria-labelledby="partner-hero-heading"
      className="bg-zinc-50 px-6 pt-20 pb-16 sm:px-10 sm:pt-8 sm:pb-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-[#bc7a9e]">
          Aluguel de salas
        </p>
        <h1
          id="partner-hero-heading"
          className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl"
        >
          Seja parceiro
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl">
          Alugue uma sala no Labioclin e atenda aos seus pacientes utilizando toda
          a estrutura do laboratório, com conforto, praticidade e credibilidade.
        </p>
      </div>
    </section>
  );
}

function PartnerCta() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Tenho interesse em alugar uma sala no Labioclin para realizar atendimentos. Gostaria de conhecer os espaços disponíveis.",
  );
  const whatsappHref = `${mainUnit.whatsapp.href}?text=${whatsappMessage}`;

  return (
    <section
      aria-labelledby="partner-cta-heading"
      className="px-6 py-8 sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        <h2
          id="partner-cta-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
        >
          Pronto para conhecer nossos espaços?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          Entre em contato para agendar uma visita, tirar dúvidas sobre o
          aluguel e descobrir como o Labioclin pode apoiar o crescimento da sua
          atuação profissional.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#434142] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#393839] sm:text-base"
          >
            Falar pelo WhatsApp
          </a>
          <a
            href={mainUnit.email.href}
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 sm:text-base"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}

export function PartnerPage() {
  return (
    <>
      <PartnerHero />
      <PartnerSection
        id="partner-structure-heading"
        eyebrow="Estrutura pronta"
        title="Estrutura completa para você atender com excelência"
        paragraphs={[
          "Seu foco deve estar no paciente. Da estrutura, o Labioclin cuida para você.",
          "Conte com salas climatizadas, mobiliário completo, maca para atendimento, recepção para suporte ao agendamento, sala de espera confortável e um ambiente preparado para oferecer uma experiência acolhedora e profissional.",
        ]}
        highlight="Traga seus atendimentos para o Labioclin e ofereça mais conforto, praticidade e credibilidade aos seus pacientes."
      />
      <PartnerSection
        id="partner-professionalism-heading"
        eyebrow="Menos preocupações"
        title="Mais profissionalismo, menos preocupações"
        paragraphs={[
          "Atenda seus pacientes em um espaço moderno, confortável e pronto para receber você.",
          "No Labioclin, profissionais da saúde encontram salas equipadas, ambiente climatizado, recepção para apoio no atendimento ao público e toda a estrutura necessária para realizar consultas com tranquilidade e segurança.",
        ]}
        highlight="Eleve a experiência dos seus pacientes e fortaleça sua atuação profissional. Entre em contato e conheça nossos espaços."
        reversed
      />
      <PartnerSection
        id="partner-environment-heading"
        eyebrow="Seu trabalho em destaque"
        title="Um ambiente que valoriza o seu trabalho"
        paragraphs={[
          "Seus pacientes merecem um atendimento de qualidade desde a chegada até o final da consulta.",
          "Ao realizar seus atendimentos no Labioclin, você conta com salas aconchegantes, equipamentos novos, recepção para suporte ao agendamento, sala de espera confortável e toda a infraestrutura necessária para exercer sua profissão com excelência.",
        ]}
        highlight="Agende uma visita e descubra como o Labioclin pode ser o espaço ideal para o crescimento da sua atuação profissional."
      />
      <PartnerCta />
    </>
  );
}
