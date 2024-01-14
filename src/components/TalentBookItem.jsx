import React from "react";
import { capitalizeFirstChar } from "../utils/utils";

const TalentBookItem = ({ name, chars, availability, icon }) => {
  name = capitalizeFirstChar(name);

  // Conditional logic will be here
  return (
    <div className="talentbook__item flex flex-col items-center ">
      <div className="bg-gray-600 rounded-lg  ">
        <img src={icon} className="max-w-[5rem]" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default TalentBookItem;
