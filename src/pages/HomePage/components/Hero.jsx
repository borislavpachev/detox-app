import { LearnMore } from '@/components';
import { LogoIcon } from '@/components/icons';
import { Section } from '@/components/layout';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const slimmingRef = useRef();
  useGSAP(() => {
    gsap.to(slimmingRef.current, {
      duration: 2,
      text: 'slimming',
      ease: 'power4.inOut',
    });
  });

  return (
    <Section className="my-10 relative">
      <div className="flex w-full items-center justify-center md:w-2/5">
        <div className="hidden md:flex w-full h-full relative">
          <img
            src="/img/images/blurred-bag-left-hero.png"
            alt="Blurred Tea Package"
            className="w-[200px] absolute bottom-0 left-0"
          />
        </div>
        <img
          src="/img/images/girl-hero-section.png"
          alt="Girl holding a cup of tea"
          className="hidden md:flex md:w-[374px] md:h-[505px] object-cover"
        />
      </div>

      <div
        className="relative w-full md:w-3/5 mt-5 md:mt-[80px] pt-10 px-10 md:px-24 md:py-20 ml-0 md:ml-[55px] 
        justify-center item-center cursor-default text-2xl md:text-[42px]
       text-secondary-tx-color leading-10 md:leading-[55px]"
      >
        <div className="flex w-full md:hidden">
          <LogoIcon width={180} height={60} fill="#23B21F" />
        </div>
        <div className="hidden md:flex">
          <LogoIcon width={260} height={80} fill="#23B21F" />
        </div>
        <p className="mt-3 font-pt-sans-regular">Health and effective</p>
        <p ref={slimmingRef} className="font-pt-sans-bold"></p>
        <img
          src="/img/images/blurred-bag-right-hero.png"
          alt="Blurred Tea Package"
          className="flex absolute bottom-0 right-0 w-[263px] -z-10"
        />
        <LearnMore />
      </div>
    </Section>
  );
}
