import React from "react";
import { capitalizeFirstChar, formatCleanString } from "../utils/utils";

const WeaponAscensionItem = ({ name, availability, icon, id }) => {
  id = formatCleanString(capitalizeFirstChar(id));
  // console.log(id);
  return (
    <div className="weapon-material flex">
      <div className="weapon-material__icon--container bg-red-500">
        <img src={icon} className="weapon-material__icon" />
      </div>
      <p className="weapon-material__id">{id}</p>
    </div>
  );
};

export default WeaponAscensionItem;
