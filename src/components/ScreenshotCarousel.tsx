import { useState } from 'react'

interface Slide {
  src: string
  caption: string
}

interface ScreenshotCarouselProps {
  slides: Slide[]
}

function ScreenshotCarousel({ slides }: ScreenshotCarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)

  return (
    <div style={{ marginTop: '48px' }}>
      {/* Image area */}
      <div style={{ position: 'relative' }}>
        <img
          key={current}
          src={slides[current].src}
          alt={slides[current].caption}
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '320px',
            height: 'auto',
            margin: '0 auto',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            animation: 'slideIn 0.25s ease',
          }}
        />

        {/* Prev button */}
        <button
          onClick={prev}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'white',
            border: '1px solid #E7E5E4',
            borderRadius: '9999px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            fontSize: '1rem',
            color: '#1C1009',
            flexShrink: 0,
          }}
          aria-label="Previous"
        >
          ←
        </button>

        {/* Next button */}
        <button
          onClick={next}
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'white',
            border: '1px solid #E7E5E4',
            borderRadius: '9999px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            fontSize: '1rem',
            color: '#1C1009',
            flexShrink: 0,
          }}
          aria-label="Next"
        >
          →
        </button>
      </div>

      {/* Caption */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontStyle: 'italic',
        color: '#78716C',
        fontSize: '0.85rem',
        textAlign: 'center',
        marginTop: '16px',
        marginBottom: 0,
        minHeight: '1.2em',
      }}>
        {slides[current].caption}
      </p>

      {/* Dot indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '16px',
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '20px' : '8px',
              height: '8px',
              borderRadius: '9999px',
              background: i === current ? '#F97316' : '#D6D3D1',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'width 0.2s ease, background 0.2s ease',
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <p style={{
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 600,
        fontSize: '0.75rem',
        color: '#A8A29E',
        textAlign: 'center',
        marginTop: '8px',
        marginBottom: 0,
        letterSpacing: '0.05em',
      }}>
        {current + 1} / {slides.length}
      </p>
    </div>
  )
}

export default ScreenshotCarousel
