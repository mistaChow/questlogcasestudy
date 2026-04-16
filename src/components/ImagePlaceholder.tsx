interface ImagePlaceholderProps {
  caption?: string
  aspectRatio?: string
  className?: string
}

function ImagePlaceholder({ caption, aspectRatio = '4/5', className = '' }: ImagePlaceholderProps) {
  return (
    <div className={className}>
      <div
        style={{
          background: '#FEF9EE',
          border: '2px dashed rgba(249, 115, 22, 0.4)',
          borderRadius: '16px',
          aspectRatio,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: '2rem' }}>📷</span>
        <span
          style={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 300,
            color: '#A8A29E',
            fontSize: '0.8rem',
            marginTop: '8px',
          }}
        >
          Image coming
        </span>
      </div>
      {caption && (
        <p
          style={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#A8A29E',
            fontSize: '0.75rem',
            marginTop: '8px',
          }}
        >
          {caption}
        </p>
      )}
    </div>
  )
}

export default ImagePlaceholder
