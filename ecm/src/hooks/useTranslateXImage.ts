import useScrollHandler from '@/hooks/useScrollHandler'
import { useEffect, useState } from 'react'

const useTranslateXImage = () => {
  const [translateXPos, setTranslateXPos] = useState(80)
  const { scrollPos, scrollDirection } = useScrollHandler()

  const handleTranslateX = () => {
    if (scrollDirection == 'down' && scrollPos >= 1600) {
      setTranslateXPos((prev) => (prev <= 0 ? 0 : prev - 1))
    } else if (scrollDirection === 'up') {
      setTranslateXPos((prev) => (prev >= 80 ? 80 : prev + 1))
    }
  }

  useEffect(() => {
    handleTranslateX()
  }, [scrollPos])

  return {
    translateXPos
  }
}

export default useTranslateXImage
