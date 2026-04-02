import React from 'react'
import { Button } from '../components/Button.jsx'
import { scrollToContactAndFocusEmail } from '../lib/utils.js'
import { ArrowRight, ChevronDown} from 'lucide-react'
import AnimatedBorderButton from '../components/AnimatedBorderButton.jsx'

const skills = [
   "HTML",
  "CSS",
  "Tailwind CSS",
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "C" ,
  "Java",
  "Git",
];

export default function Hero() {
  return (
    <div>
      <section className='relative min-h-screen flex items-center overflow-hidden'>
        {/*Bg Image*/}
        <div className='absolute inset-0'>
           <img src="/hero-bg.jpg" alt="hero image" className='w-full h-full object-cover opacity-40' />
        </div>
         <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background'>

         </div>
         {/*Green Dots */}
         <div className='absolut inset-0 overflow-hidden pointer-events-none'>
          {[...Array(30)].map((_, index) => {
            return (
              <div key={index} className='absolute w-1.5 h-1.5 opacity-60 rounded-full ' style={{
                backgroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20} s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }} />
            )
          })}
         </div>
         {/*Content Container */}
         <div className='container mx-auto px-6 pt-32 pb-20 relative z-10 '>
           <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/*Left column - text content */}
            <div className='space-y-8'>
              <div className='animate-fade-in '>
                <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                  <span className='w-2 h-2 bg-primay rounded-full  animate-pulse'/>Frontend Developer . React Specialist
                </span>
              </div>

              {/*Headline */}
              <div className='space-y-4'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 '>
                  Crafting elegant <span className='text-primary glow-text'> interfaces</span>
                  <br />for the <span className='font-serif italic font-normal text-white'>modern web</span><br />
                </h1>
                <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 '>
                  Hi, I’m Soniya Gurung
                 Frontend Developer

                I build clean, responsive, and user-friendly web interfaces using modern web technologies.
                Focused on creating smooth and intuitive digital experiences with React, JavaScript, HTML, and CSS.

                Currently exploring full-stack development.
                </p>
              </div>
              <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                <Button size='lg' onClick={scrollToContactAndFocusEmail}>Contact Me <ArrowRight className='w-5 h-5' /></Button>
               <AnimatedBorderButton  />
              </div>
              {/* Social Links
              <div className='flex items-center gap-4 animate-fade-in animation-delay-400 '>
                <span className='text-sm text-muted-foreground'>Follow me:</span>
                {[
                  {icon: Github, href:"https://github.com/Sony12-grg"},
                  {icon: Linkedin, href:"https://www.linkedin.com/in/sonia-gurung-023381317/"},
                ].map((social,idx) => {
                  return (
                    <a key={idx} href={social.href} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition=all duration-300'>
                      {social.icon && <social.icon className='w-5 h-5' />}
                    </a>
                  )
                })}
              </div> */}

            </div>
            {/*Right column - image */}
            <div className='relative animate-fade-in animation-delay-300'>
               {/*Profile Image*/}
               <div className='relative max-w-md mx-auto'>
                <div
                className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primar/10 blur-2xl animate-pulse'
                />
                <div className='relative glass rounded-3xl p-2 glow-border'>
                  <img src="/profile.png" alt="Soniya Gurung" className='w-full aspect-[4/5] object-cover rounded-2xl' />

                  {/*Floating Badge */}
                  <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                    <div clas
                    flex items-center gap-3>
                      <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse '/>
                       <span className='text-sm font-medium'>Available for Work</span>
                    </div>
                  </div>
                  {/*Sats Badge */}
                </div>
               </div>
            </div>
           </div>
          {/*Skills List */}
          <div className='mt-20 animate-fade-in animation-delay-600'>
            <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies Skills</p>
            <div className='relative overflow-hidden'>
              <div className='flex animate-marquee'>
                {[...skills, ...skills].map((skill,index) => {
                  return <div key={index} className='flex-shrink-0 px-8 py-4'>
                    <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span></div>
                })}
              </div>
            </div>
          </div>
         </div>
         <div className='absolute bottom-0 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800'>
         <a href="#about" className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary'>
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <ChevronDown className='w-6 h-6 animate-bounce' />
         </a>

         </div>
      </section>
    </div>
  )
}
