import { useState, useRef, useEffect } from 'react'
import './CitationChip.css'

export default function CitationChip({ citation }) {
  const [open, setOpen] = useState(false)
  const chipRef = useRef(null)

  useEffect(() => {
    if (!open) return
    function handleClick(e) {
      if (!chipRef.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  function handleDragStart(e) {
    e.dataTransfer.setData('application/json', JSON.stringify(citation))
    e.dataTransfer.effectAllowed = 'copy'
    setOpen(false)
  }

  return (
    <span className="citation-chip-wrap" ref={chipRef}>
      <button
        className="citation-chip"
        onClick={() => setOpen(o => !o)}
        title={citation.customer}
      >
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M4.5 2.5H2.5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M6.5 1.5h3v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 1.5L5.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div className="citation-popover" draggable onDragStart={handleDragStart}>
          <div className="citation-popover-drag-hint">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <circle cx="2" cy="1.5" r="1" fill="#ccc"/>
              <circle cx="5" cy="1.5" r="1" fill="#ccc"/>
              <circle cx="8" cy="1.5" r="1" fill="#ccc"/>
              <circle cx="2" cy="4.5" r="1" fill="#ccc"/>
              <circle cx="5" cy="4.5" r="1" fill="#ccc"/>
              <circle cx="8" cy="4.5" r="1" fill="#ccc"/>
            </svg>
            <span>drag to canvas</span>
          </div>
          <div className="citation-popover-header">
            <div className="citation-popover-avatar" style={{ background: citation.accent }}>
              {citation.customer[0]}
            </div>
            <div>
              <div className="citation-popover-name">{citation.customer}</div>
              <div className="citation-popover-tier">{citation.tier}</div>
            </div>
            <span className="citation-popover-tag" style={{ background: citation.color, color: citation.accent }}>
              {citation.category}
            </span>
          </div>
          <p className="citation-popover-quote">"{citation.quote}"</p>
          <div className="citation-popover-source">{citation.source}</div>
        </div>
      )}
    </span>
  )
}
