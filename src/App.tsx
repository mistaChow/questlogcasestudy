import { useState } from 'react'
import CaseStudy from './pages/CaseStudy'
import MusicPlayer from './components/MusicPlayer'
import AppPreviewModal from './components/AppPreviewModal'
import './index.css'

function App() {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <>
      <CaseStudy onViewApp={() => setShowPreview(true)} />
      <MusicPlayer />
      {showPreview && <AppPreviewModal onClose={() => setShowPreview(false)} />}
    </>
  )
}

export default App
