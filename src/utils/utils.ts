// Utility / Helper Functions
import { TalentBook, TalentBookData, WeaponAscension, WeaponAscensionData, CharData, WeaponAscensionRarity } from "../types/TalentBookTypes"

export const today = new Date().getDay()

export const filterAvailableMaterials = (unfilteredDailyMaterials: TalentBook | WeaponAscension): TalentBookData[] | WeaponAscensionData[] => {
  let availableMaterials = []

  // Loops through the Object's key-value pairs
  for (const [key, value] of Object.entries(unfilteredDailyMaterials)) {
    // Sunday, all items available
    if (today === 0) {
      unfilteredDailyMaterials[key].name = key
      generateTalentBookIconUrl(unfilteredDailyMaterials[key])
      availableMaterials.push(unfilteredDailyMaterials[key])
    }
    // Monday and Thursday Items
    else if ((today === 1 || today === 4) && (value.availability.includes('Monday'))) {
      unfilteredDailyMaterials[key].name = key
      generateTalentBookIconUrl(unfilteredDailyMaterials[key])
      availableMaterials.push(unfilteredDailyMaterials[key])
    }
    // Tuesday and Friday Items
    else if ((today === 2 || today === 5) && (value.availability.includes('Tuesday'))) {
      unfilteredDailyMaterials[key].name = key
      generateTalentBookIconUrl(unfilteredDailyMaterials[key])
      availableMaterials.push(unfilteredDailyMaterials[key])
    }
    // Wednesday and Saturday Items
    else if ((today === 3 || today === 6) && (value.availability.includes('Wednesday'))) {
      unfilteredDailyMaterials[key].name = key
      generateTalentBookIconUrl(unfilteredDailyMaterials[key])
      availableMaterials.push(unfilteredDailyMaterials[key])
    }
  }

  console.log("Available Today", availableMaterials)
  // Expected Output: TalentBookData[] | WeaponAscensionData[]
  return availableMaterials
}

export const generateTalentBookIconUrl = (talentBookData: TalentBookData) => {
  talentBookData.icon = `https://genshin.jmp.blue/materials/talent-book/teachings-of-${talentBookData.name}`
}

export const generateCharIconUrls = (charData: CharData[]) => {
  if (charData) {
    for (const char of charData) {
      if (char.name.toLowerCase().includes('traveler')) {
        char.icon = `https://genshin.jmp.blue/characters/${char.id}/icon-big-lumine`
      } else {

        char.icon = `https://genshin.jmp.blue/characters/${char.id}/icon-big`
      }
    }

    return charData
  }
}

export const formatDisplayName = (str: string) => {
  const formattedStr = str.slice(str.indexOf(' ') + 1)
  return formattedStr
}

export const capitalizeFirstChar = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const formatCleanString = (str: string) => {
  return str.replaceAll("-", " ")
}

export const formatDashedString = (str: string) => {
  return str.toLowerCase().replaceAll(" ", "-")
}

export const compareRarity = (a: CharData | WeaponAscensionRarity, b: CharData | WeaponAscensionRarity,) => {
  return b.rarity - a.rarity
}
