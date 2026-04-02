import React from 'react'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Laxmi Website",
    description: "A modern portfolio/demo site showcasing projects and design.",
    // place the screenshot at public/images/laxmi-website.png
    image: "/images/laxmi-website.png",
    href: "https://laxmi-website.vercel.app/",

    // static project page to open showing project UI
    page: "/projects/shreelaxmi.html",
    tech: ["React", "Tailwind", "Vite", "Next.js"],
  },
  {
    id:2,
    title: "Cocktail Recipe App",
    description: "A simple app to browse cocktail recipes using the CocktailDB API.",
    image: "/images/cocktail-app.png",
    href: "https://sony12-grg.github.io/Cocktail-repo/",
    page: "/projects/cocktail.html",
    tech: ["React", "Tailwind", "Vite", "API"],

  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-7 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="space-y-6 mb-8 w-full">
          <span className="text-secondary-foreground text-sm tracking-wider uppercase">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">Selected Works
            <span className="font-serif italic font-normal text-white"> — real projects & demos</span>
          </h2>
            <p className="text-muted-foreground">Click a project to open its project page or screenshot in a new tab.</p>
        </div>
        {/* Content: single full-width list (removed tabs) */}
        <div>
          <div className="grid grid-cols-1 gap-8  space-y-2">
            {projects.map((p) => (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                onClick={() => { const w = window.open(p.page || p.image || p.href, '_blank'); if (w) w.opener = null }}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { const w = window.open(p.page || p.image || p.href, '_blank'); if (w) w.opener = null } }}
                className="group block glass rounded-2xl p-6 glow-border hover:scale-105 transition-transform no-underline w-full cursor-pointer"
              >
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 w-full">
                  <div className="w-full">
                    <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground mb-4 w-full">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    {/* <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:glow-border transition">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </span> */}
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-full glass-strong hover:glow-border transition"
                    >
                      Live
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
