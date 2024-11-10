import {
  LogoIcon,
  MoneyIcon,
  TestPeriodIcon,
  TruckDeliveryIcon,
} from './icons';

export default function ProductCard() {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[605px] md:gap-7 bg-white relative font-pt-sans-regular shadow-custom-lg rounded-[24px]">
      <div className="relative w-full md:w-1/2">
        <div className="flex md:absolute w-full bottom-10 left-7 items-center justify-center">
          <img
            src="/img/images/try-detox-bag.png"
            alt="A bag of Detox tea"
            className="w-[260px] h-[348px]"
          />
        </div>
      </div>
      <div
        className="flex flex-col items-center md:items-start
      font-pt-sans-bold mt-[71px] mb-[56px] w-full md:w-1/2"
      >
        <div className="flex flex-col md:flex-row gap-7 items-center justify-center mb-[22px]">
          <TestPeriodIcon fill="grey" />
          <TruckDeliveryIcon fill="grey" />
          <MoneyIcon fill="grey" />
        </div>
        <LogoIcon />
        <p className="my-[13px] leading-5">
          <span>Pack for 1 month</span>{' '}
          <span className="text-custom-gray">/ 170gr.</span>{' '}
        </p>
        <p className="text-[42px] font-pt-sans-bold leading-[55px]">
          109.00 лв.
        </p>
        <div className="relative">
          <p className="text-[19px] text-custom-brown">119.60 лв.</p>
          <div className="absolute bottom-[10px] w-full border-b-2 border-b-custom-brown"></div>
        </div>
      </div>
    </div>
  );
}
