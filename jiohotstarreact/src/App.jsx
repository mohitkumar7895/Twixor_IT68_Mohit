import Sidebar from './components/Sidebar'
import TopSearch from './components/TopSearch'
import SearchEmptyState from './components/SearchEmptyState'
import TopShowcase from './components/TopShowcase'
import Hero from './components/Hero'
import ContentRows from './components/ContentRows'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Sidebar />

      <main>
        <TopSearch />
        <SearchEmptyState />
        <TopShowcase />
        <Hero />
        <ContentRows />
        <Footer />
      </main>
    </>
  )
}

export default App
