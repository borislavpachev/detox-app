import { ScrollCard } from '@/components';
import { whyDetoxIcons } from '@/utils/constants';

const texts = [
  <span key={1}>
    СЪДЪРЖА <b>100%</b> ЧИСТИ БИЛКИ
  </span>,
  <span key={2}>
    <b>ЗАСИЛВА</b> И <b>УКРЕПВА</b> ИМУННАТА СИСТЕМА
  </span>,
  <span key={3}>
    БОГАТ НА ВАЖНИ <b>ВИТАМИНИ</b> И <b>МИНЕРАЛИ</b>
  </span>,
  <span key={4}>
    <b>ХИДРАТИРА</b> И <b>ИЗГЛАЖДА</b> КОЖАТА
  </span>,
];

export default function WhyDetox() {
  return (
    <section className="flex flex-col text-main-tx-color font-pt-sans-regular text-center">
      <div
        className="flex flex-col text-2xl md:mb-[63px] md:text-[60px]
      md:leading-[78px] md:mx-[300px] "
      >
        <p>Причини да консумираш</p>
        <p className="font-pt-sans-bold">Detox</p>
      </div>
      <div className="boxes transform-boxes py-4 w-[95%] flex gap-5 m-auto">
        {whyDetoxIcons.map((icon, index) => {
          return <ScrollCard key={icon.alt} data={icon} text={texts[index]} />;
        })}
      </div>
    </section>
  );
}
