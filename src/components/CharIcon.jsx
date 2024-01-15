import React from "react";

// Display Chars that can farm on the current day separated by region

const CharIcon = ({ char, chars: allChars }) => {
  const getCharIconUrl = () => {
    // Generate CharIcon Url
    let charIconUrl = `https://genshin.jmp.blue/characters/${char}/icon`;
    if (charIconUrl.includes(`traveler`)) {
      return charIconUrl.concat(`-big-lumine`);
    }

    // Specify which characters I want to use 'icon-big'
    if (charIconUrl.includes("lyney")) {
      return `https://genshin.jmp.blue/characters/${char}/icon-big
`;
    }
    return charIconUrl;
  };
  const fallbackCharIconUrl = `https://genshin.jmp.blue/characters/${char}/icon-big`;

  // TODO: DNE images return 404 error. Handle by trying other image resources.
  return (
    <div className="max-w-[6rem] bg-indigo-600 m-1 rounded-xl overflow-hidden">
      <img
        src={getCharIconUrl()}
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
