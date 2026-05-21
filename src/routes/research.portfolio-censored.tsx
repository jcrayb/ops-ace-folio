import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/research/portfolio-censored")({
  head: () => ({
    meta: [
      { title: "Portfolio Optimization with Censored Return Distributions — J.-C. Raymond-Bertrand" },
      {
        name: "description",
        content:
          "A plain-language summary of joint portfolio + put-option optimization using censored return distributions, solved as a tractable nonlinear program in Gurobi.",
      },
      { property: "og:title", content: "Portfolio Optimization with Censored Return Distributions" },
      {
        property: "og:description",
        content: "Joint optimization of portfolio weights and protective put options to reduce downside risk.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link to="/research" className="small-caps text-xs font-medium text-accent hover:underline">
        ← Back to research
      </Link>

      <div className="mt-6">
        <SectionHeading
          eyebrow="Working paper · 2026"
          title="Portfolio Optimization with Censored Return Distributions"
          lead="J.-C. Raymond-Bertrand & C. Ari — extending the classical Markowitz model with protective put options, jointly optimizing how much to invest in each stock and how much downside insurance to buy."
        />
      </div>

      <article className="prose-academic mt-10 space-y-10 text-base leading-relaxed text-foreground">
        <section>
          <h2 className="font-serif text-2xl font-bold">The problem in one paragraph</h2>
          <p className="mt-3 text-muted-foreground">
            Investors want the highest possible return for the lowest possible risk. The classical
            Markowitz model (1952) answers this by choosing portfolio weights that minimize variance
            for a target expected return. But it offers no way to <em>cap</em> losses on a bad day —
            something insurance-like instruments called <strong>put options</strong> can do. We ask:
            if an investor is allowed to buy protective puts on each stock, how much should they
            buy, and how should that change the portfolio mix?
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">The main idea</h2>
          <p className="mt-3 text-muted-foreground">
            A protective put truncates a stock's return distribution: any loss worse than a chosen
            floor is paid back by the option. Mathematically, the stock's returns are no longer
            normally distributed — they become a <strong>censored normal distribution</strong>
            (also called a Tobit distribution), with the left tail collapsed onto a single point.
            We derive closed-form expressions for the mean, variance, and covariance of this
            censored distribution, then plug them into a Markowitz-style optimization where the
            <em> floor level itself</em> is a decision variable.
          </p>
          <p className="mt-3 text-muted-foreground">
            We re-parameterize the floor as <strong>Δᵢ</strong>, the probability that the insurance
            actually pays out. Δ is bounded between 0 and 1, which makes the model numerically
            well-behaved. The cost of each put is priced automatically using the Black–Scholes
            formula.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Methods</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <strong>Censored-moment derivations.</strong> Closed-form first and second moments
              for each protected asset, plus a covariance approximation that preserves positive
              definiteness of the portfolio covariance matrix.
            </li>
            <li>
              <strong>Polynomial approximations.</strong> The normal CDF, PDF, and inverse CDF
              (probit) have no closed form, so we replace them with low-order Taylor / linear
              approximations to keep the model tractable.
            </li>
            <li>
              <strong>Covariate conditioning.</strong> Stock means and variances are conditioned on
              macro covariates (core PCE inflation, the Effective Fed Funds rate) — the same inputs
              analysts use in discounted-cash-flow valuation.
            </li>
            <li>
              <strong>Solver.</strong> The resulting nonconvex nonlinear program is solved in
              <span className="font-mono"> Gurobi</span> on a 10-stock universe spanning tech,
              communications, and consumer sectors.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Takeaways</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              Adding protective puts <strong>reduces portfolio variance with only minimal loss
              of expected return</strong> in typical market regimes.
            </li>
            <li>
              The optimal amount of insurance depends strongly on the macro environment. In
              high-return regimes (e.g. 2023-style high inflation / high rates), buying puts can
              actually <em>hurt</em> the Sharpe ratio — downside protection is not always worth its
              cost.
            </li>
            <li>
              Jointly optimizing portfolio weights <em>and</em> option levels is, to our knowledge,
              new to the literature; previous work treated option choices as exogenous.
            </li>
            <li>
              The methodology generalizes: any decision problem where outcomes can be truncated by
              a contract (insurance, hedges, service-level guarantees) fits the same template.
            </li>
          </ul>
        </section>

        <section className="rounded-md border border-border bg-secondary/40 p-6">
          <p className="small-caps text-xs font-medium text-accent">Why a recruiter should care</p>
          <p className="mt-2 text-sm text-muted-foreground">
            This project combines probability theory (censored distributions), convex/nonconvex
            optimization, financial modeling (Black–Scholes), and large-scale solver work
            (Gurobi) — the same toolkit used across quantitative finance, energy markets, supply
            chain, and revenue management.
          </p>
        </section>
      </article>
    </div>
  );
}
