import { useEffect, useState } from 'react'

export const useScroller = () => {
  const [scroll, setScroll] = useState(0)

  const [innerHeight, setInnerHeight] = useState(0)

  const scrollPercent = Math.ceil((scroll / innerHeight) * 100)

  const [show, setShow] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setInnerHeight(window.innerHeight)
      setScroll(window.scrollY)
    })
    let prevScrollpos = window.pageYOffset

    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        setShow(true)
      } else {
        setShow(false)
      }
      prevScrollpos = currentScrollPos
    }
  }, [scroll])

  return { scroll, scrollPercent, show }
}
