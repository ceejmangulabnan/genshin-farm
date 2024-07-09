// Container for available TalentBookRows for each nation
import { TalentBook } from "../../types/TalentBookTypes"
import DailyTalentBookRow from "./DailyTalentBookRow"
import TalentBookIcon from "./TalentBookIcon"

export interface DailyTalentBookProps {
  availableTalentBooks: TalentBook[]
}

const DailyTalentBooks = ({ availableTalentBooks }: DailyTalentBookProps) => {

  const talentBookNames = Object.keys(availableTalentBooks)
  talentBookNames.pop()

  const generateTalentBookIcon = () => {
    const talentBookIcons = []
    for (const talentBookName of talentBookNames) {
      let talentBookUrl = `https://genshin.jmp.blue/materials/talent-book/teachings-of-${talentBookName}`
      talentBookIcons.push(talentBookUrl)
    }

    return talentBookIcons
  }

  const talentBookIcons = generateTalentBookIcon()
  return (
    <div>DailyTalentBooks

    </div>
  )
}

export default DailyTalentBooks
