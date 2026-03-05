import './LeftToolbar.css'

const tools = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 3l5.5 14 2.5-5.5L16.5 9 3 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 7h8M5 10h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="3" y="3" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 14V5a1 1 0 011-1h4l4 4v6a1 1 0 01-1 1H5a1 1 0 01-1-1z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 4v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 14l3-3 2 2 3-4 3 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="5.5" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 9a3 3 0 016 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="9" r="1" fill="currentColor"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="8" width="6" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 10v4M13 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 14V6a1 1 0 011-1h5l4 4v5a1 1 0 01-1 1H5a1 1 0 01-1-1z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 5v3h3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="9" cy="11" r="1" fill="currentColor"/>
        <path d="M9 12v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 15c1-4 4-8 6-8s4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    isPlus: true
  },
]

export default function LeftToolbar() {
  return (
    <div className="left-toolbar">
      <div className="ai-btn-wrap">
        <button className="ai-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2l1.5 4.5L16 8l-4.5 1.5L10 14l-1.5-4.5L4 8l4.5-1.5L10 2z" fill="white"/>
            <path d="M15 13l.8 2.2L18 16l-2.2.8L15 19l-.8-2.2L12 16l2.2-.8L15 13z" fill="white" opacity="0.8"/>
          </svg>
        </button>
      </div>

      <div className="tool-list">
        {tools.map((tool, i) => (
          <button key={i} className={`tool-btn${i === 0 ? ' active' : ''}${tool.isPlus ? ' tool-btn-plus' : ''}`}>
            {tool.isPlus ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : tool.icon}
          </button>
        ))}
      </div>

      <div className="toolbar-bottom">
        <button className="tool-btn">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 12l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="tool-btn">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M15 12l-4-4-3 3-5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
