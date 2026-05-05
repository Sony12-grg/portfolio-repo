import React from 'react'
import { Code2, Lightbulb, RocketIcon, User,  } from 'lucide-react'

const highlight = [
  {
    icon: Code2,
    title: "Clean Code",
    description: 
    "Writing maintainable, scalable code that stands the test of time."
  },
  {
    icon: RocketIcon,
    title: "Fast Performance",
    description: 
    "Optimizing applications for speed and efficiency to deliver a seamless user experience."
  },
   {
    icon: User,
    title: "Collaboration",
    description: 
    "Working effectively with teams to deliver high-quality software solutions."
  },
   {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: 
    "Creating creative and effective solutions to complex problems."
  },
]

export default function About() {
  return (
    <div>
      <section id='about' className='py-32 relative overflow-hidden'>
        <div className='container mx-auto px-6 relative z-10'>
           <div className='grid lg:grid-cols-2 gap-16 items-start'>
            {/*Left Column */}
            <div className='animate-fade-in'>
            <div className='space-y-8'>
              <span className='text-secondary-foreground text-sm font-large  tracking-wider uppercase text-teal-400'>About Me</span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>Building the future,
              <span className='font-serif italic font-normal text-white'>
                 one component at a time.
              </span>
            </h2>
            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200  '>
              <p className='my-4 mb-12'>
                Currently, I am expanding my skills into full-stack development by learning backend technologies like Node.js, Express, and MongoDB. I am continuously building projects to improve my skills and understand how complete web applications work from frontend to backend.
              </p>
            </div>

            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                "My mission is to grow as a developer by building clean, user-focused web applications. I aim to combine simple design with efficient functionality while continuously learning modern technologies and improving my skills."
              </p>
            </div>
            </div>
             {/*Right Column */}
            <div className='grid sm:grid-cols-2 gap-10'>
              {highlight.map((item,index) => {
                return (
                  <div key={index} className='glass rounded-2xl p-6 glow-border hover:scale-105 transition-transform animate-fade-in' style={{animationDelay: `${(index +1 ) * 100}ms`}}>
                    <div className='w-12 h-12 rounded-xl mb-4 bg-primary/10 flex items-center justify-center hover:bg-primary/20  '>
                       {<item.icon className='w-6 h-6 text-primary'/>}
                    </div>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>{item.title}</h3>
                    <p className='text-muted-foreground text-sm leading-relaxed'>{item.description}</p>
                  </div>
                )
              })}
           </div>
           </div>
          </div>
      </section>
    </div>
  )
}