import { useState } from 'react';
import { Button } from '../buttons';
import { CloseIcon, HamburgerIcon, LogoIcon } from '../icons';

const navigationLinks = ['За чая', 'Програми', 'Блог', 'BMI Калкулатор'];

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header
      className="flex flex-col md:flex-row py-5 md:py-0 
    h-auto md:h-[74px] mb-[31px] items-center justify-around shadow-custom-sm"
    >
      <div
        className="flex items-center w-full md:w-auto justify-between md:justify-start
       px-5 md:px-0"
      >
        <LogoIcon />

        <div className="md:hidden">
          <button onClick={toggleDropdown}>
            {isDropdownOpen ? (
              <CloseIcon size={30} color="#333333" />
            ) : (
              <HamburgerIcon size={30} color="#333333" />
            )}
          </button>
        </div>
      </div>
      <nav
        className={`${
          isDropdownOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row w-full items-center md:w-[571.66px] cursor-default
      md:h-[40px] leading-[20px] font-pt-sans-bold text-secondary-tx-color 
      ${isDropdownOpen ? 'mt-2' : 'mt-0'} md:mt-0`}
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
        <Button className="w-full md:w-auto my-5 md:my-0">купи сега</Button>
      </nav>
    </header>
  );
}
