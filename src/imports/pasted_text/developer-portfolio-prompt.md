# Figma Make Prompt — Farhath Aaysha Developer Portfolio

Paste this whole brief into Figma Make as your starting prompt. It's built directly from your real CV, GitHub repos, and project work — every link, tech tag, and blurb below is accurate as of today, so what you generate should need styling tweaks, not fact-checking.

## Goal

A one-page (or lightly multi-page) developer portfolio for a Software Engineering internship search. A recruiter should be able to open it and, in under 30 seconds, answer: who is she, what can she build, what technologies does she know, what has she actually shipped, and where's the code. No animation-heavy fluff — the site itself should read as clean, well-engineered work, because it *is* a portfolio piece in itself.

## Tech stack

React + TypeScript + Tailwind CSS. Deploy to Vercel or Netlify (both are zero-config for a Vite/React app — connect the GitHub repo and it auto-deploys on every push, which is worth mentioning in interviews as its own small CI/CD story). Skip GitHub Pages unless you want the extra routing config; Vercel/Netlify are simpler for this stack.

## Navigation

Home | About | Technical Highlights | Projects | Skills | Experience | Certifications | Contact

Sticky navbar with a **Download CV** button on the right — plus a second Download CV button on the Home section itself. Repeating it costs nothing and it's the one action a recruiter is most likely to want immediately.

---

## 1. Home

- Name: **Farhath Aaysha**
- Tagline: **IT & Management Undergraduate | Aspiring Software Engineer**
- Hero intro — keep this punchy, not the full paragraph (save detail for About):
  > IT & Management undergraduate at the University of Moratuwa building full-stack applications and practical business systems. I combine software development with hands-on experience in finance, operations, and business processes.
- Status line, right under the intro: **Currently seeking: Software Engineering / Full-Stack Development internship opportunities.** This is the single most important line on the page — it tells a recruiter exactly why they're looking at the site, immediately, without needing to read a cover letter first.
- Buttons: **GitHub** (github.com/aayshaf), **LinkedIn** (linkedin.com/in/farhath-aaysha), **Download CV**.

## 2. About

Cover the combination that makes you distinct, not a generic bio — this is where the detail trimmed from the Home intro belongs:

- Software engineering — full-stack web (Python/Flask + React/TypeScript) and one embedded systems project.
- IT & Management coursework — systems analysis, database design, software project management.
- Real financial operations experience — Accounts Assistant & Operations Coordinator at Kitchen Tec Engineering (invoicing, e-banking, bookkeeping, procurement/import coordination).
- Currently studying CA Sri Lanka and CMA Sri Lanka alongside your degree.

