import MainLayout from '@/components/Layout/Layout'
import { useRef, useState } from 'react'

const Todo = () => {
  const [count, setCount] = useState(60)
  const timeId = useRef<NodeJS.Timeout | null>(null)

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((prev) => prev - 1)
    }, 1000)
  }

  const handleStop = () => {
    if (timeId.current) {
      clearInterval(timeId.current)
      timeId.current = null
    }
  }

  return (
    <MainLayout>
      <div>{count}</div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </MainLayout>
  )
}
export default Todo
