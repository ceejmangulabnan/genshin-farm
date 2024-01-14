import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { filterAvailableToday, objectToArray } from "../utils/utils";

// Fetch Weapon Ascencion Materials from Genshin API
const useFetchWeaponAscensionMaterials = () => {
  const [weaponAscensionMaterials, setWeaponAscensionMaterials] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const generateIconUrl = (weaponAscensionMaterials) => {
    for (let key in weaponAscensionMaterials) {
      const itemId = weaponAscensionMaterials[key].items[0].id.replace(
        "'",
        "-",
      );
      const iconUrl = `https://genshin.jmp.blue/materials/weapon-ascension/${itemId}`;
      weaponAscensionMaterials[key].icon = iconUrl;
      weaponAscensionMaterials[key].name = itemId;
      weaponAscensionMaterials[key].id = key;
    }

    console.log(weaponAscensionMaterials);
    return weaponAscensionMaterials;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://genshin.jmp.blue/materials/weapon-ascension/`,
        );
        const data = await response.data;

        generateIconUrl(data);
        const formattedWeaponMaterials = objectToArray(data);
        const availableWeaponMaterials = filterAvailableToday(
          formattedWeaponMaterials,
        );
        setWeaponAscensionMaterials(availableWeaponMaterials);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { weaponAscensionMaterials, loading, error };
};

export default useFetchWeaponAscensionMaterials;
