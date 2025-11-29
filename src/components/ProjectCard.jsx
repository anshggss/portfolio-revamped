import React from "react";

function ProjectCard({ title, date, description, image, link, darkMode }) {
  const bgClass = darkMode ? "bg-zinc-800" : "bg-white";
  const borderClass = darkMode ? "border-gray-700" : "border-gray-300";
  const textClass = darkMode ? "text-gray-100" : "text-gray-900";
  const borderRClass = darkMode ? "border-gray-700" : "border-gray-300";

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={`flex flex-col md:flex-row border ${borderClass} rounded-xl overflow-hidden transition-colors duration-500 ${bgClass} 
      w-full md:h-[350px]`}
    >
      {/* Image Section */}
      <div
        onClick={handleClick}
        className={`w-full md:w-1/2 h-48 md:h-full overflow-hidden relative flex items-center justify-center cursor-pointer border-b md:border-b-0 md:border-r ${borderRClass}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:blur-[2px] transition-all"
        />
      </div>

      {/* Text Section */}
      <div
        className={`w-full md:w-1/2 flex p-6 md:p-8 relative transition-colors duration-500 ${textClass}`}
      >
        <div className="flex flex-col gap-6 md:gap-12">
          <div className="flex flex-col items-start">
            <div className="text-2xl md:text-3xl font-semibold">{title}</div>
            <div className="font-extralight text-sm">{date}</div>
          </div>

          <div className="text-left text-sm md:text-base">{description}</div>
        </div>

        {/* External Link Icon */}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src="/share.png"
              alt="redirect"
              className="w-4 h-4 absolute bottom-4 right-4 md:bottom-8 md:right-8 cursor-pointer"
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
