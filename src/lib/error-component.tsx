import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="desktop-shell">
      <header className="system-bar">
        <a className="wordmark" href="/" aria-label="TXP.DEV, back home">
          <span className="wordmark__mark" aria-hidden="true">
            TXP
          </span>
          <span>.DEV</span>
        </a>
      </header>
      <div className="desktop">
        <section className="workbench login-window">
          <div className="window-bar">
            <div className="window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="window-title">{String.raw`C:\TXP\ERROR>`}</span>
            <span className="window-controls" aria-hidden="true">
              −&nbsp;&nbsp;□
            </span>
          </div>
          <div className="login-body">
            <div className="identity">
              <strong>Halt</strong>
              <span>Something went wrong</span>
            </div>
            <h1>The workbench hit a snag.</h1>
            <p className="intro">
              {error.message ||
                "An unexpected error occurred. Try reloading the page."}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
