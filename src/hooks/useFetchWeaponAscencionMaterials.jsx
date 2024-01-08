import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

// Fetch Weapon Ascencion Materials from Genshin API
const useFetchWeaponAscencionMaterials = () => {
  // State

  const [weaponAscensionMaterials, setWeaponAscensionMaterials] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch function here
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://genshin.jmp.blue/materials/weapon-ascension/`,
        );

        const data = await response.data;

        console.log(data);
        setWeaponAscensionMaterials(data);
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

export default useFetchWeaponAscencionMaterials;
