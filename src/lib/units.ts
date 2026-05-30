export type LabUnit = {
  name: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  phones: { label: string; display: string; href: string }[];
  whatsapp: { display: string; href: string };
  email: { display: string; href: string };
  schedules: { label: string; value: string }[];
  mapsQuery: string;
};

export const mainUnit: LabUnit = {
  name: "Labioclin — Unidade Centro",
  street: "Rua Rui Barbosa, nº 272",
  neighborhood: "Centro",
  city: "Riacho de Santana",
  state: "BA",
  zipCode: "86.400-000",
  phones: [
    {
      label: "WhatsApp / celular",
      display: "(77) 9975-6576",
      href: "tel:+557799756576",
    },
    {
      label: "Telefone fixo",
      display: "(77) 3457-2947",
      href: "tel:+557734572947",
    },
  ],
  whatsapp: {
    display: "(77) 9975-6576",
    href: "https://wa.me/557799756576",
  },
  email: {
    display: "julianoeverton@yahoo.com.br",
    href: "mailto:julianoeverton@yahoo.com.br",
  },
  schedules: [
    {
      label: "Coleta de exames",
      value: "Confirme o horário pelo telefone ou WhatsApp antes da visita.",
    },
    {
      label: "Retirada de laudos",
      value: "Confirme o horário pelo telefone ou WhatsApp antes da visita.",
    },
  ],
  mapsQuery:
    "Rua+Rui+Barbosa+272+Centro+Riacho+de+Santana+BA+86400-000",
};

export function getMapsEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsDirectionsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
