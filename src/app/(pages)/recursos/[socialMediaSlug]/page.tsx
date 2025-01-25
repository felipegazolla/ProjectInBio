import { Faq } from "@/components/landing/Faq";
import Hero from "@/components/landing/Hero";
import { Pricing } from "@/components/landing/Pricing";
import { Header } from "@/components/ui/Header";
import { getTextBySlug } from "@/server/getTextsBySlug";
import { notFound } from "next/navigation";

export default async function LinkInBio({
  params,
}: {
  params: Promise<{ socialMediaSlug: string }>;
}) {
  const { socialMediaSlug } = await params;
  const texts = await getTextBySlug(socialMediaSlug);
  if (!texts) {
    return notFound();
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero texts={texts} />
      <Pricing />
      <Faq />
    </div>
  );
}