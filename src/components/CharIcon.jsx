import React from "react";
import useGenerateCharIconUrl from "../hooks/useGenerateCharIconUrl";

// Display Chars that farmable on the current day separated by region
const CharIcon = ({ charData }) => {
  const charIconUrl = useGenerateCharIconUrl({ charData });
  const fallbackCharIconUrl = `https://genshin.jmp.blue/characters/${charData.url_name}/icon-big`;

  const element = charData.vision.toLowerCase();
  const visionIcon = `https://genshin.jmp.blue/elements/${element}/icon`;
  const rarityBackgroundColor = () => {
    if (charData.rarity === 4) {
      return `fourstar-bg`;
    } else {
      return `fivestar-bg`;
    }
  };

  return (
    <div>
      <div
        className={`${rarityBackgroundColor()} max-w-[6rem] mx-2 rounded-xl overflow-hidden `}
      >
        <img
          src={charIconUrl}
          onError={(e) => {
            e.target.onError = null;
            e.target.src = fallbackCharIconUrl;
          }}
          className="object-cover object-position-top w-[4rem] h-[4rem]"
        />
      </div>
      <div className="relative top-[-4rem] right-[-3.8rem] rounded-[50%] bg-white w-5">
        <img src={visionIcon} className="" />
      </div>
    </div>
  );
};

export default CharIcon;
