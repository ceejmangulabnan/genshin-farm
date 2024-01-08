import React from "react";
import useFetchWeaponAscencionMaterials from "../hooks/useFetchWeaponAscencionMaterials";

const WeaponAscencionMaterials = () => {
  const { weaponAscensionMaterials, loading } =
    useFetchWeaponAscencionMaterials();

  // returns undefined but inside the hook data works
  console.log(weaponAscensionMaterials);

  if (!loading) {
    console.log(weaponAscensionMaterials);
  }

  return <div>WeaponAscencionMaterials</div>;
};

export default WeaponAscencionMaterials;
