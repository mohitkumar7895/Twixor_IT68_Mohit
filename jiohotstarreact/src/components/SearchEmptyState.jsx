function SearchEmptyState({ visible = false }) {
  if (!visible) return null

  return (
    <section id="searchEmptyState" className="px-4 md:px-8 py-10 md:py-20 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
        <span className="text-4xl">🔍</span>
      </div>
      <h3 className="mb-2 text-[22px] md:text-[26px] font-bold text-white">No results found</h3>
      <p className="text-[#93a0b7] text-[15px] md:text-[17px] max-w-md mx-auto mb-8">
        Try another title, genre, ya sport keyword.
      </p>
      
      <div className="flex flex-wrap gap-3 justify-center">
        {['Movies', 'Cricket', 'TV Shows', 'Horror', 'Action'].map(tag => (
          <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[13px] text-text-secondary">
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SearchEmptyState
