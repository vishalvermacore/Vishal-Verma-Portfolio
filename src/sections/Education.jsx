const educations = [
  {
    period: "March 2021- June 2025",
    degree: "Bachelor of Technology in Computer Science",
    institution: "SDCET, Muzaffarnagar (AKTU)",
    logo: "/educations/sdcet-logo.jpg",
    description: [
      "Completed a Bachelor’s degree in Computer Science and Engineering with a solid foundation in computer science fundamentals, programming, and engineering principles. Gained hands-on experience through academic projects and practical coursework.",
    ],
    current: true,
  },
  {
    period: "April 2020- March 2021",
    degree: "CBSE(XII) - PCM with Computer Science",
    institution: "D.S. Public School, Muzaffarnagar",
    logo: "/educations/school-logo.png",
    description: [
      "I Completed my class 12 education from D.S. Public School, Muzaffarnagar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    ],
    current: false,
  },
  {
    period: "April 2018- March 2019",
    degree: "CBSE(X)",
    institution: "D.S. Public School, Muzaffarnagar",
    logo: "/educations/school-logo.png",
    description: [
      "I Completed my class 10 education from D.S. Public School, Muzaffarnagar, under the CBSE board, where I studied English, Hindi, Mathematics, Science, Social Science",
    ],
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="educations" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Learning that{" "}
            <span className="font-serif italic font-normal text-white">
              builds foundations.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my academic growth, focusing on strong fundamentals
            and practical software development skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    {/* Header */}
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        idx % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} Logo`}
                        className="w-14 h-14 rounded-md object-contain"
                      />

                      <div>
                        <h3 className="text-xl font-semibold text-white mt-1">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {edu.institution}
                        </p>
                        <span className="text-sm text-primary font-medium">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    {edu.description.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm text-muted-foreground leading-relaxed mt-2"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
