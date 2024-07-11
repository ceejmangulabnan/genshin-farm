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
  icon?: string
}

export interface TalentBook {
  [talentBookName: string]: TalentBookData
}

// CharacterData

export interface CharData {
  name: string
  vision: "Pyro" | "Hydro" | "Electro" | "Cryo" | "Dendro" | "Anemo" | "Geo"
  weapon: "Sword" | "Claymore" | "Catalyst" | "Bow" | "Polearm"
  gender?: "Male" | "Female"
  nation: "Monstadt" | "Liyue" | "Inazuma" | "Sumeru" | "Fontaine"
  rarity: 4 | 5
  id: string

  title?: string
  constellation: string
  description: string

  skillTalents: object[]
  passiveTalents: object[]
  constellations: object[]

  vision_key: string
  weapon_type: string

  icon?: string
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
  icon?: string
}

export interface WeaponAscension {
  [weaponAscensionName: string]: WeaponAscensionData
}
