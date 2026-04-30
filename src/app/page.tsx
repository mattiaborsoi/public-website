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
            Software engineer. Building tools for transparency and open data.
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

        {/* ── Projects ────────────────────────────────────── */}
        <section className="space-y-5">
          <div className="label">Projects</div>

          {/* companieshouse.watch */}
          <a
            href="https://ch.borsoi.co.uk"
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
                    live
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--dim)" }}>
                  Real-time tracker for the UK Companies House register. Every filing,
                  officer appointment, and ownership change as it streams — with automated
                  anomaly detection and AI-powered pattern analysis. Free, open-source.
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
            I build software focused on data transparency, open infrastructure, and
            tools that make public information accessible. My work spans full-stack
            web development, data pipelines, and applied AI.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>
            More detail on{" "}
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
