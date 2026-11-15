import { useEffect, useState, type CSSProperties } from 'react';
import { ArrowDownToLine, ArrowUpRight, Menu, X } from 'lucide-react';

const sections = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['research', 'Research'],
  ['education', 'Education'],
  ['skills', 'Skills'],
  ['service', 'Service'],
  ['contact', 'Contact'],
] as const;

const jobs = [
  {
    title: 'Site Engineer',
    date: 'July 2025 to present',
    org: 'Bandan Bhagwati Nirman Sewa Pvt. Ltd.',
    current: true,
    points: [
      'Develop detailed plans, timelines, and budgets',
      'Decide the daily work plan',
      'Manage labour and machinery',
      'Ensure construction follows drawings',
      'Prepare weekly and daily work schedules',
    ],
  },
  {
    title: 'Construction Project Engineer',
    date: 'May 2024 to July 2025',
    org: 'Tundi Group, Kathmandu',
    points: [
      'Developed detailed plans, timelines, and budgets',
      'Collaborated with architects and engineers on project designs',
      'Assigned tasks to subcontractors and monitored performance to ensure quality standards',
      'Maintained accurate project records',
      'Managed contracts with subcontractors and suppliers',
    ],
  },
  {
    title: 'Construction Supervisor Intern',
    date: 'August 2023 to February 2024',
    org: 'Bodhi Holding Pvt. Ltd., Bhairahawa, Lumbini',
    points: [
      'Conducted daily site inspections to ensure adherence to safety regulations',
      'Monitored construction progress, communicated updates, and identified potential problems or delays',
      'Assigned tasks to subcontractors and monitored performance to ensure quality standards',
      'Ensured materials conformed to industry standards and provided technical guidance to workers',
    ],
  },
  {
    title: 'Final Year Project, Team Leader',
    date: 'September 2021 to July 2022',
    org: 'Pokhara University, Nepal College of Information Technology (Group NCIT_CIVIL04)',
    points: [
      'Led a team of 4 and reported to the supervisor weekly by email and in person',
      'Conducted detailed cost estimation of the project',
      'Designed the road using Smart Road software',
      'Tested the model routinely, analyzed faults, and resolved them',
      'Studied every research paper relevant to the project',
    ],
  },
];

const interests = [
  {
    heading: 'Resilience and risk',
    items: ['Risk Management', 'Infrastructure Resilience', 'Seismic Resilience and Disaster Risk Reduction'],
  },
  {
    heading: 'Construction management',
    items: ['Construction Safety Management', 'Impact on Workforce Dynamics'],
  },
  {
    heading: 'Digital construction',
    items: [
      'Building Information Modeling (BIM)',
      'Robotic Process Automation (RPA)',
      'Data-Driven Decision-Making and Automation in Construction (RPA, Python)',
    ],
  },
  {
    heading: 'Sustainability and environment',
    items: [
      'Sustainable Construction and Low-Carbon Building Materials',
      'Life Cycle Assessment (LCA) and Embodied Carbon of Structures',
      'Environmental Impact Assessment (EIA) in Infrastructure Projects',
    ],
  },
];

