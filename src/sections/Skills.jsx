import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Languages",
    color: "#3B82F6",
    skills: ["Python", "R", "SQL", "JavaScript", "Bash"],
  },
  {
    label: "ML & Deep Learning",
    color: "#8B5CF6",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "XGBoost",
      "LangChain",
    ],
  },
  {
    label: "Data Engineering",
    color: "#F59E0B",
    skills: ["Pandas", "NumPy", "Apache Spark", "Kafka", "Airflow", "dbt"],
  },
  {
    label: "Tools & Cloud",
    color: "#10B981",
    skills: [
      "AWS",
      "Docker",
      "Git",
      "Jupyter",
      "FastAPI",
      "Tableau",
      "Power BI",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* bg glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(32,178,166,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
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
            Skills
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
            My{" "}
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              toolkit.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              color: "var(--color-muted-foreground)",
              marginTop: "16px",
              maxWidth: "480px",
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}
          >
            Technologies and tools I use to build end-to-end data science and
            machine learning solutions.
          </p>
        </motion.div>

        {/* Category grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {categories.map(({ label, color, skills }) => (
            <motion.div
              key={label}
              variants={cardVariant}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                padding: "28px 24px",
                borderRadius: "20px",
                background: "var(--color-card, #141a1f)",
                border: "1px solid var(--color-border)",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}44`;
                e.currentTarget.style.boxShadow = `0 8px 32px ${color}14`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: color,
                    boxShadow: `0 0 10px ${color}88`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-foreground)",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {label}
                </span>
              </div>

              {/* Skill tags */}
              <motion.div
                variants={container}
                style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariant}
                    whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
                    style={{
                      padding: "5px 13px",
                      borderRadius: "999px",
                      background: `${color}12`,
                      border: `1px solid ${color}28`,
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--color-foreground)",
                      fontFamily: "Inter, sans-serif",
                      cursor: "default",
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${color}22`;
                      e.currentTarget.style.borderColor = `${color}55`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${color}12`;
                      e.currentTarget.style.borderColor = `${color}28`;
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
