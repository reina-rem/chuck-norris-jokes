import './RandomJoke.css'

import { PropsWithChildren, useEffect, useRef, useState } from 'react'

import { Logo } from './Logo'

type JokeProps = {
  text: string
  onCopy: (text: string) => void
}

export const RandomJoke = ({ children, text, onCopy }: PropsWithChildren<JokeProps>) => {
  const invisibleTextContainerRef = useRef<HTMLDivElement>(null)
  const visibleTextRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number>()

  const [textHeight, setTextHeight] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (!invisibleTextContainerRef.current || !visibleTextRef.current) {
      throw new Error('ref is not provided')
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === invisibleTextContainerRef.current) {
          setTextHeight(entry.contentRect.height)
        }
      }
    })

    resizeObserver.observe(invisibleTextContainerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsHidden(true)
    timeoutRef.current = setTimeout(() => {
      setDisplayedText(text)
      setIsHidden(false)
    }, 400)
  }, [text])
  
  return (
    <div className="random-joke">
      <div className="random-joke__inner-container">
        <div className="random-joke__background--invisible">
          <p ref={invisibleTextContainerRef} className="random-joke__text">
            {text}
          </p>
        </div>

        <div 
          className="random-joke__background"
          style={{height: textHeight}}
          onClick={() => onCopy(text)}
        >
          <p
            ref={visibleTextRef}
            className={`random-joke__text ${isHidden ? 'random-joke__text--hidden' : ''}`}
          >
            {displayedText}
          </p>
        </div>
        
        <Logo />
        
        <div className="random-joke__filters">
          {children}
        </div>
      </div>
    </div>
  )
}
