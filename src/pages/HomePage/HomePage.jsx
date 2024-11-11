import {
  About,
  BMICalculator,
  Hero,
  ProductSection,
  WhyDetox,
} from './components';

export default function HomePage() {
  return (
    <div className="flex flex-col gap7 md:gap-10">
      <Hero />
      <About />
      <WhyDetox />
      <BMICalculator />
      <ProductSection />
    </div>
  );
}
