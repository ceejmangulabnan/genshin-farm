import React from "react";
import CharIcon from "./CharIcon";

const TalentBookCharList = ({ talentBookChars, allCharsData }) => {
  // TODO: Map to render CharIcons
  const talentBookCharData = [];

  // Get data of chars for each talentBook
  for (let charName of talentBookChars) {
    talentBookCharData.push(
      allCharsData.find((char) => char.id.includes(charName)),
    );
  }

  console.log("CHAR ICON PROPS", talentBookCharData);
  return (
    <div className="talentBookChars">
      {talentBookCharData.map((charData) => (
        <CharIcon charData={charData} talentBookChars={talentBookChars} />
      ))}
    </div>
  );
};

export default TalentBookCharList;
