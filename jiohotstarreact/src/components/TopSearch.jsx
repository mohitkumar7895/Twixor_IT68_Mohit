function TopSearch({ visible, query, setQuery }) {
  return (
    <section
      id="top-search"
      aria-hidden={!visible}
      className={[
        'overflow-hidden transition-[max-height,opacity,transform,padding-top] duration-280 ease-in-out px-4 md:px-8',
        visible
          ? 'max-h-30 pt-4 md:pt-8 opacity-100 translate-y-0'
          : 'max-h-0 opacity-0 -translate-y-2',
      ].join(' ')}
    >
      <div className="flex items-center gap-3 min-h-12 md:min-h-15 px-4 md:px-6 rounded-[12px] md:rounded-[18px] border border-white/8 bg-[linear-gradient(135deg,rgba(22,27,39,0.98)_0%,rgba(16,20,31,0.98)_100%)] shadow-[0_18px_36px_rgba(0,0,0,0.22)] focus-within:border-[rgba(26,115,232,0.78)] focus-within:shadow-[0_18px_36px_rgba(0,0,0,0.22),0_0_0_1px_rgba(26,115,232,0.35)]">
        <span className="text-[18px] md:text-[20px] leading-none shrink-0 text-[#7f90aa]">🔍</span>
        <input
          id="topSearchInput"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies, shows, sports..."
          aria-label="Search content"
          className="w-full border-0 outline-none bg-transparent text-white text-sm md:text-base font-semibold placeholder:text-[#6d7890]"
        />
        {query && (
          <button 
            onClick={() => setQuery('')}
            className="text-text-secondary hover:text-white bg-transparent border-0 cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>
    </section>
  )
}

export default TopSearch
