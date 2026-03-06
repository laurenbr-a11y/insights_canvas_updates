import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import LeftToolbar from './components/LeftToolbar'
import Canvas from './components/Canvas'
import ZoomControls from './components/ZoomControls'
import SidekicksPanel from './components/SidekicksPanel'
import InsightsPanel from './components/InsightsPanel'

export default function App() {
  const [panel, setPanel] = useState(null)
  const [canvasCards, setCanvasCards] = useState([])
  const cardCountRef = useRef(0)

  function handleAiClick() {
    setPanel(p => p === null ? 'sidekicks' : null)
  }

  function handleAddToBoard(card) {
    const offset = cardCountRef.current * 24
    cardCountRef.current += 1
    setCanvasCards(prev => [
      ...prev,
      { ...card, instanceId: `${card.id}-${Date.now()}`, x: 80 + offset, y: 80 + offset }
    ])
  }

  function handleRemoveCard(instanceId) {
    setCanvasCards(prev => prev.filter(c => c.instanceId !== instanceId))
  }

  return (
    <div className="miro-shell">
      <Header />
      <div className="miro-body">
        <LeftToolbar onAiClick={handleAiClick} />
        <Canvas cards={canvasCards} onRemoveCard={handleRemoveCard} />
        {panel === 'sidekicks' && (
          <SidekicksPanel
            onClose={() => setPanel(null)}
            onSelectInsights={() => setPanel('insights')}
          />
        )}
        {panel === 'insights' && (
          <InsightsPanel
            onClose={() => setPanel(null)}
            onAddToBoard={handleAddToBoard}
          />
        )}
      </div>
      <ZoomControls />
    </div>
  )
}
