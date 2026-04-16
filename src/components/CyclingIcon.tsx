import { useEffect, useState } from 'react'

interface CyclingIconProps {
  images: { src: string; srcSet?: string; alt: string }[]
  interval?: number
  size?: number
}

function CyclingIcon({ images, interval = 1000, size = 120 }: CyclingIconProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  const current = images[index]

  return (
    <img
      key={index}
      src={current.src}
      srcSet={current.srcSet}
      alt={current.alt}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'block',
        animation: 'iconFadeIn 0.25s ease',
      }}
    />
  )
}

export default CyclingIcon
