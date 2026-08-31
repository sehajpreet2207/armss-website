'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, BrainCircuit, Cpu, Menu, MoveRight, Network, Settings2, Wrench, X } from 'lucide-react'

const joinUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd4JSOaJXuagxt5x-fU-nzsQc2FaBTK4yFw_QftLPHgGHPEUQ/viewform?pli=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio'
const principles = [['01', 'INNOVATE', 'Question the obvious.'], ['02', 'ENGINEER', 'Make ideas work.'], ['03', 'BUILD', 'Learn through making.'], ['04', 'EXPERIMENT', 'Test, refine, repeat.']]
const events = {
  buildFest: [
    ['FIRST POSITION', 'Team Glare Guardians', 'Gurbani Kaur, Niyati Seth, Vanshika Marwaha, Akshdeep Kaur'],
    ['SECOND POSITION', 'Team Ecopioneers', 'Sehajpreet Kaur, Arshnoor Kaur, Harjee Singh, Ustat Chhabra'],
    ['THIRD POSITION', 'Team BloomTech', 'Devshi, Harmanpreet, Suhani'],
  ],
  techtales: [
    ['EP 1', 'UAVs and AI driven applications in aerial technologies', 'MD Azizul Islam Junaid'],
    ['EP 2', 'Introduction to 3D printing and additive manufacturing', 'Gavish Sharma'],
    ['EP 3', 'Cybersecurity', 'Harsh Dev'],
  ],
}
const domains = [
  { n: '01', title: 'ARTIFICIAL INTELLIGENCE', text: 'Models, computer vision, data, and intelligent systems.', icon: BrainCircuit },
  { n: '02', title: 'ROBOTICS', text: 'Sensors, control systems, autonomous machines, and motion.', icon: Cpu },
  { n: '03', title: 'MECHANICAL ENGINEERING', text: 'CAD, mechanisms, materials, simulation, and fabrication.', icon: Wrench },
  { n: '04', title: 'AUTOMATION', text: 'Embedded systems, IoT, and systems that respond.', icon: Settings2 },
]
const hardware = ['Raspberry Pi 5', 'Arduino Nano', 'Soil Moisture Sensor', 'I2C 1602 LCD Display', 'ESP8266 Wi-Fi Module', '0.96 OLED I2C Display', 'Pratham 3.0 3D Printer']
const team = ['President', 'Vice President', 'General Secretary']
const faqs = [
  ['Who can join ARMSS?', 'Any student curious about AI, robotics, mechanical engineering, or building with others can join. No prior experience is required.'],
  ['Do I need my own hardware?', 'No. ARMSS provides shared access to components, tools, and labs for workshops and project teams.'],
  ['How do I join a project?', 'Join a workshop, meet the team, and tell us what you want to explore. We will help you find the right project team.'],
]

function Mark({ light = false }: { light?: boolean }) { return <div className={`flex items-center gap-3 ${light ? 'text-white' : 'text-foreground'}`}><span className="armms-mark"><i /><i /><i /></span><span className="font-mono text-sm font-bold tracking-[0.22em]">ARMSS</span></div> }
function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <div className={`reveal ${className}`}>{children}</div> }

export function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['About', 'about'], ['Domains', 'domains'], ['Hardware Lab', 'hardware'], ['Workshops', 'workshops'], ['TechTales', 'techtales'], ['Membership', 'membership'], ['Team', 'team']]
  return <header className="navbar"><div className="shell flex h-20 items-center justify-between"><a href="#home" aria-label="ARMSS home"><Mark /></a><nav className="hidden items-center gap-7 md:flex">{links.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}</nav><a href={joinUrl} target="_blank" rel="noopener noreferrer" className="button button-blue hidden md:inline-flex">JOIN ARMSS <ArrowUpRight size={16} /></a><button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-menu md:hidden">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<MoveRight size={16} /></a>)}<a href={joinUrl} target="_blank" rel="noopener noreferrer">JOIN ARMSS <ArrowUpRight size={16} /></a></div>}</header>
}

