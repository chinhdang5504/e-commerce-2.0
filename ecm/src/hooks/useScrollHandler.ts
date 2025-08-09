import { useEffect, useRef, useState } from 'react'

const useScrollHandler = () => {
  const [scrollPos, setSrollPos] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('')
  const previousScrollPosition = useRef(0)

  const scrollTracking = () => {
    const cur = window.pageYOffset
    if (cur > previousScrollPosition.current) {
      setScrollDirection('down')
    } else {
      setScrollDirection('up')
    }

    previousScrollPosition.current = cur <= 0 ? 0 : cur
    setSrollPos(cur)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking)

    return () => removeEventListener('scroll', scrollTracking)
  }, [])

  return {
    scrollPos,
    scrollDirection
  }
}

export default useScrollHandler
