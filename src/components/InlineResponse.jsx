import './InlineResponse.css'
import CitationChip from './CitationChip'

function renderSegments(segments, citations, onAddToBoard) {
  return segments.map((seg, i) => {
    if (seg.citationId) {
      const citation = citations[seg.citationId]
      return (
        <span key={i}>
          {seg.bold ? <strong>{seg.text}</strong> : seg.text}
          {citation && <CitationChip citation={citation} onAddToBoard={onAddToBoard} />}
        </span>
      )
    }
    if (seg.bold) return <strong key={i}>{seg.text}</strong>
    return <span key={i}>{seg.text}</span>
  })
}

export default function InlineResponse({ blocks, citations, onAddToBoard }) {
  return (
    <div className="inline-response">
      {blocks.map((block, i) => {
        if (block.type === 'paragraph') {
          return (
            <p key={i} className={`ir-paragraph${block.bold ? ' ir-paragraph--heading' : ''}`}>
              {renderSegments(block.segments, citations, onAddToBoard)}
            </p>
          )
        }

        if (block.type === 'bullets') {
          return (
            <ul key={i} className="ir-bullets">
              {block.items.map((item, j) => (
                <li key={j} className="ir-bullet">
                  {renderSegments(item.segments, citations, onAddToBoard)}
                </li>
              ))}
            </ul>
          )
        }

        if (block.type === 'blockquote') {
          const citation = citations[block.citationId]
          return (
            <blockquote key={i} className="ir-blockquote">
              <span className="ir-blockquote-text">"{block.text}"</span>
              {citation && <CitationChip citation={citation} onAddToBoard={onAddToBoard} />}
            </blockquote>
          )
        }

        return null
      })}
    </div>
  )
}
