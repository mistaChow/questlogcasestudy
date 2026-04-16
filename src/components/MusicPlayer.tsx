import { useEffect, useRef, useState } from 'react'

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [expanded, setExpanded] = useState(false)

  // Set initial volume and autoplay
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    audio.play().then(() => {
      setPlaying(true)
    }).catch(() => {
      // Browser blocked autoplay — user must interact first
      setPlaying(false)
    })
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v
  }

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
        }}
      >
        {/* Expanded volume panel */}
        {expanded && (
          <div
            style={{
              background: '#1C1009',
              border: '1px solid rgba(249,115,22,0.3)',
              borderRadius: '16px',
              padding: '14px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              minWidth: '180px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            }}
          >
            {/* Track name */}
            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                fontSize: '0.72rem',
                color: '#F97316',
                margin: 0,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              ♪ Heroes of the Loading Screen
            </p>

            {/* Volume row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.75rem' }}>{volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolume}
                style={{
                  flex: 1,
                  accentColor: '#F97316',
                  cursor: 'pointer',
                  height: '4px',
                }}
              />
              <span
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 400,
                  fontSize: '0.7rem',
                  color: '#A8A29E',
                  minWidth: '28px',
                  textAlign: 'right',
                }}
              >
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        )}

        {/* Main pill button */}
        <div
          style={{
            background: '#1C1009',
            border: '1px solid rgba(249,115,22,0.35)',
            borderRadius: '9999px',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            cursor: 'default',
          }}
        >
          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            title={playing ? 'Pause music' : 'Play music'}
            style={{
              background: playing ? '#F97316' : 'rgba(249,115,22,0.15)',
              border: playing ? 'none' : '1px solid rgba(249,115,22,0.4)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.15s ease, transform 0.1s ease',
              flexShrink: 0,
              padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {playing ? (
              // Pause icon
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="2" y="1" width="3" height="10" rx="1" fill="white" />
                <rect x="7" y="1" width="3" height="10" rx="1" fill="white" />
              </svg>
            ) : (
              // Play icon
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: '1px' }}>
                <path d="M2 1.5L10 6L2 10.5V1.5Z" fill="#F97316" />
              </svg>
            )}
          </button>

          {/* Label */}
          <span
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              fontSize: '0.75rem',
              color: playing ? '#FEF3C7' : '#A8A29E',
              transition: 'color 0.15s ease',
              userSelect: 'none',
            }}
          >
            {playing ? 'Quest Log Theme' : 'Music Off'}
          </span>

          {/* Volume toggle */}
          <button
            onClick={() => setExpanded(e => !e)}
            title="Volume"
            style={{
              background: 'none',
              border: 'none',
              padding: '2px',
              cursor: 'pointer',
              opacity: expanded ? 1 : 0.5,
              transition: 'opacity 0.15s ease',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = expanded ? '1' : '0.5')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 5.5H5L9 2V14L5 10.5H2V5.5Z" fill="#A8A29E" />
              {volume > 0 && <path d="M11 5.5C12.1 6.2 12.8 7.0 12.8 8C12.8 9.0 12.1 9.8 11 10.5" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" />}
              {volume > 0.5 && <path d="M12.5 3.5C14.2 4.8 15 6.3 15 8C15 9.7 14.2 11.2 12.5 12.5" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default MusicPlayer