export function Hero() { return <section id="home" className="hero"><div className="shell hero-inner"><Reveal><p className="section-kicker">ARMSS / GNDU <span /></p><div className="hero-main"><div><h1 className="hero-title">ARMSS<em>.</em></h1><p className="hero-copy">Artificial Intelligence, Robotics &amp;<br />Mechanical Engineering Student Society.</p><div className="hero-meta"><span>GNDU / AMRITSAR</span><span className="active-builders"><i />100+ ACTIVE BUILDERS</span></div><div className="mt-9 flex flex-wrap gap-3"><a href={joinUrl} target="_blank" rel="noopener noreferrer" className="button button-blue">JOIN ARMSS <ArrowUpRight size={17} /></a><a href="#hardware" className="button button-outline">EXPLORE LAB <MoveRight size={17} /></a></div></div><div className="hero-emblem"><Image src="/armss-emblem.png" alt="ARMSS technology emblem" width={310} height={310} priority /><span>ARMSS — STUDENT SOCIETY</span></div></div></Reveal></div></section> }

export function About() { return <section id="about" className="section section-light"><div className="shell"><Reveal><p className="section-kicker">01 / ABOUT <span /></p></Reveal><div className="about-grid"><Reveal><h2 className="display-title">MORE THAN<br /><em>A SOCIETY.</em></h2></Reveal><Reveal><p className="lead-copy">A place to turn curiosity into capability.</p><p className="body-copy">ARMSS brings together students who want to learn beyond the classroom, make useful things, and work across disciplines. Start anywhere. Build with us.</p></Reveal></div><div className="principles">{principles.map(([n, title, text]) => <div className="principle" key={n}><span className="principle-num">{n}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section> }

export function Domains() { return <section id="domains" className="section section-paper"><div className="shell"><Reveal><p className="section-kicker">02 / DOMAINS <span /></p><div className="section-heading-row"><h2 className="display-title">FOUR WAYS<br /><em>TO EXPLORE.</em></h2><p className="heading-aside">One curious<br />community.</p></div></Reveal><div className="domain-grid">{domains.map(({ n, title, text, icon: Icon }) => <article className="domain-card" key={title}><div className="flex items-start justify-between"><span className="font-mono text-xs text-blue">{n}</span><Icon className="domain-icon" size={27} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section> }

export function HardwareLab() { return <section id="hardware" className="section section-paper"><div className="shell"><p className="section-kicker">03 / HARDWARE LAB <span /></p><div className="section-heading-row"><h2 className="display-title">THE HARDWARE<br /><em>LAB STACK.</em></h2><p className="heading-aside">Tools for turning<br />ideas into systems.</p></div><div className="hardware-grid">{hardware.map((item, index) => <article className="hardware-card" key={item}><span className="meta">{String(index + 1).padStart(2, '0')} / COMPONENT</span><h3>{item}</h3><span className="hardware-arrow">↗</span></article>)}</div></div></section> }

export function Workshops() { return <section id="workshops" className="section section-light"><div className="shell"><p className="section-kicker">EVENTS / WORKSHOPS <span /></p><div className="section-heading-row"><h2 className="display-title">MAKE IT<br /><em>REAL.</em></h2><p className="heading-aside">Hands-on learning<br />for working minds.</p></div><div className="workshop-grid"><article className="split-card"><div className="split-visual"><span>WS / 001</span><strong>ROS<br />WORKSHOP</strong><small>ROBOT OPERATING SYSTEM</small></div><div className="split-content"><p className="meta">EVENT / 005</p><h3>ROS Workshop</h3><p>Hands-on learning with the Robot Operating System.</p></div></article><article className="split-card"><div className="split-visual"><span>WS / 006</span><strong>UAV<br />WORKSHOP</strong><small>AERIAL SYSTEMS</small></div><div className="split-content"><p className="meta">EVENT / 006</p><h3>UAV Workshop</h3><p>Explore unmanned aerial vehicles and their applications.</p></div></article><article className="split-card"><div className="split-visual"><span>EVENT / 002</span><strong>7 DAYS<br />7 DEVICES</strong><small>ELECTRONIC DEVICES</small></div><div className="split-content"><p className="meta">EVENT / 002</p><h3>7 Days 7 Electronic Devices</h3><p>A focused build challenge exploring one electronic device each day.</p></div></article></div></div></section> }

export function TechTales() { return <section id="techtales" className="section section-paper"><div className="shell"><p className="section-kicker">04 / TECHTALES <span /></p><div className="section-heading-row"><h2 className="display-title">STORIES<br /><em>BEHIND THE BUILD.</em></h2><p className="heading-aside">People, process,<br />and practical insight.</p></div><div className="techtales-grid">{events.techtales.map(([episode, title, speaker]) => <article key={episode}><span className="meta">{episode}</span><h3>{title}</h3><p>Presented by {speaker}.</p></article>)}</div></div></section> }

export function Hackathon() { return <section className="section section-paper"><div className="shell"><div className="section-heading-row"><div><p className="section-kicker">04 / HACKATHON 2024 <span /></p><h2 className="display-title">IDEAS IN<br /><em>MOTION.</em></h2></div><p className="heading-aside">Three teams.<br />One sharp brief.</p></div><div className="hackathon-list"><article className="hack-card winner"><div><span className="meta">BUILD FEST / FIRST POSITION</span><h3>Team Glare Guardians</h3><p>Gurbani Kaur, Niyati Seth, Vanshika Marwaha, Akshdeep Kaur</p></div><strong>01</strong></article>{events.buildFest.slice(1).map(([position, teamName, members]) => <article className="hack-card" key={position}><div><span className="meta">BUILD FEST / {position}</span><h3>{teamName}</h3><p>{members}</p></div><strong>{position === 'SECOND POSITION' ? '02' : '03'}</strong></article>)}</div><a href="#footer" className="text-link">SEE THE ARCHIVE <MoveRight size={16} /></a></div></section> }

export function Membership() { return <section id="membership" className="section section-light"><div className="shell membership-grid"><div><p className="section-kicker">05 / MEMBERSHIP <span /></p><h2 className="display-title">BRING YOUR<br /><em>CURIOSITY.</em></h2><ul className="benefits"><li>Insider workshops</li><li>Member perks</li><li>Evaluation &amp; feedback</li><li>Project mentorship</li><li>Component &amp; library access</li></ul></div><div className="payment-terminal"><p>ARMSS / PAYMENT</p><div className="terminal-screen"><span>UPI / ARMSS-GNDU</span><b>SCAN<br />TO PAY</b></div><small>Membership payment terminal</small></div></div></section> }

export function FAQ() { const [active, setActive] = useState<number | null>(null); return <section className="section section-paper"><div className="shell faq-grid"><div><p className="section-kicker">06 / FAQ <span /></p><h2 className="display-title">STILL HAVE<br /><em>QUESTIONS?</em></h2><p className="body-copy">Good. That is usually where the interesting work starts.</p></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className="faq-item" key={question}><button aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)}><span>{question}</span><span>{active === i ? '−' : '+'}</span></button>{active === i && <p>{answer}</p>}</div>)}</div></div></section> }

