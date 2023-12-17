import React from "react";
import { useFetchTalentBooks } from "../hooks/useFetchTalentBooks";
import { TalentBookItem } from "./TalentBookItem";
// The fetching should happen here then pass the data as props to the children

const TalentBooks = () => {
  const { talentBookData, loading, error } = useFetchTalentBooks();
  // console.log(typeof data);
  return <div className="talentbooks"></div>;
};

export default TalentBooks;
