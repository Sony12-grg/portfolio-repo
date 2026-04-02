import React from 'react'
import { Button } from '../components/Button.jsx'
import { scrollToContactAndFocusEmail } from '../lib/utils.js'
import { Menu,X } from 'lucide-react'
import { useState } from 'react';
import { useEffect } from 'react';
const navLinks = [
  {href: "#", label: "Home"},
  {href: "#about", label: "About"},
  {href: "#projects", label: "Projects"},
  {href: "#contact", label: "Contact"},
]
export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}> 
        <nav className='container mx-auto px-6 flex items-center justify-between'>
         <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>
            SG<span className='text-primary'>.</span>
         </a>

   {/* Desktop Nav*/ }
         <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link, index) => {
              return (
                <a href={link.href} key={index} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'> {link.label}</a>
              )
            })}
          </div>
           
         </div>
         {/* CTA Button */}
            <div className='hidden md:block'>
              <Button size='sm' onClick={scrollToContactAndFocusEmail}>Contact Me</Button>
            </div>
         {/* Mobile Menu Botton Nav */ }
         <button className='md:hidden p-2 text-foreground cursor-pointer ' onClick={() => setMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> :
          <Menu size={24} />}
         </button>
      </nav>
      {/* Mobile Menu */ }
      {isMobileMenuOpen && (
         <div className='md:hidden glass-strong animate-fade-in'>
        <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
            {navLinks.map((link, index) => {
              return (
                <a href={link.href} key={index}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className='text-lg text-muted-foreground hover:text-foreground py-2'> {link.label}</a>
              )
            })}
             <Button  onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToContactAndFocusEmail();
                }}>Contact Me</Button>
       </div>
      </div>
  )}
      </header>
      
    </div>
  )
}
