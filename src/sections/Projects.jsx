import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "UPIShield",
    subtitle: "UPI Fraud Detection & Risk Intelligence",
    description:
      "End-to-end UPI fraud detection pipeline in Python & MySQL — EDA, feature engineering, SMOTE-balanced XGBoost/Random Forest models, SHAP explainability, and statistical validation on 250K transactions.",
    image: "/projects/project1.png",
    tags: ["Python", "MySQL", "XGBoost", "Random Forest", "SHAP", "EDA"],
    metrics: ["250K Transactions", "Fraud Detection", "Risk Intelligence"],
    demo: "https://github.com/vishalvermacore/",
    github:
      "https://github.com/vishalvermacore/UPISHIELD-UPI-Fraud-Detection-Project",
  },
  {
    title: "LoanSense",
    subtitle: "Intelligent Loan Approval System",
    description:
      "AI-powered loan approval prediction system using XGBoost with 96.3% accuracy. Predicts credit eligibility based on income, credit score, DTI ratio & 20+ financial features. Built with Python, Scikit-learn & Streamlit",
    image: "/projects/project2.png",
    tags: ["Python", "XGBoost", "Scikit-learn", "Streamlit"],
    metrics: ["Predictive Modeling", "Fraud Prevention", "Risk Scoring"],
    demo: "https://credit-loan-prediction.streamlit.app/",
    github: "https://github.com/vishalvermacore/LoanSense",
  },
  {
    title: "Coming Soon",
    subtitle: "Next DS/ML Project",
    description:
      "Currently building an end-to-end machine learning project involving data collection, model training, and a production-ready API. Stay tuned.",
    image: null,
    tags: ["Python", "TensorFlow", "FastAPI", "Docker"],
    metrics: ["In Progress", "ML Pipeline", "REST API"],
    demo: null,
    github: null,
    comingSoon: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* bg glows */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(32,178,166,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,166,35,0.04) 0%, transparent 70%)",
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
            Featured Work
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
            Projects that{" "}
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              make an impact.
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
            Real-world applications built with modern tech — from real-time
            platforms to data-driven dashboards.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              whileHover={
                !project.comingSoon
                  ? { y: -6, transition: { duration: 0.22 } }
                  : {}
              }
              style={{
                borderRadius: "20px",
                background: "var(--color-card, #141a1f)",
                border: `1px solid ${project.comingSoon ? "var(--color-border)" : "var(--color-border)"}`,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.25s, box-shadow 0.25s",
                opacity: project.comingSoon ? 0.65 : 1,
              }}
              onMouseEnter={(e) => {
                if (!project.comingSoon) {
                  e.currentTarget.style.borderColor = "rgba(32,178,166,0.35)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(32,178,166,0.10)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "16/9",
                  background: project.comingSoon
                    ? "linear-gradient(135deg, rgba(32,178,166,0.08) 0%, rgba(32,178,166,0.02) 100%)"
                    : "#0a0e12",
                }}
              >
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.06, transition: { duration: 0.5 } }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "var(--color-primary)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      In Progress
                    </span>
                  </div>
                )}

                {/* Gradient overlay */}
                {project.image && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(20,26,31,0.7) 0%, transparent 60%)",
                    }}
                  />
                )}
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "22px 22px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  flex: 1,
                }}
              >
                {/* Title */}
                <div>
                  <h3
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--color-foreground)",
                      letterSpacing: "-0.3px",
                      marginBottom: "4px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      color: "var(--color-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {project.subtitle}
                  </p>
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
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "3px 10px",
                        borderRadius: "999px",
                        background: "rgba(32,178,166,0.07)",
                        border: "1px solid rgba(32,178,166,0.18)",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "var(--color-muted-foreground)",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  {project.metrics.map((m) => (
                    <div
                      key={m}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-primary)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "12px",
                          color: "var(--color-primary)",
                          fontWeight: 500,
                        }}
                      >
                        {m}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                {!project.comingSoon && (
                  <div
                    style={{ display: "flex", gap: "10px", marginTop: "4px" }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        padding: "9px 0",
                        borderRadius: "10px",
                        border: "1px solid var(--color-border)",
                        background: "transparent",
                        fontSize: "13px",
                        fontWeight: 600,
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "var(--color-foreground)",
                        textDecoration: "none",
                        transition: "border-color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(32,178,166,0.4)";
                        e.currentTarget.style.background =
                          "rgba(32,178,166,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--color-border)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <Github size={14} /> Code
                    </a>

                    {project.demo && project.demo !== project.github ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          padding: "9px 0",
                          borderRadius: "10px",
                          background: "var(--color-primary)",
                          fontSize: "13px",
                          fontWeight: 600,
                          fontFamily: "Space Grotesk, sans-serif",
                          color: "#ffffff",
                          textDecoration: "none",
                          boxShadow: "0 0 18px rgba(32,178,166,0.3)",
                          transition: "box-shadow 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.boxShadow =
                            "0 0 28px rgba(32,178,166,0.55)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.boxShadow =
                            "0 0 18px rgba(32,178,166,0.3)")
                        }
                      >
                        <ExternalLink size={14} /> Demo
                      </a>
                    ) : (
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          padding: "9px 0",
                          borderRadius: "10px",
                          background: "rgba(32,178,166,0.06)",
                          border: "1px solid rgba(32,178,166,0.15)",
                          fontSize: "13px",
                          fontWeight: 600,
                          fontFamily: "Space Grotesk, sans-serif",
                          color: "var(--color-muted-foreground)",
                        }}
                      >
                        <ExternalLink size={14} /> No Demo
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "52px" }}
        >
          <a
            href="https://github.com/vishalvermacore"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              borderRadius: "999px",
              border: "1px solid var(--color-border)",
              background: "transparent",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "Space Grotesk, sans-serif",
              color: "var(--color-foreground)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-primary)";
              e.currentTarget.style.color = "var(--color-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-foreground)";
            }}
          >
            View All on GitHub <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
