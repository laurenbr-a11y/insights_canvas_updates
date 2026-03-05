import './ZoomControls.css'

export default function ZoomControls() {
  return (
    <div className="zoom-controls">
      <button className="zoom-btn" title="Fit to screen">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 5V2h3M11 2h3v3M14 11v3h-3M5 14H2v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="zoom-divider"/>
      <button className="zoom-btn" title="Zoom out">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>
      <span className="zoom-label">6%</span>
      <button className="zoom-btn" title="Zoom in">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>
      <div className="zoom-divider"/>
      <button className="zoom-btn" title="Help">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 6.2a2 2 0 113.6 1.2C9 8.2 8 8.5 8 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="8" cy="11.5" r="0.8" fill="currentColor"/>
        </svg>
      </button>
    </div>
  )
}
