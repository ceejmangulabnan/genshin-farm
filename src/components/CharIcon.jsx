import React from "react";
import useGenerateCharIconUrl from "../hooks/useGenerateCharIconUrl";

// Display Chars that farmable on the current day separated by region

const CharIcon = ({ charData, talentBookCharData }) => {
  const charIconUrl = useGenerateCharIconUrl({ charData, talentBookCharData });
  const fallbackCharIconUrl = `https://genshin.jmp.blue/characters/${charData.url_name}/icon-big`;

  return (
    <div className="max-w-[6rem] bg-indigo-600 m-1 rounded-xl overflow-hidden">
      <img
        src={charIconUrl}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = fallbackCharIconUrl;
        }}
        className="object-cover object-position-top w-[6rem] h-[6rem]"
      />
    </div>
  );
};

export default CharIcon;
