import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Jean-Christophe Raymond-Bertrand" },
      { name: "description", content: "Working papers, peer-reviewed publications, and conference talks in stochastic optimization and operations research." },
      { property: "og:title", content: "Research — J.-C. Raymond-Bertrand" },
      { property: "og:description", content: "Stochastic programming, MILP, and OR publications." },
    ],
  }),
  component: ResearchPage,
});

const working: Array<{
  title: string;
  authors: string;
  status: string;
  award?: string;
  href?: string;
}> = [
  {
    title: "Portfolio Optimization with Censored Return Distributions",
    authors: "J.-C. Raymond-Bertrand, C. Ari",
    status: "Working paper · 2026",
    href: "/research/portfolio-censored",
  },
  {
    title: "Data-Driven Multi-Stage Stochastic Programming with Side Information",
    authors: "J.-C. Raymond-Bertrand, N. Ho-Nguyen, R. Kannan, J. Luedtke",
    status: "In progress",
  },
  {
    title: "Dispatch of Mobile Power Sources for Enhanced Grid Resilience using Ensemble Hurricane Forecasts",
    authors: "M. Goutham, J.-C. Raymond-Bertrand, D. Deka, H. Nagarajan, R. Bent, R. Kannan",
    status: "In progress",
  },
  {
    title: "Investigating Unintended Consequences of Automated Traffic Law-Enforcement in Commuting",
    authors: "J.-C. Raymond-Bertrand, E. Kontou, C. Vogiatzis",
    status: "In progress",
    award: "2023 INFORMS Case Competition Finalist",
  },
];

const peer = [
  {
    title: "TL;DR Students don't read textbooks: Designing online reference pages to enhance student learning",
    authors: "J.-C. Raymond-Bertrand et al.",
    venue: "ASEE Annual Conference & Exposition Proceedings",
    year: "2025",
  },
  {
    title: "A need for real-world examples integrated into engineering education to encourage student curiosity",
    authors: "M. R. Hoyle, M. D. Opolz, J.-C. Raymond-Bertrand et al.",
    venue: "ASEE Annual Conference & Exposition Proceedings",
    year: "2025",
  },
  {
    title: "Fun Friday: Assessing the effectiveness of weekly real-world applications in introductory dynamics lectures",
    authors: "T. Golecki, M. R. Hoyle, M. D. Opolz, J.-C. Raymond-Bertrand et al.",
    venue: "ASEE Annual Conference & Exposition Proceedings",
    year: "2025",
  },
  {
    title: "Reflecting on Ten Years of Building a Community of Practice for Teaching Innovation in Fundamental Mechanics Courses",
    authors: "W. Chang, M. R. Hoyle, M. D. Opolz, J.-C. Raymond-Bertrand et al.",
    venue: "ASEE Annual Conference & Exposition Proceedings",
    year: "2025",
  },
];

const talks = [
  {
    title: "Dispatch of Mobile Power Sources for Enhanced Grid Resilience using Ensemble Hurricane Forecasts",
    venue: "Invited talk, INFORMS Optimization Society Conference",
    where: "Atlanta, GA",
    year: "2026",
  },
  {
    title: "Investigating Unintended Consequences of Automated Traffic Law-Enforcement in Commuting",
    venue: "IISE Annual Conference",
    where: "Atlanta, GA",
    year: "2025",
    award: "IISE OR Undergraduate Research Dissemination Award",
  },
  {
    title: "Investigating Unintended Consequences of Automated Traffic Law-Enforcement in Commuting",
    venue: "University of Illinois Undergraduate Research Symposium",
    where: "Urbana, IL",
    year: "2025",
  },
];

function PaperRow({ children }: { children: React.ReactNode }) {
  return <li className="border-t border-border py-6 first:border-t-0">{children}</li>;
}

function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Research"
        title="Publications, working papers & talks."
        lead="Methodological work in stochastic and integer programming, with applications spanning energy resilience, transportation equity, and engineering education."
      />

      <h3 className="mt-12 font-serif text-2xl font-bold text-foreground">Working papers</h3>
      <ul className="mt-4">
        {working.map((p) => (
          <PaperRow key={p.title}>
            {p.href ? (
              <Link
                to={p.href}
                className="font-serif text-lg font-bold leading-snug text-foreground underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
              >
                {p.title}
              </Link>
            ) : (
              <p className="font-serif text-lg font-bold leading-snug text-foreground">{p.title}</p>
            )}
            <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
              <span className="rounded bg-secondary px-2 py-0.5 font-mono text-muted-foreground">{p.status}</span>
              {p.award && <span className="text-accent">★ {p.award}</span>}
            </div>
          </PaperRow>
        ))}
      </ul>

      <h3 className="mt-16 font-serif text-2xl font-bold text-foreground">Peer-reviewed conference publications</h3>
      <ul className="mt-4">
        {peer.map((p) => (
          <PaperRow key={p.title}>
            <p className="font-serif text-lg font-bold leading-snug text-foreground">{p.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
            <p className="mt-1 text-xs italic text-muted-foreground">{p.venue}, {p.year}</p>
          </PaperRow>
        ))}
      </ul>

      <h3 className="mt-16 font-serif text-2xl font-bold text-foreground">Conference presentations</h3>
      <ul className="mt-4">
        {talks.map((t, i) => (
          <PaperRow key={i}>
            <p className="font-serif text-lg font-bold leading-snug text-foreground">{t.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.venue} — {t.where}, {t.year}</p>
            {t.award && <p className="mt-2 text-xs text-accent">★ {t.award}</p>}
          </PaperRow>
        ))}
      </ul>
    </div>
  );
}
