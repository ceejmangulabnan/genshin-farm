import React from "react";
import { capitalizeFirstChar, formatCleanString } from "../utils/utils";

const WeaponAscensionItem = ({ name, availability, icon, id }) => {
  id = formatCleanString(capitalizeFirstChar(id));
  // console.log(id);
  return (
    <div className="weapon-material flex justify-between items-center py-2">
      <div className="weapon-material__icon--container w-[5rem] pr-2 mr-4">
        <img
          src={icon}
          className="weapon-material__icon bg-[#C2C2C2] w-full h-full rounded-lg"
        />
      </div>
      <p className="weapon-material__id font-medium">{id}</p>
    </div>
  );
};

export default WeaponAscensionItem;
