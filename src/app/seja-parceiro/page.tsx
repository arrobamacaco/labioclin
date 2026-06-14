import type { Metadata } from "next";
import { PartnerPage } from "@/components/partner-page";

export const metadata: Metadata = {
  title: "Seja parceiro | Labioclin",
  description:
    "Alugue uma sala no Labioclin e atenda seus pacientes com salas climatizadas, recepção, sala de espera e toda a estrutura do laboratório.",
};

export default function SejaParceiroPage() {
  return <PartnerPage />;
}
