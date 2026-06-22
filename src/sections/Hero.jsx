import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Java",
  "JavaScript",
  "C",
  "HTML5",
  "CSS3",
  "React.js",
  "Bootstrap",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "Visual Studio Code",
  "Problem Solving",
  "Communication",
  "Collaboration",
];

// Fixed dot positions — computed once, not on every render
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

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {DOTS.map((dot, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.dur}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Web Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building{" "}
                <span className="text-primary glow-text">full-stack</span> web
                applications with{" "}
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I’m Vishal Verma — a full stack web developer specializing
                in JavaScript. I build responsive, reliable web applications
                using modern technologies like React, Node.js, and MongoDB,
                focusing on clean architecture, performance, and user-centric
                design.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="/resume/VishalVermaResume.pdf"
                download="VishalVermaResume.pdf"
                className="inline-block"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Connect with me:{" "}
              </span>
              {[
                { icon: Github, href: "https://github.com/vishalvermacore" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/vishalvermacore",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Vishal Verma"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">
                    Hands On
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
