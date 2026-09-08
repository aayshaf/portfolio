import { useState, useEffect, useMemo } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    id: "kitchen-tec",
    featured: true,
    title: "Kitchen Tec Business Suite",
    tags: ["Python", "Flask", "React", "TypeScript", "SQLAlchemy", "MySQL"],
    category: "software",
    emoji: "⭐",
    summary:
      "Full-stack business management system built from a written SRS for an SME electrical & mechanical maintenance company.",
    problem:
      "Kitchen Tec Engineering was managing invoices, expenses, payroll, and procurement in spreadsheets and paper records — no single source of truth, no audit trail.",
    approach:
      "Wrote an SRS first, then built a Flask/SQLAlchemy REST API with server-side role-based access control. The React + TypeScript frontend gives each role a scoped view — admin, accounts, operations.",
    challenge:
      "During development the login flow broke inexplicably after switching terminals. Traced it to a .env-loading order conflict: Werkzeug's reloader spawns a child process before the dotenv call, so the child never saw the SECRET_KEY. Fixed by loading env vars at module import time, before the app factory ran.",
    result:
      "Working system covering invoicing with PDF generation, weighted multi-criteria procurement comparison (with plain-language reasoning), Sri Lankan EPF/ETF payroll, and shipment landed-cost tracking. Full pytest suite.",
    codeUrl: "https://github.com/aayshaf/kitchen-tec-business-suite",
    demoLabel: "Watch Demo",
    demoUrl: "#",
    image: "/projects/kitchen-tec-dashboard.png",
    imageAlt: "Kitchen Tec Business Suite dashboard showing invoicing totals, outstanding balances, and recent invoices/expenses",
    screenshots: [
      {
        src: "/projects/kitchen-tec-comparison.png",
        alt: "Weighted multi-criteria supplier comparison with plain-language reasoning for why the top-ranked supplier isn't the cheapest",
        caption: "Procurement comparison with plain-language reasoning",
      },
      {
        src: "/projects/kitchen-tec-invoices.png",
        alt: "Invoices and quotations list with status filters",
        caption: "Invoices & quotations",
      },
    ],
  },
  {
    id: "cleaning",
    featured: false,
    title: "Cleaning Management System",
    tags: ["React", "TypeScript"],
    category: "software",
    emoji: null,
    summary:
      "Booking platform for a cleaning services business. I owned the payment module, invoicing system, and notification module.",
    problem: null,
    approach: null,
    challenge: null,
    result:
      "Payment flows covering advance + balance, cash-on-delivery, pay-after-completion, and refunds. QR-coded booking verification and PDF export for staff. Automated order-confirmation and reminder notifications.",
    codeUrl: "https://github.com/aayshaf/cleaning-management-system",
    demoLabel: null,
    demoUrl: null,
    image: null,
    imageAlt: null,
    screenshots: null,
  },
  {
    id: "blog",
    featured: false,
    title: "Editorial Blog System",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4"],
    category: "software",
    emoji: null,
    summary:
      "Full editorial CMS — public site with category/tag filtering, search, pagination, and threaded comments, plus a complete admin panel.",
    problem: null,
    approach: null,
    challenge: null,
    result:
      "Admin panel covers post editor, category/tag management, and comment moderation. Public site is fully paginated with search and nested comment threads.",
    codeUrl: "https://github.com/aayshaf/editorial-blog-system",
    demoLabel: "Live Demo",
    demoUrl: "#",
    image: null,
    imageAlt: null,
    screenshots: null,
  },
  {
    id: "haptic",
    featured: false,
    title: "Haptic Fury — Motion-Tracking Gaming Glove",
    tags: ["ESP32", "C++", "Embedded Systems", "Bluetooth"],
    category: "hardware",
    emoji: null,
    summary:
      "Wearable gaming glove (ESP32 + MPU6050 + flex sensors over Bluetooth) driving a Unity game with vibration-motor haptic feedback.",
    problem: null,
    approach: null,
    challenge: null,
    result:
      "I owned the entire power subsystem: Li-ion battery + TP4056 charging module + boost converter regulation, a voltage-divider sensing circuit, and real-time battery-percentage firmware on the glove's OLED display.",
    codeUrl: null,
    demoLabel: "Watch Demo",
    demoUrl: "#",
    image: null,
    imageAlt: null,
    screenshots: null,
  },
];

