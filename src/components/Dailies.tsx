import useFetchTalentBooks from '../hooks/useFetchTalentBooks'
import DailyTalentBooks from './TalentBooks/DailyTalentBooks'
import { filterAvailableMaterials } from '../utils/utils'
import { TalentBook, TalentBookData } from '../types/TalentBookTypes'

const Dailies = () => {
  const { talentBooksData, loading } = useFetchTalentBooks()

  if (loading) {
    return <p>Loading</p>
  }
  const availableTalentBooks: TalentBookData[] = filterAvailableMaterials(talentBooksData as TalentBook)

  // DailyTalentBooks should receive data for currently available talentBooks
  return (
    <section className='dailies m-10'>
      {(!loading && availableTalentBooks) &&
        <DailyTalentBooks availableTalentBooks={availableTalentBooks} />
      }
    </section>
  )
}

export default Dailies
