import React from "react";
import { capitalizeFirstChar } from "../utils/utils";

const TalentBookItem = ({ name, chars, availability, icon }) => {
  name = capitalizeFirstChar(name);

  // Conditional logic will be here
  return (
    <div className="talentbook__item  flex flex-col items-center p-2 pr-6 ">
      <div className="bg-[#C2C2C2] rounded-lg  ">
        <img src={icon} className="max-w-[5rem]" />
      </div>
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default TalentBookItem;
