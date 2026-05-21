import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Jean-Christophe Raymond-Bertrand" },
      { name: "description", content: "Research, teaching, and professional experience in operations research, optimization modeling, and engineering." },
      { property: "og:title", content: "Experience — J.-C. Raymond-Bertrand" },
      { property: "og:description", content: "Graduate research, OR projects, teaching, and industry experience." },
    ],
  }),
  component: ExperiencePage,
});

type Item = {
  role: string;
  org: string;
  where: string;
  when: string;
  bullets: string[];
};

const research: Item[] = [
  {
    role: "Graduate Research Assistant",
    org: "Virginia Tech — Grado Dept. of Industrial & Systems Engineering",
    where: "Blacksburg, VA",
    when: "Aug 2025 – Present",
    bullets: [
      "Developing stochastic optimization models (SDDIP, MILP, Julia/JuMP/SDDP.jl) for dispatching mobile power sources under hurricane forecast uncertainty — informing grid-resilience decisions for utility operators.",
      "Extending Empirical Residual Sample Average Approximation to the multi-stage setting for Contextual Stochastic Optimization.",
      "Built a literature-review pipeline that scrapes Google Scholar and uses a local LLM to rate relevance; performed a large-scale review of the contextual stochastic optimization field.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    org: "University of Illinois — Industrial & Systems Engineering",
    where: "Urbana, IL",
    when: "Feb 2024 – May 2025",
    bullets: [
      "Worked with Profs. Chrysafis Vogiatzis and Eleftheria Kontou on fairness of automated traffic enforcement in Chicago.",
      "Formulated and implemented optimization models in Python / GurobiPy; achieved a 700× runtime improvement over the initial solver pipeline.",
      "Modeled Chicago's street network with OSMNX / NetworkX and computed demographics across 800+ Census Tracts with GeoPandas.",
    ],
  },
  {
    role: "Undergraduate Researcher & Lead Developer",
    org: "University of Illinois — Mechanical Science & Engineering",
    where: "Urbana, IL",
    when: "Jul 2024 – May 2025",
    bullets: [
      "Led software development on a SIIP-funded initiative producing open educational resources for Introductory Mechanics.",
      "Analyzed Google Analytics and survey data to quantify learning impact; results published in ASEE conference proceedings.",
    ],
  },
];

const professional: Item[] = [
  {
    role: "Fire Safety Engineering Intern",
    org: "Ingérop",
    where: "Paris, France",
    when: "May 2023 – Jul 2023",
    bullets: [
      "Conducted CFD fire-safety simulations (PyroSim / FDS) on multiple subway stations for the €40B Grand Paris project — including La Défense and Nanterre La-Boule, among the largest in the program.",
      "Built the UI and API for an internal pressure-wave modeling tool with Flask, JS, HTML & CSS.",
    ],
  },
  {
    role: "Course Assistant & PrairieLearn Developer",
    org: "University of Illinois — Mechanical Science & Engineering",
    where: "Urbana, IL",
    when: "Jan 2023 – May 2025",
    bullets: [
      "Led weekly discussion sections and office hours for introductory mechanics.",
      "Authored 25 new PrairieLearn homework/exam questions and built tooling enabling faster question development with unlimited variations.",
    ],
  },
];

function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-8">
      {items.map((it, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[35px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-background" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-serif text-xl font-bold text-foreground">{it.role}</h3>
            <p className="font-mono text-xs text-muted-foreground">{it.when}</p>
          </div>
          <p className="mt-1 text-sm font-medium text-accent">{it.org}</p>
          <p className="text-xs text-muted-foreground">{it.where}</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/90">
            {it.bullets.map((b, j) => (
              <li key={j} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Research, teaching & practice."
        lead="A timeline of where I have applied optimization, statistics, and software to real operational problems."
      />

      <h3 className="mt-8 mb-6 font-serif text-2xl font-bold text-foreground">Research</h3>
      <Timeline items={research} />

      <h3 className="mt-16 mb-6 font-serif text-2xl font-bold text-foreground">Professional & Teaching</h3>
      <Timeline items={professional} />
    </div>
  );
}
