import { ProcessHero } from '../components/process/process-hero';
import { ProcessTimeline } from '../components/process/process-timeline';
import { ProcessStats } from '../components/process/process-stats';
import { CTA } from '../components/sections/cta';

export function Process() {
  return (
    <main className="min-h-screen bg-white">
      <ProcessHero />
      <ProcessTimeline />
      <ProcessStats />
      <CTA />
    </main>
  );
}