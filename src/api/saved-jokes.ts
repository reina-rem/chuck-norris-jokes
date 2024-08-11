import { useEffect, useState } from 'react'
import { getValue, setValue } from './key-value-db'

const JOKES_STORE_KEY = 'jokes'
const TOAST_MESSAGE = 'Database failure! Data will not be saved'

type SavedJokesApi = {
  list: string[]
  add: (text: string) => void
  deleteJoke: (joke: string) => void
  deleteAll: () => void
  toTxt: () => string
}

export const useSavedJokes = (showErrorToast: (msg: string) => void): SavedJokesApi => {
  const [jokes, setJokes] = useState<string[]>([])

  const updateDB = (newData: string[]) => {
    setValue(JOKES_STORE_KEY, newData).catch(error => {
      console.error(error)
      showErrorToast(TOAST_MESSAGE)
    })
  }

  useEffect(() => {
    getValue(JOKES_STORE_KEY).then(jokes => {
      if (jokes) {
        setJokes(jokes)
      }
    })
  }, [])

  return {
    list: jokes,
    add: text => {
      setJokes(
        prevJokes => {
          if (prevJokes.includes(text)) {
            return prevJokes
          }

          const newJokes = [text, ...prevJokes]
          updateDB(newJokes)

          return newJokes
        }
      )
    },

    deleteJoke: joke => {
      setJokes(prevJokes => {
        const newJokes = prevJokes.filter(jokeText => jokeText !== joke)

        updateDB(newJokes)

        return newJokes
      })
    },

    deleteAll: () => {
      updateDB([])
      setJokes([])
    },

    toTxt: () => jokes.join('\n\n')
  }
}
