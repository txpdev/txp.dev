import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="desktop-shell">
      <header className="system-bar">
        <Link to="/" className="wordmark" aria-label="TXP.DEV, back home">
          <span className="wordmark__mark" aria-hidden="true">
            TXP
          </span>
          <span>.DEV</span>
        </Link>
      </header>

      <div className="desktop">
        <section className="workbench login-window" aria-labelledby="login-title">
          <div className="window-bar">
            <div className="window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="window-title">{String.raw`C:\TXP\SIGNIN>`}</span>
            <span className="window-controls" aria-hidden="true">
              −&nbsp;&nbsp;□
            </span>
          </div>

          <div className="login-body">
            <div className="identity">
              <strong>TXP</strong>
              <span>Sign in</span>
            </div>
            <h1 id="login-title">Continue to the workbench.</h1>
            <p className="intro">
              Use a connected account. The public site stays open either way.
            </p>

            {authEnabled ? (
              <div className="login-actions">
                {GROK_PROVIDERS.map((provider) => (
                  <button
                    key={provider.providerId}
                    type="button"
                    onClick={() =>
                      signIn(provider.providerId, { callbackURL: "/" })
                    }
                  >
                    Continue with {provider.label}
                  </button>
                ))}
              </div>
            ) : (
              <p className="intro">Sign-in is disabled.</p>
            )}

            <Link to="/" className="login-back">
              ← Back to TXP.DEV
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
