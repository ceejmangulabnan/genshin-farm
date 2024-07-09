import axios from "axios"
import { useState, useEffect } from "react"
import { TalentBook } from "../types/TalentBookTypes"

const useFetchTalentBooks = () => {
  const [talentBooksData, setTalentBooksData] = useState<null | TalentBook>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchTalentBooks = async () => {
      try {
        const response = await axios.get('https://genshin.jmp.blue/materials/talent-book')
        const data = await response.data
        delete data.id

        setTalentBooksData(data)
      } catch (error) {
        console.log(error)

      } finally {
        setLoading(false)
      }
    }

    fetchTalentBooks()
  }, [])
  return { talentBooksData, loading }
}

export default useFetchTalentBooks
