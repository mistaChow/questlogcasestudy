import { useEffect } from 'react'

interface AppPreviewModalProps {
  onClose: () => void
}

function AppPreviewModal({ onClose }: AppPreviewModalProps) {
  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(15, 10, 5, 0.82)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'modalFadeIn 0.2s ease',
      }}
    >
      {/* Phone frame — stop propagation so clicks inside don't close */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '390px',
          height: '780px',
          maxHeight: 'calc(100vh - 48px)',
          background: '#1a1a1a',
          borderRadius: '52px',
          boxShadow: '0 0 0 1px #333, 0 0 0 3px #111, 0 40px 80px rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          animation: 'phoneSlideUp 0.25s ease',
          flexShrink: 0,
        }}
      >
        {/* Side buttons (visual only) */}
        <div style={{ position: 'absolute', left: '-3px', top: '120px', width: '3px', height: '32px', background: '#333', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: '-3px', top: '168px', width: '3px', height: '56px', background: '#333', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: '-3px', top: '236px', width: '3px', height: '56px', background: '#333', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', right: '-3px', top: '168px', width: '3px', height: '80px', background: '#333', borderRadius: '0 2px 2px 0' }} />

        {/* Top bar with Dynamic Island + status */}
        <div style={{
          width: '100%',
          height: '52px',
          background: '#1a1a1a',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Dynamic island pill */}
          <div style={{
            width: '120px',
            height: '34px',
            background: '#000',
            borderRadius: '20px',
          }} />
        </div>

        {/* iframe screen area */}
        <div style={{
          flex: 1,
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          background: '#FFFBF5',
        }}>
          <iframe
            src="https://quest-log-topaz.vercel.app/"
            title="Quest Log App"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
            allow="autoplay"
          />
        </div>

        {/* Home indicator */}
        <div style={{
          width: '100%',
          height: '28px',
          background: '#1a1a1a',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '120px',
            height: '5px',
            background: '#444',
            borderRadius: '3px',
          }} />
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '9999px',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'white',
          fontSize: '1.1rem',
          transition: 'background 0.15s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
        aria-label="Close preview"
      >
        ✕
      </button>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes phoneSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}

export default AppPreviewModal
