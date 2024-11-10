import { ScrollCard } from '@/components';
import { whyDetoxIcons } from '@/utils/constants';

export default function WhyDetox() {
  return (
    <section className="flex flex-col text-center">
      <div
        className="flex flex-col text-2xl md:mb-[63px] md:text-[60px]
      md:leading-[78px] md:mx-[300px] font-pt-sans-regular"
      >
        <p>Причини да консумираш</p>
        <p className="font-pt-sans-bold">Detox</p>
      </div>
      <div className="transform-boxes py-4 w-[95%] overflow-x-auto flex gap-5 m-auto">
        {whyDetoxIcons.map((icon) => {
          return <ScrollCard key={icon.alt} data={icon} />;
        })}
      </div>
    </section>
  );
}
