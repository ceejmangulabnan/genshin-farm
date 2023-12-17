import React, { useEffect, useState } from "react";
import api from "../api";
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

        setTalentBookData(response.data);

        if (response !== undefined) {
          // Logs response if successful fetch
          console.log(response.data);
        }

        setData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --------- not sure if i wanna do this here
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  //
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  return { talentBookData, loading, error };
};
