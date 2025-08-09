import BoxIcon from '@/components/Header/BoxIcon/BoxIcon'
import { DataBoxIconLeft, DataBoxIconRight, DataMenuLeft, DataMenuRight } from './constant'
import Menu from '@/components/Header/Menu/Menu'
import styles from './styles.module.scss'
import logo from '@/assets/images/Logo-retina.png'
import useScrollHandler from '@/hooks/useScrollHandler'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

const Header = () => {
  const {
    container_box_item,
    container_box_menu,
    container_header,
    container_box_box,
    container,
    fixedHeader,
    topHeader
  } = styles
  const { scrollPos } = useScrollHandler()
  const [fixedPos, setFixedPos] = useState(false)

  useEffect(() => {
    // if (scrollPos > 100) {
    //   setFixedPos(true)
    // } else {
    //   setFixedPos(false)
    // }

    setFixedPos(scrollPos >= 100 ? true : false)
  }, [scrollPos])

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPos
      })}
    >
      <div className={container_header}>
        <div className={container_box_box}>
          <div className={container_box_item}>
            {DataBoxIconLeft.map((item, index) => (
              <BoxIcon key={index} img={item.img} alt={item.alt} href={item.href} />
            ))}
          </div>
          <div className={container_box_menu}>
            {DataMenuLeft.map((item, index) => (
              <Menu key={index} content={item.content} href={item.href} />
            ))}
          </div>
        </div>
        <div>
          <img src={logo} alt='logo' style={{ width: '153px' }} />
        </div>

        <div className={container_box_box}>
          <div className={container_box_menu}>
            {DataMenuRight.map((item, index) => (
              <Menu key={index} content={item.content} href={item.href} />
            ))}
          </div>
          <div className={container_box_item}>
            {DataBoxIconRight.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
