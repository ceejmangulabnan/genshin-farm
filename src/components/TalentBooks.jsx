import React from "react";
import useFetchTalentBooks from "../hooks/useFetchTalentBooks";
import TalentBookItem from "./TalentBookItem";
import CharIcon from "./CharIcon";

const TalentBooks = () => {
  const { talentBookData, loading, error } = useFetchTalentBooks();

  if (!loading) {
    // console.log(talentBookData);
  }

  if (error) {
    console.log(error);
  }

  return (
    <section className="talentbooks p-6 bg-red-400 flex flex-col justify-between">
      {loading && <div>Loading</div>}
      {!loading &&
        talentBookData.map((talentBook) => (
          <div
            className="flex items-center justify-between"
            key={talentBook.source}
          >
            <div className="talentbook">
              <TalentBookItem
                name={talentBook.name}
                key={talentBook.name}
                chars={talentBook.characters}
                availability={talentBook.availability}
                icon={talentBook.icon}
              />
            </div>
            <div className="chars flex">
              {
                // Another map function to render CharIcons for each TalentBook
                talentBook.characters.map((char) => (
                  // Render CharIcon compenent and pass each char as props
                  <CharIcon char={char} key={char} />
                ))
              }
            </div>
          </div>
        ))}
    </section>
  );
};

export default TalentBooks;
