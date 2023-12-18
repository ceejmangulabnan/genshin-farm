import React from "react";

const TalentBookItem = ({ name, chars, availability, icon }) => {
  const capitalizeFirstChar = (str) => {
    const [strFirstChar, ...rest] = str;
    return [strFirstChar.toUpperCase(), ...rest].join("");
  };

  name = capitalizeFirstChar(name);

  return (
    <div className="talentbook__item flex flex-col items-center p-4">
      <div className="bg-gray-600">
        <img src={icon} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default TalentBookItem;
