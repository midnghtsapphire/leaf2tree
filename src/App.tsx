import './App.css'

type Stat = {
  value: string
  label: string
}

type Pillar = {
  title: string
  description: string
}

type Stage = {
  step: string
  title: string
  detail: string
}

type Offer = {
  name: string
  fit: string
  deliverables: string[]
}

type ProtocolRule = {
  title: string
  description: string
}

const stats: Stat[] = [
  { value: '72h', label: 'to turn scattered inputs into a launch brief' },
  { value: '1', label: 'focused message system across site, pitch, and CTA' },
  { value: '4', label: 'S2M stages from idea intake to release readiness' },
]

const pillars: Pillar[] = [
  {
    title: 'Position the idea',
    description:
      'Translate brain-dump notes, half-built offers, and rough product direction into a clear promise buyers can understand fast.',
  },
  {
    title: 'Ship the surface area',
    description:
      'Launch the page, proof, and conversion path people actually see first instead of waiting on a full-scale brand overhaul.',
  },
  {
    title: 'Keep momentum after launch',
    description:
      'Package the launch assets, playbook, and next-step priorities so the product can keep moving after version one is live.',
  },
]

const stages: Stage[] = [
  {
    step: '01',
    title: 'Leaf capture',
    detail:
      'Collect raw founder context, audience notes, offer fragments, and the signals that explain why the project matters now.',
  },
  {
    step: '02',
    title: 'Trunk alignment',
    detail:
      'Distill the strongest angle into a simple narrative, key audience, and conversion goal that can anchor every page.',
  },
  {
    step: '03',
    title: 'Canopy build',
    detail:
      'Ship a polished web experience with proof, package framing, and clear calls to action instead of another placeholder draft.',
  },
  {
    step: '04',
    title: 'Market release',
    detail:
      'Hand off launch assets, deployment steps, and GTM guidance so the work moves from concept into market with less friction.',
  },
]

const offers: Offer[] = [
  {
    name: 'Signal Sprint',
    fit: 'For founders who need a sharp homepage and message stack fast.',
    deliverables: ['Hero and value proposition rewrite', 'Conversion-led landing page', 'Launch checklist + deployment notes'],
  },
  {
    name: 'Offer Reset',
    fit: 'For teams with a product but no cohesive story or package framing.',
    deliverables: ['Offer naming and hierarchy', 'Proof + FAQ content', 'Audience and CTA refinement'],
  },
  {
    name: 'Ship to Market',
    fit: 'For zero-to-one launches that need website, docs, and go-to-market materials together.',
    deliverables: ['Launch-ready site', 'Brand + security + deployment docs', 'Market research and rollout guidance'],
  },
]

const protocolRules: ProtocolRule[] = [
  {
    title: 'Title-led trigger',
    description:
      'If the title says S2M, Leaf2Tree treats that as enough signal to run the full ship-to-market motion for the target repository.',
  },
  {
    title: 'Deep research included',
    description:
      'Every S2M run should capture market signals, project value, launch channels, and success criteria instead of stopping at surface copy.',
  },
  {
    title: 'One iteration',
    description:
      'The expected delivery is the canonical front-to-back website and ship docs in one pass, not a chain of placeholder follow-ups.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark" aria-hidden="true">
            L2T
          </span>
          <span>
            <strong>Leaf2Tree</strong>
            <small>S2M studio</small>
          </span>
        </a>
        <nav aria-label="Primary">
          <a href="#system">System</a>
          <a href="#offers">Offers</a>
          <a href="#playbook">Playbook</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">S2M = ship to market</p>
            <h1>Turn a rough idea into a launch-ready growth asset.</h1>
            <p className="lede">
              Leaf2Tree builds the message, page, and shipping docs that help early projects move from scattered input to a clean market-facing release.
            </p>
            <div className="cta-row">
              <a className="button primary" href="#offers">
                View launch offers
              </a>
              <a className="button secondary" href="#playbook">
                Read the S2M playbook
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Launch outcomes">
            <p className="card-label">Why Leaf2Tree exists</p>
            <ul>
              <li>Too many promising projects stall at placeholder copy.</li>
              <li>Automation cannot ship what does not exist yet.</li>
              <li>Clear positioning turns progress into something marketable.</li>
            </ul>
          </aside>
        </section>

        <section className="stats section" aria-label="Key stats">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="section" id="playbook">
          <div className="section-heading">
            <p className="eyebrow">What gets shipped</p>
            <h2>Launch surfaces that make the first impression count.</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="content-card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">S2M default behavior</p>
            <h2>Putting S2M in the title should already imply the whole shebang.</h2>
          </div>
          <div className="protocol-grid">
            {protocolRules.map((rule) => (
              <article className="content-card" key={rule.title}>
                <h3>{rule.title}</h3>
                <p>{rule.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section system-section" id="system">
          <div className="section-heading">
            <p className="eyebrow">The four Leaf2Tree stages</p>
            <h2>The number two is the move from raw signal into a real structure.</h2>
          </div>
          <div className="stage-grid">
            {stages.map((stage) => (
              <article className="stage-card" key={stage.step}>
                <p className="stage-step">{stage.step}</p>
                <h3>{stage.title}</h3>
                <p>{stage.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="offers">
          <div className="section-heading">
            <p className="eyebrow">Offers</p>
            <h2>Choose the level of support that gets you unstuck fastest.</h2>
          </div>
          <div className="offer-grid">
            {offers.map((offer) => (
              <article className="offer-card" key={offer.name}>
                <h3>{offer.name}</h3>
                <p className="offer-fit">{offer.fit}</p>
                <ul>
                  {offer.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section closing-banner" aria-labelledby="closing-title">
          <div>
            <p className="eyebrow">Built for motion</p>
            <h2 id="closing-title">This repository now ships with a working website, docs, and deploy path.</h2>
          </div>
          <a className="button primary" href="https://github.com/midnghtsapphire/leaf2tree">
            Open repository
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
