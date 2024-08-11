import { useEffect, useState } from "react"

type RandomJokeApi = {
  text: string
  update: () => Promise<void>
  selectCategory: (category: string) => void
}

export const useRandomJoke = (showErrorToast: (msg: string) => void): RandomJokeApi => {
  const [joke, setJoke] = useState('')
  const [category, setCategory] = useState('')

  const updateJoke = async (category: string) => {
    try {
      const newJoke = await fetchJoke(category)
      setJoke(newJoke)
    } catch (error) {
      console.error(error)
      showErrorToast('Jokes are not available')
    }
  }

  useEffect(() => {
    updateJoke(category)
  }, [])

  return {
    text: joke,
    update: () => (
      updateJoke(category)
    ),
    selectCategory: category => {
      setCategory(category)
      updateJoke(category)
    }
  }
}

const fetchJoke = async (category?: string): Promise<string> => {
  const url = 'https://api.chucknorris.io/jokes/random' + (
    category
      ? '?category=' + encodeURIComponent(category)
      : ''
  )

  const responce = await fetch(url)
  const { value } = await responce.json()

  return value
}
