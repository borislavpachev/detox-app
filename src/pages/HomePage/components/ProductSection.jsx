import { ProductCard } from '@/components';
import { SecondaryButton } from '@/components/buttons';
import { Section } from '@/components/layout';

export default function ProductSection() {
  return (
    <Section
      className="flex-wrap items-center justify-center
     p-5 mt-5 md:mt-0 gap-14 lg:gap-24 bg-custom-light-gold"
    >
      <div className="w-full md:w-auto">
        <ProductCard />
      </div>
      <div className="flex flex-col w-full md:max-w-[419px] text-center md:text-start items-center md:items-start text-main-tx-color p-5 md:p-0">
        <p className="text-[25px] leading-[32px]">
          Изпробвай <span className="font-pt-sans-bold">Detox</span>
        </p>
        <p className="my-8 leading-[23px]">
          Detox подпомага нормалното протичане на метаболизма и обмяната на
          веществата, стимулира работата на храносмилателната и отделителната
          система.
        </p>
        <SecondaryButton>КУПИ СЕГА</SecondaryButton>
      </div>
    </Section>
  );
}
