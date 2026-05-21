import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Jean-Christophe Raymond-Bertrand" },
      { name: "description", content: "Education, skills, awards, and service. PhD student in Operations Research at Virginia Tech." },
      { property: "og:title", content: "CV — J.-C. Raymond-Bertrand" },
      { property: "og:description", content: "Operations Research PhD — education, skills, awards." },
    ],
  }),
  component: CVPage,
});

const education = [
  {
    school: "Virginia Tech",
    degree: "PhD in Industrial Engineering — Operations Research",
    when: "Aug 2025 – May 2030 (expected)",
    gpa: "3.90 / 4.0 · Advised by Dr. Rohit Kannan",
    courses: ["Integer Programming", "Non-linear Optimization", "Convex Optimization", "Dynamic Programming", "Simulation"],
  },
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "BS in Industrial Engineering — Operations Research",
    when: "Aug 2021 – May 2025",
    gpa: "3.95 / 4.0 · Summa Cum Laude",
    courses: ["Linear & Non-linear Optimization", "Stochastic Processes", "Applied Statistics", "Data Analysis"],
  },
];

const skillGroups = [
  {
    title: "Optimization & Modeling",
    items: ["Stochastic Programming (SDDIP, SAA)", "Integer Programming (MILP)", "Convex & Non-linear Optimization", "Dynamic Programming", "Gurobi · JuMP · SDDP.jl · PowerModels.jl"],
  },
  {
    title: "Mathematics & Statistics",
    items: ["Probability & Stochastic Processes", "Applied Statistics", "Simulation", "Network analysis (NetworkX, OSMNX)", "Empirical Residual SAA"],
  },
  {
    title: "Programming",
    items: ["Python (NumPy, Pandas, GurobiPy, NetworkX, Flask)", "Julia (JuMP, SDDP.jl, PowerModels)", "SQL · C++ · Bash", "JavaScript · HTML · CSS · Astro"],
  },
  {
    title: "Systems & Tooling",
    items: ["Linux (RHEL, Debian) · Slurm", "Git · Docker · Docker Compose", "Google Cloud (App Engine, Cloud Run, Storage, Build)", "Firebase"],
  },
];

const awards = [
  { name: "Rehmert-Nachlas Graduate Fellowship", by: "Virginia Tech Grado Dept. of Industrial Engineering" },
  { name: "John F. Sweers Graduate Fellowship", by: "Virginia Tech Grado Dept. of Industrial Engineering" },
  { name: "Operations Research Undergraduate Student Research Dissemination Award", by: "IISE — 2025" },
  { name: "INFORMS Case Competition Finalist", by: "2023" },
  { name: "Dean's List — College of Engineering (7× recipient)", by: "University of Illinois Grainger College of Engineering" },
  { name: "Outstanding Student Contributor to Engineering Education Efforts", by: "AE3, University of Illinois Grainger College of Engineering" },
];

const service = [
  { role: "Reviewer", venue: "INFORMS Optimization Society Conference, 2026" },
  { role: "Reviewer", venue: "American Society for Engineering Education Conference, 2026" },
];

const teaching = [
  {
    role: "Course Assistant & PrairieLearn Developer",
    where: "University of Illinois — Mechanical Science & Engineering",
    when: "Jan 2023 – May 2025",
    detail: "Weekly discussion sections and office hours; authored 25 PrairieLearn questions and built tooling for question development.",
  },
];

const languages = [
  { name: "French", level: "Native" },
  { name: "Czech", level: "Native" },
  { name: "English", level: "Fluent" },
];

function CVPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="Curriculum Vitae" title="Education, skills & honors." />

      {/* Education */}
      <section className="mb-16">
        <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">Education</h3>
        <div className="space-y-8">
          {education.map((e) => (
            <article key={e.school} className="border-l-2 border-accent pl-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-serif text-xl font-bold text-foreground">{e.school}</h4>
                <p className="font-mono text-xs text-muted-foreground">{e.when}</p>
              </div>
              <p className="mt-1 italic text-foreground/90">{e.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.gpa}</p>
              <p className="mt-3 text-sm">
                <span className="small-caps text-xs text-accent">Coursework · </span>
                <span className="text-foreground/80">{e.courses.join(" · ")}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">Skills</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-md border border-border bg-card p-6">
              <p className="small-caps mb-3 text-xs font-medium text-accent">{g.title}</p>
              <ul className="space-y-1.5 text-sm text-foreground/90">
                {g.items.map((it) => (
                  <li key={it} className="font-mono text-[0.85rem] leading-relaxed">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="mb-16">
        <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">Awards & Fellowships</h3>
        <ul className="divide-y divide-border border-y border-border">
          {awards.map((a) => (
            <li key={a.name} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
              <span className="font-serif text-base font-bold text-foreground">★ {a.name}</span>
              <span className="text-sm text-muted-foreground">{a.by}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Teaching */}
      <section className="mb-16">
        <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">Teaching</h3>
        {teaching.map((t) => (
          <div key={t.role} className="rounded-md border border-border bg-card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="font-serif text-lg font-bold text-foreground">{t.role}</h4>
              <p className="font-mono text-xs text-muted-foreground">{t.when}</p>
            </div>
            <p className="mt-1 text-sm text-accent">{t.where}</p>
            <p className="mt-2 text-sm text-foreground/85">{t.detail}</p>
          </div>
        ))}
      </section>

      {/* Service + Languages */}
      <section className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Service</h3>
          <ul className="space-y-3 text-sm">
            {service.map((s, i) => (
              <li key={i}>
                <span className="font-medium text-foreground">{s.role}</span>
                <span className="text-muted-foreground"> · {s.venue}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Languages</h3>
          <ul className="space-y-3 text-sm">
            {languages.map((l) => (
              <li key={l.name} className="flex justify-between border-b border-border pb-2">
                <span className="font-medium text-foreground">{l.name}</span>
                <span className="text-muted-foreground">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
