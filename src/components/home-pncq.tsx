import Image from "next/image";

type HomePncqProps = {
  logoSrc?: string;
};

export function HomePncq({ logoSrc = "/PNCQ_logotipo.png" }: HomePncqProps) {
  return (
    <section
      aria-labelledby="pncq-heading"
      className="bg-white px-6 py-8 sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        <Image
          src={logoSrc}
          alt="PNCQ — Programa Nacional de Controle de Qualidade"
          width={676}
          height={305} 
          sizes="(min-width: 640px) 420px, 280px"
          className="mx-auto h-auto w-full max-w-[280px] sm:max-w-[420px]"
        />

        <p className="mt-10 text-sm font-medium uppercase tracking-wider text-[#bc7a9e]">
          Controle de qualidade
        </p>
        <h2
          id="pncq-heading"
          className="mt-3 text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl"
        >
          Mais de 13 anos com nota máxima consecutiva
        </h2>
        <p className="mt-6 text-balance text-base leading-relaxed text-[#434142] sm:text-lg">
          O Labioclin participa anualmente do Programa Nacional de Controle de
          Qualidade (PNCQ), que envia solicitações de exames para medir a
          eficiência e a precisão dos nossos laudos. Em todos esses anos,
          alcançamos a nota máxima, um histórico ininterrupto de excelência
          que reforça nosso compromisso com resultados confiáveis.
        </p>
      </div>
    </section>
  );
}
