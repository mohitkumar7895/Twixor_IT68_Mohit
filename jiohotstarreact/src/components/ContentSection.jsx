function ContentSection({ section }) {
  return (
    <section className="section" id={section.anchorId}>
      <div className="section-header">
        <h2 className="section-title">{section.title}</h2>
        <a className="see-all" href="#home-section">
          View All
        </a>
      </div>
      <div className="carousel" id={section.id}>
        {section.items.map((item) => (
          <article className="content-card" key={`${section.id}-${item.title}`}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="content-card-title">{item.title}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ContentSection
