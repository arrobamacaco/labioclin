import {
  getMapsDirectionsUrl,
  getMapsEmbedUrl,
  mainUnit,
} from "@/lib/units";

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-[#bc7a9e]"
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-[#bc7a9e]"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-[#bc7a9e]"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-[#bc7a9e]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

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

export function HomeUnits() {
  const unit = mainUnit;
  const mapsEmbedUrl = getMapsEmbedUrl(unit.mapsQuery);
  const mapsDirectionsUrl = getMapsDirectionsUrl(unit.mapsQuery);

  return (
    <section
      aria-labelledby="units-heading"
      className="bg-zinc-50 px-6 py-8 sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#bc7a9e]">
            Unidades e horários
          </p>
          <h2
            id="units-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Estamos no centro de Riacho de Santana
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Confira o endereço, horários de coleta e retirada e entre em contato conosco, caso haja a necessidade.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold text-zinc-900">{unit.name}</h3>

              <div className="mt-6 flex gap-3">
                <MapPinIcon />
                <address className="not-italic text-sm leading-relaxed text-zinc-600 sm:text-base">
                  <span className="block font-medium text-zinc-900">
                    {unit.street}
                  </span>
                  <span className="block">{unit.neighborhood}</span>
                  <span className="block">
                    {unit.city} - {unit.state}
                  </span>
                  <span className="block">CEP {unit.zipCode}</span>
                </address>
              </div>

              <div className="mt-6 space-y-3">
                {unit.schedules.map((schedule) => (
                  <div key={schedule.label} className="flex gap-3">
                    <ClockIcon />
                    <div className="text-sm sm:text-base">
                      <p className="font-medium text-zinc-900">
                        {schedule.label}
                      </p>
                      <p className="mt-0.5 text-zinc-600">{schedule.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-zinc-100 pt-6">
                {unit.phones.map((phone) => (
                  <div key={phone.href} className="flex gap-3">
                    <PhoneIcon />
                    <div className="text-sm sm:text-base">
                      <p className="text-zinc-500">{phone.label}</p>
                      <a
                        href={phone.href}
                        className="font-medium text-zinc-900 transition-colors hover:text-[#bc7a9e]"
                      >
                        {phone.display}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex gap-3">
                  <MailIcon />
                  <div className="text-sm sm:text-base">
                    <p className="text-zinc-500">E-mail</p>
                    <a
                      href={unit.email.href}
                      className="font-medium text-zinc-900 transition-colors hover:text-[#bc7a9e] break-all"
                    >
                      {unit.email.display}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={unit.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1fb855] sm:text-base"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 sm:text-base"
                >
                  Como chegar
                  <ExternalLinkIcon />
                </a>
              </div>
            </article>
          </div>

          <div className="relative min-h-[280px] lg:min-h-0">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#bc7a9e]/15 via-transparent to-[#434142]/10 sm:-inset-6"
            />
            <div className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg lg:min-h-[420px]">
              <iframe
                title={`Mapa — ${unit.street}, ${unit.city}`}
                src={mapsEmbedUrl}
                className="h-full min-h-[280px] w-full flex-1 border-0 lg:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
