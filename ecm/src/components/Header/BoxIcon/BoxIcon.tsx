import style from '../styles.module.scss'

interface BoxIconProps {
  img: string
  href: string
  alt?: string
}

const BoxIcon = ({ img, href, alt }: BoxIconProps) => {
  const { box_icon } = style
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className={box_icon}>
      <img src={img} alt={alt} />
    </a>
  )
}

export default BoxIcon
