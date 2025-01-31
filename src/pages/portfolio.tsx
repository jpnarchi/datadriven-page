import { HeroSection } from '../components/portfolio/hero-section';
import { ProjectShowcase } from '../components/portfolio/project-showcase';
import { CTA } from '../components/sections/cta';

export function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProjectShowcase />
      <CTA />
    </main>
  );
}