This combination (build software *and* understand the business/finance processes it's automating) is your actual differentiator — make sure the About section says that explicitly, not just lists the four things separately.

## 3. Technical Highlights

A compact, scannable strip between About and Projects — four short lines, not a paragraph, so a recruiter can absorb it in a glance before deciding whether to read further:

- **Full-Stack Development** — React, TypeScript, Flask, REST APIs
- **Database & Systems** — SQLAlchemy, MySQL, SQLite, MongoDB
- **Business Systems** — Invoicing, procurement, payroll, financial workflows
- **Embedded Systems** — ESP32, sensors, C++, power management

## 4. Projects — the most important section

Give Kitchen Tec Business Suite a **Featured** treatment — larger card, top of the section, maybe full-width — since it's the one project that shows business understanding + backend + frontend + database + real workflows all at once. The other three sit below under "Other Projects" at a smaller, equal size.

For every project: screenshot(s), the problem it solves, your specific contribution, technologies, key features, and two links — **View Code** (GitHub) and **Live Demo** if it's deployed, or **Watch Demo** (a short screen recording) if it isn't. A 30–60 second screen recording of Kitchen Tec Business Suite in particular would be worth the effort — it's your strongest piece and static screenshots undersell an app with real workflows (login roles, procurement comparison, PDF generation) to click through.

### Featured

**Kitchen Tec Business Suite** ⭐
Full-stack business management system built from a written SRS for an SME electrical & mechanical maintenance company — invoicing, expense tracking, weighted multi-criteria procurement comparison with plain-language "why not cheapest" reasoning, Sri Lankan payroll (EPF/ETF), and shipment landed-cost tracking. Flask/SQLAlchemy REST API behind a React/TypeScript frontend, with server-side role-based access control, PDF invoice generation, and a pytest suite.
Tech: Python, Flask, SQLAlchemy, React, TypeScript
View Code: github.com/aayshaf/kitchen-tec-business-suite · Watch Demo: (30–60s screen recording)

Consider a short expandable **case-study format** for this one instead of just a feature list: Problem → Your Approach → A Challenge You Solved → Result. The challenge could be the login bug you actually diagnosed and fixed (a `.env`-loading order issue with the Werkzeug reloader) — a genuinely good debugging story, and it previews exactly how you'd talk about the project in an interview. Keep this expanded treatment to the featured project only.

### Other Projects

**Cleaning Management System** (Group Project)
A booking platform for a cleaning services business. Designed and built the payment module (advance-plus-balance, cash-on-delivery, pay-after-completion, refund flows), the invoicing system (QR-coded booking verification, staff PDF export), and the notification module (order confirmations, status alerts, automated reminders).
Tech: React, TypeScript
View Code: github.com/aayshaf/cleaning-management-system

**Editorial Blog System**
A full editorial blog CMS — a public site with category/tag filtering, search, pagination, and threaded comments, paired with a complete admin panel (dashboard, post editor, category/tag management, comment moderation).
Tech: React 19, TypeScript, Vite, Tailwind CSS v4
View Code: github.com/aayshaf/editorial-blog-system · Live Demo: (once deployed to Vercel/Netlify)

**Haptic Fury — Motion-Tracking Haptic Gaming Glove** (Group Project, university hardware course)
A wearable motion-tracking gaming glove (ESP32 + MPU6050 + flex sensors over Bluetooth) that drives a Unity game with vibration-motor haptic feedback. Owned the entire battery and power management subsystem: Li-ion battery + TP4056 charging module + boost converter regulation, a voltage-divider sensing circuit, and the real-time battery-percentage firmware shown on the glove's OLED display.
Tech: ESP32, C++, Embedded Systems
Watch Demo: a short video or photos of the physical glove (no public repo — university hardware project)

Add subtle **project filtering** by tag (Software / Hardware, or by tech stack) since you now have both kinds — this doubles as a small, real feature to point to in an interview ("I built the filtering with useState/useMemo, no library").

## 5. Skills

Organize visually (icon grid or tagged pills, not a wall of text):

- **Languages:** Python, Java, TypeScript, JavaScript, SQL, PHP, HTML, CSS
- **Frontend:** React, Vite, Tailwind CSS, Bootstrap
- **Backend:** Flask, SQLAlchemy, REST APIs
- **Databases:** MySQL, SQLite, MongoDB
- **Hardware & Embedded:** ESP32, C++, circuit design, embedded firmware *(don't drop this — Haptic Fury is one of your featured projects, so the skills section should back it up)*
- **Tools:** Git & GitHub, Xero, Microsoft Excel (Advanced)
- **Testing:** pytest, Jest

Give **Currently Learning** its own small, visually separate block rather than folding it into the list above — it reads more like an "actively growing" signal that way than a buried bullet:

> **Currently Learning:** Power BI

Only add something here once you've actually started it — right now that's just Power BI. Once you begin Docker/GitHub Actions, this block can grow into something like "Currently Exploring: Docker · CI/CD · GitHub Actions" — phrasing it as "exploring" rather than listing them as skills shows growth without overstating where you actually are with them.

## 6. Experience

**Accounts Assistant & Operations Coordinator — Kitchen Tec Engineering** (2023–2024). Keep this — it's what makes your "understands the business, not just the code" angle credible rather than asserted. Structured digital records for 100+ invoices/quotations, e-banking and payment processing, purchasing/import coordination across suppliers.

## 7. Certifications

- Xero Certified Associate — Level 1 (certified May 2026)
- Certificate in Python for Beginners — University of Moratuwa Open Learning Platform
- Certificate in Web Development for Beginners — University of Moratuwa Open Learning Platform
- *(space reserved for a Power BI certificate once that's done)*

## 8. Contact

Keep it simple: Email (far.aysha12@gmail.com), LinkedIn, GitHub. Optionally a lightweight contact form (Formspree or a mailto: link — no need for a backend just for this).

**Leave academic references off the public site.** Your CV has a References section with Dr. Ranathunga's and Ms. Upeksha's direct phone numbers and emails — that's fine on a CV you hand to one recruiter at a time, but publishing their personal contact details on a public webpage that anyone can find isn't something to do without asking them first. If you want a references nod here at all, just write "References available on request."

Same logic for your own details: use city/country ("Maggona, Sri Lanka") if you mention location at all, not your full street address — a public, search-indexed site is a different exposure level than a CV PDF you hand to one company.

---

## Before you publish the link: polish GitHub itself

The portfolio gets someone interested; your GitHub is what proves you actually built it — so it's worth five minutes per repo before you share the site:

- Pin your 3–4 strongest repositories on your GitHub profile.
- Each one needs a real README: what it does, tech stack, setup instructions, features, screenshots, and — for the Cleaning Management group project — a clear note on which parts were your own contribution.

A polished portfolio linking to a repo with no README undoes a lot of the portfolio's work.

## A few additions worth the small extra effort

- **Dark/light mode** — genuinely easy in Tailwind (`dark:` variants) and reads as polish.
- **Responsive design** — non-negotiable; test on a phone-width viewport before calling it done.
- **Favicon + page title + meta description** — five-minute task, easy to forget, immediately visible in a browser tab and in any link preview when you share the URL.
- **Open Graph tags** (og:title, og:description, og:image) — this is what makes the link look like an actual card with a preview image instead of bare text when you paste it into LinkedIn, WhatsApp, or an email.
- **Alt text on every screenshot** — accessibility, and it's the kind of detail a technical reviewer notices.
- **A plain custom 404 page** — costs almost nothing to add in a Vite/React router setup, and a broken link landing on a blank white error page looks worse than it should for a "this is my engineering work" site.
- **Subtle animation only** — a fade-in on scroll is enough; skip parallax/particle effects entirely. This is the single easiest way to blow the "30-second read" budget.
- Optional, skip if short on time: a small **GitHub activity widget** (GitHub's own stats-card image embeds, no backend needed) — a nice-to-have signal of ongoing activity, not something to chase if it eats into finishing the core sections.

## Keep the scope honest

Don't spend two weeks on this. Ship a clean, working, honest version of the sections above first — the finished, deployed site with a real URL is worth more in an application than an unfinished, fancier one. Docker + GitHub Actions for the deployment pipeline is a good *next* project once this is live, not a blocker to launching it.
