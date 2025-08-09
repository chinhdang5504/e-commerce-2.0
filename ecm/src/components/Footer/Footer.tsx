import { items } from '@/components/Footer/constant'
import styles from './styles.module.scss'
import logo from '@/assets/images/marseille-logo.webp'
const Footer = () => {
  const { background, container, logoStyle, boxItem, copyRight } = styles
  return (
    <div className={background}>
      <div className={container}>
        <div className={logoStyle}>
          <img src={logo} />
        </div>
        <div className={boxItem}>
          {items.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
        <div>Guaranteed safe ckeckout</div>
        <div>
          <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png' />
        </div>
        <div className={copyRight}>
          Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.
        </div>
      </div>
    </div>
  )
}

export default Footer
