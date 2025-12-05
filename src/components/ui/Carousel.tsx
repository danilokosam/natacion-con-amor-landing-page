import { useState, useMemo } from "preact/hooks";

const Carousel = () => {
  const [stopScroll, setStopScroll] = useState(false);

  const originalCardData = [
    {
      title: "Unlock Your Creative Flow",
      image:
        "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Design Your Digital Future",
      image:
        "https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image:
        "https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Think Big, Code Smart",
      image:
        "https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&auto=format&fit=crop&q=60",
    },
  ];

  // 1. AUMENTAMOS LOS DATOS:
  // Repetimos el array original 4 veces para asegurarnos de que el grupo base
  // sea más ancho que una pantalla 4k o ultrawide.
  // 4 items * 4 repeticiones = 16 items base.
  const baseData = [
    ...originalCardData,
    ...originalCardData,
    ...originalCardData,
    ...originalCardData,
  ];

  // 2. PREPARAMOS EL LOOP:
  // Duplicamos el array base completo para el efecto de marquee (Total: 32 items)
  // Usamos useMemo para no recalcular esto en cada render, aunque no es estrictamente necesario si el componente es ligero.
  const displayData = useMemo(() => [...baseData, ...baseData], [baseData]);

  return (
    <>
      <style>{`
        .marquee-inner {
            animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="overflow-hidden w-full relative max-w-full mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none " />

        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: displayData.length * 1000 + "ms",
          }}
        >
          <div className="flex">
            {displayData.map((card, index) => (
              <div
                key={index}
                className="w-56 mx-4 h-80 relative group hover:scale-90 transition-all duration-300 shrink-0"
              >
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover rounded-xl"
                />

                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/40 rounded-xl">
                  <p className="text-white text-lg font-semibold text-center">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none " />
      </div>
    </>
  );
};

export default Carousel;
