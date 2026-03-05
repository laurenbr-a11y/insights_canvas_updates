import './InsightsPanel.css'

export default function InsightsPanel({ onClose }) {
  return (
    <div className="insights-panel">
      <div className="insights-header">
        <span className="insights-title">Insights</span>
        <button className="panel-close-btn" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="#666" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="insights-body">
        <h2 className="insights-question">What would you like to know?</h2>

        <div className="insights-input-wrap">
          <input
            className="insights-input"
            type="text"
            placeholder="Ask anything..."
          />
          <button className="insights-send-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M9 3l6 5-6 5" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="insights-suggestions">
          <button className="insights-suggestion">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="#888" strokeWidth="1.2"/>
              <path d="M4 6h6M4 9h4" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Top requested features
          </button>
          <button className="insights-suggestion">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="#888" strokeWidth="1.2"/>
              <path d="M7 4v3l2 2" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Recent top issues
          </button>
        </div>
      </div>
    </div>
  )
}
