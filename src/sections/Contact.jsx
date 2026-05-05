// src/components/Contact.jsx
import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-25 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12 glow-border">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </span>
          <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">
            Currently Leveling Up
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          From Frontend to <span className="text-teal-400 italic font-serif">Full-Stack</span>.
        </h2>

        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          I’ve spent the last year mastering the frontend with <strong>HTML, CSS</strong> and <strong>JavaScript</strong>. Now, I’m diving deep into <strong>React.js, Node.js</strong> and <strong>MongoDB</strong> to complete the MERN circle. 
          
          I’m ready to bring my frontend expertise to a team while growing into a full-stack role.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            id="mailto-link"
            tabIndex={-1}
            href="mailto:soniyagurung924@gmail.com"
              className="px-8 py-3 bg-teal-400 text-gray-900 font-bold rounded-lg hover:bg-teal-300 transition-all shadow-[0_0_15px_rgba(45,212,191,0.2)] cta-pop animate-fade-in"
          >
            Let's Chat
          </a>
          
          <div className="flex gap-4 ml-2">
             {/* Tech Stack Icons/Labels for Backend */}
             <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">Node.js</span>
             <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">Express</span>
             <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">MongoDB</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
