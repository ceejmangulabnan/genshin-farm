import { TalentBookData } from "../../types/TalentBookTypes"
import TalentBookIcon from "./TalentBookIcon"

interface DailyTalentBookRowProps {
  talentBook: TalentBookData
}

const DailyTalentBookRow = ({ talentBook }: DailyTalentBookRowProps) => {
  return (
    <div className='daily-talent-book-row py-4 border border-b-gray-300 flex justify-between'>
      <TalentBookIcon talentBook={talentBook} />
    </div>
  )
}

export default DailyTalentBookRow
