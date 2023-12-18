import React from "react";
import useFetchTalentBooks from "../hooks/useFetchTalentBooks";
import TalentBookItem from "./TalentBookItem";
// The fetching should happen here then pass the data as props to the children

const TalentBooks = () => {
  const { talentBookData, loading, error } = useFetchTalentBooks();
  if (!loading) {
    console.log(talentBookData);
  }

  if (error) {
    console.log(error);
  }

  // Conditional Rendering based on item availability

  return (
    <div className="talentbooks p-6 bg-red-400 flex justify-between">
      {loading && <div>Loading</div>}
      {!loading &&
        Object.keys(talentBookData).map((key) => (
          <TalentBookItem
            key={key}
            name={key}
            chars={talentBookData[key].characters}
            availability={talentBookData[key].availability}
            icon={talentBookData[key].icon}
          />
        ))}
    </div>
  );
};

export default TalentBooks;
