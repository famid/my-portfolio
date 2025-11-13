# Portfolio Application Context & Reference Guide

**Last Updated:** 2025-11-13 (Main Branch - Production Ready)
**Owner:** Ahsanul Hoque Famid
**Original Template:** Ismailium (boularbahsmail on GitHub)
**Status:** ✅ Production Ready - Deployed to Vercel

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Component Architecture](#component-architecture)
5. [Completed Customizations](#completed-customizations)
6. [Data Files Reference](#data-files-reference)
7. [Styling & Theme Guide](#styling--theme-guide)
8. [Next Steps](#next-steps)
9. [Development Commands](#development-commands)
10. [File Paths Quick Reference](#file-paths-quick-reference)

---

## Project Overview

### About
Professional portfolio website showcasing backend engineering expertise, real-world projects, and technical skills. Built with Next.js and Tailwind CSS.

### Current State
**Status:** ✅ Fully Customized with Real Data

The portfolio now features:
- Real work experience from 4 companies
- 6 production projects (4 professional + 2 open source)
- Technical skills showcase
- Blog section with 3 placeholder posts
- Certifications and education
- Updated contact information
- All placeholder content replaced

### Purpose
Software Engineer portfolio displaying:
- 3+ years professional experience
- Backend expertise (NestJS, FastAPI, AWS)
- Real projects serving 120,000+ users
- Open source contributions
- Technical certifications

### Deployment
- **Platform:** Optimized for Vercel
- **Build Tool:** Next.js with SWC compiler
- **Environment:** Node.js

---

## Tech Stack

### Core Framework
- **Next.js:** 12.3.4 (React framework with SSR/SSG)
- **React:** 18.2.0 (UI library)
- **React DOM:** 18.2.0

### Styling
- **Tailwind CSS:** 3.1.6 (primary styling approach)
- **CSS Modules:** Used for Navbar animations
- **PostCSS:** 8.4.14 with Autoprefixer 10.4.7

### Additional Libraries
- **react-icons:** 4.4.0 (icon library)

### Development Tools
- **ESLint:** 8.19.0 (code linting)
- **SWC:** Fast TypeScript/JavaScript compiler (minification)

---

## Project Structure

```
Software-Developer-Portfolio/
├── components/              # React components
│   ├── Navbar/
│   │   └── index.jsx
│   ├── Hero/
│   │   └── index.jsx
│   ├── Experiences/
│   │   ├── index.jsx
│   │   └── data/
│   │       └── data.js     # ✅ Updated with real data
│   ├── Works/
│   │   ├── index.jsx
│   │   └── data/
│   │       └── data.js     # ✅ Updated with real projects
│   ├── Blog/               # ✅ NEW
│   │   ├── index.jsx
│   │   └── data/
│   │       └── data.js     # 3 placeholder posts
│   ├── Skills/             # ✅ NEW
│   │   └── index.jsx
│   ├── Certifications/     # ✅ NEW
│   │   └── index.jsx
│   ├── Contact/
│   │   └── index.jsx       # ✅ Updated
│   └── Footer/
│       └── index.jsx       # ✅ Updated
├── pages/
│   ├── _app.js
│   ├── index.js            # ✅ Updated with new components & reordered
│   ├── blog/               # ✅ NEW - Dynamic blog routes
│   │   └── [id].js         # UUID-based blog post pages
│   └── api/
│       └── hello.js
├── public/
│   ├── projects/           # ✅ NEW - for project screenshots
│   └── RenderCV_EngineeringResumes_Theme.pdf  # Resume
├── styles/
│   ├── globals.css
│   └── Navbar.module.css
├── .gitignore              # ✅ Updated (added .idea/)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.json
└── package.json
```

---

## Component Architecture

### 1. Navbar Component ✅
**Path:** `components/Navbar/index.jsx`
**Status:** Fully Updated & Vercel Optimized (Main Branch)

**Changes Made:**
- ✅ Added Skills link to navigation
- ✅ Added Certifications link to navigation
- ✅ Updated all links to use full paths (/#section) for cross-page navigation
- ✅ Logo now links to home page (/)
- ✅ Links: Experiences, Skills, Projects, Blog, Certifications, Contact
- ✅ **Vercel Fix:** All anchor tags wrapped with Next.js `<Link>` component
- ✅ Resolved ESLint `@next/next/no-html-link-for-pages` errors

**Navigation Works From:**
- Home page (scroll to section)
- Blog detail pages (navigate to home + scroll to section)

**Technical Implementation:**
- Uses Next.js `Link` component for all internal navigation
- Maintains onClick handlers for mobile menu closure
- Follows Next.js best practices for client-side navigation

---

### 2. Hero Component ✅
**Path:** `components/Hero/index.jsx`
**Status:** Fully Customized

**Changes Made:**
- ✅ Title changed to "Software Engineer"
- ✅ Updated description highlighting backend expertise
- ✅ Added resume link: `/RenderCV_EngineeringResumes_Theme.pdf`
- ✅ Kept GitHub and LinkedIn (removed Twitter)
- ✅ All links open in new tabs

**Current Content:**
- Name: Ahsanul Hoque Famid
- Title: Software Engineer
- Focus: NestJS, FastAPI, AWS, Docker, Microservices
- Links: GitHub, LinkedIn, Resume PDF

---

### 3. Experiences Component ✅ REDESIGNED
**Path:** `components/Experiences/index.jsx`
**Data:** `components/Experiences/data/data.js`
**Status:** Completely Redesigned (Experimental Branch)

**Design:** Card-based layout with 2-column grid (1 column mobile)

**New Features:**
- ✅ Full date ranges (e.g., "January 2025 - Present")
- ✅ Location information for each position
- ✅ Bullet-point achievements (4 per position)
- ✅ Technology stack badges for each role
- ✅ Bordered badge design with hover effects
- ✅ Visual separator between content and tech tags
- ✅ Flexbox layout ensuring aligned tech tags across cards
- ✅ Larger, more expansive cards (2 columns vs previous 3)
- ✅ Better visual hierarchy

**Data Structure:**
- `start_date` & `end_date`: Full date ranges
- `location`: City, Country
- `description`: Array of bullet points (not paragraph)
- `technologies`: Array of tech stack used

**Real Data (4 positions):**
1. **Bit Byte Technology** - Software Engineer (Jan 2025 - Present)
   - Optimized campaign execution (2min→1sec)
   - World Bank EC4J project backend
   - Microservices with RabbitMQ & Redis
   - Tech: NestJS, FastAPI, PostgreSQL, MongoDB, Redis, RabbitMQ, AWS

2. **Relaxy** - Junior Software Engineer (Aug 2023 - Dec 2024)
   - 120,000+ users platform
   - Migrated 25,000+ users (Firestore→MongoDB)
   - 30% cost reduction
   - Tech: NestJS, MongoDB, Firebase, Docker, Payment Gateways, Microservices

3. **Ontik Technology** - Junior Software Developer (Jan 2023 - Jul 2023)
   - Laravel query optimization
   - Daraz-WHM real-time sync
   - N+1 query resolution (60% load reduction)
   - Tech: Laravel, PHP, MySQL, Git, Cron Jobs, API Integration

4. **Bugfix IT BD** - Junior Software Developer (Jun 2021 - Dec 2022)
   - RESTful APIs development
   - Database transactions & locking
   - 10,000+ daily transactions
   - Tech: Laravel, PHP, MySQL, Python, RESTful APIs, Database Optimization

---

### 4. Works Component ✅
**Path:** `components/Works/index.jsx`
**Data:** `components/Works/data/data.js`
**Status:** Fully Customized

**Real Projects (6 total):**

**Professional Projects:**
1. **Relaxy** - Healthcare SaaS (120K users)
2. **Anzaar Lifestyle** - E-commerce (2min→1sec optimization)
3. **ExportBangladesh.org** - Government B2B platform
4. **SSG E-shop** - Enterprise backend

**Open Source:**
5. **OMS Micro-service** - TypeScript microservice
6. **Laravel Hybrid** - PHP framework (4 stars)

**Links:** All projects have working URLs to live sites or GitHub

**Images:** Located in `/public/projects/` (need screenshots)

---

### 5. Blog Component ✅ ENHANCED
**Path:** `components/Blog/index.jsx`
**Data:** `components/Blog/data/data.js`
**Detail Page:** `pages/blog/[id].js`
**Status:** Fully Functional with Reading Feature

**3 Technical Blog Posts:**
1. "Optimizing Campaign Execution: From 2 Minutes to 1 Second"
2. "Migrating 25,000+ Users from Firestore to MongoDB"
3. "Building Scalable Payment Integration with NestJS"

**Features:**
- ✅ UUID-based routing (e.g., `/blog/a7f3b2c1-4d5e-6789-0abc-def123456789`)
- ✅ Full blog content with structured data (paragraphs, headings, code blocks, lists)
- ✅ Static Site Generation (SSG) for optimal performance
- ✅ Professional reading layout with syntax highlighting
- ✅ SEO-friendly with meta tags
- ✅ Shareable URLs for LinkedIn/Twitter
- ✅ Back navigation to home page
- ✅ Responsive design matching portfolio theme

**Blog Detail Page:**
- Category badges
- Publication date and read time
- Author byline
- Proper typography for readability
- Code blocks with sky-blue syntax highlighting
- Structured content rendering (headings, paragraphs, lists, code)

---

### 6. Skills Component ✅ REDESIGNED
**Path:** `components/Skills/index.jsx`
**Status:** Redesigned with Horizontal Categorized List Layout (Experimental Branch)

**Design:**
- ✅ Horizontal categorized list layout (replaced card grid)
- ✅ Category titles aligned right (220px fixed width)
- ✅ Skills displayed as inline rounded badges
- ✅ Subtle border dividers between categories
- ✅ Hover effects on individual skill tags (brighten + scale)
- ✅ Fully responsive (stacks on mobile)
- ✅ Clean, modern, professional appearance

**Categories:**
- **Languages:** TypeScript, JavaScript, Python, PHP, SQL
- **Backend Frameworks:** NestJS, Express.js, FastAPI, Django, Laravel, Node.js
- **Databases:** PostgreSQL, MongoDB, MySQL, Redis
- **Message Queues & Async:** RabbitMQ, BullMQ (Redis), Event-Driven Architecture
- **Cloud & DevOps:** AWS (Lambda, S3, EC2, SQS, CloudWatch), Docker, Nginx, GitHub Actions (CI/CD)
- **Architecture & Design:** Microservices, Serverless, RESTful APIs, API Gateway, Design Patterns

---

### 7. Certifications Component ✅ NEW
**Path:** `components/Certifications/index.jsx`
**Status:** Created with Real Data

**Certifications:**
- Python (Basic) Certificate - HackerRank
- SQL (Basic) Certificate - HackerRank
- Problem Solving (Basic) Certificate - HackerRank

**Education:**
- B.Sc. in Physics, Khulna University (2017-2022)
- GPA: 3.33/4.0

---

### 8. Contact Component ✅
**Path:** `components/Contact/index.jsx`
**Status:** Fully Updated

**Changes Made:**
- ✅ Email: ahsanulhoque721@gmail.com (with mailto: link)
- ✅ Phone: +880 1793851981
- ✅ GitHub and LinkedIn only
- ✅ Removed Codepen and Twitter
- ✅ All links open in new tabs

---

### 9. Footer Component ✅
**Path:** `components/Footer/index.jsx`
**Status:** Fully Updated

**Changes Made:**
- ✅ "John Doe" → "Ahsanul Hoque Famid"
- ✅ Fixed typo: `#ontact` → `#contact`
- ✅ Copyright: 2025
- ✅ Added Blog to navigation
- ✅ GitHub and LinkedIn links only
- ✅ Template credits maintained

---

## Completed Customizations

### ✅ Phase 1: Identity & Content
- [x] Hero section updated with "Software Engineer" title
- [x] Real professional description
- [x] Resume PDF link working
- [x] Social links (GitHub, LinkedIn) updated

### ✅ Phase 2: Professional Experience
- [x] 4 real company positions added
- [x] Real achievements and metrics
- [x] Proper dates and job titles
- [x] All Lorem Ipsum removed

### ✅ Phase 3: Projects Portfolio
- [x] 6 real projects (4 professional + 2 open source)
- [x] Live URLs to all projects
- [x] Real descriptions with tech stacks
- [x] Impact metrics included

### ✅ Phase 4: New Sections
- [x] Skills component created
- [x] Blog component created (3 placeholder posts)
- [x] Certifications component created
- [x] All components added to main page

### ✅ Phase 5: Contact & Navigation
- [x] Contact info updated
- [x] Footer updated
- [x] Navbar includes Blog link
- [x] All navigation links working

### ✅ Phase 6: SEO & Metadata
- [x] Page title updated
- [x] Meta description updated
- [x] All links open in new tabs

### ✅ Phase 7: Bug Fixes
- [x] Fixed Footer contact link typo
- [x] Added .idea/ to .gitignore
- [x] Removed unused social link imports

---

## Data Files Reference

### Experiences Data
**File:** `components/Experiences/data/data.js`
**Status:** ✅ Production Ready

Contains 4 real positions from 2021-2025

### Projects Data
**File:** `components/Works/data/data.js`
**Status:** ✅ Production Ready

Contains 6 real projects with live URLs

### Blog Data
**File:** `components/Blog/data/data.js`
**Status:** ✅ Full Content Ready

Contains 3 complete technical blog posts with:
- UUID-based IDs for routing
- Full article content (structured data)
- Code examples (TypeScript, SQL)
- Real technical insights from actual projects
- 8-12 minute read times

---

## Styling & Theme Guide

### Color Scheme (Updated - Experimental Branch)
```css
Background:     #11162b  (Dark navy blue)
Accent:         sky-500  (Tailwind - #0ea5e9) ← Changed from teal-500
Text Primary:   white
Text Secondary: gray-400, gray-300
Card BG:        sky-900, sky-800 ← Changed from cyan-900, cyan-800
Code BG:        sky-950 (for code blocks in blog)
Border:         sky-800 (dividers, borders)
Hover:          sky-400 (interactive elements)
```

### Typography
- **Font:** 'Roboto' (Google Fonts)
- **Weights:** 100, 300, 400, 500, 700, 900

### Responsive Breakpoints
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+

---

## Experimental Branch Features (New in 2025-11-13)

### Page Section Order (Reordered)
**Previous Order:** Hero → Experiences → Works → Blog → Skills → Certifications → Contact
**New Order:** Hero → Experiences → **Skills** → Works → Blog → Certifications → Contact

**Rationale:** Skills section moved up to appear after Experiences for better portfolio flow:
- "Who I am" (Hero)
- "My experience" (Experiences)
- "My technical skills" (Skills)
- "My projects" (Works)
- "My articles" (Blog)
- "My credentials" (Certifications)
- "Contact me" (Contact)

### Blog Reading Feature
- **Implementation:** UUID-based dynamic routes (`/blog/[id]`)
- **Technology:** Next.js Static Site Generation (SSG)
- **Content:** Full technical articles with code examples, headings, lists
- **URLs:** Each blog post has shareable URL (SEO-friendly)
- **Design:** Professional reading layout with syntax highlighting

### Skills Section Redesign
- **Previous:** 3-column grid of cards
- **New:** Horizontal categorized list layout
- **Improvement:** Cleaner, more scannable, professional appearance

### Color Scheme Update
- **Previous:** Teal/Cyan (#14b8a6)
- **New:** Sky Blue (#0ea5e9)
- **Applied:** Consistently across all components

### Navigation Enhancement
- **Added:** Skills and Certifications to navbar
- **Fixed:** Cross-page navigation (works from blog detail pages)
- **Total Links:** 6 (Experiences, Skills, Projects, Blog, Certifications, Contact)

---

## Deployment & Production Ready

### Branch Workflow
1. **Experimental Branch:** All new features developed and tested
2. **Merged to Main:** 2025-11-13 - Fast-forward merge completed
3. **Pushed to Remote:** Successfully deployed to GitHub main branch

### Vercel Deployment Fix (2025-11-13)

**Issue Encountered:**
ESLint build errors on Vercel deployment:
```
Error: Do not use an `<a>` element to navigate to `/`. Use `<Link />` from `next/link` instead.
See: https://nextjs.org/docs/messages/no-html-link-for-pages
```

**Root Cause:**
- Navbar component used plain `<a>` tags for internal navigation
- Violated Next.js ESLint rule `@next/next/no-html-link-for-pages`
- Build failed on Vercel even though dev server worked locally

**Solution Implemented:**
1. Imported `Link` component from `next/link`
2. Wrapped all internal `<a>` tags with `<Link>` component
3. Maintained all existing:
   - CSS classes and styling
   - onClick handlers for mobile menu
   - title attributes
   - Accessibility features

**Code Example:**
```jsx
// Before (ESLint error)
<a href="/#experiences" className="..." onClick={closeMenu}>
    Experiences
</a>

// After (Fixed)
<Link href="/#experiences">
    <a className="..." onClick={closeMenu}>
        Experiences
    </a>
</Link>
```

**Files Modified:**
- `components/Navbar/index.jsx` - All 7 navigation links updated

**Result:**
- ✅ ESLint errors resolved
- ✅ Build passes on Vercel
- ✅ All navigation functionality preserved
- ✅ Performance improved with Next.js Link prefetching

---

## Next Steps

### Immediate Actions Needed:

1. **Project Screenshots** ⚠️ HIGH PRIORITY
   - Capture screenshots from live websites:
     - relaxy.com.bd
     - anzaarlifestyle.com
     - exportbangladesh.org
     - ssgeshop.com
   - Create/capture GitHub project images
   - Save to `/public/projects/` directory
   - Recommended size: 800x600px
   - Format: JPG or WebP

2. **Blog Content** (Optional)
   - Write actual blog posts
   - Update links in Blog data file
   - Or remove Blog section if not needed

3. **Testing**
   - Run `npm run dev` locally
   - Test all navigation links
   - Verify resume PDF opens
   - Check mobile responsiveness
   - Test all external links

4. **Deployment**
   - Push to GitHub
   - Deploy to Vercel
   - Verify live site works correctly

### Optional Enhancements:

- Add Google Analytics
- Add more blog posts
- Include testimonials section
- Add project filtering
- Implement actual blog pages (not just placeholders)
- Add animations/transitions
- Optimize images further

---

## Development Commands

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Opens at: `http://localhost:3000`

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Lint Code
```bash
npm run lint
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## File Paths Quick Reference

### Components (All Updated - Experimental Branch)
```
components/Navbar/index.jsx          # ✅ Added Skills & Certifications, cross-page navigation
components/Hero/index.jsx            # ✅ Full rewrite
components/Experiences/index.jsx
components/Experiences/data/data.js  # ✅ Real data
components/Works/index.jsx           # ✅ Added link support
components/Works/data/data.js        # ✅ Real projects
components/Blog/index.jsx            # ✅ Links to blog detail pages
components/Blog/data/data.js         # ✅ Full content with UUIDs
components/Skills/index.jsx          # ✅ Redesigned horizontal layout
components/Certifications/index.jsx  # ✅ Real certifications
components/Contact/index.jsx         # ✅ Updated
components/Footer/index.jsx          # ✅ Updated
```

### Pages
```
pages/index.js                       # ✅ Reordered sections (Skills moved up)
pages/blog/[id].js                   # ✅ NEW - Dynamic blog post pages
pages/_app.js
```

### Public Assets
```
public/RenderCV_EngineeringResumes_Theme.pdf  # Resume
public/projects/                              # ⚠️ Add screenshots here
```

### Configuration
```
.gitignore                           # ✅ Updated
next.config.js
tailwind.config.js
```

---

## Key Metrics Showcased

- **120,000+** users on Relaxy platform
- **25,000+** users migrated successfully
- **30%** cost reduction through re-architecture
- **2 minutes → 1 second** campaign optimization
- **3+** years professional experience
- **4** companies
- **6** major projects
- **3** certifications

---

## Important Notes

1. **Resume PDF:** Located at `/public/RenderCV_EngineeringResumes_Theme.pdf` - accessible via `/RenderCV_EngineeringResumes_Theme.pdf`

2. **Project Images:** Directory created at `/public/projects/` - needs actual screenshots

3. **Blog Posts:** Currently placeholders - update or remove as needed

4. **Social Links:** Only GitHub and LinkedIn are active

5. **All Navigation:** Tested and working (Experiences, Projects, Blog, Contact)

6. **External Links:** All open in new tabs with proper security attributes

---

## Summary

**Production Status (Main Branch):**
- ✅ Blog reading feature fully implemented with UUID routing
- ✅ Skills section redesigned with horizontal layout
- ✅ Complete navbar with all sections (6 navigation links)
- ✅ Cross-page navigation working from all pages
- ✅ Color scheme updated to sky blue (#0ea5e9)
- ✅ Section order optimized for better portfolio flow
- ✅ Full blog content with code examples
- ✅ Experiences section redesigned with 2-column card layout
- ✅ Vercel deployment fix applied (Next.js Link component)
- ✅ All ESLint errors resolved
- ✅ Merged experimental → main branch
- ✅ Pushed to remote repository

**Deployment Status:**
- ✅ Code pushed to GitHub main branch
- ✅ Vercel-ready (ESLint compliant)
- ✅ All features tested and building successfully
- ✅ Production ready

**Remaining (Optional):** Add project screenshots to `/public/projects/` 🚀
