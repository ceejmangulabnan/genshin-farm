import { CharData } from '../../types/TalentBookTypes'
import { formatDisplayName } from '../../utils/utils'

interface CharIconProps {
  charData: CharData
}

const CharIcon = ({ charData }: CharIconProps) => {
  const formattedName = formatDisplayName(charData.name)
  const element = charData.vision.toLowerCase()
  const visionIcon = `https://genshin.jmp.blue/elements/${element}/icon`

  return (
    <div className='flex flex-col items-center'>
      {formattedName.includes('Traveler') ? <p className='text-sm'>{`${formattedName} (${charData.vision})`}</p> : <p className='text-sm'>{formattedName}</p>}
      <img
        src={charData.icon}
        alt={charData.id + '-icon'}
        className={`${charData.rarity === 4 ? 'bg-fourstar' : 'bg-fivestar'} 
          max-w-[6rem] mx-2 rounded-xl overflow-hidden`}
      />
      <div className="relative top-[-1rem] right-[-2.8rem] rounded-[50%] bg-white w-6 shadow-md flex items-center justify-center p-[0.1rem]">
        <img src={visionIcon} className="" />
      </div>
    </div>
  )
}

export default CharIcon
