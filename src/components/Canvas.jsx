import './Canvas.css'
import CanvasCard from './CanvasCard'

export default function Canvas({ cards, onRemoveCard }) {
  return (
    <div className="canvas">
      <svg className="canvas-dots" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#c8c8c8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)"/>
      </svg>
      {cards.map(card => (
        <CanvasCard key={card.instanceId} card={card} onRemove={onRemoveCard} />
      ))}
    </div>
  )
}
