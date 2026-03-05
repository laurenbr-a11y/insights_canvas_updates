import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LeftToolbar from './components/LeftToolbar'
import Canvas from './components/Canvas'
import ZoomControls from './components/ZoomControls'
import SidekicksPanel from './components/SidekicksPanel'
import InsightsPanel from './components/InsightsPanel'

export default function App() {
  const [panel, setPanel] = useState(null) // null | 'sidekicks' | 'insights'

  function handleAiClick() {
    setPanel(p => p === null ? 'sidekicks' : null)
  }

  return (
    <div className="miro-shell">
      <Header />
      <div className="miro-body">
        <LeftToolbar onAiClick={handleAiClick} />
        <Canvas />
        {panel === 'sidekicks' && (
          <SidekicksPanel
            onClose={() => setPanel(null)}
            onSelectInsights={() => setPanel('insights')}
          />
        )}
        {panel === 'insights' && (
          <InsightsPanel onClose={() => setPanel(null)} />
        )}
      </div>
      <ZoomControls />
    </div>
  )
}
