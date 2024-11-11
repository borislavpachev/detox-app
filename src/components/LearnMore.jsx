import { DownArrowIcon } from "./icons";

export default function LearnMore() {
  return (
    <div className="md:absolute w-full md:w-[108px] bottom-0 left-0 flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center mb-2">
        <div className="animate-moveDown delay-0 opacity-90">
          <DownArrowIcon size={35} color="#B08F6D" />
        </div>
        <div className="animate-moveDown -mt-6 delay-200 opacity-50">
          <DownArrowIcon size={30} color="#B08F6D" />
        </div>
        <div className="animate-moveDown -mt-5 delay-400 opacity-30">
          <DownArrowIcon size={26} color="#B08F6D" />
        </div>
      </div>
      <p
        className="mb-[15px] cursor-pointer leading-[14px] font-pt-sans-bold text-[11px]
           text-custom-brown hover:scale-110 hover:underline hover:underline-offset-4 uppercase"
      >
        learn more
      </p>
      <img src="/img/images/scroll-down-bag.png" alt="Tea Bag" />
    </div>
  );
}
