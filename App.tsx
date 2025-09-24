
import React from 'react';
import { HeroSection } from './components/HeroSection';
import { RetroGrid } from './components/RetroGrid';
import { 
  SolutionShowcase,
  MeetTheRobotsSection,
  StatsCarousel,
  WatchLiveDemoSection,
  FAQSection,
} from './components/LandingSections';
import { Footer } from './components/Footer';
import { MarqueeDemo } from './components/MarqueeDemo';
import { TestimonialsSection } from './components/TestimonialsSection';


function App() {
  return (
    <main className="bg-black text-neutral-200 min-h-screen flex flex-col items-center overflow-x-hidden relative">
      <HeroSection />
      <MarqueeDemo />
      <div className="w-full max-w-6xl px-4 z-10">
        <SolutionShowcase />
        <MeetTheRobotsSection />
        <StatsCarousel />
        <WatchLiveDemoSection />
        <FAQSection />
        <TestimonialsSection />
      </div>
      <div className="w-full z-10 mt-20">
        <Footer
            leftLinks={[
              { href: "#", label: "Terms & policies" },
              { href: "#", label: "Privacy policy" },
            ]}
            rightLinks={[
              { href: "#", label: "Careers" },
              { href: "#", label: "About" },
              { href: "#", label: "Help Center" },
              { href: "#", label: "Twitter" },
              { href: "#", label: "Instagram" },
              { href: "#", label: "GitHub" },
            ]}
            copyrightText="RoboCorp 2024. All Rights Reserved"
            barCount={23}
          />
      </div>
      <RetroGrid className="z-0 opacity-20" />
    </main>
  );
}

export default App;
