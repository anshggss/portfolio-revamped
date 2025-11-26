import React from "react";

function ProjectCard({ title, date, description, image, link, darkMode }) {
  // Conditional classes
  const bgClass = darkMode ? "bg-zinc-800" : "bg-white";
  const borderClass = darkMode ? "border-gray-700" : "border-gray-300";
  const textClass = darkMode ? "text-gray-100" : "text-gray-900";
  const borderRClass = darkMode ? "border-gray-700" : "border-gray-300";
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={`flex h-[350px] border ${borderClass} rounded-xl overflow-hidden transition-colors duration-500 ${bgClass}`}
    >
      {/* Image Section */}
      <div
        onClick={handleClick}
        className={`w-1/2 overflow-hidden relative flex items-center justify-center cursor-pointer border-r ${borderRClass}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:blur-[2px] transition-all"
        />
      </div>

      {/* Text Section */}
      <div
        className={`w-1/2 flex p-8 relative transition-colors duration-500 ${textClass}`}
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-start">
            <div className="text-3xl font-semibold">{title}</div>
            <div className="font-extralight text-sm">{date}</div>
          </div>

          <div className="text-left">{description}</div>
        </div>

        {/* External Link Icon */}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src="/share.png"
              alt="redirect"
              className="w-4 h-4 absolute bottom-8 right-8 cursor-pointer"
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
