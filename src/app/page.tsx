import type { Metadata } from "next";
import { HomeBanner } from "@/components/home-banner";
import { HomeExamResults } from "@/components/home-exam-results";
import { HomeFaq } from "@/components/home-faq";
import { HomeUnits } from "@/components/home-units";
import { HomeUvps } from "@/components/home-uvps";

export const metadata: Metadata = {
  title: "Home | Labioclin",
  description: "Página inicial do Labioclin.",
};

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeExamResults />
      <HomeUvps />
      <HomeUnits />
      <HomeFaq />
    </>
  );
}
