import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

const emailAddress = "deiyeshua05@gmail.com";
const linkedinUrl = "https://linkedin.com/in/yeshuadei-244b87321";
const githubUrl = "https://github.com/allgee-tech";
const whatsappUrl = "https://wa.me/233536418894";

const navigation = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Expertise", "#expertise"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

const experience = [
  {
    period: "May 2026 — Present",
    role: "Public Relations & Engagement Officer",
    organization: "Palm Student Council",
    description:
      "Supporting student communication, public relations and engagement at Palm University College.",
  },
  {
    period: "Apr 2026 — Present",
    role: "Junior Researcher",
    organization: "PVL Africa",
    description:
      "Contributing to research initiatives through data gathering, analysis support and reporting.",
  },
  {
    period: "Dec 2025 — Present",
    role: "Editor-in-Chief",
    organization: "Dope News",
    description:
      "Leading editorial direction and newsroom workflows, coordinating contributors and maintaining fact-checking and quality standards.",
  },
];

const expertise = [
  {
    number: "01",
    title: "Interface & experience",
    skills: ["UI/UX design", "Prototyping", "Responsive web design"],
    level: "Exploring & developing",
  },
  {
    number: "02",
    title: "Web & technology",
    skills: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
    level: "Learning by building",
  },
  {
    number: "03",
    title: "Research & editorial",
    skills: ["Industrial research", "Data gathering", "Reporting", "Fact-checking"],
    level: "Professional experience",
  },
  {
    number: "04",
    title: "Communication & creative",
    skills: ["Editorial strategy", "Public speaking", "Storytelling", "Canva"],
    level: "Professional experience",
  },
];

const certifications = [
  "Content Marketing Essentials for SEO and AI Search — Semrush Academy",
  "AI Search Operating System — Semrush Academy",
  "Artificial Intelligence in Project Management",
  "Prompt Engineering for AI Applications",
  "Public Speaking with Canva",
  "Build a Free Website with WordPress",
];

