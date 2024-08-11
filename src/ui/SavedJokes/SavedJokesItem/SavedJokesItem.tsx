import './SavedJokesItem.css'

import { useEffect, useRef, useState } from 'react'

type SavedJokesItemProps = {
  joke: string
  onSelect: (joke: string) => void
  onDelete: (joke: string) => void
}

export const SavedJokesItem = ({ joke, onSelect, onDelete }: SavedJokesItemProps) => {
  const [isAdding, setIsAdding] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [height, setHeight] = useState<number>()
  
  const listItemRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!listItemRef.current) {
      throw new Error('ref is not provided')
    }

    setHeight(listItemRef.current.getBoundingClientRect().height)

    setTimeout(() => setIsAdding(false), 4000)
  }, [])

  return (
    <li
      className={
        `saved-jokes-item ${
          isAdding ? 'saved-jokes-item--adding' : ''
        } ${
          isDeleting ? 'saved-jokes-item--deleting' : ''
        }`
      }
      onClick={() => onSelect(joke)}
      style={{ height: height }}
    >
      <div className="saved-jokes-item__content">
        <span
          ref={listItemRef}
          className="saved-jokes-item__text"
        >
          {joke}
        </span>
        
        <button 
          className="saved-jokes-item__delete-button"
          onClick={e => {
            e.stopPropagation()
            setIsDeleting(true)
            setHeight(0)
            setTimeout(() => onDelete(joke), 1500)
          }}
        />
      </div>
    </li>
  )
}
