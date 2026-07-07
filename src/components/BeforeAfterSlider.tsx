import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  category: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, title, category }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col space-y-4" id={`ba-slider-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      {/* Title & Category Tag */}
      <div className="flex flex-col">
        <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">{category}</span>
        <h4 className="font-serif text-lg md:text-xl font-bold dark:text-white text-zinc-900 mt-1">{title}</h4>
      </div>

      {/* Slider Box */}
      <div
        ref={containerRef}
        className="relative aspect-[3/2] w-full select-none overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 shadow-md cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        {/* AFTER IMAGE (Behind) */}
        <img
          src={afterImage}
          alt={`${title} - After`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable="false"
          referrerPolicy="no-referrer"
        />
        <div className="absolute right-4 bottom-4 z-10 rounded-full bg-emerald-500/90 dark:bg-emerald-600/90 px-3.5 py-1 text-[10px] font-sans font-extrabold uppercase tracking-widest text-white shadow-md">
          After
        </div>

        {/* BEFORE IMAGE (On Top, Clipped) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={`${title} - Before`}
            className="absolute inset-0 h-full w-full object-cover max-w-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
            draggable="false"
            referrerPolicy="no-referrer"
          />
          <div className="absolute left-4 bottom-4 z-10 rounded-full bg-zinc-900/85 dark:bg-black/80 px-3.5 py-1 text-[10px] font-sans font-extrabold uppercase tracking-widest text-white shadow-md">
            Before
          </div>
        </div>

        {/* DIVIDER BAR */}
        <div
          className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-emerald-500 shadow-xl flex items-center justify-center pointer-events-none z-30">
            <div className="flex items-center space-x-[3px]">
              <div className="h-3.5 w-0.5 bg-emerald-500 rounded" />
              <div className="h-4.5 w-0.5 bg-emerald-500 rounded" />
              <div className="h-3.5 w-0.5 bg-emerald-500 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
