import React from "react";
import TalentBooks from "../components/TalentBooks";
import WeaponAscensionMaterials from "../components/WeaponAscensionMaterials";

const HomePage = () => {
  return (
    <div className="home-page px-20 py-10">
      <div className="dailies flex justify-between">
        <TalentBooks />
        <WeaponAscensionMaterials />
      </div>
    </div>
  );
};

export default HomePage;
