import { useState, useRef } from 'react'
import data from '../data/content.json'

const CARD_SIZE = {
  landscape: 'w-[236px] h-[134px]',
  sports:    'w-[198px] h-[112px]',
  portrait:  'w-[148px] h-[220px]',
}

const BADGE_STYLES = {
  LIVE: 'bg-[#e53935] text-white',
  NEW:  'bg-[#1a73e8] text-white',
  HD:   'right-2 left-auto border border-[#334] bg-black/70 text-[#9ab]',
}

function GridCard({ item, aspect }) {
  const baseSize = aspect === 'portrait' ? 'aspect-[2/3]' : 'aspect-[16/9]'
  return (
    <article className={`group relative overflow-hidden rounded-lg bg-bg-card cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:z-10 hover:shadow-2xl ${baseSize}`}>
      <img src={item.img} alt={item.title} className="block w-full h-full object-cover" />
      {item.badge && (
        <span className={`absolute top-2 left-2 px-1.75 py-0.5 rounded-[3px] text-[10px] font-extrabold tracking-[0.4px] ${BADGE_STYLES[item.badge] ?? ''}`}>
          {item.badge}
        </span>
      )}
      <div className="absolute right-0 bottom-0 left-0 px-2.5 pb-2.5 pt-7 bg-[linear-gradient(0deg,rgba(10,12,20,0.95)_0%,transparent_100%)] md:opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-[12px] font-bold text-white line-clamp-1">{item.title}</p>
        <p className="mt-0.5 text-[11px] text-[#8a9bb5] line-clamp-1">{item.sub}</p>
      </div>
    </article>
  )
}

function Row({ row, searchFilter, onViewAll, isExpanded }) {
  const scrollRef = useRef(null)
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  const baseSize = CARD_SIZE[row.aspect] ?? CARD_SIZE.landscape
  
  const items = searchFilter 
    ? row.items.filter(item => 
        item.title.toLowerCase().includes(searchFilter.toLowerCase()) || 
        (item.sub && item.sub.toLowerCase().includes(searchFilter.toLowerCase()))
      )
    : row.items

  if (items.length === 0) return null

  if (isExpanded) {
    return (
      <section className="px-4 md:px-8 py-4 mb-16">
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">{row.title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {items.map(item => (
            <GridCard key={item.title} item={item} aspect={row.aspect} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="py-4 md:py-7.5" id={row.id}>
      <div className="flex items-center justify-between mb-3 md:mb-4 px-4 md:px-8">
        <h2 className="flex items-center gap-2 text-[16px] md:text-[19px] font-bold text-white">{row.title}</h2>
        <button 
          onClick={() => onViewAll(row.id)}
          className="bg-transparent border-0 text-[#1a73e8] text-[12px] md:text-[13px] font-semibold no-underline hover:underline cursor-pointer"
        >
          View All
        </button>
      </div>

      <div className="relative group/row">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 md:w-10 h-8 md:h-10 rounded-full border border-white/12 bg-[rgba(10,12,20,0.88)] text-white text-[18px] md:text-[20px] opacity-0 pointer-events-none group-hover/row:opacity-100 group-hover/row:pointer-events-auto transition-opacity duration-200 hover:bg-[rgba(26,115,232,0.85)]"
          aria-label="Scroll left"
        >‹</button>

        <div
          ref={scrollRef}
          className="flex gap-2 md:gap-2.25 overflow-x-auto scroll-smooth px-4 md:px-8 pt-1.5 pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <article
              key={item.title}
              className={`group relative flex-none overflow-hidden rounded-md md:rounded-lg bg-bg-card cursor-pointer transition-[transform,box-shadow] duration-280 ease-in-out md:hover:scale-[1.07] hover:z-5 hover:shadow-[0_10px_36px_rgba(0,0,0,0.8)] ${baseSize} max-md:w-[150px] max-md:h-auto max-md:aspect-[16/9] ${row.aspect === 'portrait' ? 'max-md:aspect-[2/3] max-md:w-[120px]' : ''}`}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="block w-full h-full object-cover"
              />

              {item.badge && (
                <span className={`absolute top-1.5 md:top-2 left-1.5 md:left-2 px-1.5 md:px-1.75 py-0.5 rounded-[3px] text-[8px] md:text-[10px] font-extrabold tracking-[0.4px] ${BADGE_STYLES[item.badge] ?? ''}`}>
                  {item.badge}
                </span>
              )}

              <div className="absolute right-0 bottom-0 left-0 px-2 md:px-2.5 pb-2 md:pb-2.5 pt-5 md:pt-7 bg-[linear-gradient(0deg,rgba(10,12,20,0.97)_0%,transparent_100%)] md:opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                <p className="text-[10px] md:text-[12px] font-bold leading-[1.3] text-white line-clamp-1">{item.title}</p>
                <p className="mt-0.5 text-[9px] md:text-[11px] text-[#8a9bb5] line-clamp-1">{item.sub}</p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-10.5 h-10.5 rounded-full bg-white/92 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                <span className="text-[16px] leading-none ml-0.75 text-black">▶</span>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 md:w-10 h-8 md:h-10 rounded-full border border-white/12 bg-[rgba(10,12,20,0.88)] text-white text-[18px] md:text-[20px] opacity-0 pointer-events-none group-hover/row:opacity-100 group-hover/row:pointer-events-auto transition-opacity duration-200 hover:bg-[rgba(26,115,232,0.85)]"
          aria-label="Scroll right"
        >›</button>
      </div>
    </section>
  )
}

function ContentRows({ filter, onViewAll, expandedId }) {
  if (expandedId) {
    const row = data.rows.find(r => r.id === expandedId)
    return row ? <Row row={row} searchFilter={filter} isExpanded={true} /> : null
  }

  return (
    <>
      {data.rows.map((row) => (
        <Row key={row.id} row={row} searchFilter={filter} onViewAll={onViewAll} />
      ))}
    </>
  )
}

export default ContentRows

