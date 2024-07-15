import { useState, useEffect } from "react"
import axios from "axios"
import { CharData } from "../types/TalentBookTypes"

interface UseFetchCharsProps {
  talentBookChars: string[]
}
// Receives list of characters as props
const useFetchChars = ({ talentBookChars }: UseFetchCharsProps) => {
  const [charData, setCharData] = useState<null | CharData[]>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchChars = async () => {
      setLoading(true)
      const allCharData: CharData[] = []

      try {
        const responses = talentBookChars.map((charName) =>
          axios.get(`https://genshin.jmp.blue/characters/${charName}`)
        )
        const data = await Promise.all(responses)
        data.map(response => allCharData.push(response.data))

        setCharData(allCharData)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (talentBookChars) {
      fetchChars()
    }
  }, [])

  return { charData, loading }
}

export default useFetchChars
