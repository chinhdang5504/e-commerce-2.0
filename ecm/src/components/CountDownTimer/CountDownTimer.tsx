import { useState, useEffect } from 'react'
import style from './style.module.scss'

interface DateTime {
  day: number
  hour: number
  min: number
  sec: number
}

interface CountDownTimerProps {
  targetTime: string
}

const CountDownTimer = ({ targetTime }: CountDownTimerProps) => {
  const calculateTimeLeft = (): DateTime => {
    const difference = new Date(targetTime).getTime() - new Date().getTime()
    if (difference > 0) {
      return {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / (1000 * 60)) % 60),
        sec: Math.floor((difference / 1000) % 60)
      }
    }
    return { day: 0, hour: 0, min: 0, sec: 0 }
  }

  const [timeLeft, setTimeLeft] = useState<DateTime>(calculateTimeLeft())
  const { box, title, container } = style

  useEffect(() => {
    const timeId = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timeId)
  }, [targetTime])

  const formatTime = (num: number) => String(num).padStart(2, '0')

  return (
    <div className={container}>
      <span className={box}>
        {formatTime(timeLeft.day)} <span className={title}>Day</span>
      </span>{' '}
      <span className={box}>
        {formatTime(timeLeft.hour)} <span className={title}>Hours</span>
      </span>{' '}
      <span className={box}>
        {formatTime(timeLeft.min)} <span className={title}>Mins</span>
      </span>{' '}
      <span className={box}>
        {formatTime(timeLeft.sec)} <span className={title}>Secs</span>
      </span>
    </div>
  )
}

export default CountDownTimer
