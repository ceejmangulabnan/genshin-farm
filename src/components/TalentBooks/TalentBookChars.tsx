// Render CharIcons for talentBook

import CharIcon from "./CharIcon"
import useFetchChars from "../../hooks/useFetchChars"
import { compareRarity, generateCharIconUrls } from "../../utils/utils"
import { CharData } from "../../types/TalentBookTypes"

interface TalentBookCharsProps {
  talentBookChars: string[]
}

const TalentBookChars = ({ talentBookChars }: TalentBookCharsProps) => {
  const { charData, loading } = useFetchChars({ talentBookChars })
  let iconCharData: CharData[] = []
  if (!loading && charData) {
    iconCharData = generateCharIconUrls(charData)
  }

  // Sorts Chars according to rarity
  iconCharData.sort(compareRarity)
  return (
    <div className="talent-book-chars flex gap-1 flex-wrap justify-end">
      {(!loading && iconCharData) &&
        iconCharData.map(data => (
          <CharIcon key={data.id + '-icon'} charData={data} />
        ))
      }
    </div>
  )
}

export default TalentBookChars
