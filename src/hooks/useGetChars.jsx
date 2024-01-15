import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const useGetChars = () => {
  const [chars, setChars] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChars = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://genshin.jmp.blue/characters`);
        const data = await response.data;
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchChars();
  }, []);
  return { chars, loading, error };
};

export default useGetChars;
