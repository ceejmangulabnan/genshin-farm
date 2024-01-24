import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { formatDashedString } from "../utils/utils";

const useGetChars = () => {
  const [allCharsData, setAllCharsData] = useState([]);
  const [fourStars, setFourStars] = useState([]);
  const [fiveStars, setFiveStars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharData = async (charNames) => {
      let charsData = [];
      let fourStars = [];
      let fiveStars = [];

      const requests = charNames.map((charName) =>
        axios.get(`https://genshin.jmp.blue/characters/${charName}`),
      );
      const responses = await Promise.all(requests);
      const data = responses.map((response) => response.data);

      const addCharProps = () => {
        for (let char of data) {
          char.id = formatDashedString(char.name);
          let vision = char.vision.toLowerCase();

          // Handle special name case of traveler
          if (char.id === "traveler") {
            switch (vision) {
              case "anemo":
              case "geo":
              case "electro":
              case "dendro":
              case "hydro":
                char.id = `${char.id}-${vision}`;
                char.url_name = char.id;
                break;
              // Add more cases if needed
              default:
                // Handle unexpected vision value (optional)
                break;
            }
          }

          let charUrlName = charNames.find((urlCharName) =>
            formatDashedString(char.name).includes(urlCharName),
          );

          if (char.name.toLowerCase() !== "traveler") {
            char.url_name = charUrlName;
          }

          if (char.rarity === 4) {
            fourStars.push(char);
          } else {
            fiveStars.push(char);
          }
          charsData.push(char);
        }
      };
      addCharProps();

      return [charsData, fourStars, fiveStars];
    };

    const fetchChars = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://genshin.jmp.blue/characters`);
        const charNames = await response.data;
        console.log("charNames for url", charNames);

        const [allCharsData, fourStars, fiveStars] =
          await getCharData(charNames);
        console.log(allCharsData);
        console.log(fourStars);
        console.log(fiveStars);

        setAllCharsData(allCharsData);
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
  return { allCharsData, fourStars, fiveStars, loading, error };
};

export default useGetChars;
