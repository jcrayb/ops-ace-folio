import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const highlights = [
  { k: "PhD", v: "Operations Research", sub: "Virginia Tech, Aug 2025 – 2030" },
  { k: "3.90", v: "Graduate GPA", sub: "Advised by Dr. Rohit Kannan" },
  { k: "Summa", v: "Cum Laude — UIUC", sub: "BS Industrial Engineering, 3.95" },
  { k: "4+", v: "Working papers", sub: "Stochastic & integer programming" },
];

const focus = [
  {
    title: "Stochastic Optimization",
    body: "Multi-stage stochastic programming with side information; Empirical Residual SAA extensions; SDDIP for grid-resilience dispatch under hurricane forecast uncertainty.",
  },
  {
    title: "Integer & Convex Programming",
    body: "MILP formulations in Julia/JuMP and Python/GurobiPy. Runtime engineering: 700× speedup on a fairness model for Chicago automated traffic enforcement.",
  },
  {
    title: "Applied Statistics & Data",
    body: "Network analysis with OSMNX/NetworkX, demographic modeling across 800+ Census Tracts, and LLM-assisted literature review at scale.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/70 to-navy-deep/90" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <p className="small-caps mb-4 text-xs font-medium text-paper/80">
            PhD Candidate · Operations Research · Virginia Tech
          </p>
          <h1 className="font-serif text-4xl font-bold leading-[1.05] text-paper sm:text-6xl">
            Jean-Christophe<br />Raymond-Bertrand
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85">
            I build mathematical models for decisions under uncertainty —
            stochastic optimization, integer programming, and data-driven
            methods applied to energy systems, transportation, and public policy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/research"
              className="rounded-md bg-paper px-5 py-2.5 text-sm font-medium text-navy-deep transition hover:bg-paper/90"
            >
              View research
            </Link>
            <Link
              to="/cv"
              className="rounded-md border border-paper/40 px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-paper/10"
            >
              Full CV
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x">
          {highlights.map((h) => (
            <div key={h.v} className="px-6 py-8">
              <p className="font-serif text-3xl font-bold text-foreground">{h.k}</p>
              <p className="mt-1 text-sm font-medium text-foreground">{h.v}</p>
              <p className="mt-1 text-xs text-muted-foreground">{h.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="small-caps text-xs font-medium text-accent">About</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground">
              Decisions under uncertainty.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/90">
            <p>
              I am a first-year PhD student in the Grado Department of
              Industrial &amp; Systems Engineering at Virginia Tech, working
              with <span className="font-medium">Dr. Rohit Kannan</span> on
              data-driven stochastic optimization.
            </p>
            <p>
              My current work develops multi-stage stochastic programs that
              integrate contextual side information — extending Empirical
              Residual Sample Average Approximation — and SDDIP/MILP
              formulations for dispatching mobile power sources under
              hurricane forecast uncertainty, in collaboration with Los Alamos
              National Laboratory.
            </p>
            <p>
              Before Virginia Tech, I graduated{" "}
              <span className="italic">summa cum laude</span> from the
              University of Illinois Urbana-Champaign in Industrial
              Engineering, with research on fairness in automated traffic
              enforcement and a 2023 INFORMS Case Competition finalist
              project.
            </p>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="small-caps mb-3 text-xs font-medium text-accent">Research focus</p>
          <h2 className="mb-12 max-w-2xl font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Where mathematics meets operational decisions.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {focus.map((f, i) => (
              <article key={f.title} className="border-t-2 border-navy-deep pt-6">
                <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
                <h3 className="mt-2 font-serif text-xl font-bold text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-lg border border-border bg-card p-10 sm:p-14">
          <div className="grid items-center gap-6 md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Open to research collaborations &amp; OR internships.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Interested in stochastic optimization, MILP applications, or
                operations research at the intersection of energy and policy?
                Let's talk.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <a
                href="mailto:jcrb@vt.edu"
                className="rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground transition hover:bg-navy"
              >
                jcrb@vt.edu
              </a>
              <a
                href="https://www.linkedin.com/in/jcrayb"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground md:text-right"
              >
                linkedin.com/in/jcrayb →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
