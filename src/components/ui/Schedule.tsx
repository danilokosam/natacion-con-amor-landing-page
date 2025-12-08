import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

const Schedule = ({ children }: { children: ComponentChildren }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const threshold = 17;

  const handleMove = (e: MouseEvent) => {
    if (e.currentTarget instanceof Element) {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();

      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      setTilt({ x: y * -threshold, y: x * threshold });
    }
  };

  return (
    <section id='clases' className='mb-16 scroll-m-24'>
      {children}
      {/* Caja de información importante */}
      <div className='mx-auto mt-6 max-w-80 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 shadow-sm md:max-w-[600px]'>
        <h4 className='flex items-center gap-2 font-semibold text-yellow-700'>
          ⚠️ Importante leer
        </h4>
        <p className='mt-1 text-sm leading-relaxed text-yellow-800'>
          Las clases se pueden tomar en cualquier horario, ya sea horario fijo o
          flexible. En el horario flexible se deben agendar al menos{' '}
          <strong>2 horas antes</strong>. Todos los horarios son para niños y
          adultos, pero después de las <strong>6:00pm</strong>
          solo dicto para adultos.
        </p>
      </div>
      <div
        className='relative mx-auto mt-10 mb-10 max-w-80 cursor-pointer overflow-hidden rounded-xl bg-white shadow-xl transition-transform duration-200 ease-out md:max-w-[600px]'
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <img
          src='https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop'
          alt='City skyline'
          className='absolute inset-0 h-full w-full object-cover opacity-75'
        />

        <div className='absolute inset-0 bg-black/20'></div>

        <div className='relative z-10'>
          <p className='mt-4 mb-4 w-5/6 px-4 text-sm font-bold text-gray-600'>
            Horarios actualizados por día. Clases disponibles en mañana, tarde y
            noche.
          </p>

          <div className='grid grid-cols-2 gap-4 space-y-3 px-4 pb-6 text-sm text-gray-700'>
            {/* MARTES */}
            <div className='rounded-lg bg-gray-50 p-3 text-sm'>
              <span className='font-semibold text-gray-800'>📘 Martes</span>
              <ul className='mt-1 ml-4 list-disc'>
                <li>Tarde: 3:00pm a 6:00pm</li>
                <li>Noche: 6:00pm a 9:00pm (adultos)</li>
              </ul>
            </div>

            {/* MIÉRCOLES */}
            <div className='rounded-lg bg-white p-3 text-sm'>
              <span className='font-semibold text-gray-800'>📗 Miércoles</span>
              <ul className='mt-1 ml-4 list-disc'>
                <li>Mañana: 10:00am</li>
                <li>Tarde: 3:00pm a 6:00pm</li>
                <li>Noche: 6:00pm a 9:00pm (adultos)</li>
              </ul>
            </div>

            {/* JUEVES */}
            <div className='rounded-lg bg-gray-50 p-3 text-sm'>
              <span className='font-semibold text-gray-800'>📙 Jueves</span>
              <ul className='mt-1 ml-4 list-disc'>
                <li>Mañana: 10:00am</li>
                <li>Tarde: 3:00pm a 6:00pm</li>
                <li>Noche: 6:00pm a 9:00pm (adultos)</li>
              </ul>
            </div>

            {/* VIERNES */}
            <div className='rounded-lg bg-white p-3 text-sm'>
              <span className='font-semibold text-gray-800'>📕 Viernes</span>
              <ul className='mt-1 ml-4 list-disc'>
                <li>Mañana: 10:00am</li>
                <li>Tarde: 3:00pm a 6:00pm</li>
                <li>Noche: 6:00pm a 8:00pm (adultos)</li>
              </ul>
            </div>

            {/* SÁBADO */}
            <div className='rounded-lg bg-gray-50 p-3 text-sm'>
              <span className='font-semibold text-gray-800'>📘 Sábado</span>
              <ul className='mt-1 ml-4 list-disc'>
                <li>Mañana: 8:00am a 12m</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
