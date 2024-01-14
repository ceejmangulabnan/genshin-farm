import React from "react";
import useFetchWeaponAscensionMaterials from "../hooks/useFetchWeaponAscensionMaterials";
import WeaponAscensionItem from "./WeaponAscensionItem";

const WeaponAscensionMaterials = () => {
  const { weaponAscensionMaterials, loading } =
    useFetchWeaponAscensionMaterials();

  // returns undefined but inside the hook data works
  // console.log(weaponAscensionMaterials);
  // console.log(loading);
  if (!loading) {
    // console.log(weaponAscensionMaterials);
  }

  return (
    <section className="weapon-ascension">
      WeaponAscencionMaterials
      {loading && <div>Loading</div>}
      {!loading &&
        weaponAscensionMaterials.map((weaponMaterial) => (
          <WeaponAscensionItem
            name={weaponMaterial.name}
            key={weaponMaterial.name}
            availability={weaponMaterial.availability}
            icon={weaponMaterial.icon}
            id={weaponMaterial.id}
          />
        ))}
    </section>
  );
};

export default WeaponAscensionMaterials;
