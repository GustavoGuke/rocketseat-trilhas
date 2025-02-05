import FAQ from "../components/landing-page/Faq";
import Header from "../components/landing-page/Headers";
import Hero from "../components/landing-page/Hero";
import Pricing from "../components/landing-page/pricing";
import VideoExplanation from "../components/landing-page/Video";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* 
        <VideoExplanation />
        <Pricing />
        <FAQ /> */}
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />

    </div>
  );
}
