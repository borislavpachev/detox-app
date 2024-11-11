import { ProductCard } from '@/components';
import { SecondaryButton } from '@/components/buttons';

export default function ProductSection() {
  return (
    <section
      className="flex flex-wrap flex-col md:flex-row items-center justify-center
     p-10 md:p-24 gap-14 lg:gap-24 bg-custom-light-gold text-main-tx-color"
    >
      <div className="w-full md:w-auto">
        <ProductCard />
      </div>
      <div className="flex flex-col w-full md:max-w-[419px] text-center md:text-start items-center md:items-start text-main-tx-color p-5 md:p-0">
        <h1 className="text-[25px] leading-[32px]">
          Изпробвай <span className="font-pt-sans-bold">Detox</span>
        </h1>
        <p className="my-8 leading-[23px]">
          Detox подпомага нормалното протичане на метаболизма и обмяната на
          веществата, стимулира работата на храносмилателната и отделителната
          система.
        </p>
        <SecondaryButton>КУПИ СЕГА</SecondaryButton>
      </div>
    </section>
  );
}
