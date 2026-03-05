import './App.css'
import Header from './components/Header'
import LeftToolbar from './components/LeftToolbar'
import Canvas from './components/Canvas'
import ZoomControls from './components/ZoomControls'

export default function App() {
  return (
    <div className="miro-shell">
      <Header />
      <div className="miro-body">
        <LeftToolbar />
        <Canvas />
      </div>
      <ZoomControls />
    </div>
  )
}