function Reveal({ children, className = "", delay = 0, ...props }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ number, children, light = false }) {
  return (
    <p className={`section-label ${light ? "section-label-light" : ""}`}>
      <span>{number}</span>
      <span className="label-rule" />
      {children}
    </p>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#home"
        aria-label="Yeshua Kofi Dei — home"
        onClick={() => setMenuOpen(false)}
      >
        YK<span>.</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav
        id="primary-navigation"
        className={`primary-navigation ${menuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {navigation.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-availability"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          <span className="availability-dot" />
          Available for opportunities
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="hero-overline">
          <span className="availability-dot" />
          ACCRA, GHANA <span className="overline-divider">/</span> OPEN TO OPPORTUNITIES
        </p>
        <h1>
          <span className="hero-line">Designing</span>
          <span className="hero-line">digital</span>
          <span className="hero-line">experiences</span>
          <span className="hero-line">
            that <span className="hero-highlight">matter.</span>
          </span>
        </h1>
        <div className="hero-bottom">
          <p>
            I am Yeshua Kofi Dei, a Business Information Technology student,
            editorial leader and junior researcher, curious about the ways
            technology and creativity can make a difference.
          </p>
          <div className="hero-actions flex flex-wrap items-center gap-3">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a className="button button-outline" href="#contact">
              Let’s talk <MoveUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-art" aria-label="Portrait of Yeshua Kofi Dei">
        <div className="hero-art-top">
          <span>YKD—001</span>
          <span>PERSONAL PORTFOLIO / 2026</span>
        </div>
        <div className="hero-image-wrap">
          <motion.img
            src="/assets/portrait.jpg"
            alt="Yeshua Kofi Dei, based in Accra, Ghana"
            className="hero-portrait"
            fetchPriority="high"
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div className="portrait-caption">
            <span>Yeshua Kofi Dei</span>
            <span>Technology · Research · Creativity</span>
          </div>
          <span className="portrait-index">01 — 03</span>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to about">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
        <span className="hero-side-note">A LITTLE BIT OF EVERYTHING, WITH INTENTION.</span>
      </div>
      <div className="hero-index">01<span>/</span>07</div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-pad" id="about">
      <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
      <div className="about-layout">
        <Reveal className="about-heading">
          <span className="display-kicker">CURIOUS BY NATURE.</span>
          <h2>
            Thoughtful ideas.
            <br />
            <em>Useful impact.</em>
          </h2>
        </Reveal>
        <Reveal className="about-copy" delay={0.12}>
          <p className="about-lead">
            I am a Business Information Technology student at Palm University
            College, based in Accra, Ghana.
          </p>
          <p>
            My work spans technology, research, media and digital creativity.
            As an editor, researcher and student representative, I’ve learned
            to bring structure to ideas, communicate with care and make room
            for different perspectives.
          </p>
          <p>
            I am drawn to digital experiences that feel considered and useful.
            I start by listening, ask better questions, and keep learning as an
            idea becomes something people can use.
          </p>
          <div className="about-portrait">
            <img
              src="/assets/portrait.jpg"
              alt="Portrait of Yeshua Kofi Dei"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>THE PERSON BEHIND THE WORK</span>
              <strong>Yeshua Kofi Dei</strong>
              <small>Accra, Ghana</small>
            </div>
          </div>
          <div className="about-footnote">
            <MapPin size={15} />
            <span>Accra, Ghana</span>
            <span className="footnote-divider" />
            <span>Building with intention</span>
          </div>
        </Reveal>
      </div>
      <div className="about-statement">
        <span>MY APPROACH</span>
        <p>
          Understand the problem. <em>Stay curious.</em> Make the result matter.
        </p>
        <ArrowDownRight size={23} strokeWidth={1.4} />
      </div>
    </section>
  );
}

function ProjectMeta({ number, category, year }) {
  return (
    <div className="project-meta">
      <span>{number} / {category}</span>
      <span>{year}</span>
    </div>
  );
}

function Projects() {
  return (
    <section className="work-section section-pad" id="work">
      <SectionLabel number="02" light>SELECTED WORK</SectionLabel>
      <div className="work-heading">
        <Reveal>
          <span className="display-kicker">A FEW THINGS IN MOTION</span>
          <h2>
            Ideas, made
            <br />
            <em>tangible.</em>
          </h2>
        </Reveal>
        <p>
          An evolving collection of technology, interface and creative work.
          Each project is shared at its honest stage.
        </p>
      </div>

      <Reveal className="project project-afri">
        <div className="afri-preview" aria-label="AfriAI project visual">
          <div className="afri-sun" />
          <div className="afri-rings">
            <span />
            <span />
            <span />
          </div>
          <span className="afri-label">A MORE ACCESSIBLE FUTURE</span>
          <div className="afri-wordmark">Afri<span>AI</span><sup>✳</sup></div>
          <span className="afri-bottom-note">CONCEPT / IN PROGRESS</span>
        </div>
        <div className="project-description">
          <ProjectMeta number="01" category="AI / WEB" year="IN PROGRESS" />
          <h3>AfriAI</h3>
          <p>
            An early-stage exploration of an affordable, accessible AI
            experience for African users, with local convenience and payment
            options in mind.
          </p>
          <div className="project-tags">
            <span>JavaScript</span><span>Node.js</span><span>Gemini API</span>
          </div>
          <a className="project-link" href="#contact">
            Follow the journey <ArrowUpRight size={17} />
          </a>
        </div>
      </Reveal>

      <Reveal className="project project-campus" delay={0.06}>
        <a
          className="campus-preview"
          href="https://lovable.dev/projects/76be1482-5158-4dc9-ac8d-1383660a8017"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View the CampusNest project"
        >
          <img
            src="/assets/campusnest-login.png"
            alt="CampusNest student accommodation interface concept"
            loading="lazy"
            decoding="async"
          />
          <span className="preview-link">OPEN PROJECT <ArrowUpRight size={16} /></span>
        </a>
        <div className="project-description">
          <ProjectMeta number="02" category="INTERFACE DESIGN" year="CONCEPT" />
          <h3>CampusNest</h3>
          <p>
            A student accommodation concept with a welcoming login experience,
            clear entry points and a visual identity built around student life.
          </p>
          <div className="project-tags">
            <span>UI Design</span><span>Student Housing</span><span>Lovable</span>
          </div>
          <a
            className="project-link"
            href="https://lovable.dev/projects/76be1482-5158-4dc9-ac8d-1383660a8017"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project <ArrowUpRight size={17} />
          </a>
        </div>
      </Reveal>

      <Reveal className="project project-film" delay={0.06}>
        <div className="film-preview">
          <video
            controls
            preload="metadata"
            playsInline
            poster="/assets/portrait.jpg"
            aria-label="Short-form creative video about quietness and personal expression"
          >
            <source src="/assets/quiet-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span className="film-index">03 / A STUDY IN STILLNESS</span>
        </div>
        <div className="project-description">
          <ProjectMeta number="03" category="VIDEO / STORYTELLING" year="CREATIVE WORK" />
          <h3>Choosing to stay quiet</h3>
          <p>
            A short-form video exploring quietness, reflection and personal
            expression through a considered, minimal story.
          </p>
          <div className="project-tags">
            <span>Video</span><span>Creative direction</span><span>Storytelling</span>
          </div>
        </div>
      </Reveal>
      <p className="work-note">
        <span>IN PROGRESS, ON PURPOSE.</span>
        More work will appear as I keep making.
      </p>
    </section>
  );
}

function Expertise() {
  return (
    <section className="expertise-section section-pad" id="expertise">
      <SectionLabel number="03">SKILLS & EXPERTISE</SectionLabel>
      <div className="expertise-heading">
        <Reveal>
          <span className="display-kicker">A PRACTICE IN PROGRESS</span>
          <h2>
            Many ways
            <br />
            <em>to make it work.</em>
          </h2>
        </Reveal>
        <p>
          I bring research, communication and creative thinking together —
          while steadily building my hands-on design and development practice.
        </p>
      </div>
      <div className="expertise-grid">
        {expertise.map((item, index) => (
          <Reveal className="expertise-card" key={item.number} delay={index * 0.06}>
            <span className="expertise-number">{item.number}</span>
            <h3>{item.title}</h3>
            <div className="expertise-tags">
              {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            <span className="expertise-level">{item.level}</span>
          </Reveal>
        ))}
      </div>
      <div className="certification-row">
        <h3>Learning, always.</h3>
        <div className="certification-list">
          {certifications.map((certification) => (
            <span key={certification}>{certification}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey-section section-pad" id="journey">
      <SectionLabel number="04" light>EXPERIENCE & EDUCATION</SectionLabel>
      <div className="journey-heading">
        <Reveal>
          <span className="display-kicker">THE ROAD SO FAR</span>
          <h2>
            Learn by doing.
            <br />
            <em>Lead with care.</em>
          </h2>
        </Reveal>
        <p>
          Each role has taught me something about people, responsibility and
          turning information into meaningful work.
        </p>
      </div>
      <div className="timeline">
        <p className="timeline-group-label">EXPERIENCE</p>
        {experience.map((item, index) => (
          <Reveal className="timeline-item" key={item.role} delay={index * 0.05}>
            <span className="timeline-period">{item.period}</span>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <span className="timeline-organization">{item.organization}</span>
              <p>{item.description}</p>
            </div>
            <ArrowUpRight className="timeline-arrow" size={18} />
          </Reveal>
        ))}
        <p className="timeline-group-label education-label">EDUCATION</p>
        <Reveal className="timeline-item">
          <span className="timeline-period">Jan 2026 — Apr 2029 · Expected</span>
          <div className="timeline-content">
            <h3>Bachelor of Science</h3>
            <span className="timeline-organization">Palm University College</span>
            <p>Business Information Technology</p>
          </div>
          <ArrowUpRight className="timeline-arrow" size={18} />
        </Reveal>
        <Reveal className="timeline-item">
          <span className="timeline-period">Online studies</span>
          <div className="timeline-content">
            <h3>Computational Science</h3>
            <span className="timeline-organization">University of the People</span>
            <p>Additional independent online studies.</p>
          </div>
          <ArrowUpRight className="timeline-arrow" size={18} />
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setFormStatus("Please complete each field before continuing.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setFormStatus("Your email app should open with your message ready to send.");
    event.currentTarget.reset();
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <SectionLabel number="05">LET’S MAKE SOMETHING MATTER</SectionLabel>
      <div className="contact-layout">
        <Reveal className="contact-copy">
          <span className="display-kicker">HAVE A PROJECT IN MIND?</span>
          <h2>
            Let’s create
            <br />
            something
            <br />
            <em>great.</em>
          </h2>
          <p>
            Have an opportunity, a question or an idea you’d like to explore?
            I’d be glad to hear from you.
          </p>
          <a className="contact-email" href={`mailto:${emailAddress}`}>
            {emailAddress} <ArrowUpRight size={19} />
          </a>
          <div className="contact-socials">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> WhatsApp <ArrowUpRight size={14} />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.1}>
          <div className="form-heading">
            <span>01 — SAY HELLO</span>
            <span>Usually happy to chat.</span>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Your name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="How should I address you?"
                required
              />
            </label>
            <label>
              <span>Email address</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              <span>A little about your project</span>
              <textarea
                name="message"
                rows="4"
                placeholder="What are you thinking about?"
                required
              />
            </label>
            <button type="submit" className="button button-submit">
              Prepare your message <ArrowUpRight size={17} />
            </button>
            <p className="form-note" aria-live="polite">
              <Mail size={14} />
              {formStatus || "This form opens your email app — no data is stored here."}
            </p>
          </form>
        </Reveal>
      </div>
      <div className="contact-bottom">
        <span><span className="availability-dot" /> OPEN TO INTERNSHIPS & COLLABORATION</span>
        <span>ACCRA, GHANA <span className="overline-divider">/</span> GMT</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-wordmark" href="#home">YKD<span>.</span></a>
      <span className="footer-copyright">
        © {new Date().getFullYear()} YESHUA KOFI DEI
      </span>
      <nav aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <nav className="footer-socials" aria-label="Social links">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={13} /></a>
      </nav>
      <a className="back-to-top" href="#home">
        BACK TO TOP <ArrowUpRight size={14} />
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <div className="marquee" aria-label="Technology, research, creative practice">
          <div className="marquee-track">
            {[0, 1].map((repeat) => (
              <span key={repeat} aria-hidden={repeat === 1}>
                TECHNOLOGY <i>✳</i> RESEARCH <i>✳</i> EDITORIAL LEADERSHIP
                <i>✳</i> DIGITAL CREATIVITY <i>✳</i> COMMUNICATION <i>✳</i>
              </span>
            ))}
          </div>
        </div>
        <About />
        <Projects />
        <Expertise />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
