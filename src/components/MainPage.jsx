import { useState } from "react";
import ProjectCard from "./ProjectCard";

const MONO = "'JetBrains Mono', monospace";
const SANS = "'Geist', sans-serif";

const COLORS = {
  bg: "#131313",
  surface: "#1c1b1b",
  surfaceMid: "#201f1f",
  surfaceHigh: "#2a2a2a",
  accent: "#00ffb2",
  accentDim: "#00e29d",
  text: "#e5e2e1",
  textDim: "#b9cbbe",
  outline: "rgba(255,255,255,0.06)",
  outlineBright: "#3a4a41",
};

function SectionLabel({ number, name }) {
  return (
    <div
      style={{
        fontFamily: MONO,
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: COLORS.accent,
        marginBottom: "24px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span style={{ color: COLORS.textDim }}>{number}</span>
      <span style={{ color: COLORS.outlineBright }}>—</span>
      <span>{name}</span>
    </div>
  );
}

function SkillPill({ label }) {
  return (
    <span
      style={{
        fontFamily: MONO,
        fontSize: "12px",
        fontWeight: 400,
        color: COLORS.textDim,
        background: COLORS.surfaceMid,
        border: "1px solid rgba(255,255,255,0.06)",
        borderLeft: `2px solid ${COLORS.accent}`,
        borderRadius: "4px",
        padding: "5px 10px",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

const SKILLS = [
  {
    category: "Backend",
    items: [
      "Node.js",
      "Python",
      "REST APIs",
      "WebSockets (Socket.io)",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Swift (SwiftUI)",
    ],
  },
  {
    category: "Other",
    items: [
      "C#",
      "Java",
      "JavaScript",
      "Unity",
      "Unreal Engine",
      "BeautifulSoup",
      "Git",
      "Vercel",
    ],
  },
  {
    category: "Languages",
    items: ["English (Professional)", "Hindi (Native)"],
  },
];

const PROJECTS = [
  {
    title: "WorkNovasLLC Taki",
    date: "March 2026 – Present",
    description:
      "A role-based candidate submission platform for a headhunting firm. Features real-time WebSocket notifications, JWT-based auth with role-scoped access, and a PostgreSQL database. Built with React + Vite (TypeScript) and Node.js + Express.js.",
    image: "/projects/wnllctaki.png",
    link: "https://taki-pied.vercel.app/",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSocket"],
  },
  {
    title: "WorkNovasLLC Billing",
    date: "March 2026 – Present",
    description:
      "A billing management system for a headhunting firm to track payments for C2C workers. Built with React + Vite and Node.js + Express.js, deployed on Vercel.",
    image: "/projects/wnllcbilling.png",
    link: "https://billing.dctechworks.net/",
    stack: ["React", "Node.js", "Express.js", "Vercel"],
  },
  {
    title: "Box Game",
    date: "February 2026 – Present",
    description:
      "A client-server multiplayer game with real-time WebSocket state sync and a custom frame-by-frame rendering pipeline. Self-hosted on Oracle Cloud VM with Nginx as a reverse proxy.",
    image: "/projects/boxgame.png",
    link: "https://boxgame.shadyggs.xyz/",
    stack: ["JavaScript", "Node.js", "WebSockets", "Nginx", "Oracle Cloud"],
  },
  {
    title: "Srikanth Nursery & Lakshmi Associates",
    date: "October 2025 – April 2026",
    description:
      "Business website for a horticulture firm. Filterable project portfolio, service categories, and client showcase. Built with React, Node.js, and Supabase.",
    image: "/projects/nursery.png",
    link: "https://www.lakshmiassociates.com/",
    stack: ["React", "Node.js", "Supabase", "Tailwind CSS"],
  },
  {
    title: "The Industrial Chemist (iOS)",
    date: "August 2025 – April 2026",
    description:
      "A team-of-3 iOS app that turns industrial chemistry processes into gamified virtual experiments. XP system, Firestore-backed leaderboards, StoreKit subscriptions, and a companion marketing site in React + TypeScript.",
    image: "/projects/industrialchemist.png",
    link: "https://github.com/anshggss/The-Industrial-Chemist",
    stack: ["Swift", "UIKit", "Firebase", "StoreKit", "React", "TypeScript"],
  },
  {
    title: "Garage Band",
    date: "May 2025 – July 2025",
    description:
      "An Unreal Engine simulation for real-time car customisation previews — swap doors, tyres, lights, and body colour. Delivered as a freelance project.",
    image: "/projects/garageband.png",
    link: "https://github.com/anshggss/GarageBand",
    stack: ["Unreal Engine", "C++"],
  },
  {
    title: "UploadNFilter",
    date: "February 2025 – March 2026",
    description:
      "A spreadsheet formatter for a business client. Takes raw order data, processes and sorts it, then outputs a clean formatted spreadsheet. Built with React and Node.js.",
    image: "/projects/uploadnfilter.png",
    link: "https://uploadnfilter.vercel.app/",
    stack: ["React", "Node.js", "Express.js"],
  },
  {
    title: "Meter Logger",
    date: "April 2026",
    description:
      "An iOS app that tracks and splits electricity bills across multiple flats. Calculates each roommate's share proportionally with bill cycle history. Swift Student Challenge 2026 submission.",
    image: "/projects/placeholder.jpg",
    link: "https://github.com/anshggss/Meter-Logger",
    stack: ["Swift", "SwiftUI"],
  },
  {
    title: "Manga Scraper",
    date: "April 2026",
    description:
      "A Python scraper that downloads One Piece manga chapters and compiles them into PDFs. Handles deduplication and ordering automatically.",
    image: "/projects/placeholder.jpg",
    link: "https://github.com/anshggss/one-piece-scraper",
    stack: ["Python", "BeautifulSoup", "Pillow"],
  },
  {
    title: "Chat WebApp",
    date: "2024",
    description:
      "A simple chat interface built as a privacy-friendly messaging alternative.",
    image: "/projects/chat.png",
    link: "https://anshggss.github.io/Chat-WebApp/",
    stack: ["JavaScript", "HTML/CSS"],
  },
  {
    title: "Movies WebApp",
    date: "2024",
    description:
      "A movie browsing interface with a curated list and filtering options.",
    image: "/projects/movies.png",
    link: "https://anshggss.github.io/Movies-WebApp/",
    stack: ["JavaScript", "HTML/CSS"],
  },
  {
    title: "Notes WebApp",
    date: "2024",
    description:
      "A clean notes-taking web app built with vanilla HTML, CSS, and JavaScript.",
    image: "/projects/notes.png",
    link: "https://anshggss.github.io/notes-webapp/",
    stack: ["JavaScript", "HTML/CSS"],
  },
];

function MainPage() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const downloadResume = () => {
    const a = document.createElement("a");
    a.href = "/resume.pdf";
    a.download = "resume.pdf";
    a.click();
  };

  return (
    <div style={{ background: COLORS.bg, color: COLORS.text }}>
      {/* ── HERO ── */}
      <section
        id="home"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 120px",
        }}
      >
        <SectionLabel number="01" name="INIT" />

        <h1
          style={{
            fontFamily: MONO,
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: COLORS.text,
            margin: "0 0 24px",
            maxWidth: "720px",
          }}
        >
          Building full-stack apps —<br />
          one project at a time.
        </h1>

        <p
          style={{
            fontFamily: SANS,
            fontSize: "18px",
            fontWeight: 300,
            color: COLORS.textDim,
            lineHeight: 1.6,
            margin: "0 0 48px",
            maxWidth: "520px",
          }}
        >
          CS student at SRM IST, Chennai. I ship real projects, break things
          intentionally, and learn from both.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <PrimaryButton
            onClick={() => scrollTo("projects")}
            label="View Work ↓"
          />
          <SecondaryButton onClick={downloadResume} label="Resume" />
        </div>

        {/* Decorative terminal block */}
        <div
          style={{
            marginTop: "80px",
            background: COLORS.surface,
            border: `1px solid ${COLORS.outline}`,
            borderRadius: "4px",
            maxWidth: "480px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 14px",
              background: COLORS.surfaceHigh,
              borderBottom: `1px solid ${COLORS.outline}`,
            }}
          >
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div
                key={c}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: c,
                }}
              />
            ))}
            <span
              style={{
                fontFamily: MONO,
                fontSize: "11px",
                color: COLORS.textDim,
                marginLeft: "8px",
              }}
            >
              ~/ansh — zsh
            </span>
          </div>
          <div style={{ padding: "16px 20px" }}>
            <CodeLine prompt="$" text="whoami" />
            <CodeLine
              plain
              text="ansh mani tripathi — srm ist · full-stack dev"
            />
            <CodeLine prompt="$" text="ls projects/" />
            <CodeLine
              plain
              text={`${PROJECTS.length} projects shipped`}
              accent
            />
            <CodeLine prompt="$" text="cat status.txt" />
            <CodeLine plain text="currently: learning, building, shipping" />
            <CodeLine prompt="$" text="_" blink />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          borderTop: `1px solid ${COLORS.outline}`,
        }}
      >
        <SectionLabel number="02" name="ABOUT" />

        <div
          style={{
            display: "grid",
            gap: "48px",
            alignItems: "start",
          }}
          className="grid-cols-1 md:[grid-template-columns:1fr_1fr]"
        >
          <div>
            <p
              style={{
                fontFamily: SANS,
                fontSize: "17px",
                fontWeight: 300,
                color: COLORS.text,
                lineHeight: 1.7,
                margin: "0 0 24px",
              }}
            >
              I'm a B.Tech CSE (Gaming Technology) student at SRM IST,
              Kattankulathur. I enjoy building full-stack web apps — from REST
              APIs and WebSocket servers to React frontends. I've shipped
              projects for real clients and interned at Infosys as an iOS App
              Developer.
            </p>
            <p
              style={{
                fontFamily: SANS,
                fontSize: "17px",
                fontWeight: 300,
                color: COLORS.textDim,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Outside of web dev, I've built iOS apps with Swift and explored
              game simulations in Unreal Engine. I pick up whatever the project
              calls for.
            </p>

            <div
              style={{
                marginTop: "32px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: COLORS.accent, fontSize: "14px" }}>◈</span>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "13px",
                  color: COLORS.textDim,
                }}
              >
                Based in Chennai, Tamil Nadu
              </span>
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <InfoCard
              title="Full-Stack Web"
              description="React frontends, Node.js backends, and PostgreSQL / Firebase databases — end to end."
            />
            <InfoCard
              title="iOS Development"
              description="Native iOS apps with Swift and SwiftUI. Part of the Apple iOS Student Developer Program."
            />
            <InfoCard
              title="Freelance"
              description="Delivered real projects for paying clients — business websites, internal tools, and platforms."
            />
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section
        id="experience"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          borderTop: `1px solid ${COLORS.outline}`,
        }}
      >
        <SectionLabel number="03" name="EXPERIENCE" />

        <div
          style={{
            background: COLORS.surface,
            border: `1px solid ${COLORS.outline}`,
            borderRadius: "4px",
            padding: "28px",
            maxWidth: "680px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "16px",
                  fontWeight: 600,
                  color: COLORS.text,
                }}
              >
                Infosys
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "12px",
                  color: COLORS.accent,
                  marginTop: "4px",
                }}
              >
                iOS App Developer
              </div>
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: "12px",
                color: COLORS.textDim,
                textAlign: "right",
              }}
            >
              Mar 2026 – Mar 2026
            </div>
          </div>
          <p
            style={{
              fontFamily: SANS,
              fontSize: "15px",
              fontWeight: 300,
              color: COLORS.textDim,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Built Ochima, a full-stack fleet management app in a team of 10.
            Engineered the server in Django (Python) with RESTful APIs handling
            fleet data, vehicle state, and operator workflows, and the iOS
            frontend in Swift.
          </p>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: "16px",
            }}
          >
            {["Swift", "Django", "Python", "RESTful APIs", "iOS"].map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: MONO,
                  fontSize: "11px",
                  color: COLORS.accent,
                  background: "rgba(0,255,178,0.06)",
                  border: "1px solid rgba(0,255,178,0.15)",
                  borderRadius: "4px",
                  padding: "3px 8px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          borderTop: `1px solid ${COLORS.outline}`,
        }}
      >
        <SectionLabel number="04" name="CORE_STACK" />

        <div
          style={{
            display: "grid",
            gap: "32px",
          }}
          className="grid-cols-2 md:[grid-template-columns:repeat(4,1fr)]"
        >
          {SKILLS.map(({ category, items }) => (
            <div key={category}>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: COLORS.textDim,
                  marginBottom: "16px",
                }}
              >
                {category}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {items.map((item) => (
                  <SkillPill key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          borderTop: `1px solid ${COLORS.outline}`,
        }}
      >
        <SectionLabel number="05" name="PROJECT_MANIFEST" />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          borderTop: `1px solid ${COLORS.outline}`,
        }}
      >
        <SectionLabel number="06" name="ACHIEVEMENTS" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "720px",
          }}
        >
          {[
            {
              title: "OssomeHacks 2.0 — 1st Place",
              sub: "Crypto Domain · Team OutOfFunds",
              year: "2024",
            },
            {
              title: "Apple Swift Student Challenge 2026",
              sub: "Submitted Meter Logger — a SwiftUI app that tracks and splits electricity bills across flats",
              year: "2026",
            },
            {
              title: "Self-Hosted Minecraft Server",
              sub: "Deployed on Oracle Cloud VM with Nginx as reverse proxy. After a breach via an open port, implemented IP-based firewall filtering.",
              year: "Ongoing",
            },
          ].map(({ title, sub, year }) => (
            <div
              key={title}
              style={{
                background: COLORS.surface,
                border: `1px solid ${COLORS.outline}`,
                borderRadius: "4px",
                padding: "20px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "24px",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: "14px",
                    fontWeight: 600,
                    color: COLORS.text,
                    marginBottom: "6px",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: "13px",
                    fontWeight: 300,
                    color: COLORS.textDim,
                    lineHeight: 1.6,
                  }}
                >
                  {sub}
                </div>
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "11px",
                  color: COLORS.accent,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {year}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER / CONTACT ── */}
      <footer
        style={{
          borderTop: `1px solid ${COLORS.outline}`,
          padding: "12px 12px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: "11px",
            color: COLORS.textDim,
            marginTop: "0px",
            letterSpacing: "0.05em",
          }}
        >
          Designed and built by Ansh Mani Tripathi
        </p>
      </footer>
    </div>
  );
}

