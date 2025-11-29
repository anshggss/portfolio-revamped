import React from "react";
import ProjectCard from "./ProjectCard";
import BlurText from "../component/BlurText";

function MainPage({ darkMode }) {
  const handleAnimationComplete = () => {};

  // Conditional classes
  const bgClass = darkMode
    ? "bg-zinc-950 text-gray-100"
    : "bg-white text-gray-900";
  const textClass = darkMode ? "text-gray-100" : "text-gray-900";
  const borderClass = darkMode ? "border-gray-700" : "border-gray-300";

  return (
    <div
      className={`flex flex-col transition-colors duration-500 ${bgClass}`}
      id="home"
    >
      <div className="w-full py-16 md:py-24 flex flex-col gap-32 md:gap-64">
        {/* Hero Section */}
        <div className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-0 px-6 md:px-0">
          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/profile-picture.png"
              alt="Profile"
              className={`rounded-full border-4 ${borderClass} w-48 h-48 md:w-[350px] md:h-[350px] object-cover`}
            />
          </div>

          {/* Text */}
          <div
            className={`w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:items-start gap-8 px-6 md:px-0 ${textClass}`}
          >
            <div className="flex flex-col gap-3">
              <div className="font-extrabold text-4xl md:text-5xl">
                <BlurText
                  text="Hi, I am Ansh Mani Tripathi"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-4xl md:text-5xl"
                />
              </div>

              <div className="font-extralight text-lg md:text-xl">
                📍 Based in Lucknow, Uttar Pradesh
              </div>
            </div>

            <div className="font-light text-base md:text-lg">
              A web developer, with inclination towards networking and devops
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="flex flex-col items-center px-6 md:px-40">
          <div
            className={`text-3xl md:text-4xl font-semibold mb-10 ${textClass}`}
          >
            Projects
          </div>

          <div className="flex flex-col gap-12 md:gap-16 w-full max-w-4xl">
            <ProjectCard
              title="Notes WebApp"
              date="2024"
              description="A simple and clean notes-taking web app built using HTML, CSS, and JavaScript."
              image="/projects/notes.png"
              link="https://anshggss.github.io/notes-webapp/"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Movies WebApp"
              date="2024"
              description="A movie browsing interface featuring a curated list and filtering options."
              image="/projects/movies.png"
              link="https://anshggss.github.io/Movies-WebApp/"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Chat WebApp"
              date="2024"
              description="A simple chat interface built as a privacy-friendly messaging alternative."
              image="/projects/chat.png"
              link="https://anshggss.github.io/Chat-WebApp/"
              darkMode={darkMode}
            />
            <ProjectCard
              title="UploadNFilter"
              date="2025"
              description="Excel filtering and transformation tool built using JavaScript, designed to process large order data easily."
              image="/projects/uploadnfilter.png"
              link="https://uploadnfilter.vercel.app/"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Srikanth Nursery Website"
              date="2025"
              description="Full-stack nursery management and product showcase website. Frontend + backend build."
              image="/projects/nursery.png"
              link="http://lakshmiassociates.com/"
              darkMode={darkMode}
            />
            <ProjectCard
              title="The Industrial Chemist (iOS)"
              date="2025"
              description="A Swift-based iOS app built for academic practical experiments in chemistry."
              image="/projects/industrialchemist.png"
              link="https://github.com/anshggss/The-Industrial-Chemist"
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`flex justify-center text-center font-extralight py-4 text-sm md:text-base ${textClass}`}
      >
        Website designed and built by me
      </div>
    </div>
  );
}

export default MainPage;
