import { useToast } from './ui/Toast/use-toast'
import { useJokeCategories } from './api/joke-categories'
import { useRandomJoke } from './api/random-joke'
import { useSavedJokes } from './api/saved-jokes'
import { downloadTextFile } from './api/download-text-file'

import { Header } from './ui/Header'
import { RandomJoke } from './ui/RandomJoke'
import { Filter } from './ui/Filter'
import { ReactionButtons } from './ui/ReactionButtons'
import { SavedJokes } from './ui/SavedJokes'
import { Toast } from './ui/Toast'

export const App = () => {
  const toast = useToast()
  const jokeCategories = useJokeCategories()
  const randomJoke = useRandomJoke(toast.showError)
  const savedJokes = useSavedJokes(toast.showError)

  const copyToClipboard = async (text: string) => {
    console.log('copyToClipboard')
    await navigator.clipboard.writeText(text)
    toast.showInfo('Joke is coppied to clipboard')
  }

  return (
    <>
      <Header />
      <RandomJoke
        text={randomJoke.text}
        onCopy={copyToClipboard}
      >
        <Filter
          categories={jokeCategories}
          onCategoryChange={randomJoke.selectCategory}
        />
      </RandomJoke>
      <ReactionButtons
        onLike={() => {
          savedJokes.add(randomJoke.text)
          randomJoke.update()
        }} 
        onDislike={randomJoke.update}
      />
      <SavedJokes
        jokes={savedJokes.list}
        onSelect={copyToClipboard}
        onDelete={savedJokes.deleteJoke}
        onDownload={() => downloadTextFile('chuck-norris-jokes.txt', savedJokes.toTxt())}
        onClearAll={savedJokes.deleteAll}
      />

      <Toast showMode={toast.showMode} message={toast.message} />
    </>
  )
}
