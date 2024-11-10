import { BodyClockIcon, BowlIcon, DetoxIcon } from '@/components/icons';
import { aboutData } from '@/utils/constants';
import { useState } from 'react';

export default function About() {
  const [selected, setSelected] = useState('effective');

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-14 md:flex-row p-10 md:p-24">
      <div className="flex w-full md:w-[569px] md:h-[569px] rounded-[50%] items-center justify-center bg-custom-gold">
        <img
          src="/img/images/about-product-bag.png"
          alt="A bag of Detox tea"
          className="p-16 md:p-0 w-full md:w-[354px] h-auto object-cover"
        />
      </div>
      <div className="max-w-xl font-pt-sans-regular py-0 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-start gap-7">
          <h1 className="text-[40px] leading-[52px]">За Продукта</h1>
          <div className="flex gap-4">
            <BowlIcon />
            <BodyClockIcon />
            <DetoxIcon />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-0 text-center my-[32px] leading-[23px] mt-[16.5px] md:border-t-2 ">
          <p
            onClick={() => handleSelected('effective')}
            className={`w-full line-clamp-1 cursor-pointer border-t-4 pt-2 ${
              selected === 'effective'
                ? 'border-custom-green'
                : 'border-white text-custom-light-gray'
            }`}
          >
            Прочиства и Ефектен
          </p>
          <p
            onClick={() => handleSelected('natural')}
            className={`w-full line-clamp-1 cursor-pointer border-t-4 pt-2 ${
              selected === 'natural'
                ? 'border-custom-green'
                : 'border-white text-custom-light-gray'
            }`}
          >
            Натурален
          </p>
          <p
            onClick={() => handleSelected('trusted')}
            className={`w-full line-clamp-1 cursor-pointer border-t-4 pt-2 ${
              selected === 'trusted'
                ? 'border-custom-green'
                : 'border-white text-custom-light-gray'
            }`}
          >
            Потвърден от нашите клиенти
          </p>
        </div>
        <div className="flex flex-col gap-8 leading-[23px]">
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
