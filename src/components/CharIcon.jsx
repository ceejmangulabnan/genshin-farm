import React from "react";

// Display Chars that can farm on the current day separated by region
//
// Generate Char Icon URL and return icon
const CharIcon = ({ char }) => {
  const getCharIconUrl = () => {
    // Generate CharIcon Url
    // https://genshin.jmp.blue/characters/${char}/icon-big
    let charIconUrl = `https://genshin.jmp.blue/characters/${char}/icon-big`;
    if (charIconUrl.includes(`traveler`)) {
      return charIconUrl.concat(`-aether`);
    }
    return charIconUrl;
  };
  return (
    <div className="max-w-[4rem]">
      <img src={getCharIconUrl()} />
    </div>
  );
};

export default CharIcon;
