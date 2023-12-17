import React from "react";
import { useFetchTalentBooks } from "../hooks/useFetchTalentBooks";
// The fetching should happen here then pass the data as props to the children

const TalentBooks = () => {
  const { data, loading, error } = useFetchTalentBooks();
  // console.log(typeof data);
  return <div className="talentbooks"></div>;
};

export default TalentBooks;
