import { TalentBookData } from "../../types/TalentBookTypes"

interface TalentBookIconProps {
  talentBook: TalentBookData;
}

const TalentBookIcon = ({ talentBook }: TalentBookIconProps) => {
  if (talentBook && typeof talentBook.name === 'string') {
    const talentBookName = talentBook.name.charAt(0).toUpperCase() + talentBook.name.slice(1)
    return (
      <div className="talent-book-icon  flex flex-col items-center">
        <img src={talentBook.icon} alt={`${talentBook.name}-icon`} className="bg-neutral-400 rounded-xl w-20" />
        <p>{talentBookName}</p>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default TalentBookIcon
