import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="header-icon-btn">
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <rect width="18" height="2" rx="1" fill="#1a1a1a"/>
            <rect y="6" width="18" height="2" rx="1" fill="#1a1a1a"/>
            <rect y="12" width="18" height="2" rx="1" fill="#1a1a1a"/>
          </svg>
        </button>

        <div className="header-logo">
          <svg width="38" height="16" viewBox="0 0 38 16" fill="none">
            <text x="0" y="13" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontWeight="700" fontSize="16" fill="#050038">miro</text>
          </svg>
        </div>

        <div className="header-board-name">
          <span className="board-status-dot"></span>
          <span className="board-name">Lauren's playground</span>
          <span className="board-badge">Internal</span>
        </div>

        <button className="header-icon-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="4" r="1.2" fill="#666"/>
            <circle cx="8" cy="8" r="1.2" fill="#666"/>
            <circle cx="8" cy="12" r="1.2" fill="#666"/>
          </svg>
        </button>
      </div>

      <div className="header-right">
        <div className="header-toolbar-icons">
          <button className="header-icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#555" strokeWidth="1.5"/>
              <path d="M7 10l2 2 4-4" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="header-icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3a7 7 0 100 14A7 7 0 0010 3z" stroke="#555" strokeWidth="1.5"/>
              <path d="M10 7v3l2 2" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="header-icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="3" width="14" height="11" rx="2" stroke="#555" strokeWidth="1.5"/>
              <path d="M7 17h6" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10 14v3" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="header-icon-btn avatar-btn">
            <div className="avatar-globe">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#555" strokeWidth="1.5"/>
                <ellipse cx="10" cy="10" rx="4" ry="8" stroke="#555" strokeWidth="1.5"/>
                <path d="M3 10h14" stroke="#555" strokeWidth="1.5"/>
              </svg>
            </div>
            <svg className="avatar-caret" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <button className="btn-present">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
            <path d="M1 1l8 5-8 5V1z" fill="white"/>
          </svg>
          Present
        </button>

        <button className="btn-share">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="4" cy="7" r="1.5" fill="white"/>
            <circle cx="10" cy="3" r="1.5" fill="white"/>
            <circle cx="10" cy="11" r="1.5" fill="white"/>
            <path d="M5.5 6.2L8.5 4M5.5 7.8L8.5 10" stroke="white" strokeWidth="1.2"/>
          </svg>
          Share
        </button>
      </div>
    </header>
  )
}
