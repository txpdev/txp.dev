const projects = [
  {
    number: "01",
    name: "StormForge",
    category: "AI infrastructure",
    role: "Founding engineer · Chief AI Officer",
    outcome: "Acquired by CloudBolt",
    color: "orange",
    description:
      "Software that continuously rightsizes Kubernetes workloads to reduce cloud costs without sacrificing performance or reliability.",
    href: "https://stormforge.io",
  },
  {
    number: "02",
    name: "OneSuite",
    category: "Enterprise agents",
    role: "Head of Engineering and AI",
    outcome: "Building now",
    color: "blue",
    description:
      "An AI workspace for performance teams that brings projects, agents, live campaign data, and brand briefs together.",
    href: "https://onesuite.performics.com/login",
  },
  {
    number: "03",
    name: "Parfait Health",
    category: "Consumer health",
    role: "Founder · Builder",
    outcome: "Building now",
    color: "green",
    description:
      "A mobile app that turns care conversations into notes, next steps, and shared context.",
    href: "https://parfait-health.dev/",
  },
  {
    number: "04",
    name: "ConvNetQuake",
    category: "Earthquake science",
    role: "Research",
    outcome: "Open source",
    color: "yellow",
    description:
      "An open-source neural network that detects and locates earthquakes from seismic data.",
    href: "https://github.com/txpdev/ConvNetQuake",
  },
] as const;

const profiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thibautperol" },
  { label: "GitHub", href: "https://github.com/txpdev" },
  { label: "X", href: "https://x.com/txpdev" },
] as const;

export default function Home() {
  return (
    <main id="top" className="desktop-shell">
      <header className="system-bar">
        <a className="wordmark" href="#top" aria-label="TXP.DEV, back to top">
          <span className="wordmark__mark" aria-hidden="true">TXP</span>
          <span>.DEV</span>
        </a>

      </header>

      <div className="desktop">
        <section className="workbench" aria-labelledby="hero-title">
          <div className="window-bar">
            <div className="window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="window-title">C:\TXP\WORKBENCH&gt;</span>
            <span className="window-controls" aria-hidden="true">−&nbsp;&nbsp;□</span>
          </div>

          <div className="workbench-grid">
            <div className="story-column">
              <div className="identity">
                <strong>Tibo X Perol</strong>
                <span>Founder · Engineer · Scientist</span>
              </div>

              <h1 id="hero-title">
                I build <span>applied AI</span> products.
              </h1>

              <p id="about" className="intro">
                I taught convnets to detect earthquakes before AI was cool.
                Then spent a decade building AI for Kubernetes at StormForge —
                acquired by CloudBolt in 2025. Now I’m building agentic systems
                for the enterprise at Google.
              </p>

              <div className="story-footer">
                <nav id="connect" className="profile-links" aria-label="Profiles">
                  {profiles.map((profile) => (
                    <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer">
                      {profile.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <section id="work" className="project-window" aria-labelledby="projects-title">
              <div className="project-window__bar">
                <span id="projects-title">Selected work</span>
                <span>01—04</span>
              </div>

              <div className="project-list">
                {projects.map((project) => {
                  const projectContent = (
                    <>
                      <div className="project-topline">
                        <span>{project.number}</span>
                        <span>{project.category}</span>
                      </div>
                      <h2>{project.name}</h2>
                      <div className="project-meta">
                        <span>{project.role}</span>
                      </div>
                      <p>{project.description}</p>
                      <div className="project-card-footer">
                        <span>{project.outcome}</span>
                        <span aria-hidden="true">{project.href ? "Open ↗" : "•••"}</span>
                      </div>
                    </>
                  );

                  return project.href ? (
                    <a
                      className={`project-row project-row--${project.color}`}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      key={project.name}
                      aria-label={`${project.name}, ${project.outcome}`}
                    >
                      {projectContent}
                    </a>
                  ) : (
                    <article className={`project-row project-row--${project.color}`} key={project.name}>
                      {projectContent}
                    </article>
                  );
                })}
              </div>
            </section>
          </div>

        </section>
      </div>
    </main>
  );
}
