import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Download,
  ChevronDown,
} from "lucide-react";

const ROLES = [
  "Data Scientist",
  "ML Engineer",
  "AI Developer",
  "Problem Solver",
];

const DS_SKILLS = [
  "Python",
  "R",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "SQL",
  "Apache Spark",
  "Kafka",
  "AWS",
  "Docker",
  "Jupyter",
  "FastAPI",
  "React.js",
  "MongoDB",
  "Tableau",
  "Power BI",
  "Git",
  "LangChain",
];

const DOTS = [
  { left: "5%", top: "12%", dur: 18, delay: 0 },
  { left: "12%", top: "45%", dur: 22, delay: 1.2 },
  { left: "18%", top: "78%", dur: 16, delay: 0.5 },
  { left: "25%", top: "23%", dur: 25, delay: 2.1 },
  { left: "32%", top: "67%", dur: 19, delay: 0.8 },
  { left: "38%", top: "8%", dur: 21, delay: 3.0 },
  { left: "44%", top: "89%", dur: 17, delay: 1.5 },
  { left: "50%", top: "34%", dur: 23, delay: 0.3 },
  { left: "55%", top: "56%", dur: 20, delay: 2.5 },
  { left: "61%", top: "15%", dur: 26, delay: 1.0 },
  { left: "67%", top: "72%", dur: 18, delay: 0.7 },
  { left: "73%", top: "40%", dur: 22, delay: 3.5 },
  { left: "79%", top: "91%", dur: 15, delay: 1.8 },
  { left: "85%", top: "28%", dur: 24, delay: 0.4 },
  { left: "91%", top: "63%", dur: 20, delay: 2.2 },
  { left: "8%", top: "55%", dur: 17, delay: 4.0 },
  { left: "15%", top: "88%", dur: 21, delay: 0.9 },
  { left: "22%", top: "33%", dur: 19, delay: 2.8 },
  { left: "29%", top: "71%", dur: 23, delay: 1.3 },
  { left: "36%", top: "18%", dur: 16, delay: 3.2 },
  { left: "43%", top: "50%", dur: 25, delay: 0.6 },
  { left: "49%", top: "82%", dur: 18, delay: 1.9 },
  { left: "57%", top: "25%", dur: 22, delay: 4.5 },
  { left: "64%", top: "47%", dur: 20, delay: 0.2 },
  { left: "70%", top: "84%", dur: 24, delay: 2.7 },
  { left: "76%", top: "10%", dur: 17, delay: 1.1 },
  { left: "83%", top: "59%", dur: 21, delay: 3.8 },
  { left: "89%", top: "36%", dur: 19, delay: 0.8 },
  { left: "95%", top: "76%", dur: 23, delay: 2.0 },
  { left: "3%", top: "95%", dur: 26, delay: 1.6 },
];

const STATS = [
  { value: "5+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "2+", label: "Years Learning" },
];

// framer-motion variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let t;
    if (!isDeleting && displayed.length < current.length) {
      t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        45,
      );
    } else {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--color-background) 30%, transparent), color-mix(in srgb, var(--color-background) 80%, transparent), var(--color-background))",
          }}
        />
      </div>

      {/* Floating dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {DOTS.map((dot, i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{
              position: "absolute",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#20B2A6",
              opacity: 0.45,
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.dur}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Centered content */}
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "24px",
          }}
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 18px",
                borderRadius: "999px",
                background: "rgba(32,178,166,0.1)",
                border: "1px solid rgba(32,178,166,0.3)",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--color-primary)",
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-primary)",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              Available for Opportunities
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(38px, 6vw, 70px)",
              fontWeight: 700,
              letterSpacing: "-2.5px",
              lineHeight: 1.08,
              color: "var(--color-foreground)",
              margin: 0,
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                color: "var(--color-primary)",
                textShadow: "0 0 40px rgba(32,178,166,0.35)",
              }}
            >
              Vishal Verma
            </span>
          </motion.h1>

          {/* Typewriter line */}
          <motion.div
            variants={item}
            style={{
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(18px, 2.8vw, 28px)",
                fontWeight: 500,
                color: "var(--color-primary)",
                letterSpacing: "-0.3px",
              }}
            >
              {displayed}
              <span className="cursor-blink">|</span>
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.75,
              color: "var(--color-muted-foreground)",
              maxWidth: "540px",
              margin: 0,
            }}
          >
            I transform complex data into actionable insights using machine
            learning, statistical analysis, and data visualization to drive real
            business decisions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 38px rgba(32,178,166,0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 30px",
                borderRadius: "999px",
                background: "var(--color-primary)",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                fontFamily: "Space Grotesk, sans-serif",
                textDecoration: "none",
                boxShadow: "0 0 24px rgba(32,178,166,0.38)",
                transition: "box-shadow 0.2s",
              }}
            >
              View My Work <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="/resume/VishalVermaResume.pdf"
              download="VishalVermaResume.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 30px",
                borderRadius: "999px",
                background: "transparent",
                color: "var(--color-foreground)",
                fontSize: "15px",
                fontWeight: 600,
                fontFamily: "Space Grotesk, sans-serif",
                textDecoration: "none",
                border: "1px solid var(--color-border)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-border)")
              }
            >
              <Download size={16} /> Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={item}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            {[
              {
                Icon: Github,
                href: "https://github.com/vishalvermacore",
                label: "GitHub",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/vishalvermacore",
                label: "LinkedIn",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  background: "rgba(255,255,255,0.03)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-muted-foreground)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-muted-foreground)";
                }}
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={item}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "var(--color-border)",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid var(--color-border)",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--color-card, #141a1f)",
                  padding: "18px 12px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    color: "var(--color-muted-foreground)",
                    marginTop: "3px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills marquee */}
        <div style={{ marginTop: "60px" }}>
          <p
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--color-muted-foreground)",
              textAlign: "center",
              marginBottom: "20px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Technologies &amp; Tools
          </p>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "80px",
                background:
                  "linear-gradient(to right, var(--color-background), transparent)",
                zIndex: 10,
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "80px",
                background:
                  "linear-gradient(to left, var(--color-background), transparent)",
                zIndex: 10,
              }}
            />
            <div className="animate-marquee" style={{ display: "flex" }}>
              {[...DS_SKILLS, ...DS_SKILLS].map((skill, i) => (
                <div key={i} style={{ flexShrink: 0, padding: "8px 28px" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "var(--color-muted-foreground)",
                      opacity: 0.45,
                      fontFamily: "Space Grotesk, sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}

      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a
          href="#about"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            color: "var(--color-muted-foreground)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--color-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--color-muted-foreground)")
          }
        >
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Scroll
          </span>
          <ChevronDown
            size={18}
            style={{ animation: "hero-bounce 1.6s ease-in-out infinite" }}
          />
        </a>
      </div>
    </section>
  );
};
