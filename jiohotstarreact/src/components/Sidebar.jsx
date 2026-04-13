function Sidebar() {
  return (
    <aside class="sidebar" aria-label="Primary navigation">
    <a class="sidebar-logo" href="#home-section" aria-label="Go to home section">
      <img class="sidebar-logo-image" src="logo.png" alt="Brand logo" />
    </a>

    <nav class="sidebar-nav" aria-label="Sidebar links">
      <a class="nav-item active" href="#home-section">
        <i class="bi bi-house-door-fill nav-icon" aria-hidden="true"></i>
        <span class="nav-label">Home</span>
      </a>

      <a class="nav-item" href="#home-section" data-nav-action="search">
        <i class="bi bi-search nav-icon" aria-hidden="true"></i>
        <span class="nav-label">Search</span>
      </a>

      <a class="nav-item" href="#tv-section">
        <i class="bi bi-tv nav-icon" aria-hidden="true"></i>
        <span class="nav-label">TV</span>
      </a>

      <a class="nav-item" href="#movies-section">
        <i class="bi bi-film nav-icon" aria-hidden="true"></i>
        <span class="nav-label">Movies</span>
      </a>

      <a class="nav-item" href="#sports-section">
        <i class="bi bi-trophy-fill nav-icon" aria-hidden="true"></i>
        <span class="nav-label">Sports</span>
      </a>

      <a class="nav-item" href="#home-section">
        <i class="bi bi-lightning-charge nav-icon" aria-hidden="true"></i>
        <span class="nav-label">Sparks</span>
      </a>

      <a class="nav-item" href="#home-section">
        <i class="bi bi-grid-3x3-gap nav-icon" aria-hidden="true"></i>
        <span class="nav-label">Categories</span>
      </a>

      <a class="nav-item" href="#home-section">
        <i class="bi bi-person-circle nav-icon" aria-hidden="true"></i>
        <span class="nav-label">My Space</span>
      </a>
    </nav>
  </aside>

  )
}

export default Sidebar
