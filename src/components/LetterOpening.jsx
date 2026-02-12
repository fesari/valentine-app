import { useState } from 'react'
import Silk from './Silk'
import ValentineTerminal from './ValentineTerminal'
import './LetterOpening.css'

const LetterOpening = ({ onComplete }) => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)

  const handleEnvelopeClick = () => {
    if (!envelopeOpened) {
      setEnvelopeOpened(true)
      setTimeout(() => {
        setShowTerminal(true)
      }, 800)
    }
  }

  return (
    <div className="letter-container">
      {/* Silk Background - Proper Red */}
      <div className="silk-background">
        <Silk speed={5} scale={1} color="#e63946" noiseIntensity={1.5} rotation={0} />
      </div>

      {/* Envelope */}
      <div className="letter-scene" style={{ opacity: showTerminal ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        <div className={`envelope-closed ${envelopeOpened ? 'opened' : ''}`} onClick={handleEnvelopeClick} style={{ cursor: !envelopeOpened ? 'pointer' : 'default' }}>
          <div className="envelope-back"></div>
          <div className={`envelope-flap ${envelopeOpened ? 'open' : ''}`}></div>
          {!envelopeOpened && (
            <div className="heart-sticker">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Terminal */}
      {showTerminal && <ValentineTerminal onComplete={onComplete} />}
    </div>
  )
}

export default LetterOpening
