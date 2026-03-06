import './Canvas.css'
import CanvasCard from './CanvasCard'

export default function Canvas({ cards, onDrop, onRemoveCard }) {
  function handleDragOver(e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }

  function handleDrop(e) {
    e.preventDefault()
    const raw = e.dataTransfer.getData('application/json')
    if (!raw) return
    const card = JSON.parse(raw)
    const rect = e.currentTarget.getBoundingClientRect()
    onDrop(card, e.clientX - rect.left - 120, e.clientY - rect.top - 40)
  }

  return (
    <div
      className="canvas"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
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
