import { useState, useEffect } from "react";
import ShinyText from "../component/ShinyText";

function NavBar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleContact = () => {
    window.open("https://linktr.ee/shadyggs", "_blank");
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerClass = isScrolled
    ? `backdrop-blur-xl ${darkMode ? "bg-gray-950/80 shadow-gray-700" : "bg-white/10 shadow-lg"} rounded-3xl px-6 py-4`
    : "";

  const textClass = darkMode ? "text-gray-100" : "text-gray-900";
  const afterClass = darkMode ? "after:bg-white" : "after:bg-black";
  const hoverTextClass = darkMode
    ? "hover:text-gray-300"
    : "hover:text-gray-500";
  const themeButtonBg = darkMode ? "bg-gray-800" : "bg-gray-200";
  const resumeBg = darkMode ? "bg-gray-700" : "bg-gray-800";

  return (
    <div
      className={`sticky top-8 z-50 transition-all duration-300 mx-32 ${containerClass}`}
    >
      <div className="flex justify-between items-center">
        {/* Theme toggle button */}
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-3xl ${themeButtonBg} hover:scale-110 transition-all cursor-pointer`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={darkMode ? "text-white" : "text-black"}
            >
              <path
                d="M26.6975 15.4613C26.4812 17.8018 25.6028 20.0323 24.1651 21.8919C22.7274 23.7514 20.7898 25.163 18.5791 25.9615C16.3684 26.7601 13.976 26.9125 11.6818 26.4009C9.38765 25.8894 7.28661 24.735 5.62456 23.073C3.9625 21.4109 2.80816 19.3099 2.29662 17.0157C1.78508 14.7216 1.93748 12.3292 2.736 10.1184C3.53453 7.90773 4.94614 5.97016 6.80566 4.53244C8.66519 3.09473 10.8957 2.21633 13.2362 2.00003C11.8659 3.8539 11.2065 6.13803 11.378 8.43698C11.5494 10.7359 12.5403 12.897 14.1704 14.5271C15.8005 16.1572 17.9616 17.1481 20.2606 17.3196C22.5595 17.491 24.8436 16.8316 26.6975 15.4613Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div className={`flex gap-8 font-extralight items-center ${textClass}`}>
          {["home", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() =>
                section === "contact"
                  ? handleContact()
                  : scrollToSection(section)
              }
              className={`
                relative cursor-pointer
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-[1px] after:w-0 ${afterClass}
                after:transition-all after:duration-300 after:ease-out
                hover:after:w-full
                ${hoverTextClass}
              `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Resume Button */}
        <div>
          <button
            onClick={handleResumeDownload}
            className={`text-white ${resumeBg} px-[10px] py-[6px] rounded-4xl cursor-pointer hover:scale-105 transition-all hover:shadow-2xl`}
          >
            <ShinyText
              text="Resume"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
