import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./App.css";
import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

const App = () => {
  const [theme, setTheme] = useState(null);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App bg-white text-black" id={theme}>
        <BrowserRouter>
          <Navbar toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
