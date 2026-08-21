'use client'

import { useEffect, useState } from 'react'
import {
  ArrowUpRight, BrainCircuit, Cpu, Menu, MoveRight, Network, Settings2, X, Wrench,
} from 'lucide-react'

const principles = [
  ['01', 'LEARN', 'Learn beyond the classroom.'],
  ['02', 'BUILD', 'Turn ideas into working systems.'],
  ['03', 'COLLABORATE', 'Build alongside ambitious students.'],
  ['04', 'INNOVATE', 'Explore technologies shaping the future.'],
]

const domains = [
  { n: '01', title: 'ARTIFICIAL INTELLIGENCE', text: 'Machine learning, computer vision, intelligent systems, and data-driven engineering.', icon: BrainCircuit },
  { n: '02', title: 'ROBOTICS', text: 'Autonomous systems, robotic arms, sensors, and control systems.', icon: Cpu },
  { n: '03', title: 'MECHANICAL ENGINEERING', text: 'CAD, product design, mechanisms, simulation, and manufacturing.', icon: Wrench },
  { n: '04', title: 'AUTOMATION', text: 'Embedded systems, IoT, control systems, and smart automation.', icon: Settings2 },
]

const events = [
  ['18 SEP', 'WORKSHOP', 'Robotics Foundations', 'Build your first autonomous system with sensors, motors, and code.'],
  ['04 OCT', 'DESIGN SESSION', 'CAD / Product Design', 'From a blank screen to a manufacturable mechanical idea.'],
  ['22 OCT', 'COMPETITION', 'ARMSS Build Challenge', 'A friendly test of speed, ingenuity, and technical teamwork.'],
]

const team = ['President', 'Vice President', 'General Secretary', 'Technical Lead', 'AI Lead', 'Robotics Lead', 'Mechanical Lead', 'Events Lead', 'Design Lead']

function Mark({ light = false }: { light?: boolean }) {
  return <div className={`flex items-center gap-3 ${light ? 'text-white' : 'text-foreground'}`}><span className="armms-mark"><i /><i /><i /></span><span className="font-mono text-sm font-bold tracking-[0.22em]">ARMSS</span></div>
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 28); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  const links = [['About', 'about'], ['Domains', 'domains'], ['Events', 'events'], ['Team', 'team']]
  return <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}><div className="shell flex h-20 items-center justify-between"><a href="#home" aria-label="ARMSS home"><Mark light={!scrolled} /></a><nav className="hidden items-center gap-8 md:flex">{links.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}</nav><a href="https://docs.google.com/forms/d/e/1FAIpQLSd4JSOaJXuagxt5x-fU-nzsQc2FaBTK4yFw_QftLPHgGHPEUQ/viewform?pli=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad6EO5z4uQgfu0-YkX_7WcnWBX0tmWNETSpAqeiPbqys1Rw9mS8eNY9dvGXLQ_aem_yJ4HMd6RCmIUc5j1ugqvyg" target="_blank" rel="noopener noreferrer" className="button button-blue hidden md:inline-flex">JOIN ARMSS <ArrowUpRight size={16} /></a><button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-menu md:hidden">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a href="https://docs.google.com/forms/d/e/1FAIpQLSd4JSOaJXuagxt5x-fU-nzsQc2FaBTK4yFw_QftLPHgGHPEUQ/viewform?pli=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad6EO5z4uQgfu0-YkX_7WcnWBX0tmWNETSpAqeiPbqys1Rw9mS8eNY9dvGXLQ_aem_yJ4HMd6RCmIUc5j1ugqvyg" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>JOIN ARMSS <ArrowUpRight size={16} /></a></div>}</header>
}

