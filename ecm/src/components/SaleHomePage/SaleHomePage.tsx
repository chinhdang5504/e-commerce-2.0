import Button from '@/components/Button/Button'
import style from './style.module.scss'
import useTranslateXImage from '@/hooks/useTranslateXImage'

const SaleHomePage = () => {
  const { container, title, description, btnBox, boxImg } = style
  const { translateXPos } = useTranslateXImage()

  return (
    <div className={container}>
      <div
        className={boxImg}
        style={{
          transform: `translateX(${translateXPos}px)`,
          transition: 'transform 0.6s ease'
        }}
      >
        <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg' />
      </div>
      <div>
        <h2 className={title}>Sale of the year</h2>
        <p className={description}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
        <div className={btnBox}>
          <Button content='Read more' isPrimary={false} />
        </div>
      </div>
      <div
        className={boxImg}
        style={{
          transform: `translateX(${-translateXPos}px)`,
          transition: 'transform 0.6s ease'
        }}
      >
        <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg' />
      </div>
    </div>
  )
}

export default SaleHomePage
