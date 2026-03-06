import './InsightsPanel.css'

const suggestions = [
  "What's driving churn?",
  "Which features have the most unmet demand?",
  "Where are users hitting the most friction?",
  "What do our top accounts have in common?",
]

export default function InsightsPanel({ onClose }) {
  return (
    <div className="insights-panel">
      <div className="insights-header">
        <span className="insights-title">Miro Insights</span>
        <button className="panel-close-btn" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="#666" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="insights-body">
        <div className="insights-avatar-row">
          <div className="insights-avatar">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2l1.6 4.8L18 8l-5.4 1.6L11 15l-1.6-5.4L4 8l5.4-1.2L11 2z" fill="white"/>
              <path d="M16 13.5l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4z" fill="white" opacity="0.75"/>
            </svg>
          </div>
          <button className="insights-avatar-chevron">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5l5 5 5-5" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <h2 className="insights-greeting">Hey Lauren</h2>

        <p className="insights-description">
          I'm here to help you synthesize customer feedback, surface patterns, and turn raw signals into strategic decisions.
        </p>

        <p className="insights-can-help">I can help:</p>

        <div className="insights-suggestions">
          {suggestions.map((s, i) => (
            <button key={i} className="insights-suggestion">{s}</button>
          ))}
        </div>
      </div>

      <div className="insights-input-footer">
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
      </div>
    </div>
  )
}
