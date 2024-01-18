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
    // Create function that will return jsx with correct bgcolor of CharIcon depending on rarity

    const getCharData = async (charNames) => {
      // Loop through chars to get charData then push data to new array
      let charsData = [];
      let fourStars = [];
      let fiveStars = [];

      const requests = charNames.map((charName) =>
        axios.get(`https://genshin.jmp.blue/characters/${charName}`),
      );

      const responses = await Promise.all(requests);

      const data = responses.map((response) => response.data);

      for (let char of data) {
        if (char.rarity === 4) {
          fourStars.push(char);
        } else {
          fiveStars.push(char);
        }
        charsData.push(char);
      }

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
        const [charsData, fourStars, fiveStars] = await getCharData(charNames);
        console.log(fourStars);
        console.log(fiveStars);

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
