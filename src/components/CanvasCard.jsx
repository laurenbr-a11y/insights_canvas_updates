import { useState } from 'react'
import './CanvasCard.css'

export default function CanvasCard({ card, onRemove }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`canvas-card${expanded ? ' canvas-card--expanded' : ''}`}
      style={{
        left: card.x,
        top: card.y,
        '--card-accent': card.accent,
        '--card-bg': card.color,
      }}
    >
      <button className="canvas-card-close" onClick={() => onRemove(card.instanceId)}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1 1l8 8M9 1L1 9" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="canvas-card-header" onClick={() => setExpanded(e => !e)}>
        <div className="canvas-card-avatar" style={{ background: card.accent }}>
          {card.customer[0]}
        </div>
        <div>
          <div className="canvas-card-name">{card.customer}</div>
          <div className="canvas-card-tier">{card.tier}</div>
        </div>
        <span className="canvas-card-tag" style={{ background: card.color, color: card.accent }}>
          {card.category}
        </span>
      </div>

      {expanded && (
        <div className="canvas-card-body">
          <p className="canvas-card-quote">"{card.quote}"</p>
          <div className="canvas-card-source">{card.source}</div>
        </div>
      )}

      {!expanded && (
        <p className="canvas-card-preview">"{card.feedback}"</p>
      )}
    </div>
  )
}
