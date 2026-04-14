const NAV_ITEMS = [
  { href: '#home-section', icon: '⊞', label: 'Home', active: true },
  { icon: '🔍', label: 'Search', isSearch: true },
  { href: '#tv-section', icon: '📺', label: 'TV' },
  { href: '#movies-section', icon: '🎬', label: 'Movies' },
  { href: '#sports-section', icon: '⚽', label: 'Sports' },
  { href: '#home-section', icon: '✦', label: 'Sparks' },
  { href: '#home-section', icon: '⊟', label: 'Categories' },
  { href: '#home-section', icon: '👤', label: 'My Space' },
]

function Sidebar({ onSearchToggle, activeSearch }) {
  return (
    <aside
      aria-label="Primary navigation"
      className="group fixed bottom-0 left-0 right-0 md:top-0 md:bottom-0 md:w-18 md:hover:w-60 z-100 flex flex-row md:flex-col items-center justify-around md:justify-start py-2 md:py-5 md:pb-6 overflow-hidden border-t md:border-t-0 md:border-r border-white/6 bg-bg-sidebar/95 md:bg-bg-sidebar backdrop-blur-md md:backdrop-blur-none transition-[width] duration-300 ease-in-out"
    >
      <a
        href="#home-section"
        aria-label="Go to home section"
        className="hidden md:flex items-center justify-center w-full mb-9 px-3 no-underline"
      >
        <img
          src="/logo.png"
          alt="Brand logo"
          className="w-11 h-11 shrink-0 object-contain"
        />
      </a>

      <nav aria-label="Sidebar links" className="flex flex-row md:flex-col items-center md:items-start flex-1 w-full gap-0.5 px-2 md:px-0">
        {NAV_ITEMS.map((item) =>
          item.isSearch ? (
            <button
              key={item.label}
              onClick={onSearchToggle}
              className={[
                'relative flex flex-col md:flex-row items-center w-auto md:w-full gap-1 md:gap-3.5 px-4 md:px-5.5 py-2 md:py-3.25 whitespace-nowrap bg-transparent border-0 cursor-pointer text-center md:text-left transition-colors duration-200 hover:bg-white/[0.07]',
                activeSearch ? 'text-white' : 'text-text-sidebar',
              ].join(' ')}
            >
              <span className="w-5.25 text-[20px] md:text-[22px] leading-none text-center shrink-0">
                {item.icon}
              </span>
              <span className="text-[10px] md:text-sm font-semibold md:opacity-0 md:pointer-events-none transition-opacity duration-160 delay-60 md:group-hover:opacity-100 md:group-hover:pointer-events-auto">
                {item.label}
              </span>
            </button>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className={[
                'relative flex flex-col md:flex-row items-center w-auto md:w-full gap-1 md:gap-3.5 px-4 md:px-5.5 py-2 md:py-3.25 whitespace-nowrap no-underline transition-colors duration-200 hover:bg-white/[0.07]',
                item.active
                  ? "text-white md:before:content-[''] md:before:absolute md:before:top-[22%] md:before:bottom-[22%] md:before:left-0 md:before:w-0.75 md:before:rounded-r-[3px] md:before:bg-[#1a73e8]"
                  : 'text-text-sidebar',
              ].join(' ')}
            >
              <span className="w-5.25 text-[20px] md:text-[22px] leading-none text-center shrink-0">
                {item.icon}
              </span>
              <span className="text-[10px] md:text-sm font-semibold md:opacity-0 md:pointer-events-none transition-opacity duration-160 delay-60 md:group-hover:opacity-100 md:group-hover:pointer-events-auto">
                {item.label}
              </span>
            </a>
          )
        )}
      </nav>
    </aside>
  )
}

export default Sidebar
