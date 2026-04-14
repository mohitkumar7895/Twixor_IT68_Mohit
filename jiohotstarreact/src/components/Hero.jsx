import { useState, useEffect } from 'react'
import data from '../data/content.json'

const SLIDES = data.hero

function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const slide = SLIDES[active]

  return (
    <section
      aria-label="Featured hero banner"
      className="relative flex items-end h-[60vh] md:h-[90vh] min-h-[400px] md:min-h-135 pb-10 md:pb-17.5 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slide.bg})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,12,20,0.95)_0%,rgba(10,12,20,0.6)_45%,rgba(10,12,20,0.1)_75%,transparent_100%),linear-gradient(0deg,rgba(10,12,20,1)_0%,rgba(10,12,20,0.4)_35%,transparent_65%)]" />
      </div>

      {/* Content */}
      <div className="relative z-2 max-w-full md:max-w-160 px-6 md:px-13">
        <div className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-[20px] border border-[rgba(26,115,232,0.45)] bg-[rgba(26,115,232,0.18)] text-text-highlight text-[10px] md:text-[11px]">
          ⚡ {slide.badge}
        </div>

        <h1 className="mb-3 text-[32px] md:text-[54px] font-black leading-[1.1] md:leading-[1.05] tracking-[-0.5px] md:tracking-[-1px] text-white">
          {slide.title}
        </h1>

        <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-text-secondary text-[12px] md:text-[13px]">
          <span>{slide.year}</span>
          <span className="w-0.75 h-0.75 rounded-full bg-[#445]" />
          <span className="text-[#f5c518] font-bold">★ {slide.rating}</span>
          <span className="w-0.75 h-0.75 rounded-full bg-[#445]" />
          <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] md:text-[11px] font-semibold">
            {slide.lang}
          </span>
        </div>

        <p className="mb-6 text-text-secondary text-[13px] md:text-sm leading-[1.65] line-clamp-2 md:line-clamp-3 md:max-w-[480px]">
          {slide.desc}
        </p>

        <div className="flex gap-2.5">
          <button className="flex items-center justify-center md:justify-start gap-2 flex-1 md:flex-none px-6.5 py-2.5 md:py-2.75 rounded-md bg-white text-black text-[14px] md:text-[15px] font-extrabold cursor-pointer transition-[background,transform] duration-200 hover:bg-[#ddeeff] md:hover:scale-[1.02] border-0">
            <span className="text-[16px] md:text-[18px] leading-none ml-0.5">▶</span>
            Play
          </button>
          <button className="flex items-center justify-center md:justify-start gap-2 flex-1 md:flex-none px-5.5 py-2.5 md:py-2.75 rounded-md border border-white/20 bg-white/12 text-white text-[14px] md:text-[15px] font-semibold cursor-pointer transition-[background] duration-200 backdrop-blur-sm hover:bg-white/20">
            More Info
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-6.5 left-6 md:left-13 z-2 flex gap-1.75">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={[
              'h-1.25 md:h-1.75 rounded-full border-0 cursor-pointer transition-all duration-300',
              i === active
                ? 'w-4 md:w-5.5 rounded bg-[#1a73e8]'
                : 'w-1.25 md:w-1.75 bg-white/[0.28]',
            ].join(' ')}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
