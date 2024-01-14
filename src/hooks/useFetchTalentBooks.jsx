import { useEffect, useState } from "react";
import axios from "axios";
import { filterAvailableToday, objectToArray } from "../utils/utils";

const useFetchTalentBooks = () => {
  const [talentBookData, setTalentBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://genshin.jmp.blue/materials/talent-book",
        );
        const data = await response.data;

        // Adds respective icon URL to talentBook
        for (let key in data) {
          const iconUrl = `https://genshin.jmp.blue/materials/talent-book/teachings-of-${key}`;
          data[key].icon = iconUrl;
          data[key].name = key;
        }

        const formattedTalentBooks = objectToArray(data);
        const availableTalentBooks = filterAvailableToday(formattedTalentBooks);

        setTalentBookData(availableTalentBooks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { talentBookData, loading, error };
};

export default useFetchTalentBooks;
