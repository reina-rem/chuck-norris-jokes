import './SavedJokes.css'

import { SavedJokesItem } from './SavedJokesItem'
import { DownloadButton } from './buttons/DownloadButton'
import { DeleteAllButton } from './buttons/DeleteAllButton'

type SavedJokesProps = {
  jokes: string[]
  onSelect: (joke: string) => void
  onDelete: (joke: string) => void
  onDownload: () => void
  onClearAll: () => void
}

export const SavedJokes = ({ jokes, onSelect, onDelete, onDownload, onClearAll }: SavedJokesProps) => (
  <div className="saved-jokes">
    <ul className="saved-jokes__list">
      {jokes.map(joke => (
        <SavedJokesItem
          key={joke}
          joke={joke}
          onSelect={onSelect}
          onDelete={onDelete}
        />
      ))}
    </ul>

    <div className="saved-jokes__managing-buttons-container">
      <DownloadButton disabled={jokes.length === 0} onClick={onDownload} />
      <DeleteAllButton disabled={jokes.length === 0} onClick={onClearAll} />
    </div>
  </div>
)
