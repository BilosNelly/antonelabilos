import { Figure, Link } from './components'
import {
  aboutParagraphs,
  aboutQuote,
  caseStudy,
  certifications,
  experience,
  frontendCaseStudy,
  hackathonItem,
  heroLede,
  heroMeta,
  languages,
  nelcoItem,
  photos,
  profile,
  skillGroups,
  timeline,
} from './content'

export function Home() {
  return (
    <>
      <div className="hero__bg" aria-hidden="true" />
      <img
        className="hero__photo"
        src="/antonela-portrait.jpg"
        alt="Portrait of Antonela"
        ref={(el) => {
          if (el?.complete) el.dataset.ready = 'true'
        }}
        onLoad={(e) => {
          e.currentTarget.dataset.ready = 'true'
        }}
      />
      <div className="hero__content">
        <h1 className="hero__title">
          Anto<span className="hero__title-block">nela</span>
        </h1>
        <p className="hero__lede">{heroLede}</p>
        <p className="hero__meta">
          {heroMeta.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>

      <a
        className="hero__social"
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="Antonela on LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.37-1.848 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </>
  )
}

export function Work() {
  return (
    <div className="page">
      <header className="work__head">
        <div className="work__intro">
          <p className="page__kicker">Work</p>
          <h1 className="page__title">Selected work</h1>
          <p className="page__intro">
            Case studies and projects where user research, product thinking and
            engineering met in the middle.
          </p>
        </div>
        <Figure
          {...photos.working}
          ratio="3 / 2"
          className="work__portrait contain"
        />
      </header>

      <div className="cards">
        <Link to={caseStudy.slug} className="card">
          <p className="card__meta">{caseStudy.org} · User research</p>
          <h2 className="card__title">{caseStudy.title}</h2>
          <p className="card__desc">
            A production revenue tool exposed 15 features. Most partners used
            three. Behavioral data, user feedback and industry research turned
            noise into focus, for more than 11 million partners.
          </p>
          <span className="card__cta">Read the case study →</span>
        </Link>

        <Link to={frontendCaseStudy.slug} className="card">
          <p className="card__meta">{frontendCaseStudy.cardMeta}</p>
          <h2 className="card__title">{frontendCaseStudy.title}</h2>
          <p className="card__desc">{frontendCaseStudy.cardDesc}</p>
          <span className="card__cta">Read the case study →</span>
        </Link>

        <a className="card" href={nelcoItem.href} target="_blank" rel="noreferrer">
          <p className="card__meta">{nelcoItem.meta}</p>
          <h2 className="card__title">{nelcoItem.title}</h2>
          <p className="card__desc">{nelcoItem.desc}</p>
          <span className="card__cta">Visit nelco.ai ↗</span>
        </a>

        <article className="card card--static">
          <p className="card__meta">{hackathonItem.meta}</p>
          <h2 className="card__title">{hackathonItem.title}</h2>
          <p className="card__desc">{hackathonItem.desc}</p>
        </article>
      </div>
    </div>
  )
}

export function CaseStudy({ data }: { data: typeof caseStudy }) {
  return (
    <article className="page">
      <Link to="/work" className="back">
        ← Back to work
      </Link>

      <p className="page__kicker">
        {data.org} · {data.year}
      </p>
      <h1 className="page__title">{data.title}</h1>
      <p className="page__intro">{data.role}</p>

      <ul className="tags">
        {data.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="stats">
        {data.stats.map((stat) => (
          <div className="stat" key={stat.num}>
            <p className="stat__num">{stat.num}</p>
            <p className="stat__label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="prose">
        {data.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  )
}

export function About() {
  return (
    <div className="page">
      <p className="page__kicker">About</p>
      <h1 className="page__title">Hello, I’m Antonela</h1>
      <p className="page__intro">Unofficially, in three words: I eat everything.</p>

      <div className="about__hero">
        <Figure
          {...photos.sushi}
          ratio="4 / 3"
          focus="50% 15%"
          className="about__heroPhoto"
        />
      </div>

      <div className="about__intro">
        <div className="prose">
          {aboutParagraphs.map((para, i) => (
            <div key={i}>
              <p>{para}</p>
              {i === 2 ? (
                <blockquote className="quote">{aboutQuote}</blockquote>
              ) : null}
            </div>
          ))}
        </div>
        <div className="about__photos">
          <Figure {...photos.networking} ratio="4 / 5" className="blob-b" />
        </div>
      </div>

      <h2 className="section__title">The short version</h2>
      <div className="timeline-wrap">
        <Figure
          {...photos.babyCake}
          ratio="4 / 5"
          className="timeline__media"
        />
        <div className="timeline__col">
          <p className="timeline__hint">
            Scroll to explore
            <span className="timeline__hintArrow" aria-hidden="true">→</span>
          </p>
          <ol className="timeline">
            {timeline.map((entry) => (
              <li className="tl__item" key={entry.year + entry.text}>
                <p className="tl__year">{entry.year}</p>
                <p className="tl__text">{entry.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <h2 className="section__title">Experience</h2>
      <div className="xp">
        {experience.map((job) => (
          <article className="xp__job" key={job.company}>
            <div className="xp__head">
              <p className="xp__role">
                {job.role} <span className="xp__co">· {job.company}</span>
              </p>
              <p className="xp__period">{job.period}</p>
            </div>
            <p className="xp__place">{job.place}</p>
          </article>
        ))}
      </div>

      <h2 className="section__title">Off the clock</h2>
      <p className="section__lead">
        Most of my favourite photos are of me about to eat something.
      </p>
      <div className="gallery">
        <Figure {...photos.restaurant} ratio="4 / 5" />
        <Figure {...photos.sushi} ratio="4 / 5" className="blob-b" />
      </div>

      <h2 className="section__title">Skills</h2>
      <div className="skills">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="section__title">Education & certificates</h2>
      <ul className="certs">
        {certifications.map((cert) => (
          <li key={cert.title}>
            <span className="certs__title">{cert.title}</span>
            <span className="certs__place">{cert.place}</span>
            <span className="certs__year">{cert.year}</span>
          </li>
        ))}
      </ul>

      <h2 className="section__title">Languages</h2>
      <ul className="langs">
        {languages.map((lang) => (
          <li key={lang.name}>
            <span>{lang.name}</span>
            <span className="langs__level">{lang.level}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Contact() {
  return (
    <div className="page contact">
      <img
        className="contact__pen"
        src="/photos/pen.jpg"
        alt=""
        aria-hidden="true"
      />
      <div className="contact__body">
        <p className="page__kicker">Contact</p>
        <h1 className="page__title">Let’s talk</h1>
        <p className="page__intro">
          Always up for a good conversation about product, engineering, design,
          AI, or where to eat next.
        </p>
        <p className="contact__note">Email is the fastest way to reach me.</p>

        <div className="contact__list">
          <a className="contact__row" href={`mailto:${profile.email}`}>
            <span className="contact__key">Email</span>
            <span className="contact__val">{profile.email}</span>
          </a>
          <a
            className="contact__row"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__key">LinkedIn</span>
            <span className="contact__val">{profile.linkedinLabel}</span>
          </a>
          <div className="contact__row">
            <span className="contact__key">Based in</span>
            <span className="contact__val">{profile.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function NotFound() {
  return (
    <div className="page">
      <p className="page__kicker">404</p>
      <h1 className="page__title">Page not found</h1>
      <p className="page__intro">
        That link leads nowhere. <Link to="/">Back to the start →</Link>
      </p>
    </div>
  )
}
