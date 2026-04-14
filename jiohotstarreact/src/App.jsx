import { useState } from 'react'
import data from './data/content.json'
import Sidebar from './components/Sidebar'
import TopSearch from './components/TopSearch'
import SearchEmptyState from './components/SearchEmptyState'
import TopShowcase from './components/TopShowcase'
import Hero from './components/Hero'
import ContentRows from './components/ContentRows'
import Footer from './components/Footer'

function RowHasMatch(row, query) {
  return row.items.some(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    (item.sub && item.sub.toLowerCase().includes(query.toLowerCase()))
  )
}

function App() {
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedRow, setExpandedRow] = useState(null)

  const handleViewAll = (rowId) => {
    setExpandedRow(rowId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goBack = () => setExpandedRow(null)

  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden bg-bg-page text-white min-h-screen" style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      <Sidebar 
        onSearchToggle={() => setSearchVisible((v) => !v)} 
        activeSearch={searchVisible}
      />

      <main className="flex-1 min-w-0 transition-all duration-300 md:ml-18 pb-20 md:pb-0">
        <TopSearch 
          visible={searchVisible} 
          query={searchQuery}
          setQuery={setSearchQuery}
        />
        
        {searchQuery || expandedRow ? (
          <div className="min-h-[60vh] pt-4 md:pt-8">
            {expandedRow && (
              <button 
                onClick={goBack}
                className="ml-4 md:ml-8 mb-4 flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-bold cursor-pointer hover:bg-white/10 transition-all"
              >
                ← Back
              </button>
            )}
            <ContentRows 
              filter={searchQuery} 
              onViewAll={handleViewAll} 
              expandedId={expandedRow} 
            />
            {/* If all rows are empty, show empty state */}
            {!expandedRow && data.rows.every(row => 
              RowHasMatch(row, searchQuery) === false
            ) && <SearchEmptyState visible={true} />}
          </div>
        ) : (
          <>
            <TopShowcase />
            <Hero />
            <ContentRows onViewAll={handleViewAll} />
          </>
        )}
        
        <Footer />
      </main>
    </div>
  )
}

export default App
