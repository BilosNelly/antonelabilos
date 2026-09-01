import { useEffect, useState } from 'react'

export function getRoute(): string {
  if (typeof window === 'undefined') return '/'
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '' ? '/' : path
}

export function useRoute(): string {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onChange = () => setRoute(getRoute())
    window.addEventListener('popstate', onChange)
    return () => window.removeEventListener('popstate', onChange)
  }, [])

  return route
}

export function navigate(to: string): void {
  const path = to.startsWith('/') ? to : `/${to}`
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
}
