import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchTalentBooks = () => {
  const [talentBookData, setTalentBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://genshin.jmp.blue/materials/talent-book/",
        );

        const fetchIcons = async (data) => {
          for (let keys in data) {
            const iconUrl = `https://genshin.jmp.blue/materials/talent-book/teachings-of-${keys}`;
            data[keys].icon = iconUrl;
          }
        };

        fetchIcons(response.data);
        setTalentBookData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { talentBookData, loading, error };
};
