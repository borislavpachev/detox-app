import { Button } from '../buttons';
import Logo from '../Logo';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row py-5 md:py-0 h-auto md:h-[74px] mb-[31px] items-center justify-around shadow-custom-sm">
      <Logo />
      <nav className="flex flex-col md:flex-row w-full md:w-[571.66px] md:h-[40px] items-center font-pt-sans-bold text-secondary-tx-color opacity-[1] cursor-default">
        <ul className="flex flex-col md:flex-row w-full md:w-[393px] items-center my-5 md:my-0 gap-5">
          <li>За чая</li>
          <li>Програми</li>
          <li>Блог</li>
          <li>BMI Калкулатор</li>
        </ul>
        <Button>купи сега</Button>
      </nav>
    </header>
  );
}
