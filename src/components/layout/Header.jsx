import { Button } from '../buttons';
import { LogoIcon } from '../icons';

const navigationLinks = ['За чая', 'Програми', 'Блог', 'BMI Калкулатор'];

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row py-5 md:py-0 h-auto md:h-[74px] mb-[31px] items-center justify-around shadow-custom-sm">
      <LogoIcon />
      <nav
        className="flex flex-col md:flex-row w-full md:w-[571.66px] md:h-[40px] items-center 
      leading-[20px] font-pt-sans-bold text-secondary-tx-color cursor-default"
      >
        <ul className="flex flex-col md:flex-row w-full md:w-[393px] items-center my-5 md:my-0 gap-5">
          {navigationLinks.map((link) => {
            return (
              <li
                key={link}
                className="hover:scale-110 hover:text-black transition ease-in-out duration-300 underline-offset-8 cursor-pointer hover:underline"
              >
                {link}
              </li>
            );
          })}
        </ul>
        <Button>купи сега</Button>
      </nav>
    </header>
  );
}
