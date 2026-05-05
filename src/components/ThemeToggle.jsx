import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('dark')

  const LIGHT_VARS = {
    '--color-background': '#ffffff',
    '--color-foreground': '#0f1418',
    '--color-card': '#ffffff',
    '--color-primary': '#20b2a6',
    '--color-primary-foreground': '#ffffff',
    '--color-secondary': '#f1f5f9',
    '--color-secondary-foreground': '#20b2a6',
    '--color-muted': '#f3f4f6',
    '--color-muted-foreground': '#6b7280',
    '--color-border': '#e6e9ee',
    '--color-surface': '#ffffff'
  }

  const DARK_VARS = {
    '--color-background': '#0f1418',
    '--color-foreground': '#f0f2f5',
    '--color-card': '#141a1f',
    '--color-primary': '#20b2a6',
    '--color-primary-foreground': '#ffffff',
    '--color-secondary': '#1f2830',
    '--color-secondary-foreground': '#20b2a6',
    '--color-muted': '#252e37',
    '--color-muted-foreground': '#7a8491',
    '--color-border': '#242b32',
    '--color-surface': '#1a2329'
  }

  function applyVars(vars) {
    if (typeof window === 'undefined') return
    const root = document.documentElement
    Object.entries(vars).forEach(([k, v]) => {
      root.style.setProperty(k, v)
    })
  }

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = stored || (prefersDark ? 'dark' : 'light')
      setTheme(initial)
      document.documentElement.classList.toggle('dark', initial === 'dark')
      applyVars(initial === 'dark' ? DARK_VARS : LIGHT_VARS)
    } catch (e) {
      // ignore
    }
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    try { localStorage.setItem('theme', next) } catch (e) {}
    applyVars(next === 'dark' ? DARK_VARS : LIGHT_VARS)
  }

  return (
    <button
      aria-label="Toggle color theme"
      onClick={toggle}
      className={`relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary/10 text-foreground hover:bg-primary/15 p-2 shadow-sm ${className}`}
    >
      <span className="relative flex items-center justify-center">
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </button>
  )
}
