interface SectionHeaderProps {
  label: string
  heading: string
  centered?: boolean
}

function SectionHeader({ label, heading, centered = false }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left' }}>
      <p
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 700,
          color: '#F97316',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 800,
          color: '#1C1009',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {heading}
      </h2>
      <div
        style={{
          width: '40px',
          height: '3px',
          background: '#F97316',
          borderRadius: '2px',
          marginTop: '12px',
          ...(centered ? { marginLeft: 'auto', marginRight: 'auto' } : {}),
        }}
      />
    </div>
  )
}

export default SectionHeader