function BridgeDrawing() {
  const hangers: [number, number][] = [
    [151.7, 111.4], [173.3, 128.9], [195, 142.5], [216.7, 152.2],
    [238.3, 158.1], [260, 160], [281.7, 158.1], [303.3, 152.2],
    [325, 142.5], [346.7, 128.9], [368.3, 111.4],
    [55, 150], [465, 150], [80, 130], [440, 130], [105, 110], [415, 110],
  ];

  return (
    <svg className="bridge-svg" viewBox="0 0 520 310" role="img" aria-labelledby="bridge-title bridge-description">
      <title id="bridge-title">Suspension bridge, engineering field drawing</title>
      <desc id="bridge-description">
        A dimensioned line drawing of a suspension bridge with twin towers, main cable, deck, and vertical hangers.
      </desc>
      <line className="draw" style={{ '--delay': '0s' } as CSSProperties} x1="10" y1="230" x2="510" y2="230" />
      <line className="draw tower" style={{ '--delay': '.2s' } as CSSProperties} x1="130" y1="230" x2="130" y2="84" />
      <line className="draw tower" style={{ '--delay': '.35s' } as CSSProperties} x1="390" y1="230" x2="390" y2="84" />
      <path className="draw cable" style={{ '--delay': '.55s' } as CSSProperties} d="M30 170 L130 90 Q260 230 390 90 L490 170" />
      <line className="draw deck" style={{ '--delay': '.8s' } as CSSProperties} x1="30" y1="230" x2="490" y2="230" />
      {hangers.map(([x, y], index) => (
        <line
          className="draw fine"
          key={`${x}-${y}`}
          style={{ '--delay': `${0.95 + index * 0.045}s` } as CSSProperties}
          x1={x}
          y1={y}
          x2={x}
          y2="230"
        />
      ))}
      <line className="draw dimension" style={{ '--delay': '1.8s' } as CSSProperties} x1="130" y1="276" x2="390" y2="276" />
      <line className="draw dimension" style={{ '--delay': '1.8s' } as CSSProperties} x1="130" y1="266" x2="130" y2="286" />
      <line className="draw dimension" style={{ '--delay': '1.8s' } as CSSProperties} x1="390" y1="266" x2="390" y2="286" />
      <text x="260" y="267" textAnchor="middle">MAIN SPAN</text>
      <text x="20" y="299">FIELD NOTE / 01</text>
      <text x="500" y="299" textAnchor="end">NEPAL</text>
    </svg>
  );
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="section-index">{index} / FIELD NOTES</p>
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observed = sections
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    observed.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="top" id="top">
        <div className="wrap top-row">
          <a className="brand" href="#top" aria-label="Bibek Regmi, back to top">
            BR<span>.</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-menu"
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
          <nav id="main-nav" className={`nav${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
                data-testid={`link-nav-${id}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Civil engineer · Nepal</p>
              <h1 id="hero-title">Bibek <span>Regmi</span></h1>
              <p className="lede">
                Licensed civil engineer connecting the detail of the site with the bigger work of building
                safer, more resilient and sustainable infrastructure.
              </p>
              <dl className="hero-meta">
                <div><dt>Practice</dt><dd>Site engineering &amp; construction management</dd></div>
                <div><dt>Looking ahead</dt><dd>MS in Construction Management · 2027 intake</dd></div>
              </dl>
              <div className="actions">
                <a className="button primary" href="/Bibek_Regmi_CV.pdf" download data-testid="link-download-cv">
                  <ArrowDownToLine size={16} aria-hidden="true" /> Download CV
                </a>
                <a className="button" href="#contact" data-testid="link-contact">
                  Get in touch <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

            <figure className="sheet">
              <div className="sheet-topline">
                <span>STRUCTURAL STUDY</span>
                <span>BR / 001</span>
                <span>2026</span>
              </div>
              <BridgeDrawing />
              <figcaption>
                <dl className="title-block">
                  <div><dt>Engineer</dt><dd>Bibek Regmi</dd></div>
                  <div><dt>Licence</dt><dd>Nepal Engineering Council</dd></div>
                  <div><dt>Degree</dt><dd>B.E. Civil Engineering, Pokhara University, 2023</dd></div>
                  <div><dt>Current role</dt><dd>Site Engineer, Bandan Bhagwati Nirman Sewa</dd></div>
                  <div><dt>Next horizon</dt><dd>MS in Construction Management, 2027 intake</dd></div>
                </dl>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap section-grid">
            <SectionHeading index="01" title="About" />
            <div className="section-body prose">
              <p>
                I am a licensed civil engineer in Nepal with a Bachelor of Engineering in Civil Engineering
                from Pokhara University. I currently work as a Site Engineer, planning the daily work,
                managing labour and machinery, and checking that construction follows the drawings.
              </p>
              <p>
                Before this I worked as a construction project engineer and a construction supervisor intern,
                and I volunteer with Engineers Without Borders Nepal on disaster risk reduction workshops. My
                research interests sit between structures, construction management, and the environment:
                BIM, risk management, construction safety, and sustainable, resilient infrastructure.
              </p>
              <p>
                I am applying for a master's degree in Construction Management starting in 2027, and I welcome
                conversations about research collaboration.
              </p>
              <p className="story-note">
                From daily site plans to long-term resilience, the through-line in my work is practical
                engineering that serves people and place.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="wrap section-grid">
            <SectionHeading index="02" title="Experience" />
            <ol className="section-body timeline">
              {jobs.map((job, index) => (
                <li className={`job${job.current ? ' current' : ''}`} key={job.title} data-testid={`job-${index}`}>
                  <div className="job-head">
                    <h3>{job.title}</h3>
                    <p className="when">{job.date}</p>
                  </div>
                  <p className="org">{job.org}</p>
                  <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="research">
          <div className="wrap section-grid">
            <SectionHeading index="03" title="Research" />
            <div className="section-body">
              <h3 className="subheading">Questions worth building toward</h3>
              <div className="interests">
                {interests.map((interest) => (
                  <div className="interest" key={interest.heading}>
                    <h3>{interest.heading}</h3>
                    <ul className="plain-list">
                      {interest.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <article className="publication">
                <p className="meta-label">Publication · Paper-based article</p>
                <h3>Construction Workforce Development in Nepal: Addressing the Skills Gap</h3>
                <p>
                  <a href="https://doi.org/10.5281/ZENODO.13854213" target="_blank" rel="noopener noreferrer">
                    DOI 10.5281/ZENODO.13854213 <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </p>
              </article>
              <div className="profile-links" aria-label="Research profiles">
                <a href="https://orcid.org/0009-0004-1814-6996" target="_blank" rel="noopener noreferrer" data-testid="link-orcid">
                  ORCID <ArrowUpRight size={13} aria-hidden="true" />
                </a>
                <a href="https://www.researchgate.net/profile/Bibek-Regmi-7" target="_blank" rel="noopener noreferrer" data-testid="link-researchgate">
                  ResearchGate <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="wrap section-grid">
            <SectionHeading index="04" title="Education" />
            <div className="section-body">
              <div className="education-box">
                <div className="job-head">
                  <h3 className="education-title">Bachelor of Engineering in Civil Engineering</h3>
                  <p className="when">June 2023</p>
                </div>
                <p className="org">Pokhara University, Nepal College of Information Technology (N.C.I.T), Kathmandu, Nepal</p>
                <p>Minor: Environmental Impact Assessment / Trail Suspension Bridge</p>
              </div>
              <div className="affiliations">
                <h3 className="subheading">Professional affiliations</h3>
                <ul className="plain-list">
                  <li>Nepal Engineering Council: Licensed Engineer</li>
                  <li>Nepal Engineering Association: Member</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="wrap section-grid">
            <SectionHeading index="05" title="Skills" />
            <dl className="section-body skills">
              <div><dt>Building analysis</dt><dd>E-TABS</dd></div>
              <div><dt>Modeling</dt><dd>AutoCAD 3D</dd></div>
              <div><dt>Road design</dt><dd>Smart Road</dd></div>
              <div><dt>Programming</dt><dd>Python for cost estimation, schedule analysis, and data visualization</dd></div>
              <div><dt>BIM and automation</dt><dd>Python (Revit API / pyRevit, Dynamo scripting)</dd></div>
              <div><dt>Operating systems</dt><dd>Windows, macOS X</dd></div>
              <div><dt>Languages</dt><dd>Nepali (native), English (fluent), Hindi (fluent)</dd></div>
            </dl>
          </div>
        </section>

        <section className="section" id="service">
          <div className="wrap section-grid">
            <SectionHeading index="06" title="Service" />
            <div className="section-body">
              <article className="volunteer">
                <div className="job-head">
                  <h3>Disaster Risk Reduction Workshops</h3>
                  <p className="when">October 2024 to February 2025</p>
                </div>
                <p className="org">Engineers Without Borders (EWB) Nepal</p>
                <ul>
                  <li>Helped create educational materials that explain DRR concepts, tools, and practices</li>
                  <li>Assisted with workshop logistics, such as scheduling, venue setup, and material distribution</li>
                  <li>Provided civil engineering expertise in discussions on resilient infrastructure and design</li>
                </ul>
              </article>
              <article className="volunteer">
                <div className="job-head">
                  <h3>Community Development Initiatives Volunteer</h3>
                  <p className="when">July 2023</p>
                </div>
                <p className="org">Habitat for Humanity Nepal</p>
                <ul>
                  <li>Advised on best practices for materials and techniques to ensure structural integrity during construction</li>
                  <li>Helped coordinate project timelines, resources, and teams</li>
                  <li>Trained local volunteers and community members in basic construction techniques and safety practices</li>
                  <li>Facilitated discussions with community members to understand their needs and bring their feedback into planning</li>
                </ul>
              </article>
              <article className="volunteer">
                <div className="job-head">
                  <h3>Tutor</h3>
                  <p className="when">August to September 2023</p>
                </div>
                <p className="org">Triyog High School, Kathmandu</p>
                <ul>
                  <li>Assisted high school students with geometry, pre-calculus, and calculus</li>
                  <li>Developed quizzes to help students understand mathematics material</li>
                </ul>
              </article>
              <div className="activity-list">
                <h3 className="subheading">Activities</h3>
                <ul className="plain-list">
                  <li>Volunteer Coordinator, Food Bank (2022 to present): organized weekly food distribution events with a team of 15 volunteers</li>
                  <li>Debate Club Member (2021 to present): 2nd place, regional competition, 2023</li>
                  <li>YouTube content creator and guitarist (2020 to present)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="wrap section-grid contact-grid">
            <div>
              <SectionHeading index="07" title="Contact" />
              <p className="contact-lede">Good infrastructure starts with thoughtful conversations.</p>
            </div>
            <div className="contact-details">
              <p>For research collaboration, graduate study, or engineering work, email is the best way to reach me.</p>
              <p><a className="email" href="mailto:bibekregmi23@gmail.com" data-testid="link-email">bibekregmi23@gmail.com</a></p>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/bibekregmi23/" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">LinkedIn <ArrowUpRight size={12} aria-hidden="true" /></a>
                <a href="https://www.researchgate.net/profile/Bibek-Regmi-7" target="_blank" rel="noopener noreferrer">ResearchGate <ArrowUpRight size={12} aria-hidden="true" /></a>
                <a href="https://orcid.org/0009-0004-1814-6996" target="_blank" rel="noopener noreferrer">ORCID <ArrowUpRight size={12} aria-hidden="true" /></a>
                <a href="/Bibek_Regmi_CV.pdf" download>CV (PDF) <ArrowDownToLine size={12} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-row">
          <p>© {new Date().getFullYear()} Bibek Regmi · Civil Engineer, Nepal</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
