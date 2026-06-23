import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const educations = [
  {
    period: "March 2021 – June 2025",
    degree: "Bachelor of Technology in Computer Science",
    institution: "SDCET, Muzaffarnagar (AKTU)",
    logo: "/educations/sdcet-logo.jpg",
    description:
      "Completed a B.Tech in Computer Science & Engineering with a strong foundation in data structures, algorithms, and software engineering. Gained hands-on experience through academic projects in web development and machine learning.",
    current: true,
  },
  {
    period: "April 2020 – March 2021",
    degree: "CBSE (XII) — PCM with Computer Science",
    institution: "D.S. Public School, Muzaffarnagar",
    logo: "/educations/school-logo.png",
    description:
      "Studied Physics, Chemistry, Mathematics, and Computer Science under CBSE board. Built the foundation for analytical thinking and problem-solving that drives my work in data science today.",
    current: false,
  },
  {
    period: "April 2018 – March 2019",
    degree: "CBSE (X)",
    institution: "D.S. Public School, Muzaffarnagar",
    logo: "/educations/school-logo.png",
    description:
      "Completed class 10 under CBSE board with subjects including Mathematics, Science, and English. Developed core academic discipline and a curiosity for how technology works.",
    current: false,
  },
];

export const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="educations"
      ref={ref}
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* bg glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(32,178,166,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "72px" }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Education Journey
          </span>
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 700,
              letterSpacing: "-1.5px",
              lineHeight: 1.15,
              color: "var(--color-foreground)",
              marginTop: "12px",
            }}
          >
            Learning that{" "}
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              builds foundations.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              color: "var(--color-muted-foreground)",
              marginTop: "14px",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            A timeline of my academic journey and the foundations that shaped my
            approach to data science and engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, var(--color-primary), rgba(32,178,166,0.2), transparent)",
              boxShadow: "0 0 18px rgba(32,178,166,0.5)",
            }}
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            {educations.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -32, filter: "blur(6px)" }}
                animate={
                  inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}
                }
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ position: "relative", paddingLeft: "36px" }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-6px",
                    top: "24px",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-primary)",
                    boxShadow: "0 0 12px rgba(32,178,166,0.7)",
                    border: "3px solid var(--color-background)",
                    zIndex: 2,
                  }}
                >
                  {edu.current && (
                    <span
                      style={{
                        position: "absolute",
                        inset: "-3px",
                        borderRadius: "50%",
                        background: "rgba(32,178,166,0.35)",
                        animation: "pulse 2s infinite",
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  style={{
                    padding: "24px",
                    borderRadius: "18px",
                    background: "var(--color-card, #141a1f)",
                    border: "1px solid rgba(32,178,166,0.2)",
                    transition: "border-color 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(32,178,166,0.45)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 24px rgba(32,178,166,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(32,178,166,0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Top row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      marginBottom: "14px",
                    }}
                  >
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      loading="lazy"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "10px",
                        objectFit: "contain",
                        background: "rgba(255,255,255,0.05)",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <h3
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "var(--color-foreground)",
                          marginBottom: "3px",
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "13px",
                          color: "var(--color-muted-foreground)",
                        }}
                      >
                        {edu.institution}
                      </p>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "12px",
                          color: "var(--color-primary)",
                          fontWeight: 500,
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>

                    {edu.current && (
                      <span
                        style={{
                          marginLeft: "auto",
                          flexShrink: 0,
                          padding: "3px 10px",
                          borderRadius: "999px",
                          background: "rgba(32,178,166,0.1)",
                          border: "1px solid rgba(32,178,166,0.3)",
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "var(--color-primary)",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Latest
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.7,
                      color: "var(--color-muted-foreground)",
                    }}
                  >
                    {edu.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
