import './SidekicksPanel.css'

const sidekicks = [
  {
    id: 'insights',
    name: 'Miro Insights',
    desc: 'Synthesize customer feedback to guide decisions',
    icon: (
      <div className="sidekick-icon sidekick-icon--insights">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect width="22" height="22" rx="5" fill="#FFD600"/>
          <path d="M6 16V9l5-3 5 3v7" stroke="#222" strokeWidth="1.6" strokeLinejoin="round"/>
          <rect x="8.5" y="12" width="2" height="4" rx="0.5" fill="#222"/>
          <rect x="11.5" y="10" width="2" height="6" rx="0.5" fill="#222"/>
        </svg>
      </div>
    ),
  },
  {
    id: 'gemini',
    name: 'Gemini Enterprise',
    desc: 'Browse company knowledge with Gemini',
    icon: (
      <div className="sidekick-icon sidekick-icon--gemini">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 2C11 2 13.5 7 18 9C13.5 11 11 16 11 16C11 16 8.5 11 4 9C8.5 7 11 2 11 2Z" fill="url(#gem)"/>
          <defs>
            <linearGradient id="gem" x1="4" y1="2" x2="18" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4285F4"/>
              <stop offset="0.5" stopColor="#9C27B0"/>
              <stop offset="1" stopColor="#00BCD4"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    id: 'glean',
    name: 'Glean',
    desc: 'Find relevant context using Glean',
    icon: (
      <div className="sidekick-icon sidekick-icon--glean">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" fill="#1a73e8"/>
          <text x="11" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="sans-serif">g</text>
        </svg>
      </div>
    ),
  },
  {
    id: 'copilot',
    name: 'Microsoft Copilot',
    desc: "Search your company's apps and files with Copilot",
    icon: (
      <div className="sidekick-icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="2" y="2" width="8" height="8" rx="1" fill="#F25022"/>
          <rect x="12" y="2" width="8" height="8" rx="1" fill="#7FBA00"/>
          <rect x="2" y="12" width="8" height="8" rx="1" fill="#00A4EF"/>
          <rect x="12" y="12" width="8" height="8" rx="1" fill="#FFB900"/>
        </svg>
      </div>
    ),
  },
  {
    id: 'twin',
    name: 'Miro Digital Twin',
    desc: 'Your AI-powered Miro knowledge assistant',
    icon: (
      <div className="sidekick-icon sidekick-icon--twin">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" stroke="#555" strokeWidth="1.5"/>
          <circle cx="11" cy="11" r="4" stroke="#555" strokeWidth="1.5"/>
          <circle cx="11" cy="11" r="1.5" fill="#555"/>
        </svg>
      </div>
    ),
  },
]

export default function SidekicksPanel({ onClose, onSelectInsights }) {
  return (
    <div className="sidekicks-panel">
      <div className="sidekicks-header">
        <span className="sidekicks-title">+ Create</span>
        <button className="panel-close-btn" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="#666" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="sidekicks-search">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="#999" strokeWidth="1.4"/>
          <path d="M9.5 9.5L13 13" stroke="#999" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <span className="sidekicks-search-text">Search all Sidekicks</span>
        <button className="sidekicks-search-clear">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="sidekicks-tabs">
        <button className="sidekick-tab">Explore</button>
        <button className="sidekick-tab">My Sidekicks</button>
        <button className="sidekick-tab">Formats</button>
        <button className="sidekick-tab active">Knowledge</button>
      </div>

      <div className="sidekicks-list">
        {sidekicks.map(s => (
          <button
            key={s.id}
            className="sidekick-item"
            onClick={s.id === 'insights' ? onSelectInsights : undefined}
          >
            {s.icon}
            <div className="sidekick-info">
              <div className="sidekick-name">{s.name}</div>
              <div className="sidekick-desc">{s.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
