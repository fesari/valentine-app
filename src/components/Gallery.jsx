import { useState, useEffect } from 'react'
import Silk from './Silk'
import { RippleButton } from '@/components/ui/ripple-button'
import './Gallery.css'

const Gallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo)
    setSelectedIndex(photos.findIndex(p => p.id === photo.id))
  }

  const handleCloseModal = () => {
    setSelectedPhoto(null)
    setSelectedIndex(null)
  }

  const handleNextPhoto = () => {
    if (selectedIndex !== null && selectedIndex < photos.length - 1) {
      const nextPhoto = photos[selectedIndex + 1]
      setSelectedPhoto(nextPhoto)
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const handlePrevPhoto = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      const prevPhoto = photos[selectedIndex - 1]
      setSelectedPhoto(prevPhoto)
      setSelectedIndex(selectedIndex - 1)
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedPhoto) return
      if (e.key === 'ArrowRight') handleNextPhoto()
      if (e.key === 'ArrowLeft') handlePrevPhoto()
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedPhoto, selectedIndex, photos])

  return (
    <div className="gallery-container">
      {/* Silk Background - Proper Red */}
      <div className="silk-background">
        <Silk speed={5} scale={1} color="#e63946" noiseIntensity={1.5} rotation={0} />
      </div>

      <div className="horizontal-gallery">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="gallery-item"
            onClick={() => handlePhotoClick(photo)}
          >
            <div className="photo-card">
              <img src={photo.src} alt={photo.description} />
              <div className="photo-title">{photo.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="photo-modal" onClick={handleCloseModal}>
          <RippleButton rippleColor="#e63946" className="close-button" onClick={handleCloseModal}>
            ×
          </RippleButton>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-wrapper">
              {selectedIndex !== null && selectedIndex > 0 && (
                <RippleButton rippleColor="#e63946" className="nav-arrow prev-arrow" onClick={handlePrevPhoto}>
                  ‹
                </RippleButton>
              )}
              <img src={selectedPhoto.src} alt={selectedPhoto.description} />
              {selectedIndex !== null && selectedIndex < photos.length - 1 && (
                <RippleButton rippleColor="#e63946" className="nav-arrow next-arrow" onClick={handleNextPhoto}>
                  ›
                </RippleButton>
              )}
            </div>
            <p className="modal-caption">{selectedPhoto.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
