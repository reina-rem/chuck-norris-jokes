import { useEffect, useState } from "react"

export const useJokeCategories = (): string[] => {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    fetchCategories().then(setCategories)
  }, [])

  return categories
}

const fetchCategories = async (): Promise<string[]> => {
  const url = 'https://api.chucknorris.io/jokes/categories'
  const responce = await fetch(url)

  return await responce.json()
}
