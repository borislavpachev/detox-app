import { ScrollCard } from '@/components';
import { Section } from '@/components/layout';
import { whyDetoxIcons } from '@/utils/constants';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { horizontalLoop } from '@/utils/horizontalLoop';

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

gsap.registerPlugin(ScrollTrigger);

export default function WhyDetox() {
  const boxesRef = useRef(null);

  useEffect(() => {
    const boxes = boxesRef.current;
    const trigger = ScrollTrigger.create({
      trigger: boxes,
      start: 'top 50%',
      end: 'bottom',
      onEnter: () => {
        horizontalLoop('.scroll-card', {
          repeat: -1,
          paddingRight: 20,
          speed: 0.8,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <Section row={false} className="font-pt-sans-regular text-center">
      <div
        className="flex flex-col text-2xl md:mb-[63px] md:text-[60px]
      md:leading-[78px] md:mx-[300px]"
      >
        <p>Причини да консумираш</p>
        <p className="font-pt-sans-bold">Detox</p>
      </div>
      <div
        ref={boxesRef}
        style={{ overflowX: 'hidden' }}
        className="flex items-center justify-center transform-boxes py-6 gap-5 mx-2 my-4"
      >
        {whyDetoxIcons.map((icon, index) => {
          return <ScrollCard key={icon.alt} data={icon} text={texts[index]} />;
        })}
      </div>
    </Section>
  );
}
