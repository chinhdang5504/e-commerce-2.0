import styles from '../styles.module.scss'

interface MenuProps {
  content: string
  href: string
}

const Menu = ({ content, href }: MenuProps) => {
  const { menu } = styles
  return <div className={menu}>{content}</div>
}

export default Menu
