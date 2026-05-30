import Image from "next/image";

type HomeBannerProps = {
  imageSrc?: string;
};

export function HomeBanner({
  imageSrc = "/home-banner.jpg",
}: HomeBannerProps) {
  return (
    <section
      aria-label="Destaque principal"
      className="relative w-full"
    >
      <div className="relative mx-auto aspect-[16/7] w-full min-h-[320px] overflow-hidden lg:w-[90%] lg:rounded-2xl sm:min-h-[400px] lg:min-h-[480px]">
        <Image
          src={imageSrc}
          alt="Profissional de laboratório realizando análises clínicas"
          fill
          priority
          sizes="(min-width: 1024px) 90vw, 100vw"
          className="object-cover contrast-110"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45"
        />
        <div className="absolute inset-0 flex items-center px-6 pt-20 sm:px-10 sm:pt-8 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <h1 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-6xl">
              Precisão nos laudos, cuidado{" "}
              <span className="whitespace-nowrap">com você</span>
            </h1>
            <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg">
              Análises clínicas com rigor técnico e
              atendimento humanizado{" "}
              <span className="whitespace-nowrap">em cada etapa</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
