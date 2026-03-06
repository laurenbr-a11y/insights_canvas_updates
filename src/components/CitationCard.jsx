import './CitationCard.css'

export default function CitationCard({ card }) {
  function handleDragStart(e) {
    e.dataTransfer.setData('application/json', JSON.stringify(card))
    e.dataTransfer.effectAllowed = 'copy'
  }

  return (
    <div
      className="citation-card"
      draggable
      onDragStart={handleDragStart}
      style={{ '--card-bg': card.color, '--card-accent': card.accent }}
    >
      <div className="citation-card-drag-hint">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <circle cx="2.5" cy="2.5" r="1" fill="#bbb"/>
          <circle cx="7.5" cy="2.5" r="1" fill="#bbb"/>
          <circle cx="2.5" cy="7.5" r="1" fill="#bbb"/>
          <circle cx="7.5" cy="7.5" r="1" fill="#bbb"/>
        </svg>
        <span>drag to canvas</span>
      </div>

      <div className="citation-card-header">
        <div className="citation-customer-avatar" style={{ background: card.accent }}>
          {card.customer[0]}
        </div>
        <div>
          <div className="citation-customer-name">{card.customer}</div>
          <div className="citation-tier">{card.tier}</div>
        </div>
        <span className="citation-category-tag" style={{ background: card.color, color: card.accent }}>
          {card.category}
        </span>
      </div>

      <p className="citation-feedback">"{card.quote}"</p>

      <div className="citation-source">{card.source}</div>
    </div>
  )
}
