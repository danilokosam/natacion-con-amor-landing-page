import { useState } from "preact/hooks";
const Schedule = () => {
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
    <div
      id="clases"
      className="scroll-m-24 rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 md:max-w-[600px] bg-white mx-auto mt-10 mb-10"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop"
        alt="City skyline"
        className="w-full h-52 object-cover"
      />

      <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
        Horarios de clases
      </h3>

      <p className="text-sm px-4 pb-6 text-gray-600 w-5/6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.
      </p>
    </div>
  );
};

export default Schedule;
