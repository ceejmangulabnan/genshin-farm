import React from "react";
import CharIcon from "./CharIcon";

import { compareRarity } from "../utils/utils";

const TalentBookCharList = ({ talentBookChars, allCharsData }) => {
  const talentBookCharData = [];

  // Get data of chars for each talentBook
  for (let charName of talentBookChars) {
    talentBookCharData.push(
      allCharsData.find((char) => char.id.includes(charName)),
    );
  }

  talentBookCharData.sort(compareRarity);

  return (
    <div className="chars flex flex-wrap justify-end">
      {talentBookCharData.map((charData) => (
        <>
          <CharIcon
            charData={charData}
            talentBookCharData={talentBookCharData}
            key={charData.id}
          />
        </>
      ))}
    </div>
  );
};

export default TalentBookCharList;
