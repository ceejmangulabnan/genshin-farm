// TalentBook
export interface TalentBookItemRarity {
  id: string
  name: string
  rarity: 2 | 3 | 4
}

export interface TalentBookData {
  characters: string[]
  availability: string[]
  source: string
  items: TalentBookItemRarity[]
  name?: string
}

export interface TalentBook {
  [talentBookName: string]: TalentBookData
}

// WeaponAscension
export interface WeaponAscensionRarity {
  id: string
  name: string
  rarity: 2 | 3 | 4
}

export interface WeaponAscensionData {
  characters: string[]
  availability: string[]
  source: string
  items: WeaponAscensionRarity[]
  name?: string
}

export interface WeaponAscension {
  [weaponAscensionName: string]: WeaponAscensionData
}
