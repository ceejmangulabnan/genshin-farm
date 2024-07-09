// Utility / Helper Functions

import { TalentBook, TalentBookData, WeaponAscension, WeaponAscensionData } from "../types/TalentBookTypes"

export const today = new Date().getDay()

export const filterAvailableMaterials = (unfilteredDailyMaterials: TalentBook | WeaponAscension): TalentBookData[] | WeaponAscensionData[] => {
  let availableMaterials = []

  // Loops through the Object's key-value pairs
  for (const [key, value] of Object.entries(unfilteredDailyMaterials)) {
    // Sunday, all items available
    if (today === 0) {
      unfilteredDailyMaterials[key].name = key
      availableMaterials.push(unfilteredDailyMaterials[key])
    }
    // Monday and Thursday Items
    else if ((today === 1 || today === 4) && (value.availability.includes('Monday'))) {
      unfilteredDailyMaterials[key].name = key
      availableMaterials.push(unfilteredDailyMaterials[key])
    }
    // Tuesday and Friday Items
    else if ((today === 2 || today === 5) && (value.availability.includes('Tuesday'))) {
      unfilteredDailyMaterials[key].name = key
      availableMaterials.push(unfilteredDailyMaterials[key])
    }
    // Wednesday and Saturday Items
    else if ((today === 3 || today === 6) && (value.availability.includes('Wednesday'))) {
      unfilteredDailyMaterials[key].name = key
      availableMaterials.push(unfilteredDailyMaterials[key])
    }
  }

  console.log("Available Today", availableMaterials)
  // Expected Output: TalentBookData[] | WeaponAscensionData[]
  return availableMaterials
}
