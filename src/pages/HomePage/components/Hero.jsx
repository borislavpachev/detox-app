import { LogoIcon } from '@/components/icons';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row relative">
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
          className="w-full md:w-[374px] md:h-[505px] object-cover"
        />
      </div>

      <div className="md:px-24 md:py-16 ml-[45px] mt-[80px] w-full md:w-3/5 relative">
        <LogoIcon width={260} height={80} fill="#23B21F" />
        <p className="mt-3 text-[42px] font-pt-sans-regular text-secondary-tx-color">
          Health and effective
        </p>
        <p className="font-pt-sans-bold text-[42px] leading-10 text-secondary-tx-color">
          slimming
        </p>
        <img
          src="/img/images/blurred-bag-right-hero.png"
          alt="Blurred Tea Package"
          className="flex absolute bottom-0 right-0 w-[263px] -z-10"
        />

        <div className="flex flex-col items-center justify-center absolute w-[108px] bottom-0 left-0">
          <p className="mb-[15px] font-pt-sans-bold text-[11px] text-custom-brown uppercase">learn more</p>
          <img src="/img/images/scroll-down-bag.png" alt="Tea Bag" />
        </div>
      </div>
    </section>
  );
}
