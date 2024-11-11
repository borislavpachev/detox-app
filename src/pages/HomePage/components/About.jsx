import { AboutElement } from '@/components';
import { BodyClockIcon, BowlIcon, DetoxIcon } from '@/components/icons';
import { aboutData } from '@/utils/constants';
import { useState } from 'react';

export default function About() {
  const [selected, setSelected] = useState('effective');

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-14 p-10 md:p-16">
      <div className="flex w-full h-full md:w-[569px] md:h-[569px] rounded-[50%] items-center justify-center bg-custom-gold">
        <img
          src="/img/images/about-product-bag.png"
          alt="A bag of Detox tea"
          className="p-5 md:p-0 w-full md:w-[354px] md:h-[474px] object-cover"
        />
      </div>
      <div className="max-w-xl font-pt-sans-regular py-0 md:py-24 text-main-tx-color">
        <div className="flex flex-col md:flex-row items-center justify-start gap-7">
          <h1 className="text-[40px] font-pt-sans-bold leading-[52px]">
            За Продукта
          </h1>
          <div className="flex gap-4">
            <BowlIcon />
            <BodyClockIcon />
            <DetoxIcon />
          </div>
        </div>

        <div className="flex flex-col md:flex-row font-pt-sans-bold gap-2 md:gap-0 text-center my-[32px] leading-[23px] mt-[16.5px] md:border-t-2">
          {Object.keys(aboutData).map((item) => {
            return (
              <AboutElement
                key={item}
                value={item}
                selected={selected}
                handleSelected={handleSelected}
              >
                {aboutData[item].name}
              </AboutElement>
            );
          })}
        </div>
        <div className="flex flex-col text-center md:text-start text-[14px] gap-8 leading-[23px]">
          {aboutData[selected] && (
            <>
              <p>{aboutData[selected].p1}</p>
              <p>{aboutData[selected].p2}</p>{' '}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