export function Hero() { return <section id="home" className="hero technical-bg"><div className="hero-lines" /><div className="shell relative z-10 flex min-h-[720px] flex-col justify-center pb-20 pt-32"><Reveal><div className="hero-brand"><span className="hero-brand-line" /><span className="hero-brand-name">ARMSS</span><span className="hero-brand-subtitle">Artificial Intelligence, Robotics &amp; Mechanical Engineering Student Society</span></div></Reveal><Reveal><p className="eyebrow text-blue-300"><span className="eyebrow-dot" /> ARTIFICIAL INTELLIGENCE <b>•</b> ROBOTICS <b>•</b> MECHANICAL ENGINEERING</p></Reveal><Reveal className="delay-1"><h1 className="hero-title">BUILD<br /><span>THE FUTURE.</span></h1></Reveal><Reveal className="delay-2"><div className="mt-8 max-w-xl border-l border-blue-400/60 pl-5"><p className="font-mono text-sm uppercase tracking-[0.18em] text-blue-200">Where intelligence meets machines.</p><p className="mt-4 text-base leading-7 text-slate-300">ARMSS is a student-driven technical society exploring AI, robotics, mechanical engineering, automation, and emerging technologies through learning, collaboration, workshops, competitions, and innovation.</p></div></Reveal><Reveal className="delay-3"><div className="mt-10 flex flex-wrap gap-4"><a href="https://docs.google.com/forms/d/e/1FAIpQLSd4JSOaJXuagxt5x-fU-nzsQc2FaBTK4yFw_QftLPHgGHPEUQ/viewform?pli=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad6EO5z4uQgfu0-YkX_7WcnWBX0tmWNETSpAqeiPbqys1Rw9mS8eNY9dvGXLQ_aem_yJ4HMd6RCmIUc5j1ugqvyg" target="_blank" rel="noopener noreferrer" className="button button-blue">JOIN ARMSS <ArrowUpRight size={17} /></a><a href="#about" className="button button-outline">EXPLORE ARMSS <MoveRight size={17} /></a></div></Reveal><div className="hero-coordinate font-mono">43° 38' 12.4" N<br />79° 23' 07.1" W</div><div className="hero-orbit"><span>ARMSS / 001</span><div className="orbit-ring" /><Cpu size={64} strokeWidth={1} /></div></div></section> }

export function About() { return <section id="about" className="section-light"><div className="shell"><Reveal><p className="section-kicker">ABOUT ARMSS <span /></p></Reveal><div className="about-grid"><Reveal><h2 className="display-title">MORE THAN<br /><em>A SOCIETY.</em></h2></Reveal><Reveal className="delay-1"><p className="lead-copy">ARMSS brings together curious minds who want to understand, build, experiment, and innovate.</p><p className="body-copy">We create the room to learn beyond the classroom, build practical skills, and collaborate on the technologies shaping tomorrow. Whether you are just starting out or already deep in your discipline, there is a place here for your next idea.</p></Reveal></div><div className="principles">{principles.map(([n, title, text], i) => <Reveal key={n} className={`delay-${i + 1}`}><div className="principle"><span className="principle-num">{n}</span><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></section> }

export function Domains() { return <section id="domains" className="section-gray"><div className="shell"><Reveal><div className="section-heading-row"><div><p className="section-kicker">OUR DOMAINS <span /></p><h2 className="display-title">WHERE ENGINEERING<br /><em>MEETS INTELLIGENCE.</em></h2></div><p className="heading-aside">Four disciplines.<br />One curious community.</p></div></Reveal><div className="domain-grid">{domains.map(({ n, title, text, icon: Icon }, i) => <Reveal key={title} className={`delay-${(i % 3) + 1}`}><article className="domain-card"><div className="flex items-start justify-between"><span className="font-mono text-xs text-blue-600">{n}</span><Icon className="domain-icon" size={26} strokeWidth={1.4} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="domain-arrow" size={19} /></article></Reveal>)}</div></div></section> }

export function Events() { return <section id="events" className="section-light"><div className="shell"><Reveal><p className="section-kicker">WHAT&apos;S HAPPENING <span /></p><div className="section-heading-row"><h2 className="display-title">LEARN.<br /><em>BUILD. COMPETE.</em></h2><p className="heading-aside">Make the next thing<br />with us.</p></div></Reveal><div className="events-list">{events.map(([date, category, title, text], i) => <Reveal key={title} className={`delay-${i + 1}`}><article className="event-row"><div className="event-date font-mono">{date}</div><div className="event-category">{category}</div><div className="event-main"><h3>{title}</h3><p>{text}</p></div><button className="event-link" aria-label={`View details for ${title}`}><ArrowUpRight size={20} /></button></article></Reveal>)}</div><a href="#join" className="text-link">VIEW ALL ACTIVITIES <MoveRight size={16} /></a></div></section> }

export function Impact() { return <section className="impact technical-bg"><div className="shell relative z-10"><Reveal><p className="section-kicker light">OUR IMPACT <span /></p><h2 className="display-title light">SMALL STEPS.<br /><em>REAL MOMENTUM.</em></h2></Reveal><div className="stats">{[['100+', 'Members'], ['20+', 'Workshops & Activities'], ['15+', 'Technical Events'], ['10+', 'Competitions']].map(([num, label], i) => <Reveal key={label} className={`delay-${i + 1}`}><div className="stat"><strong>{num}</strong><span>{label}</span></div></Reveal>)}</div></div></section> }

export function Team() { return <section id="team" className="section-gray"><div className="shell"><Reveal><p className="section-kicker">THE CREW <span /></p><div className="section-heading-row"><div><h2 className="display-title">THE PEOPLE<br /><em>OF ARMSS.</em></h2><p className="lead-copy mt-6">Built by students. Driven by curiosity.</p></div><p className="heading-aside">Many minds.<br />One direction.</p></div></Reveal><div className="team-grid">{team.map((role, i) => <Reveal key={role} className={`delay-${(i % 4) + 1}`}><article className="team-card"><div className="team-avatar"><span>{String(i + 1).padStart(2, '0')}</span><Network size={28} /></div><p className="team-role">{role}</p><h3>{role === 'President' ? 'Your name here' : 'ARMSS member'}</h3></article></Reveal>)}</div></div></section> }

export function CTA() { return <section id="join" className="cta technical-bg"><div className="shell relative z-10"><Reveal><p className="section-kicker light">YOUR NEXT MOVE <span /></p><h2 className="cta-title">READY TO BUILD<br /><em>WHAT&apos;S NEXT?</em></h2><p className="cta-copy">Join ARMSS and turn curiosity into capability.</p><div className="mt-9 flex flex-wrap gap-4"><a href="https://docs.google.com/forms/d/e/1FAIpQLSd4JSOaJXuagxt5x-fU-nzsQc2FaBTK4yFw_QftLPHgGHPEUQ/viewform?pli=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad6EO5z4uQgfu0-YkX_7WcnWBX0tmWNETSpAqeiPbqys1Rw9mS8eNY9dvGXLQ_aem_yJ4HMd6RCmIUc5j1ugqvyg" target="_blank" rel="noopener noreferrer" className="button button-blue">JOIN ARMSS <ArrowUpRight size={17} /></a><a href="mailto:armss@example.com" className="button button-outline">CONTACT US <MoveRight size={17} /></a></div></Reveal></div></section> }

export function Footer() { return <footer className="footer"><div className="shell"><div className="footer-top"><div><Mark /><p className="footer-description">Artificial Intelligence, Robotics &amp;<br />Mechanical Engineering Student Society</p></div><div className="footer-links"><div><p className="footer-label">EXPLORE</p><a href="#home">Home</a><a href="#about">About</a><a href="#domains">Domains</a></div><div><p className="footer-label">CONNECT</p><a href="#events">Events</a><a href="#team">Team</a><a href="#join">Join ARMSS</a></div><div><p className="footer-label">FIND US</p><div className="socials"><a href="https://www.instagram.com/armss.gndu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a><a href="#join" aria-label="LinkedIn">LinkedIn</a><a href="#join" aria-label="GitHub">GitHub</a><a href="mailto:armss@example.com" aria-label="Email">Email</a></div></div></div></div><div className="footer-bottom"><span>ARMSS / UNIVERSITY NAME</span><span>© 2025 ARMSS SOCIETY</span><span>armss@example.com</span></div></div></footer> }

export default function ArmmsSite() { return <><Navbar /><main><Hero /><About /><Domains /><Events /><Impact /><Team /><CTA /></main><Footer /></> }
