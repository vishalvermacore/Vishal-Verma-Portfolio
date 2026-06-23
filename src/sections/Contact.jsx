import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vishalverma.50103@gmail.com",
    href: "mailto:vishalverma.50103@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Muzaffarnagar, Uttar Pradesh",
    href: "#",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey)
        throw new Error("EmailJS environment variables are missing");
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );
      setSubmitStatus({
        type: "success",
        message: "Message sent! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: "Failed to send. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1px solid var(--color-border)",
    background: "var(--color-card, #141a1f)",
    color: "var(--color-foreground)",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* bg glows */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
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
            Get In Touch
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
            Let's build{" "}
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              something great.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              color: "var(--color-muted-foreground)",
              marginTop: "16px",
              lineHeight: 1.7,
            }}
          >
            Have a project in mind or want to collaborate? Send me a message.
          </p>
        </motion.div>

        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              padding: "32px",
              borderRadius: "20px",
              background: "var(--color-card, #141a1f)",
              border: "1px solid rgba(32,178,166,0.2)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    fontFamily: "Inter, sans-serif",
                    color: "var(--color-foreground)",
                    marginBottom: "8px",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--color-primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--color-border)")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    fontFamily: "Inter, sans-serif",
                    color: "var(--color-foreground)",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--color-primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--color-border)")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    fontFamily: "Inter, sans-serif",
                    color: "var(--color-foreground)",
                    marginBottom: "8px",
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--color-primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--color-border)")
                  }
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={17} /> Send Message
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    background:
                      submitStatus.type === "success"
                        ? "rgba(34,197,94,0.08)"
                        : "rgba(239,68,68,0.08)",
                    border: `1px solid ${
                      submitStatus.type === "success"
                        ? "rgba(34,197,94,0.25)"
                        : "rgba(239,68,68,0.25)"
                    }`,
                  }}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle size={18} color="#22c55e" />
                  ) : (
                    <AlertCircle size={18} color="#ef4444" />
                  )}
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      color:
                        submitStatus.type === "success" ? "#22c55e" : "#ef4444",
                    }}
                  >
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Right info */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Contact info card */}
            <div
              style={{
                padding: "28px",
                borderRadius: "20px",
                background: "var(--color-card, #141a1f)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--color-foreground)",
                  marginBottom: "20px",
                }}
              >
                Contact Information
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(32,178,166,0.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "11px",
                        background: "rgba(32,178,166,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <item.icon size={18} color="var(--color-primary)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "11px",
                          color: "var(--color-muted-foreground)",
                          marginBottom: "2px",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--color-foreground)",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div
              style={{
                padding: "28px",
                borderRadius: "20px",
                background: "rgba(32,178,166,0.06)",
                border: "1px solid rgba(32,178,166,0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#22c55e",
                    display: "inline-block",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-foreground)",
                  }}
                >
                  Currently Available
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "var(--color-muted-foreground)",
                }}
              >
                Open to Data Science & ML Engineer roles, internships, and
                freelance data projects. Let's connect and explore how I can
                contribute to your team.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
