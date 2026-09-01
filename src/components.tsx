import { useState } from 'react'
import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { roles } from './content'
import { navigate } from './router'

type LinkProps = { to: string } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
>

export function Link({ to, children, ...rest }: LinkProps) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // let the browser handle new-tab / modified clicks
    if (
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return
    }
    e.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} {...rest} onClick={onClick}>
      {children}
    </a>
  )
}

const NAV_LINKS = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Nav({ route, hero }: { route: string; hero: boolean }) {
  return (
    <header className={`nav ${hero ? 'nav--hero' : 'nav--page'}`}>
      <Link to="/" className="nav__brand" aria-label="Antonela — home">
        Antonela<span aria-hidden="true">®</span>
      </Link>
      <nav className="nav__links" aria-label="Primary">
        {NAV_LINKS.map((link) => {
          const active = route === link.to || route.startsWith(`${link.to}/`)
          return (
            <Link
              key={link.to}
              to={link.to}
              className={active ? 'is-active' : undefined}
              aria-current={active ? 'page' : undefined}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export function Marquee() {
  return (
    <footer className="marquee" aria-label="What I do">
      <div className="marquee__track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <span className="marquee__group" key={copy}>
            {roles.map((role) => (
              <span className="marquee__item" key={role}>
                {role}
                <span className="marquee__amp">&amp;</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </footer>
  )
}

export function Figure({
  src,
  alt,
  caption,
  ratio,
  className,
  focus,
}: {
  src: string
  alt: string
  caption?: string
  ratio?: string
  className?: string
  focus?: string
}) {
  const [failed, setFailed] = useState(false)
  const boxStyle = ratio ? { aspectRatio: ratio } : undefined

  return (
    <figure className={className ? `figure ${className}` : 'figure'}>
      <div className="figure__frame">
        {failed ? (
          <div className="figure__ph" style={boxStyle}>
            <span>Photo coming soon</span>
            <code>public{src}</code>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{ ...boxStyle, objectPosition: focus }}
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
