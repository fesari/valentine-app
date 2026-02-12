import { useState } from 'react'
import './App.css'
import LetterOpening from './components/LetterOpening'
import Gallery from './components/Gallery'

// Import photos
import photo1 from './assets/IMG_8089.JPG'
import photo2 from './assets/FullSizeRender.jpg'
import photo3 from './assets/IMG_0044.jpg'
import photo4 from './assets/IMG_1021.jpg'
import photo5 from './assets/IMG_1539.jpg'
import photo6 from './assets/IMG_5410.jpg'
import photo7 from './assets/IMG_5624.jpg'
import photo8 from './assets/IMG_5798.jpg'
import photo9 from './assets/IMG_6038.JPG'
import photo10 from './assets/IMG_6457.JPG'
import photo11 from './assets/IMG_6501.JPG'
import photo12 from './assets/IMG_7648.jpg'
import photo13 from './assets/IMG_8650.jpg'

function App() {
  const [currentView, setCurrentView] = useState('letter')

  const photos = [
    { id: 1, src: photo1, description: 'Halloween 🎃' },
    { id: 2, src: photo2, description: 'Singapore' },
    { id: 3, src: photo3, description: 'The night we met..' },
    { id: 4, src: photo4, description: 'Greek easter!' },
    { id: 5, src: photo5, description: 'Fancy dinner time' },
    { id: 6, src: photo6, description: 'Seafood boil' },
    { id: 7, src: photo7, description: 'First date <3' },
    { id: 8, src: photo8, description: 'Roadtripping' },
    { id: 9, src: photo9, description: 'Moving into terraces' },
    { id: 10, src: photo10, description: 'Picnic date' },
    { id: 11, src: photo11, description: 'Margarita night' },
    { id: 12, src: photo12, description: 'Ready for Euro summer' },
    { id: 13, src: photo13, description: 'Law ball (version 2)' },
  ]

  const handleLetterComplete = () => {
    setCurrentView('gallery')
  }

  return (
    <div className="app">
      {currentView === 'letter' && (
        <LetterOpening onComplete={handleLetterComplete} />
      )}
      {currentView === 'gallery' && (
        <Gallery photos={photos} />
      )}
    </div>
  )
}

export default App