function PrimaryButton({ onClick, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: MONO,
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "0.04em",
        color: hovered ? "#003824" : "#003824",
        background: hovered ? COLORS.accentDim : COLORS.accent,
        border: "none",
        borderRadius: "4px",
        padding: "12px 24px",
        cursor: "pointer",
        transition: "background 0.2s",
      }}
    >
      {label}
    </button>
  );
}

function SecondaryButton({ onClick, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: MONO,
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "0.04em",
        color: hovered ? "#003824" : COLORS.accent,
        background: hovered ? COLORS.accent : "transparent",
        border: `1px solid ${COLORS.accent}`,
        borderRadius: "4px",
        padding: "12px 24px",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      {label}
    </button>
  );
}

function InfoCard({ title, description }) {
  return (
    <div
      style={{
        background: COLORS.surface,
        border: `1px solid ${COLORS.outline}`,
        borderRadius: "4px",
        padding: "20px",
      }}
    >
      <div
        style={{
          fontFamily: MONO,
          fontSize: "13px",
          fontWeight: 600,
          color: COLORS.accent,
          marginBottom: "8px",
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontFamily: SANS,
          fontSize: "14px",
          fontWeight: 300,
          color: COLORS.textDim,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function CodeLine({ prompt, text, plain, accent, blink }) {
  return (
    <div
      style={{
        fontFamily: MONO,
        fontSize: "13px",
        lineHeight: 1.8,
        display: "flex",
        gap: "8px",
        color: plain ? (accent ? COLORS.accent : COLORS.textDim) : COLORS.text,
      }}
    >
      {prompt && (
        <span style={{ color: COLORS.accent, userSelect: "none" }}>
          {prompt}
        </span>
      )}
      <span>
        {text}
        {blink && (
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "14px",
              background: COLORS.accent,
              marginLeft: "2px",
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }}
          />
        )}
      </span>
    </div>
  );
}

export default MainPage;
