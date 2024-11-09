import { BMICalculator, Hero, ProductSection } from './components';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-14">
      <Hero />
      <BMICalculator />
      <ProductSection />
    </div>
  );
}
