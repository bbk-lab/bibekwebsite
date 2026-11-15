import { useEffect, useState, type CSSProperties } from 'react';
import { ArrowDownToLine, ArrowUpRight, Menu, X } from 'lucide-react';
const certificateImage = '/ewb-certificate.jpg';

const sections = [
  ['about', 'Point of view'],
  ['field', 'On site'],
  ['practice', 'Practice'],
  ['research', 'Research'],
  ['service', 'Service'],
  ['contact', 'Contact'],
] as const;

type OngoingSite = {
  id: string;
  image: string | null;
  alt: string;
  caption: string;
};

const ongoingSites: OngoingSite[] = [
  { id: 'site-01', image: null, alt: '', caption: 'Ongoing site · Photo to come' },
  { id: 'site-02', image: null, alt: '', caption: 'In progress · Photo to come' },
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
      <title id="bridge-title">Suspension bridge engineering drawing</title>
      <desc id="bridge-description">A measured line study of a suspension bridge, its towers, cable, deck and hangers.</desc>
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
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }),
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
          <a className="brand" href="#top" aria-label="Bibek Regmi, back to top">BR<span>.</span></a>
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
              <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''}
                onClick={() => setMenuOpen(false)} data-testid={`link-nav-${id}`}>
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
              <p className="eyebrow hero-kicker">Civil engineer · Nepal</p>
              <h1 id="hero-title">Bibek <span>Regmi</span></h1>
              <p className="lede">
                The work is measured in drawings and deadlines. The reason for doing it is people who depend on what we build.
              </p>
              <dl className="hero-meta">
                <div><dt>Today</dt><dd>Site engineering &amp; construction management</dd></div>
                <div><dt>Long view</dt><dd>Resilient, thoughtful infrastructure</dd></div>
              </dl>
              <div className="actions">
                <a className="button primary" href="/Bibek_Regmi_CV.pdf" download data-testid="link-download-cv">
                  <ArrowDownToLine size={16} aria-hidden="true" /> Download CV
                </a>
                <a className="button" href="#contact" data-testid="link-contact">
                  Get in touch <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <p className="hero-footnote">NEPAL ENGINEERING COUNCIL · LICENSED CIVIL ENGINEER</p>
            </div>

            <figure className="sheet">
              <div className="hero-stamp" aria-hidden="true">FIELD<br />TO<br />FUTURE</div>
              <div className="sheet-topline">
                <span>STRUCTURAL STUDY</span><span>BR / 001</span><span>NEPAL</span>
              </div>
              <BridgeDrawing />
              <figcaption>
                <dl className="title-block">
                  <div><dt>Engineer</dt><dd>Bibek Regmi</dd></div>
                  <div><dt>Current role</dt><dd>Site Engineer</dd></div>
                  <div><dt>Education</dt><dd>B.E. Civil Engineering, Pokhara University</dd></div>
                  <div><dt>Practice</dt><dd>Bandan Bhagwati Nirman Sewa Pvt. Ltd.</dd></div>
                  <div><dt>Drawing note</dt><dd>A line can connect a calculation to a community.</dd></div>
                </dl>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="story-band" aria-label="Engineering point of view">
          <div className="wrap">
            <p className="band-label">The through-line</p>
            <p className="band-line">Good construction is a thousand careful decisions, made well before anyone calls it finished.</p>
            <span className="band-mark">27°42′N / 85°19′E</span>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap section-grid">
            <SectionHeading index="01" title="Point of view" />
            <div className="section-body prose">
              <p>
                I’m Bibek, a licensed civil engineer in Nepal. I work where plans meet the realities of a live site: coordinating people, sequencing work, and keeping construction true to its drawings.
              </p>
              <p>
                My experience has moved from site supervision to project engineering and now site engineering. Across each role, I’m drawn to the same question: how do we make infrastructure work reliably for the people who use it?
              </p>
              <p className="story-note">
                Practical on site. Curious about the systems behind it. Always thinking about what lasts.
              </p>
            </div>
          </div>
        </section>

        <section className="section field-section" id="field">
          <div className="wrap">
            <div className="section-grid">
              <SectionHeading index="02" title="On site" />
              <div className="section-body">
                <div className="field-intro">
                  <p>Current work, seen from the ground. These frames are intentionally left open for project photographs.</p>
                  <span className="meta-label">Current practice · Nepal</span>
                </div>
                <div className="photo-grid" role="group" aria-label="Ongoing project photograph placeholders">
                  {ongoingSites.map((site, index) => (
                    <figure className={`photo-frame${site.image ? ' has-image' : ''}`} key={site.id}>
                      {site.image && <img className="site-photo" src={site.image} alt={site.alt} loading="lazy" />}
                      <span className="frame-tag">Site photograph · {String(index + 1).padStart(2, '0')}</span>
                      <figcaption className="frame-caption">{site.caption}</figcaption>
                    </figure>
                  ))}
                </div>
                <p className="field-note">PHOTO FRAMES RESERVED · IMAGES WILL BE ADDED BY BIBEK</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="practice">
          <div className="wrap section-grid">
            <SectionHeading index="03" title="Practice" />
            <div className="section-body">
              <div className="work-focus">
                <article className="focus-card">
                  <span>01 / FIELD</span>
                  <h3>Make the plan usable.</h3>
                  <p>Daily and weekly work planning, site coordination, and managing labour and machinery around the sequence of construction.</p>
                </article>
                <article className="focus-card">
                  <span>02 / DELIVERY</span>
                  <h3>Make the detail hold.</h3>
                  <p>Working with drawings, timelines, budgets and project teams to keep execution aligned with the intended design.</p>
                </article>
              </div>
              <p className="career-note">
                <strong>Current</strong> — Site Engineer, Bandan Bhagwati Nirman Sewa Pvt. Ltd. &nbsp;·&nbsp;
                <strong>Previously</strong> — Construction Project Engineer, Tundi Group; Construction Supervisor Intern, Bodhi Holding.
              </p>
              <div className="education-box">
                <div className="job-head">
                  <h3 className="education-title">B.E. Civil Engineering</h3>
                  <p className="when">Pokhara University · 2023</p>
                </div>
                <p className="org">Nepal College of Information Technology, Kathmandu</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="research">
          <div className="wrap section-grid">
            <SectionHeading index="04" title="Research" />
            <div className="section-body">
              <p className="meta-label">Questions I keep returning to</p>
              <div className="interests">
                <article className="interest">
                  <h3>Resilience &amp; risk</h3>
                  <ul className="plain-list"><li>Infrastructure resilience</li><li>Seismic safety and disaster risk reduction</li></ul>
                </article>
                <article className="interest">
                  <h3>Better ways to build</h3>
                  <ul className="plain-list"><li>Construction management and safety</li><li>BIM, automation and data-informed decisions</li></ul>
                </article>
                <article className="interest">
                  <h3>Material choices</h3>
                  <ul className="plain-list"><li>Sustainable construction</li><li>Life-cycle thinking and embodied carbon</li></ul>
                </article>
              </div>
              <article className="publication">
                <p className="meta-label">Publication · Paper-based article</p>
                <h3>Construction Workforce Development in Nepal: Addressing the Skills Gap</h3>
                <p><a href="https://doi.org/10.5281/ZENODO.13854213" target="_blank" rel="noopener noreferrer">
                  Read the paper · DOI 10.5281/ZENODO.13854213 <ArrowUpRight size={13} aria-hidden="true" />
                </a></p>
              </article>
              <div className="profile-links" aria-label="Research profiles">
                <a href="https://orcid.org/0009-0004-1814-6996" target="_blank" rel="noopener noreferrer" data-testid="link-orcid">ORCID <ArrowUpRight size={13} aria-hidden="true" /></a>
                <a href="https://www.researchgate.net/profile/Bibek-Regmi-7" target="_blank" rel="noopener noreferrer" data-testid="link-researchgate">ResearchGate <ArrowUpRight size={13} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="service">
          <div className="wrap section-grid">
            <SectionHeading index="05" title="Service" />
            <div className="section-body recognition">
              <div className="recognition-copy">
                <p className="meta-label">Recognition · Volunteer service</p>
                <h3>Sharing engineering knowledge where resilience begins.</h3>
                <p>
                  Engineers Without Borders Nepal recognised my contribution to Disaster Risk Reduction workshops: helping develop learning materials, support workshop logistics, and bring a civil engineering perspective to conversations on resilient infrastructure.
                </p>
                <p className="recognition-date">October 2024 — February 2025 · Issued 15 February 2025</p>
              </div>
              <figure>
                <a className="certificate-link" href={certificateImage} target="_blank" rel="noopener noreferrer" aria-label="Open certificate of appreciation from Engineers Without Borders Nepal">
                  <img src={certificateImage} alt="Certificate of Appreciation awarded to Bibek Regmi by Engineers Without Borders Nepal for volunteer contribution to Disaster Risk Reduction workshops, October 2024 to February 2025; issued 15 February 2025." />
                </a>
                <figcaption className="certificate-caption">A note of thanks from EWB Nepal ↗</figcaption>
              </figure>
              <div className="service-short">
                <strong>Community development volunteer · Habitat for Humanity Nepal</strong>
                Shared construction and safety knowledge in community initiatives.
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="wrap section-grid contact-grid">
            <div>
              <SectionHeading index="06" title="Contact" />
              <p className="contact-lede">Let’s talk about what we can build better.</p>
            </div>
            <div className="contact-details">
              <p>For engineering work, research collaboration, or graduate study, email is the best way to reach me.</p>
              <p><a className="email" href="mailto:bibekregmi23@gmail.com" data-testid="link-email">bibekregmi23@gmail.com</a></p>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/bibekregmi23/" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">LinkedIn <ArrowUpRight size={12} aria-hidden="true" /></a>
                <a href="https://www.researchgate.net/profile/Bibek-Regmi-7" target="_blank" rel="noopener noreferrer">ResearchGate <ArrowUpRight size={12} aria-hidden="true" /></a>
                <a href="https://orcid.org/0009-0004-1814-6996" target="_blank" rel="noopener noreferrer">ORCID <ArrowUpRight size={12} aria-hidden="true" /></a>
                <a href="https://doi.org/10.5281/ZENODO.13854213" target="_blank" rel="noopener noreferrer">Publication <ArrowUpRight size={12} aria-hidden="true" /></a>
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
