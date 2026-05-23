import { useState, useEffect } from "react";

const MONO = "'JetBrains Mono', monospace";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const downloadResume = () => {
    const a = document.createElement("a");
    a.href = "/resume.pdf";
    a.download = "resume.pdf";
    a.click();
  };

  const openContact = () => window.open("https://linktr.ee/shadyggs", "_blank");

  const navLinks = [
    { label: "Work", id: "projects" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Exp", id: "experience" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: "24px",
        zIndex: 50,
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isScrolled ? "12px 20px" : "16px 0",
          borderRadius: "4px",
          background: isScrolled ? "rgba(19,19,19,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          border: isScrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <button
          onClick={() => scrollTo("home")}
          style={{
            fontFamily: MONO,
            fontWeight: 700,
            fontSize: "18px",
            color: "#00ffb2",
            letterSpacing: "-0.02em",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          AMT
        </button>

        {/* Desktop */}
        <div className="hidden md:flex" style={{ gap: "32px", alignItems: "center" }}>
          {navLinks.map(({ label, id }) => (
            <NavLink key={id} label={label} onClick={() => scrollTo(id)} />
          ))}
          <NavLink label="Contact" onClick={openContact} />
          <GhostButton onClick={downloadResume} label="Resume" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                height: "2px",
                width: "22px",
                background: "#e5e2e1",
                borderRadius: "2px",
                marginBottom: i < 2 ? "5px" : 0,
              }}
            />
          ))}
        </button>
      </div>

      {isOpen && (
        <div
          style={{
            background: "#1c1b1b",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "4px",
            padding: "16px",
            marginTop: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map(({ label, id }) => (
            <MobileNavLink key={id} label={label} onClick={() => scrollTo(id)} />
          ))}
          <MobileNavLink label="Contact" onClick={openContact} />
          <div style={{ marginTop: "8px" }}>
            <GhostButton onClick={downloadResume} label="Resume" fullWidth />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ label, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: MONO,
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: hovered ? "#00ffb2" : "#b9cbbe",
        background: "none",
        border: "none",
        cursor: "pointer",
        transition: "color 0.2s",
        padding: 0,
      }}
    >
      {label}
    </button>
  );
}

function MobileNavLink({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: MONO,
        fontSize: "14px",
        color: "#e5e2e1",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        padding: "10px 0",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {label}
    </button>
  );
}

function GhostButton({ onClick, label, fullWidth }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: MONO,
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: hovered ? "#003824" : "#00ffb2",
        background: hovered ? "#00ffb2" : "transparent",
        border: "1px solid #00ffb2",
        borderRadius: "4px",
        padding: "7px 18px",
        cursor: "pointer",
        transition: "all 0.2s",
        width: fullWidth ? "100%" : "auto",
      }}
    >
      {label}
    </button>
  );
}

export default NavBar;
