import React from "react";

// Display Chars that can farm on the current day separated by region
//
// Generate Char Icon URL and return icon
const CharIcon = ({ char }) => {
  const getCharIconUrl = () => {
    // Generate CharIcon Url
    // https://genshin.jmp.blue/characters/${char}/icon-big
    let charIconUrl = `https://genshin.jmp.blue/characters/${char}/icon`;
    if (charIconUrl.includes(`traveler`)) {
      // return charIconUrl.concat(`-lumine`);
    }
    return charIconUrl;
  };

  // TODO: DNE images return 404 error. Handle by trying other image resources.
  return (
    <div className="max-w-[6rem] bg-indigo-600 m-1 rounded-xl overflow-hidden">
      <img
        src={getCharIconUrl()}
        className="object-cover object-position-top w-[6rem] h-[6rem]"
      />
    </div>
  );
};

export default CharIcon;
