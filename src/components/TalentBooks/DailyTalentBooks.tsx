// Container for available TalentBookRows for each nation
import { TalentBookData } from "../../types/TalentBookTypes"
import DailyTalentBookRow from "./DailyTalentBookRow"

export interface DailyTalentBookProps {
  availableTalentBooks: TalentBookData[]
}

const DailyTalentBooks = ({ availableTalentBooks }: DailyTalentBookProps) => {
  console.log(availableTalentBooks)

  // Maps over DailyTalentBookRow
  return (
    <div className="">
      <h2 className="text-lg font-medium">Daily Talent Books</h2>

      <div className="daily-talent-books bg-gray-200 px-8 py-2 rounded-xl">
        {
          availableTalentBooks.map((talentBook) => (
            <DailyTalentBookRow key={talentBook.name} talentBook={talentBook} />
          ))
        }
      </div>
    </div>
  )
}

export default DailyTalentBooks
