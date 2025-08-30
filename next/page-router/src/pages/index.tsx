import { FeatureSection } from "@/components/Feature-section";
import { HeroSection } from "@/components/Hero-section";


export default function Home() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
    </article>
  );
}
