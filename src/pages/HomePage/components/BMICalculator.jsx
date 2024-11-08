import { Button } from '@/components/buttons';

export default function BMICalculator() {
  return (
    <section className="p-20 bg-white">
      <div className="flex items-center justify-center">
        <div
          className="flex flex-col py-[56px] px-[91px] h-[300px] w-[950px]
        rounded-[22px] shadow-custom-smooth bg-gradient-to-r from-custom-gold via-custom-gold to-white opacity-[0.99] font-pt-sans-regular"
        >
          <div className='w-[628px]'>
            <h1 className="text-[25px]">
              Разбери своят{' '}
              <span className="font-pt-sans-bold">
                индекс на телесна маса (BMI)
              </span>
            </h1>
            <p className="mt-[28px] mb-[26px]">
              BMI (ИТМ) се изчислява спрямо вашите пол, години, ръст и тегло.
              Това показва дали според вашите физически показатели имате
              Поднормено, Нормално, Наднормено тегло или сте със Затлъстяване.
            </p>
            <Button>
              <span>калкулатор</span>
            </Button>
          </div>
        </div>
        <img
          src="/img/images/bmi-calculator-man.png"
          alt="Healthy man holding a cup of tea"
          className="-ml-56 z-10 w-[396px] h-[522px]"
        />
      </div>
    </section>
  );
}
