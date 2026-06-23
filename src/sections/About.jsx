import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Database, BarChart3, FlaskConical } from "lucide-react";

const expertise = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Building supervised & unsupervised models, deep learning architectures, and deploying ML pipelines at scale.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Designing robust data pipelines, ETL workflows, and cloud infrastructure for production ML systems.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Transforming raw data into compelling visualizations and actionable business intelligence dashboards.",
  },
  {
    icon: FlaskConical,
    title: "Experimentation",
    description:
      "Running A/B tests, statistical hypothesis testing, and model evaluation to drive data-backed decisions.",
  },
];

const skillTags = [
  "Python",
  "R",
  "SQL",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "AWS",
  "Docker",
];

// Reusable animation variants
const fadeLeft = {
  hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const staggerCards = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle bg glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(32,178,166,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
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
            About Me
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
            Turning data into{" "}
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              decisions.
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* LEFT — bio */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "var(--color-muted-foreground)",
                }}
              >
                I'm a Data Science & ML Engineer passionate about building
                end-to-end intelligent systems that deliver measurable impact.
                My journey started with curiosity about how data shapes
                decisions, and grew into hands-on experience with machine
                learning pipelines, statistical modelling, and data engineering.
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "var(--color-muted-foreground)",
                }}
              >
                I enjoy the full lifecycle — from raw data wrangling and feature
                engineering to model training, evaluation, and deploying APIs
                that serve predictions in production. I value clean,
                reproducible code and results that actually move the needle.
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "var(--color-muted-foreground)",
                }}
              >
                Outside work, you'll find me exploring new ML research,
                contributing to open-source, or on a football pitch — staying
                sharp in both mind and body.
              </p>
            </div>

            {/* Quote card */}
            <div
              style={{
                padding: "20px 24px",
                borderRadius: "16px",
                background: "rgba(32,178,166,0.06)",
                border: "1px solid rgba(32,178,166,0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                  fontSize: "16px",
                  lineHeight: 1.65,
                  color: "var(--color-foreground)",
                }}
              >
                "My goal is to build data systems that are accurate,
                explainable, and genuinely useful — for both engineers and
                stakeholders."
              </p>
            </div>

            {/* Skill tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "5px 14px",
                    borderRadius: "999px",
                    background: "rgba(32,178,166,0.08)",
                    border: "1px solid rgba(32,178,166,0.2)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--color-primary)",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — expertise cards */}
          <motion.div
            variants={staggerCards}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {expertise.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={cardItem}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "20px 22px",
                  borderRadius: "16px",
                  background: "var(--color-card, #141a1f)",
                  border: "1px solid var(--color-border)",
                  cursor: "default",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(32,178,166,0.35)";
                  e.currentTarget.style.boxShadow =
                    "0 0 24px rgba(32,178,166,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(32,178,166,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color="var(--color-primary)" />
                </div>

                {/* Text */}
                <div>
                  <h3
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--color-foreground)",
                      marginBottom: "5px",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.65,
                      color: "var(--color-muted-foreground)",
                    }}
                  >
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
