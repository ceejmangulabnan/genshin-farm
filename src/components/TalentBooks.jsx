import React from "react";
import useFetchTalentBooks from "../hooks/useFetchTalentBooks";
import TalentBookItem from "./TalentBookItem";

const TalentBooks = () => {
  const { talentBookData, loading, error } = useFetchTalentBooks();

  if (!loading) {
    console.log(talentBookData);
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="talentbooks p-6 bg-red-400 flex flex-col justify-between">
      {loading && <div>Loading</div>}
      {!loading &&
        // Object.keys(talentBookData).map((key) => (
        //   <TalentBookItem
        //     key={key}
        //     name={key}
        //     chars={talentBookData[key].characters}
        //     availability={talentBookData[key].availability}
        //     icon={talentBookData[key].icon}
        //   />
        // ))
        //

        talentBookData.map((talentBook) => (
          <div className="flex items-center justify-between">
            <div className="talentbook">
              <TalentBookItem
                name={talentBook.name}
                key={talentBook.name}
                chars={talentBook.characters}
                availability={talentBook.availability}
                icon={talentBook.icon}
              />
            </div>
            <div className="chars">Chars go here</div>
          </div>
        ))}
    </div>
  );
};

export default TalentBooks;
