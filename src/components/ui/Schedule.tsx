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
    <section id='clases' className='scroll-m-24'>
      {children}
      <div
        className='mx-auto mt-10 mb-10 max-w-80 cursor-pointer overflow-hidden rounded-xl bg-white shadow-xl transition-transform duration-200 ease-out md:max-w-[600px]'
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <img
          src='https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop'
          alt='City skyline'
          className='h-52 w-full object-cover'
        />

        <h3 className='mt-3 mb-1 px-4 pt-3 text-lg font-semibold text-gray-800'>
          Horarios de clases
        </h3>

        <p className='w-5/6 px-4 pb-6 text-sm text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.
        </p>
      </div>
    </section>
  );
};

export default Schedule;
