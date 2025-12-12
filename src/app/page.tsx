import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Shift } from '@/components/sections/Shift';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhyDifferent } from '@/components/sections/WhyDifferent';
import { Results } from '@/components/sections/Results';
import { Guarantee } from '@/components/sections/Guarantee';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Shift />
      <HowItWorks />
      <WhyDifferent />
      <Results />
      <Guarantee />
      <FinalCTA />
    </>
  );
}
