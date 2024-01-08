import React from "react";

const TalentBookItem = ({ name, chars, availability, icon }) => {
  const capitalizeFirstChar = (str) => {
    const [strFirstChar, ...rest] = str;
    return [strFirstChar.toUpperCase(), ...rest].join("");
  };

  name = capitalizeFirstChar(name);

  // Conditional logic will be here
  return (
    <div className="talentbook__item flex flex-col items-center p-2">
      <div className="bg-gray-600 rounded-lg  ">
        <img src={icon} className="max-w-[5rem]" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default TalentBookItem;
