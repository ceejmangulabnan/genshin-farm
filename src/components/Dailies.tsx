import useFetchTalentBooks from '../hooks/useFetchTalentBooks'
import DailyTalentBooks from './TalentBooks/DailyTalentBooks'
import { filterAvailableMaterials, today } from '../utils/utils'
import { TalentBook } from '../types/TalentBookTypes'

const Dailies = () => {
  const { talentBooksData, loading } = useFetchTalentBooks()

  if (loading) {
    return <p>Loading</p>
  }

  // console.log('TalentBooksData from hook', talentBooksData)
  const availableTalentBooks: TalentBook[] = filterAvailableMaterials(talentBooksData as TalentBook)
  // console.log(today, availableTalentBooks)

  // DailyTalentBooks should receive data for currently available talentBooks
  return (
    <section className='bg-gray-200 p-8 m-10 rounded-xl'>
      {(!loading && availableTalentBooks) &&
        <DailyTalentBooks availableTalentBooks={availableTalentBooks} />
      }
    </section>
  )
}

export default Dailies
