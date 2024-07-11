import { TalentBookData } from "../../types/TalentBookTypes"
import TalentBookIcon from "./TalentBookIcon"
import TalentBookChars from "./TalentBookChars"

interface DailyTalentBookRowProps {
  talentBook: TalentBookData
}

const DailyTalentBookRow = ({ talentBook }: DailyTalentBookRowProps) => {
  return (
    <div className='daily-talent-book-row py-4 border border-b-gray-300 flex justify-between'>
      <TalentBookIcon talentBook={talentBook} />
      {/* Char Icons Here */}
      <TalentBookChars talentBookChars={talentBook.characters} />
    </div>
  )
}

export default DailyTalentBookRow
