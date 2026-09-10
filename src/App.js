import React, { useState } from "react";
import picture from "./assets/picture.jpg";

const skills = [
  "Kubernetes / GKE",
  "Docker",
  "OpenTelemetry",
  "SLIs & SLOs",
  "Python",
  "Go",
  "Terraform",
  "Ansible",
  "DataDog / New Relic",
  "Grafana",
  "GitLab CI",
  "Kafka",
  "PagerDuty",
  "AWS",
  "SQL",
  "Bash",
];
const heroStatements = [
  "Keeping Systems Measurable.",
  "Engineering for Uptime.",
  "Building Scalable Systems.",
  "Automating Everything.",
  "Making Reliability Visible.",
];

const getSreExperience = () => {
  const start = new Date(2024, 7, 1);
  const today = new Date();
  let months = (today.getFullYear() - start.getFullYear()) * 12 + today.getMonth() - start.getMonth();
  if (today.getDate() < start.getDate()) months -= 1;

  const roundedMonths = Math.ceil(months / 6) * 6;
  if (roundedMonths < 12) return `${roundedMonths} months`;
  const years = roundedMonths / 12;
  return `${Number.isInteger(years) ? years : years.toFixed(1)} years`;
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroStatement] = useState(
    () => heroStatements[Math.floor(Math.random() * heroStatements.length)],
  );
  const sreExperience = getSreExperience();
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          SJ<span>.</span>
        </a>
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i></i>
          <i></i>
        </button>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>
      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">SRE I / Indeed · India</p>
          <h1>{heroStatement}</h1>
          <p className="intro">
            Hi, I'm Sanil Jalan — a Site Reliability Engineer building
            observable, scalable systems and the tooling that keeps them
            operating well.
          </p>
          <a className="text-link" href="#experience">
            View experience <Arrow />
          </a>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-ring"></div>
          <img className="portrait" src={picture} alt="Sanil Jalan" />
          <p className="portrait-note">
            India
            <br />
            Production minded
          </p>
        </div>
        <p className="scroll-cue">
          Scroll to explore <span>↓</span>
        </p>
      </section>
      <section className="section about" id="about">
        <p className="eyebrow">01 / Operating principles</p>
        <div className="about-grid">
          <h2>
            Reliability is
            <br />
            <em>a feature.</em>
          </h2>
          <div className="about-copy">
            <p>
              I'm a Site Reliability Engineer with {sreExperience} of
              production experience, focused on the intersection of
              availability, developer experience, and pragmatic automation.
            </p>
            <p>
              I make systems easier to understand and safer to change: establish
              useful objectives, expose the signals that matter, and remove the
              toil that slows teams down.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/sanil-jalan/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <Arrow />
            </a>
          </div>
        </div>
      </section>
      <section className="section experience" id="experience">
        <div className="focus-heading">
          <p className="eyebrow">02 / Experience</p>
          <p>Building and operating software since 2016.</p>
        </div>
        <div className="experience-list">
          <article>
            <div className="role-meta">
              <span>Aug 2026 — Present</span>
              <span>Remote / India</span>
            </div>
            <div>
              <h3>Indeed</h3>
              <p className="role">Site Reliability Engineer I</p>
            </div>
            <p>
              Supporting reliable, scalable systems as part of Indeed's
              engineering organisation.
            </p>
          </article>
          <article>
            <div className="role-meta">
              <span>Aug 2024 — Jun 2026</span>
              <span>Manchester, UK</span>
            </div>
            <div>
              <h3>bet365</h3>
              <p className="role">Junior SRE → SRE</p>
            </div>
            <p>
              Promoted in 13 months. Defined SLIs, SLOs and error-budget
              policies for 24/7 services; built OpenTelemetry instrumentation,
              actionable alerting, and operational tooling across Python, Go and
              GCP.
            </p>
          </article>
          <article>
            <div className="role-meta">
              <span>Sep 2023 — Jun 2024</span>
              <span>Cardiff, UK</span>
            </div>
            <div>
              <h3>LIPID MAPS</h3>
              <p className="role">Assistant Web Developer</p>
            </div>
            <p>
              Led full-stack migration of an MRC-backed research platform to
              Laravel, working closely with academic researchers across front-
              and back-end development.
            </p>
          </article>
          <article>
            <div className="role-meta">
              <span>Mar 2020 — Jun 2023</span>
              <span>Remote / USA</span>
            </div>
            <div>
              <h3>Fight LLC</h3>
              <p className="role">Co-Founder &amp; COO</p>
            </div>
            <p>
              Built and scaled a React and Node.js social platform to 500,000+
              users; led four engineers and designed AWS microservice
              infrastructure backed by Elastic Load Balancing.
            </p>
          </article>
          <article>
            <div className="role-meta">
              <span>Jun — Aug 2023</span>
              <span>Cardiff, UK</span>
            </div>
            <div>
              <h3>Cardiff University</h3>
              <p className="role">CUROP Research Intern</p>
            </div>
            <p>
              Designed and deployed a Next.js and SQLite knowledge-modelling
              platform for Privacy by Design research.
            </p>
          </article>
        </div>
      </section>
      <section className="section skills-section">
        <p className="eyebrow">Toolkit</p>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
      <section className="contact section" id="contact">
        <p className="eyebrow">03 / Contact</p>
        <h2>
          Get in <em>touch.</em>
        </h2>
        <p className="contact-copy">
          For professional opportunities or a conversation about reliable
          systems.
        </p>
        <a className="email" href="mailto:saniljalan14@gmail.com">
          saniljalan14@gmail.com <Arrow />
        </a>
        <div className="footer-row">
          <p>© {new Date().getFullYear()} Sanil Jalan</p>
          <div>
            <a
              href="https://github.com/Sanil14"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanil-jalan/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default App;
