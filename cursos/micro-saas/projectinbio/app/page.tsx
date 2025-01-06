import Header from "./components/landing-page/Headers";
import Hero from "./components/landing-page/Hero";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* 
        <VideoExplanation />
        <Pricing />
        <FAQ /> */}
      <Header />
      <Hero />

    </div>
  );
}
