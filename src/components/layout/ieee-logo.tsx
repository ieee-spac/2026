import Image from 'next/image'

export function IeeeLogo({
  name,
  lightSrc,
  darkSrc,
  width,
  height,
  darkWidth = width,
  darkHeight = height,
  className,
}: {
  name: string
  lightSrc: string
  darkSrc: string
  width: number
  height: number
  darkWidth?: number
  darkHeight?: number
  className: string
}) {
  return (
    <>
      <Image src={lightSrc} alt={name} width={width} height={height} unoptimized className={`dark:hidden ${className}`} />
      <Image src={darkSrc} alt={name} width={darkWidth} height={darkHeight} unoptimized className={`hidden dark:block ${className}`} />
    </>
  )
}
