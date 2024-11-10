import { Button } from '@/components/buttons';

export default function BMICalculator() {
  return (
    <section
      className="flex flex-col md:flex-row w-full p-6 md:p-28
      justify-center items-center text-main-tx-color relative"
    >
      <div
        className="flex px-12 py-10 md:py-[56px] md:px-[91px] md:h-auto md:w-[950px]
        shadow-custom-smooth rounded-[22px] relative"
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

        <div className="relative z-10 mr-auto max-w-[550px]">
          <h1 className="text-[25px]">
            Разбери своят{' '}
            <span className="font-pt-sans-bold">
              индекс на телесна маса (BMI)
            </span>
          </h1>
          <p className="mt-[28px] mb-[26px]">
            BMI (ИТМ) се изчислява спрямо вашите пол, години, ръст и тегло. Това
            показва дали според вашите физически показатели имате Поднормено,
            Нормално, Наднормено тегло или сте със Затлъстяване.
          </p>
          <Button>
            <span>отвори калкулатора</span>
          </Button>
        </div>
      </div>
      <div className="relative md:absolute md:bottom-0 md:right-[111px]">
        <img
          src="/img/images/bmi-calculator-man.png"
          alt="Healthy man holding a cup of tea"
          className="w-full md:w-[396px] md:h-[522px]"
        />
      </div>
    </section>
  );
}
