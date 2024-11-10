import { LogoIcon } from '@/components/icons';

export default function Hero() {
  return (
    <section className="flex flex-col w-full my-10 md:flex-row relative">
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

      <div
        className="px-6 md:px-24 py-8 md:py-20 ml-0 md:ml-[55px] md:mt-[80px]
       w-full md:w-3/5 relative justify-center item-center
       text-secondary-tx-color text-2xl leading-10 md:text-[42px] md:leading-[55px]"
      >
        <div className="flex w-full md:hidden">
          <LogoIcon width={180} height={60} fill="#23B21F" />
        </div>
        <div className="hidden md:flex">
          <LogoIcon width={260} height={80} fill="#23B21F" />
        </div>
        <p className="mt-3 font-pt-sans-regular">
          Health and effective
        </p>
        <p className="font-pt-sans-bold">slimming</p>
        <img
          src="/img/images/blurred-bag-right-hero.png"
          alt="Blurred Tea Package"
          className="flex absolute bottom-0 right-0 w-[263px] -z-10"
        />

        <div className="flex flex-col items-center justify-center absolute w-[108px] bottom-0 left-0">
          <p className="mb-[15px] font-pt-sans-bold text-[11px] text-custom-brown uppercase">
            learn more
          </p>
          <img src="/img/images/scroll-down-bag.png" alt="Tea Bag" />
        </div>
      </div>
    </section>
  );
}
