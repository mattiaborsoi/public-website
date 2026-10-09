export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-2xl px-6 py-20 space-y-20">

        {/* ── Header ──────────────────────────────────────── */}
        <section className="space-y-4">
          <div className="label">borsoi.co.uk</div>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-none"
            style={{ color: "var(--text)" }}
          >
            Mattia Borsoi
          </h1>
          <p className="text-sm" style={{ color: "var(--dim)" }}>
            Associate Director, Global Cybersecurity Compliance · Grant Thornton International
          </p>
          <div className="flex items-center gap-5 pt-1">
            <a
              href="https://www.linkedin.com/in/mborsoi/"
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/mattiaborsoi"
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-[var(--accent)] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="mailto:mattia@borsoi.co.uk"
              className="label hover:text-[var(--accent)] transition-colors"
            >
              mattia@borsoi.co.uk
            </a>
          </div>
        </section>

        {/* ── Expertise ───────────────────────────────────── */}
        <section className="space-y-5">
          <div className="label">Expertise</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Global Cybersecurity Programme Development",
              "Network-wide Compliance Audits",
              "Cybersecurity Framework Implementation",
              "Risk Assessment & Remediation Planning",
              "Stakeholder & Leadership Advisory",
              "Regulatory & Standards Alignment",
            ].map((item) => (
              <div
                key={item}
                className="card px-4 py-3 text-xs leading-snug"
                style={{ color: "var(--dim)" }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ────────────────────────────────────── */}
        <section className="space-y-5">
          <div className="label">Side projects</div>

          {/* Settl */}
          <a
            href="https://github.com/mattiaborsoi/Personal-Finance"
            target="_blank"
            rel="noopener noreferrer"
            className="card block p-6 group transition-colors hover:border-[var(--accent)]"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 min-w-0">
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    Settl
                  </span>
                  <span
                    className="label px-1.5 py-0.5 rounded"
                    style={{ background: "var(--border)", color: "var(--accent)" }}
                  >
                    source
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--dim)" }}>
                  Self-hosted personal finance for couples. Drop in your bank statements
                  and it sorts every line, learns your merchants, and keeps a running
                  balance of who owes whom — on your own machine, with no bank logins,
                  no cloud, and AI optional. Open-source.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  {["React", "FastAPI", "PostgreSQL", "Docker"].map((tag) => (
                    <span key={tag} className="label">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="label shrink-0 group-hover:text-[var(--accent)] transition-colors"
              >
                ↗
              </span>
            </div>
          </a>

          {/* companieshouse.watch */}
          <a
            href="https://github.com/mattiaborsoi/companieshouse.watch"
            target="_blank"
            rel="noopener noreferrer"
            className="card block p-6 group transition-colors hover:border-[var(--accent)]"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 min-w-0">
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    companieshouse.watch
                  </span>
                  <span
                    className="label px-1.5 py-0.5 rounded"
                    style={{ background: "var(--border)", color: "var(--accent)" }}
                  >
                    source
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--dim)" }}>
                  Real-time tracker for the UK Companies House register. Every filing,
                  officer appointment, and ownership change as it streams — with automated
                  anomaly detection and AI-powered pattern analysis. Open-source.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  {["Next.js", "Python", "PostgreSQL", "Anthropic"].map((tag) => (
                    <span key={tag} className="label">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="label shrink-0 group-hover:text-[var(--accent)] transition-colors"
              >
                ↗
              </span>
            </div>
          </a>

          {/* flightframe */}
          <a
            href="https://github.com/mattiaborsoi/flightframe"
            target="_blank"
            rel="noopener noreferrer"
            className="card block p-6 group transition-colors hover:border-[var(--accent)]"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 min-w-0">
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    flightframe
                  </span>
                  <span
                    className="label px-1.5 py-0.5 rounded"
                    style={{ background: "var(--border)", color: "var(--accent)" }}
                  >
                    source
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--dim)" }}>
                  A battery-powered six-colour e-ink frame that draws the aircraft
                  passing over your home. Custom ESP32 firmware pulls rendered posters
                  from a multi-tenant cloud backend — live flight tracking, a travel
                  countdown, and per-household isolation — over its own device protocol.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  {["ESP32", "Python", "SQLite", "Docker", "e-ink"].map((tag) => (
                    <span key={tag} className="label">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="label shrink-0 group-hover:text-[var(--accent)] transition-colors"
              >
                ↗
              </span>
            </div>
          </a>

          {/* Placeholder for future projects */}
          <div
            className="card p-6 border-dashed"
            style={{ borderColor: "var(--muted)", opacity: 0.4 }}
          >
            <div className="label">More coming soon</div>
          </div>
        </section>

        {/* ── About ───────────────────────────────────────── */}
        <section className="space-y-4">
          <div className="label">About</div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>
            I lead global cybersecurity and compliance programmes at Grant Thornton
            International, working with leadership teams across the network to build,
            audit, and mature their security posture. Based in London.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>
            Outside of work I write software — mostly tools around open data and
            public infrastructure. Full professional background on{" "}
            <a
              href="https://www.linkedin.com/in/mborsoi/"
              target="_blank"
              rel="noopener noreferrer"
              className="accent hover:underline underline-offset-2"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer
          className="pt-8 border-t text-xs"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          <div className="flex items-center justify-between">
            <span className="label">borsoi.co.uk</span>
            <a
              href="https://github.com/mattiaborsoi"
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-[var(--accent)] transition-colors"
            >
              Open source ↗
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}
