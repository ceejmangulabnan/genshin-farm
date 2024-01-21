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

      for (let char of data) {
        // HACK: ADD DASHED NAME TO CHARDATA

        char.id = formatDashedString(char.name);

        // Handle special name case of traveler
        if (char.id === "traveler") {
          let vision = char.vision.toLowerCase();
          if (vision === "anemo") {
            char.id.concat("-anemo");
          } else if (vision === "geo") {
            char.id.concat("-geo");
          } else if (vision === "electro") {
            char.id.concat("electro");
          } else if (vision === "dendro") {
            char.id.concat("-dendro");
          } else if (vision === "hydro") {
            char.id.concat("-hydro");
          }
        }

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
