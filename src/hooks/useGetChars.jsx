import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const useGetChars = () => {
  const [charsData, setCharsData] = useState([]);
  const [fourStars, setFourStars] = useState([]);
  const [fiveStars, setFiveStars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharData = async (charNames) => {
      // Loop through chars to get charData then push data to new array
      let charsData = [];
      let fourStars = [];
      let fiveStars = [];
      for (let char of charNames) {
        const response = await axios.get(
          `https://genshin.jmp.blue/characters/${char}`,
        );
        const data = await response.data;

        // Sorting
        if (data.rarity === 4) {
          fourStars.push(data);
        } else {
          fiveStars.push(data);
        }
        charsData.push(data);
      }

      console.log(fourStars);
      console.log(fiveStars);
      console.log(charsData);
      return [charsData, fourStars, fiveStars];
    };

    const fetchChars = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://genshin.jmp.blue/characters`);
        const charNames = await response.data;

        // Do something with the data

        // Loop through each character in charNames,
        // make a get req then push all that info in a new object array charsData
        const [charsData, fourStars, fiveStars] = getCharData(charNames);
        setCharsData(charsData);
        setFourStars(fourStars);
        setFiveStars(fiveStars);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchChars();
  }, []);
  return { charsData, fourStars, fiveStars, loading, error };
};

export default useGetChars;
