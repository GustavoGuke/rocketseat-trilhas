import { FeatureSection } from "@/components/Feature-section";
import { HeroSection } from "@/components/Hero-section";
import { SupportSection } from "@/components/Suppport-section";


export default function Home() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
    </article>
  );
}
