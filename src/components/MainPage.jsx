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
              date="February 2025 – March 2026"
              description="A spreadsheet formatter built for a business. Takes raw order data and customer files, processes and sorts orders, and outputs a formatted spreadsheet. Built with React + Vite and Node.js + Express.js."
              image="/projects/uploadnfilter.png"
              link="https://uploadnfilter.vercel.app/"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Garage Band"
              date="May 2025 – July 2025"
              description="An Unreal Engine simulation that lets users configure and preview car customisations in real time. Supports swapping components such as doors, tyres, lights, and body colour to visualise how a vehicle will look post-modification. Developed as a freelance project."
              image="/projects/garageband.png"
              link="https://github.com/anshggss/GarageBand"
              darkMode={darkMode}
            />
            <ProjectCard
              title="The Industrial Chemist (iOS)"
              date="August 2025 – April 2026"
              description="An iOS application with simulations of industry chemistry reactions from the NCERT curriculum. Gamifies learning with daily streaks and leaderboards. Built with Swift and Firebase."
              image="/projects/industrialchemist.png"
              link="https://github.com/anshggss/The-Industrial-Chemist"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Srikanth Nursery & Lakshmi Associates"
              date="October 2025 – April 2026"
              description="A business website for a horticulture and landscaping firm. Features a filterable project portfolio, service categorization, and client showcase. Built with React + Vite, Tailwind CSS, Node.js + Express.js, and Supabase (PostgreSQL)."
              image="/projects/nursery.png"
              link="https://www.lakshmiassociates.com/"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Box Game"
              date="February 2026 – Present"
              description="A multiplayer web game built with HTML, CSS, and JavaScript. The server is built using Node.js with a client-server architecture. The rendering pipeline was built from the ground up using frame-by-frame object state calculation."
              image="/projects/boxgame.png"
              link="https://boxgame.shadyggs.xyz/"
              darkMode={darkMode}
            />
            <ProjectCard
              title="WorkNovasLLC Billing"
              date="March 2026 – Present"
              description="A billing management system built for a headhunting firm to manage and track payments for their C2C workers. Built with React + Vite for the frontend and Node.js + Express.js for the backend, deployed on Vercel."
              image="/projects/wnllcbilling.png"
              link="https://billing.dctechworks.net/"
              darkMode={darkMode}
            />
            <ProjectCard
              title="WorkNovasLLC Taki"
              date="March 2026 – Present"
              description="A role-based candidate submission platform for a headhunting firm. Features real-time WebSocket notifications, JWT-based auth with role-scoped access, and a PostgreSQL database. Built with React + Vite (TypeScript) and Node.js + Express.js."
              image="/projects/wnllctaki.png"
              link="https://taki-pied.vercel.app/"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Manga Scraper"
              date="April 2026"
              description="A Python web scraper that downloads One Piece manga chapters and compiles them into PDF files. Scrapes page images, deduplicates while preserving order, and outputs a single PDF per chapter. Built with BeautifulSoup, Requests, and Pillow."
              image="/projects/placeholder.png"
              link="https://github.com/anshggss/one-piece-scraper"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Meter Logger"
              date="April 2026"
              description="An iOS application that tracks and splits electricity bills across multiple flats and rooms. Calculates each roommate's share proportionally and saves bill cycle snapshots to history using UserDefaults. Built with SwiftUI. Submission for the Swift Student Challenge 2026."
              image="/projects/placeholder.png"
              link="https://github.com/anshggss/Meter-Logger"
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