const SKILLS = {
  Languages: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "PHP", "HTML", "CSS"],
  Frontend: ["React", "Vite", "Tailwind CSS", "Bootstrap"],
  Backend: ["Flask", "SQLAlchemy", "REST APIs"],
  Databases: ["MySQL", "SQLite", "MongoDB"],
  "Hardware & Embedded": ["ESP32", "C++", "Circuit Design", "Embedded Firmware"],
  Tools: ["Git & GitHub", "Xero", "Microsoft Excel (Advanced)"],
  Testing: ["pytest", "Jest"],
};

const CERTIFICATIONS = [
  {
    title: "Xero Certified Associate — Level 1",
    issuer: "Xero",
    date: "May 2026",
    icon: "📜",
  },
  {
    title: "Certificate in Python for Beginners",
    issuer: "University of Moratuwa Open Learning Platform",
    date: "2024",
    icon: "🐍",
  },
  {
    title: "Certificate in Web Development for Beginners",
    issuer: "University of Moratuwa Open Learning Platform",
    date: "2024",
    icon: "🌐",
  },
];

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#09090F]/95 backdrop-blur border-b border-[#222230]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-semibold text-[#EDEAE4] tracking-tight"
        >
          FA
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#7B7B8E] hover:text-[#EDEAE4] transition-colors duration-200 font-body"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/Farhath_Aaysha_CV.pdf"
            download
            className="text-sm px-4 py-2 bg-[#6EDFC8] text-[#09090F] font-semibold rounded font-body hover:bg-[#8EEBD6] transition-colors duration-200"
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#7B7B8E] hover:text-[#EDEAE4]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#222230] bg-[#09090F]/98 backdrop-blur px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#7B7B8E] hover:text-[#EDEAE4] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Farhath_Aaysha_CV.pdf"
            download
            className="self-start text-sm px-4 py-2 bg-[#6EDFC8] text-[#09090F] font-semibold rounded mt-1"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 max-w-6xl mx-auto"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-xs text-[#6EDFC8] tracking-widest uppercase mb-6">
          Available for internship · 2026
        </p>
        <h1 className="font-display text-6xl md:text-8xl font-semibold text-[#EDEAE4] leading-[0.95] mb-6">
          Farhath
          <br />
          <span className="italic font-light text-[#6EDFC8]">Aaysha</span>
        </h1>
        <p className="font-body text-base md:text-lg text-[#7B7B8E] max-w-xl leading-relaxed mb-4">
          IT & Management undergraduate at the University of Moratuwa building full-stack
          applications and practical business systems. I combine software development with
          hands-on experience in finance, operations, and business processes.
        </p>
        <p className="font-body text-sm md:text-base text-[#EDEAE4] border-l-2 border-[#6EDFC8] pl-4 mb-10 leading-snug">
          Currently seeking: Software Engineering / Full-Stack Development internship opportunities.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/aayshaf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#222230] text-[#EDEAE4] text-sm font-medium rounded hover:border-[#6EDFC8] hover:text-[#6EDFC8] transition-all duration-200"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/farhath-aaysha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#222230] text-[#EDEAE4] text-sm font-medium rounded hover:border-[#6EDFC8] hover:text-[#6EDFC8] transition-all duration-200"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
          <a
            href="/Farhath_Aaysha_CV.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 bg-[#6EDFC8] text-[#09090F] text-sm font-semibold rounded hover:bg-[#8EEBD6] transition-colors duration-200"
          >
            <DownloadIcon />
            Download CV
          </a>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#6EDFC8]" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <div>
          <p className="font-mono text-xs text-[#6EDFC8] tracking-widest uppercase mb-4">02 / About</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#EDEAE4] leading-tight">
            More than<br />
            <span className="italic font-light">just the code</span>
          </h2>
        </div>
        <div className="space-y-5 font-body text-[#ABABBA] text-base leading-relaxed">
          <p>
            Most software engineering candidates can build the system. Fewer can sit in
            the room where it will be used, understand the real workflow, and write the
            requirements before writing a line of code. That's the combination I bring.
          </p>
          <p>
            My degree at the University of Moratuwa covers software engineering alongside
            IT management — systems analysis, database design, software project management.
            In parallel, I spent time as an Accounts Assistant and Operations Coordinator
            at Kitchen Tec Engineering: invoicing, e-banking, bookkeeping, procurement,
            and import coordination across suppliers.
          </p>
          <p>
            That experience is why my main project starts with a written SRS, models
            real Sri Lankan EPF/ETF payroll rules, and explains procurement decisions
            in plain language rather than just showing a lowest-price field.
          </p>
          <p>
            I'm currently studying CA Sri Lanka and CMA Sri Lanka alongside my degree —
            because automating a finance workflow you don't understand produces an
            automated mistake.
          </p>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const highlights = [
    {
      label: "Full-Stack Development",
      detail: "React, TypeScript, Flask, REST APIs",
      icon: "⬡",
    },
    {
      label: "Database & Systems",
      detail: "SQLAlchemy, MySQL, SQLite, MongoDB",
      icon: "⬡",
    },
    {
      label: "Business Systems",
      detail: "Invoicing, procurement, payroll, financial workflows",
      icon: "⬡",
    },
    {
      label: "Embedded Systems",
      detail: "ESP32, sensors, C++, power management",
      icon: "⬡",
    },
  ];

  return (
    <section id="highlights" className="py-16 border-y border-[#222230]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs text-[#6EDFC8] tracking-widest uppercase mb-8">
          03 / Technical Highlights
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#222230]">
          {highlights.map((h) => (
            <div key={h.label} className="bg-[#09090F] p-6">
              <p className="font-display text-base font-semibold text-[#EDEAE4] mb-2">
                {h.label}
              </p>
              <p className="font-mono text-xs text-[#6EDFC8] leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] px-2 py-1 bg-[#1A1A24] text-[#6EDFC8] border border-[#222230] rounded-sm tracking-wide">
      {label}
    </span>
  );
}

function CaseStudy({ project }: { project: (typeof PROJECTS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#222230] bg-[#111118] rounded overflow-hidden">
      <div className="p-8 md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <p className="font-mono text-xs text-[#6EDFC8] uppercase tracking-widest mb-2">
              Featured Project
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#EDEAE4]">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-4 py-2 border border-[#222230] text-[#EDEAE4] rounded hover:border-[#6EDFC8] hover:text-[#6EDFC8] transition-all"
              >
                View Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="text-xs px-4 py-2 bg-[#6EDFC8] text-[#09090F] font-semibold rounded hover:bg-[#8EEBD6] transition-colors"
              >
                {project.demoLabel}
              </a>
            )}
          </div>
        </div>

        <p className="font-body text-[#ABABBA] text-base leading-relaxed mb-6 max-w-2xl">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        {project.image && (
          <img
            src={project.image}
            alt={project.imageAlt ?? ""}
            className="w-full rounded border border-[#222230] mb-6"
            loading="lazy"
          />
        )}

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-mono text-xs text-[#6EDFC8] hover:text-[#8EEBD6] transition-colors"
        >
          <span>{open ? "Collapse" : "Read case study"}</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#222230] p-8 md:p-10">
          {project.screenshots && (
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {project.screenshots.map((s) => (
                <figure key={s.src}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full rounded border border-[#222230]"
                    loading="lazy"
                  />
                  <figcaption className="font-mono text-[10px] text-[#7B7B8E] mt-2 tracking-wide">
                    {s.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: "Problem", text: project.problem },
              { label: "Approach", text: project.approach },
              { label: "A Challenge I Solved", text: project.challenge },
              { label: "Result", text: project.result },
            ].map((item) =>
              item.text ? (
                <div key={item.label}>
                  <p className="font-mono text-xs text-[#6EDFC8] uppercase tracking-widest mb-3">
                    {item.label}
                  </p>
                  <p className="font-body text-[#ABABBA] text-sm leading-relaxed">{item.text}</p>
                </div>
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <div className="border border-[#222230] bg-[#111118] rounded overflow-hidden flex flex-col hover:border-[#333345] transition-colors duration-200">
      {project.image && (
        <img
          src={project.image}
          alt={project.imageAlt ?? ""}
          className="w-full aspect-video object-cover object-top border-b border-[#222230]"
          loading="lazy"
        />
      )}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="font-display text-xl font-semibold text-[#EDEAE4] mb-2">
            {project.title}
          </h3>
          <p className="font-body text-[#ABABBA] text-sm leading-relaxed">{project.summary}</p>
        </div>
        <div className="flex-1">
          <p className="font-body text-[#7B7B8E] text-xs leading-relaxed">{project.result}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        <div className="flex gap-2 pt-2 border-t border-[#1A1A24]">
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#7B7B8E] hover:text-[#6EDFC8] transition-colors"
            >
              View Code →
            </a>
          ) : (
            <span className="text-xs text-[#444455]">No public repo (university project)</span>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} className="text-xs text-[#7B7B8E] hover:text-[#6EDFC8] transition-colors ml-auto">
              {project.demoLabel} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

type Filter = "all" | "software" | "hardware";

function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const featured = PROJECTS.find((p) => p.featured)!;
  const others = useMemo(() => {
    return PROJECTS.filter((p) => !p.featured && (filter === "all" || p.category === filter));
  }, [filter]);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <p className="font-mono text-xs text-[#6EDFC8] tracking-widest uppercase mb-4">
            04 / Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#EDEAE4] leading-tight">
            What I've<br />
            <span className="italic font-light">shipped</span>
          </h2>
        </div>
      </div>

      <CaseStudy project={featured} />

      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-display text-xl font-semibold text-[#EDEAE4]">Other Projects</h3>
          <div className="flex gap-1 border border-[#222230] rounded overflow-hidden">
            {(["all", "software", "hardware"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono text-xs px-3 py-1.5 capitalize transition-colors duration-150 ${
                  filter === f
                    ? "bg-[#6EDFC8] text-[#09090F] font-medium"
                    : "text-[#7B7B8E] hover:text-[#EDEAE4]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {others.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-[#222230]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs text-[#6EDFC8] tracking-widest uppercase mb-4">
          05 / Skills
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#EDEAE4] mb-12 leading-tight">
          Technologies &<br />
          <span className="italic font-light">tools</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <p className="font-mono text-xs text-[#6EDFC8] uppercase tracking-widest mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-body text-xs px-3 py-1 bg-[#1A1A24] text-[#ABABBA] border border-[#222230] rounded-sm hover:border-[#6EDFC8] hover:text-[#6EDFC8] transition-all duration-150 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-3 border border-[#6EDFC8]/30 bg-[#6EDFC8]/5 rounded px-5 py-3">
          <span className="font-mono text-xs text-[#6EDFC8] uppercase tracking-widest">
            Currently Learning
          </span>
          <span className="w-px h-4 bg-[#222230]" />
          <span className="font-body text-sm text-[#EDEAE4]">Power BI</span>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-[#222230]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs text-[#6EDFC8] tracking-widest uppercase mb-4">
          06 / Experience
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#EDEAE4] mb-12 leading-tight">
          Where I've<br />
          <span className="italic font-light">worked</span>
        </h2>

        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
          <div>
            <p className="font-mono text-xs text-[#7B7B8E]">2023 – 2024</p>
          </div>
          <div className="border-l border-[#222230] pl-8">
            <h3 className="font-display text-2xl font-semibold text-[#EDEAE4] mb-1">
              Accounts Assistant & Operations Coordinator
            </h3>
            <p className="font-mono text-xs text-[#6EDFC8] mb-5">Kitchen Tec Engineering</p>
            <ul className="space-y-2 font-body text-[#ABABBA] text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#6EDFC8] mt-0.5">→</span>
                Structured digital records for 100+ invoices and quotations, creating the paper trail my later software project was designed to automate.
              </li>
              <li className="flex gap-3">
                <span className="text-[#6EDFC8] mt-0.5">→</span>
                Managed e-banking and payment processing, including multi-currency supplier transactions and import coordination.
              </li>
              <li className="flex gap-3">
                <span className="text-[#6EDFC8] mt-0.5">→</span>
                Bookkeeping and payroll — the real workflows behind the EPF/ETF calculations in Kitchen Tec Business Suite.
              </li>
              <li className="flex gap-3">
                <span className="text-[#6EDFC8] mt-0.5">→</span>
                Purchasing and procurement coordination across domestic and international suppliers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 border-t border-[#222230]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs text-[#6EDFC8] tracking-widest uppercase mb-4">
          07 / Certifications
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#EDEAE4] mb-12 leading-tight">
          Certified &<br />
          <span className="italic font-light">studying</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.title}
              className="border border-[#222230] bg-[#111118] rounded p-6 hover:border-[#333345] transition-colors"
            >
              <p className="text-2xl mb-4">{c.icon}</p>
              <h3 className="font-display text-base font-semibold text-[#EDEAE4] mb-1 leading-snug">
                {c.title}
              </h3>
              <p className="font-body text-xs text-[#7B7B8E] mb-1">{c.issuer}</p>
              <p className="font-mono text-xs text-[#6EDFC8]">{c.date}</p>
            </div>
          ))}
        </div>

        <div className="border border-dashed border-[#222230] rounded p-6">
          <p className="font-mono text-xs text-[#444455] uppercase tracking-widest mb-2">
            Also studying
          </p>
          <p className="font-body text-sm text-[#7B7B8E]">
            CA Sri Lanka · CMA Sri Lanka · Power BI (in progress)
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-[#222230]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs text-[#6EDFC8] tracking-widest uppercase mb-4">
          08 / Contact
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#EDEAE4] mb-4 leading-tight">
          Let's<br />
          <span className="italic font-light">talk</span>
        </h2>
        <p className="font-body text-[#ABABBA] text-base max-w-md mb-12">
          Open to internship opportunities, project collaborations, and conversations
          about software that actually understands the business it's built for.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:far.aysha12@gmail.com"
            className="flex items-center gap-3 px-6 py-4 border border-[#222230] rounded hover:border-[#6EDFC8] transition-all group"
          >
            <span className="font-mono text-xs text-[#6EDFC8]">✉</span>
            <div>
              <p className="font-mono text-xs text-[#7B7B8E] uppercase tracking-widest">Email</p>
              <p className="font-body text-sm text-[#EDEAE4] group-hover:text-[#6EDFC8] transition-colors">
                far.aysha12@gmail.com
              </p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/farhath-aaysha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 border border-[#222230] rounded hover:border-[#6EDFC8] transition-all group"
          >
            <LinkedinIcon />
            <div>
              <p className="font-mono text-xs text-[#7B7B8E] uppercase tracking-widest">LinkedIn</p>
              <p className="font-body text-sm text-[#EDEAE4] group-hover:text-[#6EDFC8] transition-colors">
                farhath-aaysha
              </p>
            </div>
          </a>
          <a
            href="https://github.com/aayshaf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 border border-[#222230] rounded hover:border-[#6EDFC8] transition-all group"
          >
            <GithubIcon />
            <div>
              <p className="font-mono text-xs text-[#7B7B8E] uppercase tracking-widest">GitHub</p>
              <p className="font-body text-sm text-[#EDEAE4] group-hover:text-[#6EDFC8] transition-colors">
                aayshaf
              </p>
            </div>
          </a>
        </div>

        <p className="font-body text-xs text-[#444455] mt-8">
          Maggona, Sri Lanka · References available on request.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#222230] py-6 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="font-mono text-xs text-[#444455]">Farhath Aaysha · 2026</p>
        <p className="font-mono text-xs text-[#444455]">
          Built with React + TypeScript + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090F] text-[#EDEAE4]">
      <Navbar scrolled={scrolled} />
      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
