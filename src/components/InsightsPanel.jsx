import { useState, useRef, useEffect } from 'react'
import './InsightsPanel.css'
import InlineResponse from './InlineResponse'
import { mockResponses, fallbackResponse } from '../data/mockResponses'

const suggestions = [
  "What's driving churn?",
  "Which features have the most unmet demand?",
  "Where are users hitting the most friction?",
  "What do our top accounts have in common?",
]


export default function InsightsPanel({ onClose }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  function ask(query) {
    if (isTyping) return
    const userMsg = { role: 'user', text: query }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = mockResponses[query] || fallbackResponse
      setMessages(prev => [...prev, { role: 'ai', ...response }])
      setIsTyping(false)
    }, 1400)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (input.trim()) ask(input.trim())
  }

  const showHome = messages.length === 0

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
        {showHome ? (
          <div className="insights-home">
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
                <button key={i} className="insights-suggestion" onClick={() => ask(s)}>{s}</button>
              ))}
            </div>
          </div>
        ) : (
          <div className="insights-conversation">
            {messages.map((msg, i) => (
              <div key={i} className={`message message--${msg.role}`}>
                {msg.role === 'user' ? (
                  <div className="message-user-bubble">{msg.text}</div>
                ) : (
                  <div className="message-ai">
                    <div className="message-ai-avatar">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1l1 3.2L11 5l-3.2 1L7 9.2 6 6 2.8 5 6 4 7 1z" fill="white"/>
                      </svg>
                    </div>
                    <div className="message-ai-content">
                      <InlineResponse blocks={msg.blocks} citations={msg.citations} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="message message--ai">
                <div className="message-ai">
                  <div className="message-ai-avatar">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1l1 3.2L11 5l-3.2 1L7 9.2 6 6 2.8 5 6 4 7 1z" fill="white"/>
                    </svg>
                  </div>
                  <div className="typing-indicator">
                    <span/><span/><span/>
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef}/>
          </div>
        )}
      </div>

      <div className="insights-input-footer">
        {!showHome && (
          <div className="insights-quick-chips">
            {suggestions.slice(0, 2).map((s, i) => (
              <button key={i} className="insights-quick-chip" onClick={() => ask(s)}>{s}</button>
            ))}
          </div>
        )}
        <form className="insights-input-wrap" onSubmit={handleSubmit}>
          <input
            className="insights-input"
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className="insights-send-btn" type="submit" disabled={!input.trim() && !isTyping}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M9 3l6 5-6 5" stroke={input.trim() ? '#6c4fff' : '#ccc'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
