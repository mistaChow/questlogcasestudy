import { useState, useRef } from 'react'

interface Slide {
  src: string
  caption: string
}

interface ScreenshotCarouselProps {
  slides: Slide[]
  maxWidth?: string
}

const ANIM_MS = 280

function ScreenshotCarousel({ slides, maxWidth = '320px' }: ScreenshotCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [incoming, setIncoming] = useState<number | null>(null)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (index: number, dir: 1 | -1) => {
    if (transitioning || index === current) return
    if (timerRef.current) clearTimeout(timerRef.current)
    setDirection(dir)
    setIncoming(index)
    setTransitioning(true)
    // small buffer past animation duration to guarantee final frame is painted
    timerRef.current = setTimeout(() => {
      setCurrent(index)
      setIncoming(null)
      setTransitioning(false)
    }, ANIM_MS + 30)
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length, -1)
  const next = () => goTo((current + 1) % slides.length, 1)

  const activeIndex = incoming !== null ? incoming : current

  const outAnim = direction === 1 ? 'cs-slide-out-next' : 'cs-slide-out-prev'
  const inAnim  = direction === 1 ? 'cs-slide-in-next'  : 'cs-slide-in-prev'
  const animDur = `${ANIM_MS}ms`

  const imgBase: React.CSSProperties = {
    display: 'block',
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
  }

  return (
    <div style={{ marginTop: '48px' }}>

      {/* ── Image area ── */}
      <div style={{ position: 'relative', padding: '0 52px' }}>

        {/*
          Outgoing stays IN FLOW — it holds the container height so there is
          no layout shift when the incoming image mounts.
          Incoming is ABSOLUTE on top, animates in over it.
          Both use fill-mode "both" so the "from" keyframe state is applied
          on the very first paint (no 1-frame opacity flash).
        */}
        <div
          className="carousel-img-wrapper"
          style={{ maxWidth, margin: '0 auto', position: 'relative', lineHeight: 0 }}
        >
          {/* Outgoing — in flow, animates out */}
          <img
            src={slides[current].src}
            alt={slides[current].caption}
            style={{
              ...imgBase,
              ...(transitioning ? {
                animation: `${outAnim} ${animDur} ease both`,
              } : {}),
            }}
          />

          {/* Incoming — absolute overlay, animates in */}
          {transitioning && incoming !== null && (
            <img
              src={slides[incoming].src}
              alt={slides[incoming].caption}
              style={{
                ...imgBase,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                animation: `${inAnim} ${animDur} ease both`,
              }}
            />
          )}
        </div>

        {/* Prev button */}
        <button
          onClick={prev}
          onMouseEnter={e  => (e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)')}
          onMouseLeave={e  => (e.currentTarget.style.transform = 'translateY(-50%) scale(1)')}
          onMouseDown={e   => (e.currentTarget.style.transform = 'translateY(-50%) scale(0.9)')}
          onMouseUp={e     => (e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)')}
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
            transition: 'transform 0.12s ease',
          }}
          aria-label="Previous"
        >←</button>

        {/* Next button */}
        <button
          onClick={next}
          onMouseEnter={e  => (e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)')}
          onMouseLeave={e  => (e.currentTarget.style.transform = 'translateY(-50%) scale(1)')}
          onMouseDown={e   => (e.currentTarget.style.transform = 'translateY(-50%) scale(0.9)')}
          onMouseUp={e     => (e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)')}
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
            transition: 'transform 0.12s ease',
          }}
          aria-label="Next"
        >→</button>
      </div>

      {/* ── Caption ── */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontStyle: 'italic',
        color: '#78716C',
        fontSize: '0.85rem',
        textAlign: 'center',
        marginTop: '16px',
        marginBottom: 0,
        minHeight: '1.4em',
        opacity: transitioning ? 0 : 1,
        transition: `opacity ${ANIM_MS * 0.5}ms ease`,
      }}>
        {slides[activeIndex].caption}
      </p>

      {/* ── Dot indicators ── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === activeIndex ? '20px' : '8px',
              height: '8px',
              borderRadius: '9999px',
              background: i === activeIndex ? '#F97316' : '#D6D3D1',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'width 0.2s ease, background 0.2s ease',
            }}
          />
        ))}
      </div>

      {/* ── Counter ── */}
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
        {activeIndex + 1} / {slides.length}
      </p>

    </div>
  )
}

export default ScreenshotCarousel
