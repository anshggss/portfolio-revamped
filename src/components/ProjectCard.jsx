import { useState } from "react";

const MONO = "'JetBrains Mono', monospace";
const SANS = "'Geist', sans-serif";

const COLORS = {
  surface: "#1c1b1b",
  surfaceHigh: "#2a2a2a",
  accent: "#00ffb2",
  text: "#e5e2e1",
  textDim: "#b9cbbe",
  outline: "rgba(255,255,255,0.06)",
};

function ProjectCard({ title, date, description, image, link, stack = [] }) {
  const [hovered, setHovered] = useState(false);

  return (
    // md:h-[268px] locks all desktop cards to the same height.
    // On mobile (flex-col) height is auto so nothing gets clipped.
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col md:flex-row md:h-[268px]"
      style={{
        background: COLORS.surface,
        border: `1px solid ${hovered ? "rgba(0,255,178,0.2)" : COLORS.outline}`,
        borderRadius: "4px",
        overflow: "hidden",
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 0 24px rgba(0,255,178,0.06)" : "none",
      }}
    >
      {/* Image — 180px tall on mobile, fills full card height on desktop */}
      <div
        className="w-full md:w-2/5 h-[180px] md:h-full"
        style={{
          flexShrink: 0,
          overflow: "hidden",
          borderBottom: `1px solid ${COLORS.outline}`,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: hovered ? "brightness(0.9)" : "brightness(0.72)",
            transition: "filter 0.3s",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {/* Terminal title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "9px 16px",
            background: COLORS.surfaceHigh,
            borderBottom: `1px solid ${COLORS.outline}`,
            flexShrink: 0,
          }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div
              key={c}
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: c,
                opacity: 0.7,
                flexShrink: 0,
              }}
            />
          ))}
          <span
            style={{
              fontFamily: MONO,
              fontSize: "11px",
              color: COLORS.textDim,
              marginLeft: "8px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title.toLowerCase().replace(/[\s/()]+/g, "-")}.sh
          </span>
        </div>

        {/* Body */}
        <div
          style={{
            flex: 1,
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                fontFamily: MONO,
                fontSize: "15px",
                fontWeight: 600,
                color: COLORS.text,
                marginBottom: "3px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: "11px",
                color: COLORS.textDim,
                letterSpacing: "0.04em",
              }}
            >
              {date}
            </div>
          </div>

          {/* 3-line clamp keeps all cards the same height regardless of description length */}
          <p
            style={{
              fontFamily: SANS,
              fontSize: "13px",
              fontWeight: 300,
              color: COLORS.textDim,
              lineHeight: 1.6,
              margin: 0,
              flexShrink: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>

          {stack.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", flexShrink: 0 }}>
              {stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: MONO,
                    fontSize: "10px",
                    color: COLORS.accent,
                    background: "rgba(0,255,178,0.06)",
                    border: "1px solid rgba(0,255,178,0.15)",
                    borderRadius: "4px",
                    padding: "2px 7px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                bottom: "14px",
                right: "18px",
                fontFamily: MONO,
                fontSize: "11px",
                color: COLORS.accent,
                textDecoration: "none",
                opacity: hovered ? 1 : 0.35,
                transition: "opacity 0.2s",
              }}
            >
              open ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
