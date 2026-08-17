import { createFileRoute } from "@tanstack/react-router";
import { profiles, projects } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main id="top" className="desktop-shell">
      <header className="system-bar">
        <a className="wordmark" href="#top" aria-label="TXP.DEV, back to top">
          <span className="wordmark__mark" aria-hidden="true">
            TXP
          </span>
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
            <span className="window-title">{String.raw`C:\TXP\WORKBENCH>`}</span>
            <span className="window-controls" aria-hidden="true">
              −&nbsp;&nbsp;□
            </span>
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
                I taught convnets to detect earthquakes before AI was cool. Then
                spent a decade building AI for Kubernetes at StormForge —
                acquired by CloudBolt in 2025. Now I’m building agentic systems
                for the enterprise at Google.
              </p>

              <div className="story-footer">
                <nav
                  id="connect"
                  className="profile-links"
                  aria-label="Profiles"
                >
                  {profiles.map((profile) => (
                    <a
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {profile.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <section
              id="work"
              className="project-window"
              aria-labelledby="projects-title"
            >
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
                        <span aria-hidden="true">
                          {project.href ? "Open ↗" : "•••"}
                        </span>
                      </div>
                    </>
                  );

                  return (
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
