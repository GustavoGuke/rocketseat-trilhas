import { CallToAction } from "@/components/Call-to-action";
import { CustomerStorySection } from "@/components/Customer-story-section/Customer-story-section";
import { FeatureSection } from "@/components/Feature-section";
import { HeroSection } from "@/components/Hero-section";
import { SupportSection } from "@/components/Suppport-section";


export default function Home() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  );
}
