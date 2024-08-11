import './Header.css'

import { useEffect, useRef } from 'react'

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null)
  const headerTitleRef = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    const header = headerRef.current
    const title = headerTitleRef.current

    if (!header || !title) {
      throw new Error('ref is not provided')
    }

    window.addEventListener('scroll', () => {
      const headerRect = header.getBoundingClientRect()
      const titleRect = title.getBoundingClientRect()

      if (headerRect.bottom < titleRect.bottom) {
        title.classList.add('header__title--shadow')
        header.classList.remove('header--shadow')
      } else {
        title.classList.remove('header__title--shadow')
        header.classList.add('header--shadow')
      }
    })
  }, [])

  return (
    <header ref={headerRef} className="header header--shadow">
      <h1 ref={headerTitleRef} className="header__title">Chuck Norris Jokes</h1>
      <div className="header__subtitle">Prepare for unbelievable jokes!</div>
    </header>
  )
}
