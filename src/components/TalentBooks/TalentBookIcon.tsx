import { TalentBookData } from "../../types/TalentBookTypes"

interface TalentBookIconProps {
  talentBook: TalentBookData;
}

const TalentBookIcon = ({ talentBook }: TalentBookIconProps) => {
  const talentBookName = talentBook.name?.charAt(0).toUpperCase() + talentBook.name?.slice(1)
  return (
    <div className="talent-book-icon w-20 flex flex-col items-center">
      <img src={talentBook.icon} alt={`${talentBook.name}-icon`} className="bg-neutral-400 rounded-xl" />
      <p>{talentBookName}</p>
    </div>
  )
}

export default TalentBookIcon
