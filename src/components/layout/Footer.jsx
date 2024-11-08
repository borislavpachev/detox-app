import {
  deliveryIcons,
  paymentIcons,
  socialMediaIcons,
} from '@/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-auto md:h-[436px] mt-[54px] px-20 md:px-[328px] flex flex-col justify-start items-center">
      <p className="mb-6 text-[10px] text-main-tx-color text-center font-pt-sans-regular opacity-[1]">
        * Резултатите от приема на Detox чай са индивидуални за различните
        потребители и зависят от техните физически показатели и навици!
      </p>

      <ul className="text-[14px] flex flex-col md:flex-row w-full items-center justify-center gap-1 md:gap-[36.5px] opacity-[0.26]">
        <li>
          <span>Начало</span>
        </li>
        <li>
          <span>Поръчай</span>
        </li>
        <li>
          <span>Въпроси</span>
        </li>
        <li>
          <span>Доставка</span>
        </li>
        <li>
          <span>Плащане</span>
        </li>
        <li>
          <span>Лични данни</span>
        </li>
        <li>
          <span>Общи условия</span>
        </li>
      </ul>

      <p className="mt-[33.5px] mb-[14.6px] text-[12px] font-pt-sans-bold">
        Начини на плащане
      </p>
      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[32px] items-center justify-center">
        {paymentIcons.map((icon) => {
          return <img key={icon.name} src={icon.src} alt={icon.name} />;
        })}
      </div>

      <p className="mt-[33.5px] mb-[12.87px] text-[12px] font-pt-sans-bold">
        Начини на доставка
      </p>
      <div className="flex gap-6 items-center justify-center">
        {deliveryIcons.map((icon) => {
          return <img key={icon.name} src={icon.src} alt={icon.name} />;
        })}
      </div>

      <div className="flex w-[132px] my-[33px] gap-6 items-center justify-center">
        {socialMediaIcons.map((icon) => {
          return <img key={icon.name} src={icon.src} alt={icon.name} />;
        })}
      </div>
      <p className="mb-[37.5px] text-[#C1C1C1] text-[14px]">
        Copyright © {currentYear}. All rights reserved.
      </p>
    </footer>
  );
}
