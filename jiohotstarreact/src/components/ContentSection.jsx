function ContentSection({ section }) {
  return (
    <section className="py-7.5" id={section.anchorId}>
      <div className="flex items-center justify-between mb-4 px-8">
        <h2 className="flex items-center gap-2 text-[19px] font-bold text-white">
          {section.title}
        </h2>
        <a
          className="text-[#1a73e8] text-[13px] font-semibold no-underline hover:underline cursor-pointer"
          href="#home-section"
        >
          View All
        </a>
      </div>
      <div
        className="flex gap-2.25 overflow-x-auto scroll-smooth px-8 pt-1.5 pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        id={section.id}
      >
        {section.items.map((item) => (
          <article
            key={`${section.id}-${item.title}`}
            className="relative flex-none w-59 h-33.5 overflow-hidden rounded-lg bg-bg-card cursor-pointer transition-[transform,box-shadow] duration-280 hover:scale-[1.07] hover:z-5 hover:shadow-[0_10px_36px_rgba(0,0,0,0.8)]"
          >
            <img src={item.image} alt={item.title} loading="lazy" className="block w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 px-2.5 pb-2.5 pt-7 bg-[linear-gradient(0deg,rgba(10,12,20,0.97)_0%,transparent_100%)]">
              <p className="text-[12px] font-bold text-white leading-[1.3]">{item.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ContentSection
