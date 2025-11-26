import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const bgClass = darkMode
    ? "bg-zinc-950 text-gray-100"
    : "bg-white text-gray-900";

  return (
    <div className={`transition-colors duration-500 min-h-screen ${bgClass}`}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <MainPage darkMode={darkMode} />
    </div>
  );
}

export default App;
