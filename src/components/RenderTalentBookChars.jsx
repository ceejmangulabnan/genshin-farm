import React from "react";
import CharIcon from "./CharIcon";

const RenderTalentBookChars = ({ talentBookChars, allCharsData }) => {
  // TODO: Map to render CharIcons
  const talentBookCharData = [];

  for (let charName of talentBookChars) {
    talentBookCharData.push(allCharsData.find((char) => char.id === charName));
  }

  console.log("CHAR ICON PROPS", talentBookCharData);
  return (
    <div className="talentBookChars">
      {
        // Map CharIcon Here
      }
    </div>
  );
};

export default RenderTalentBookChars;
