import { SecondaryButton } from '@/components/buttons';
import { Section } from '@/components/layout';

export default function BMICalculator() {
  return (
    <Section className="p-5 md:p-28 items-center justify-center relative">
      <div
        className="relative flex px-5 py-0 w-full md:py-[56px] md:px-[91px] md:h-[300px] md:w-[950px]
        shadow-custom-smooth rounded-[22px]"
      >
        <div
          className="absolute rounded-[22px] inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/images/ornament-background.avif')",
          }}
        ></div>
        <div
          className="absolute rounded-[22px] inset-0 bg-gradient-to-t font-pt-sans-regular
           from-custom-gold via-custom-gold/85 to-custom-gold/75"
        ></div>

        <div
          className="relative md:absolute top-[56px] gap-8 md:gap-0 flex flex-col md:flex-row
        w-full items-center justify-start"
        >
          <div className="z-10 flex flex-col w-full text-center md:text-start md:max-w-[550px]">
            <h1 className="text-xl md:text-[25px]">
              Разбери своят{' '}
              <span className="font-pt-sans-bold">
                индекс на телесна маса (BMI)
              </span>
            </h1>
            <p className="mt-[28px] mb-[26px] leading-[20px]">
              BMI (ИТМ) се изчислява спрямо вашите пол, години, ръст и тегло.
              Това показва дали според вашите физически показатели имате
              Поднормено, Нормално, Наднормено тегло или сте със Затлъстяване.
            </p>
            <div className="self-center md:self-start">
              <SecondaryButton>
                <span>отвори калкулатора</span>
              </SecondaryButton>
            </div>
          </div>

          <div className="relative md:absolute right-0">
            <img
              src="/img/images/bmi-calculator-man.png"
              alt="Healthy man holding a cup of tea"
              className="w-full md:w-[396px] md:h-[522px] object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
