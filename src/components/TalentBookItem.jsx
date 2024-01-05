import React from "react";

const TalentBookItem = ({ name, chars, availability, icon }) => {
  const capitalizeFirstChar = (str) => {
    const [strFirstChar, ...rest] = str;
    return [strFirstChar.toUpperCase(), ...rest].join("");
  };

  name = capitalizeFirstChar(name);

  // Conditional logic will be here
  return (
    <div className="talentbook__item flex flex-col items-center p-4">
      <div className="bg-gray-600 rounded-lg">
        <img src={icon} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default TalentBookItem;
