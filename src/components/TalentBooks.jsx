import React from "react";
import useFetchTalentBooks from "../hooks/useFetchTalentBooks";
import useGetChars from "../hooks/useGetChars";

import TalentBookItem from "./TalentBookItem";
import TalentBookCharList from "./TalentBookCharList";

const TalentBooks = () => {
  const { talentBookData, loading, error } = useFetchTalentBooks();
  const { allCharsData, loading: getCharsloading } = useGetChars();

  if (!loading) {
    console.log("TalentBookData is ready to render", talentBookData);
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
            <div className="chars flex flex-wrap justify-end">
              {!getCharsloading && (
                <TalentBookCharList
                  talentBookChars={talentBook.characters}
                  allCharsData={allCharsData}
                />
              )}
            </div>
          </div>
        ))}
    </section>
  );
};

export default TalentBooks;
