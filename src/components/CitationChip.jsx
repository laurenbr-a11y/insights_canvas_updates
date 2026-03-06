import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './CitationChip.css'

export default function CitationChip({ citation, onAddToBoard }) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const chipRef = useRef(null)

  function handleOpen() {
    const rect = chipRef.current.getBoundingClientRect()
    setPos({
      top: rect.bottom + 8,
      left: rect.left + rect.width / 2,
    })
    setOpen(o => !o)
  }

  useEffect(() => {
    if (!open) return
    function handleClick(e) {
      if (!chipRef.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  function handleAdd() {
    onAddToBoard(citation)
    setOpen(false)
  }

  return (
    <span className="citation-chip-wrap" ref={chipRef}>
      <button className="citation-chip" onClick={handleOpen} title={citation.customer}>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M4.5 2.5H2.5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M6.5 1.5h3v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 1.5L5.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      </button>

      {open && createPortal(
        <div
          className="citation-popover"
          style={{ top: pos.top, left: pos.left }}
        >
          <div className="citation-popover-topbar">
            <button className="citation-add-btn" onClick={handleAdd}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="1" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M6 4v4M4 6h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              Add to board
            </button>
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
        </div>,
        document.body
      )}
    </span>
  )
}
