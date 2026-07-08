import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Education", href: "educations" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    // Close menu first, then scroll after animation finishes
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }, 300);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: isScrolled ? "12px 0" : "20px 0",
        backgroundColor: isScrolled ? "var(--nav-bg)" : "transparent",
        borderBottom: isScrolled ? "1px solid var(--color-border)" : "none",
        backdropFilter: isScrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(14px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── Logo ── */}
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "-0.5px",
            color: "var(--color-foreground)",
            textDecoration: "none",
          }}
        >
          Vishal<span style={{ color: "var(--color-primary)" }}>.</span>
        </motion.a>

        {/* ── Desktop Nav Links ── */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden lg:flex"
          style={{ alignItems: "center", gap: "32px" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--color-muted-foreground)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.color = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                (e.target.style.color = "var(--color-muted-foreground)")
              }
            >
              {link.label}
            </a>
          ))}
        </motion.nav>

        {/* ── Desktop Right: Toggle + Hire Me ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex"
          style={{ alignItems: "center", gap: "12px" }}
        >
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-background-secondary)",
              color: "var(--color-foreground)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex" }}
                >
                  <Sun size={15} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex" }}
                >
                  <Moon size={15} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: "8px 22px",
              borderRadius: "999px",
              background: "var(--color-primary)",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "Space Grotesk, sans-serif",
              textDecoration: "none",
              boxShadow: "0 0 22px rgba(32,178,166,0.40)",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 32px rgba(32,178,166,0.65)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 22px rgba(32,178,166,0.40)")
            }
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* ── Mobile: toggle + hamburger ── */}
        <div className="lg:hidden flex" style={{ gap: "8px" }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-background-secondary)",
              color: "var(--color-foreground)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-background-secondary)",
              color: "var(--color-foreground)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              backgroundColor: "var(--color-background)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <div
              style={{
                padding: "16px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--color-foreground)",
                    textDecoration: "none",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--color-border)",
                    width: "100%",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-foreground)")
                  }
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                style={{
                  marginTop: "12px",
                  padding: "12px 0",
                  borderRadius: "999px",
                  background: "var(--color-primary)",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: "Space Grotesk, sans-serif",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  boxShadow: "0 0 18px rgba(32,178,166,0.35)",
                }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
