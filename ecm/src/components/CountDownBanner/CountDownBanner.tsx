import CountDownTimer from '@/components/CountDownTimer/CountDownTimer'
import style from './style.module.scss'
import Button from '@/components/Button/Button'

const CountDownBanner = () => {
  const { container, container_timer, content, box_btn } = style
  const targetDate = '2025-12-31T00:00:00'

  return (
    <div className={container}>
      <div className={container_timer}>
        <CountDownTimer targetTime={targetDate} />
      </div>
      <p className={content}>The classics make a comeback</p>
      <div className={box_btn}>
        <Button content='Buy now' />
      </div>
    </div>
  )
}

export default CountDownBanner
