import { useEffect, useState } from "react";
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

const decodeLabsProjects = [
  {
    number: "01",
    title: "Rule-based AI chatbot",
    category: "Artificial Intelligence / Conversational Systems",
    shortDescription:
      "A Python conversation exercise built around predefined rules, conditions and response handling.",
    accent: "chatbot",
    image: "/assets/projects/ai-interface.jpg",
    imageAlt: "Abstract blue technology display representing a digital interface",
    tags: ["Python", "Conditional logic", "Conversation flow"],
    overview:
      "This foundational project explores how a conversational system can interpret user input and return an appropriate response without a trained language model.",
    problem: "Understanding how conversational systems respond to user inputs.",
    objective: "Build a basic interactive chatbot.",
    technologies: "Python.",
    methodology:
      "Start with a small set of expected inputs, map those inputs to responses, and iterate through the conversation flow as edge cases appear.",
    implementation:
      "The chatbot uses predefined patterns, conditional branches and response handling to match a user’s input with a suitable reply. Its flow is intentionally transparent: receive input, evaluate the rules, return a response, and continue until the conversation ends.",
    results:
      "A working interactive conversation prototype that makes the relationship between input, logic and output visible.",
    challenges:
      "Designing useful responses while accounting for inputs that do not exactly match the predefined patterns.",
    lessons:
      "Conditional logic, user input handling and foundational conversational AI concepts.",
    limitations:
      "Rule-based systems depend on predefined patterns and are not equivalent to advanced language models. Future work could add broader intent coverage, safer fallback responses and a more maintainable rule structure.",
  },
  {
    number: "02",
    title: "Iris flower classification",
    category: "Machine Learning / Classification",
    shortDescription:
      "A supervised learning workflow that classifies Iris species from numerical flower measurements.",
    accent: "iris",
    image: "/assets/projects/iris-flower.jpg",
    imageAlt: "Close-up of an Iris flower used as the classification subject",
    tags: ["Python", "scikit-learn", "KNN", "Pandas", "Matplotlib"],
    repoUrl: "https://github.com/allgee-tech/decodelabs-iris-classification",
    overview:
      "The project uses the built-in Iris dataset to explore a complete, reproducible classification workflow from data inspection to model evaluation.",
    problem: "Classifying flower species from measured characteristics.",
    objective: "Implement a supervised machine learning classification workflow.",
    dataset: "Iris flower dataset: four numerical measurements and three species labels.",
    technologies: "Python, scikit-learn, Pandas and Matplotlib.",
    methodology:
      "Inspect the dataset, preserve class proportions during a reproducible train/test split, scale features from the training data, train a classifier, and evaluate its predictions.",
    implementation:
      "The implementation loads Iris with scikit-learn, organizes the measurements in a Pandas DataFrame, and splits the data with 20% reserved for testing, `random_state=42`, and `stratify=y`. `StandardScaler` is fitted on the training features and reused for the test set. A K-Nearest Neighbors classifier with `n_neighbors=5` is then trained on the scaled data.",
    results:
      "The script computes test-set accuracy, prints actual versus predicted labels, generates a confusion matrix, and produces a classification report. The repository does not document a fixed numeric result in a README, so no accuracy score is presented here as a verified portfolio metric.",
    challenges:
      "Keeping preprocessing consistent between training and test data, while making the evaluation output understandable.",
    lessons:
      "Dataset handling, feature scaling, classification, model evaluation and core machine learning workflow design.",
    limitations:
      "The result is based on a small, familiar dataset and a single train/test split. Future work could compare additional classifiers, use cross-validation and report a fuller set of reproducible metrics.",
  },
  {
    number: "03",
    title: "SmartRecommend AI",
    category: "Artificial Intelligence / Recommendation Systems",
    shortDescription:
      "A book recommendation application developed to explore recommendation logic and evaluation.",
    accent: "recommend",
    image: "/assets/projects/smartrecommend-books.jpg",
    imageAlt: "Open book beside a laptop and smartphone representing book discovery",
    tags: ["Python", "Pandas", "Recommendation logic", "Evaluation"],
    overview:
      "SmartRecommend AI explores how recommendation systems can help people discover relevant books through a functional application and measurable evaluation.",
    problem: "Helping users discover books based on recommendation logic.",
    objective: "Build and evaluate a functional recommendation application.",
    technologies: "Python, Pandas and the project’s recommendation and evaluation libraries. The source repository URL and implementation files were not supplied for verification.",
    methodology:
      "The portfolio records the supplied evaluation results as the project’s reported benchmark. The underlying recommendation approaches and experiments should be read from the project source before making more specific technical claims.",
    implementation:
      "The available project brief confirms a functional book recommendation interface. Because a repository URL was not provided, this case study does not infer whether the implementation is content-based, collaborative, hybrid, or based on another approach.",
    results:
      "The supplied evaluation results are shown below. They indicate useful baseline behavior, not perfect or universally relevant recommendations.",
    metrics: [
      ["Precision@K", "0.4000", "The share of recommended items that were relevant."],
      ["Recall@K", "0.6667", "The share of relevant items that the recommendations recovered."],
      ["F1 Score", "0.5000", "A balance between precision and recall."],
      ["Catalogue Coverage", "0.7143", "The proportion of the catalogue surfaced by the system."],
      ["RMSE", "0.4082", "The average size of prediction error, with larger errors weighted more heavily."],
    ],
    challenges:
      "Balancing relevance with catalogue variety, and selecting evaluation measures that describe different parts of recommendation quality.",
    lessons:
      "Recommendation evaluation, metric interpretation and the importance of distinguishing relevance from coverage.",
    limitations:
      "The reported metrics are bounded by the available test data and do not establish perfect recommendations. Add the repository URL and source-level experiment details before publishing a deeper implementation account; future work could also compare baselines and tune the recommendation strategy.",
  },
  {
    number: "04",
    title: "SmartVision AI",
    category: "Computer Vision / Optical Character Recognition",
    shortDescription:
      "A Python OCR application that extracts machine-readable text from uploaded images.",
    accent: "vision",
    image: "/assets/projects/smartvision-ocr.jpg",
    imageAlt: "Phone and handwritten document representing image-to-text capture",
    tags: ["Python", "OpenCV", "Tesseract", "Streamlit"],
    repoUrl: "https://github.com/allgee-tech/Decodelabs_Project_4_SmartVision_AI",
    overview:
      "SmartVision AI combines image preprocessing with Tesseract OCR in a Streamlit interface so users can upload an image, inspect processing stages, review extracted text and download the result.",
    problem: "Turning text inside everyday images into machine-readable content.",
    objective: "Build an approachable OCR workflow and make its output and confidence estimates visible to the user.",
    technologies: "Python, Streamlit, OpenCV, NumPy, Pandas, Tesseract OCR and Pytesseract.",
    methodology:
      "Decode the uploaded image, prepare it through a consistent preprocessing pipeline, run OCR, expose word-level confidence values, and test the workflow against several image conditions.",
    implementation:
      "OpenCV converts the image to grayscale, applies a 5×5 Gaussian Blur, and uses Gaussian adaptive thresholding with block size 11 and constant 2. Pytesseract calls Tesseract with English OCR (`--oem 3 --psm 6`), extracts word-level confidence values, excludes blank and -1 entries, and calculates the average of the remaining valid scores. Streamlit provides upload, preview, result and download interactions.",
    results:
      "Reported testing results show strong confidence on the supplied document-style samples and a clear drop on a real-world photograph. OCR confidence is Tesseract’s estimate, not a guarantee that every recognized word is correct.",
    confidenceResults: [
      ["Printed document", "95.0%"],
      ["Receipt", "93.9%"],
      ["Uneven lighting sample", "95.9%"],
      ["Real WhatsApp photograph", "61.3%"],
    ],
    challenges:
      "Making text extraction resilient to noise, lighting, focus, layout and the difference between generated test samples and real camera photographs.",
    lessons:
      "Image preprocessing, OCR integration, confidence extraction, Streamlit interface design and honest interpretation of model-adjacent output.",
    limitations:
      "OCR quality varies with resolution, focus, contrast, orientation, font and layout. The fixed preprocessing settings and English-only default can miss difficult cases. Future improvements include deskewing, rotation correction, selectable thresholding methods, ground-truth accuracy checks and regression tests.",
  },
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

function CaseStudySection({ title, children }) {
  return (
    <section className="case-study-section">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.classList.add("case-study-open");
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("case-study-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="case-study-overlay" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <article
        className="case-study-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <div className="case-study-topline">
          <span>{project.number} / DECODELABS AI PROJECTS</span>
          <button className="case-study-close" type="button" onClick={onClose} aria-label="Close case study">
            Close <X size={18} />
          </button>
        </div>
        <div className="case-study-hero">
          <div>
            <span className="display-kicker">{project.category}</span>
            <h2 id="case-study-title">{project.title}</h2>
          </div>
          <p>{project.overview}</p>
        </div>
        <div className="case-study-grid">
          <CaseStudySection title="Problem"><p>{project.problem}</p></CaseStudySection>
          <CaseStudySection title="Objective"><p>{project.objective}</p></CaseStudySection>
          {project.dataset && <CaseStudySection title="Dataset"><p>{project.dataset}</p></CaseStudySection>}
          <CaseStudySection title="Technologies"><p>{project.technologies}</p></CaseStudySection>
          <CaseStudySection title="Development methodology"><p>{project.methodology}</p></CaseStudySection>
          <CaseStudySection title="Technical implementation"><p>{project.implementation}</p></CaseStudySection>
          <CaseStudySection title="Results & evaluation">
            <p>{project.results}</p>
            {project.metrics && (
              <div className="metrics-dashboard" aria-label="SmartRecommend AI evaluation metrics">
                {project.metrics.map(([label, value, explanation]) => (
                  <div className="metric-card" key={label}>
                    <span>{label}</span><strong>{value}</strong><small>{explanation}</small>
                  </div>
                ))}
              </div>
            )}
            {project.confidenceResults && (
              <div className="confidence-results" aria-label="SmartVision AI confidence comparison">
                {project.confidenceResults.map(([label, value]) => (
                  <div className="confidence-row" key={label}>
                    <span>{label}</span><strong>{value}</strong>
                    <span className="confidence-bar"><i style={{ width: value }} /></span>
                  </div>
                ))}
              </div>
            )}
          </CaseStudySection>
          <CaseStudySection title="Challenges encountered"><p>{project.challenges}</p></CaseStudySection>
          <CaseStudySection title="Lessons learned"><p>{project.lessons}</p></CaseStudySection>
          <CaseStudySection title="Limitations & future improvements"><p>{project.limitations}</p></CaseStudySection>
        </div>
        {project.repoUrl && (
          <a className="case-study-repo" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            View verified GitHub repository <ArrowUpRight size={17} />
          </a>
        )}
        <button className="case-study-back" type="button" onClick={onClose}>
          <ArrowDown size={16} /> Back to DecodeLabs projects
        </button>
      </article>
    </div>
  );
}

function DecodeLabsCard({ project, onOpen, delay = 0 }) {
  return (
    <Reveal className={`decode-card decode-card-${project.accent}`} delay={delay}>
      <div className="decode-card-art">
        <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
        <span className="decode-card-number">{project.number}</span>
        <span className="decode-card-symbol">{project.accent === "chatbot" ? "?" : project.accent === "iris" ? "✳" : project.accent === "recommend" ? "↗" : "⌁"}</span>
        <span className="decode-card-stamp">DECODELABS / 2026</span>
      </div>
      <div className="decode-card-body">
        <span className="decode-card-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <button className="project-link case-study-trigger" type="button" onClick={() => onOpen(project)}>
          View case study <ArrowUpRight size={17} />
        </button>
      </div>
    </Reveal>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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

      <div className="decode-labs-intro">
        <div>
          <span className="display-kicker">2026 / ARTIFICIAL INTELLIGENCE INDUSTRIAL TRAINING</span>
          <h2>Four projects. One <em>evolving journey</em> into AI.</h2>
        </div>
        <p>
          From rule-based conversations to machine perception, these projects document my practical learning and implementation experience during the DecodeLabs Artificial Intelligence Industrial Training Programme.
        </p>
      </div>
      <div className="decode-project-grid">
        {decodeLabsProjects.map((project, index) => (
          <DecodeLabsCard key={project.number} project={project} onOpen={setSelectedProject} delay={index * 0.04} />
        ))}
      </div>
      <p className="work-note">
        <span>IN PROGRESS, ON PURPOSE.</span>
        More work will appear as I keep making.
      </p>
      {selectedProject && <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
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
    </>
  );
}
