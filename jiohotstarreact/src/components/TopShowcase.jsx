import data from '../data/content.json'

const ts = data.topShowcase

function TopShowcase() {
  return (
    <section id="home-section" className="px-4 md:px-8 pt-4 md:pt-8 pb-2">
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] min-h-[400px] md:min-h-60 overflow-hidden rounded-[18px] md:rounded-[22px] border border-white/5 bg-[radial-gradient(circle_at_top_left,rgba(245,162,72,0.18),transparent_34%),linear-gradient(135deg,#141823_0%,#10131c_46%,#171d2a_100%)] shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
        {/* Media side */}
        <div className="relative min-h-[240px] md:min-h-60 overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(16,19,28,0.06)_0%,rgba(16,19,28,0.2)_55%,rgba(16,19,28,1)_100%)] md:after:bg-[linear-gradient(90deg,rgba(16,19,28,0.06)_0%,rgba(16,19,28,0.2)_55%,rgba(16,19,28,0.95)_100%)]">
          <img
            src={ts.img}
            alt={ts.title}
            className="block w-full h-full object-cover"
          />
        </div>

        {/* Copy side */}
        <div className="flex flex-col justify-center gap-3 md:gap-3.5 px-6 md:px-8 py-6 md:py-7">
          <span className="inline-flex w-fit items-center px-2 md:px-2.5 py-1 md:py-1.5 rounded-[10px] bg-[rgba(255,193,94,0.16)] text-[#ffbe5e] text-[11px] md:text-[13px] font-bold">
            {ts.tag}
          </span>
          <h2 className="text-white text-[28px] md:text-[clamp(28px,3vw,42px)] leading-[1.1] md:leading-[1.02] font-black">
            {ts.title}
          </h2>
          <p className="max-w-115 text-[#b9c2d2] text-sm md:text-[17px] leading-[1.6]">
            {ts.desc}
          </p>
          <a
            href={ts.ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full md:w-fit px-7 py-3 md:py-3.5 rounded-xl md:rounded-2xl bg-[#ff9100]/90 text-white text-sm md:text-base font-extrabold no-underline transition-[transform,background] duration-200 hover:bg-[#ff9100] hover:-translate-y-px"
          >
            {ts.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

export default TopShowcase
