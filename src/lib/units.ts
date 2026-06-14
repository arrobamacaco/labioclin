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
  name: "Labioclin - Unidade Centro",
  street: "Rua Rui Barbosa, nº 272",
  neighborhood: "Centro",
  city: "Riacho de Santana",
  state: "BA",
  zipCode: "46470-000",
  phones: [
    {
      label: "WhatsApp / Celular",
      display: "(77) 99910-4636",
      href: "tel:+5577999104636",
    },
    {
      label: "Telefone fixo",
      display: "(77) 3457-2947",
      href: "tel:+557734572947",
    },
  ],
  whatsapp: {
    display: "(77) 99910-4636",
    href: "https://wa.me/5577999104636",
  },
  email: {
    display: "julianoeverton@yahoo.com.br",
    href: "mailto:julianoeverton@yahoo.com.br",
  },
  schedules: [
    {
      label: "Segunda a sexta",
      value: "6h30 às 12h / 14h às 17h",
    },
    {
      label: "Sábados",
      value: "6h30 às 12h",
    },
  ],
  mapsQuery:
    "Rua+Rui+Barbosa+272+Centro+Riacho+de+Santana+BA+46470-000",
};

export function getMapsEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsDirectionsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