export function Team() { return <section id="team" className="section section-light"><div className="shell"><p className="section-kicker">07 / THE CREW <span /></p><h2 className="display-title">THE PEOPLE<br /><em>OF ARMSS.</em></h2><div className="team-grid">{team.map((role, i) => <article className="team-card" key={role}><div className="team-avatar"><span>{String(i + 1).padStart(2, '0')}</span><Network size={28} /></div><p className="team-role">{role}</p><h3>{role === 'President' ? 'Your name here' : 'ARMSS member'}</h3></article>)}</div></div></section> }



export function Footer() { return <footer id="footer" className="footer"><div className="shell"><div className="footer-top"><div><Mark /><p className="footer-description">Artificial Intelligence, Robotics &amp;<br />Mechanical Engineering Student Society<br /><span>Guru Nanak Dev University, Amritsar</span></p></div><div className="footer-links"><div><p className="footer-label">EXPLORE</p><a href="#about">About</a><a href="#domains">Domains</a><a href="#workshops">Workshops</a><a href="#techtales">TechTales</a></div><div><p className="footer-label">CONNECT</p><a href="#membership">Membership</a><a href="#team">Team</a><a href={joinUrl}>Join ARMSS</a></div><div><p className="footer-label">FIND US</p><a href="https://www.instagram.com/armss.gndu/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="mailto:armss.gndu@gmail.com">Email</a></div></div></div><div className="footer-bottom"><span>ARMSS / GNDU</span><span>© 2025 ARMSS SOCIETY</span><span>armss.gndu@gmail.com</span></div></div></footer> }

export default function ArmmsSite() { return <><Navbar /><main><Hero /><About /><Domains /><HardwareLab /><Workshops /><TechTales /><Hackathon /><Membership /><FAQ /><Team /></main><Footer /></> }
