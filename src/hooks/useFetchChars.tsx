import { useState, useEffect } from "react"
import axios from "axios"

type CharData = {
  charName: string
}[]

const useFetchChars = () => {
  const [charData, setCharData] = useState<null | CharData>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchChars = async () => {
      try {
        const response = await axios.get('https://genshin.jmp.blue/characters')
        const data = await response.data as CharData
        setCharData(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchChars()
  }, [])

  return { charData, loading }
}

export default useFetchChars
