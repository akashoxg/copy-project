# 🏗️ Insurance Advisory Platform — Complete Project Blueprint

> **Reference 1:** [Beshak.org](https://www.beshak.org) — India's unbiased insurance advisory platform. Focus: expert consultations, plan recommendations, zero insurer commissions.
> **Reference 2:** [Bimakey.org](https://bimakey.org) — Insurance guide + plan comparison site. Focus: top-5 plan lists per category, proprietary rating methodology, premium comparison tables, WhatsApp/call CTAs, FAQ sections.
> **Goal:** Combine the best of both — Beshak's trust-first positioning + Bimakey's rich content + enhanced modern UI/UX.
> **Stack:** React + Vite + Tailwind CSS + shadcn/ui (Frontend) | Node.js + Express + MongoDB (Backend)

---

## 📌 What This Platform Does

An independent, commission-free insurance advisory website for Indian users that:
1. Publishes **expert-rated plan comparison guides** (like Bimakey) for Health, Term Life, and Motor insurance
2. Shows **premium comparison tables** with real insurer data and a proprietary scoring system
3. Offers **free expert consultations** via call or WhatsApp (like Beshak)
4. Has a **"Book Free Consultation"** CTA throughout — the primary conversion action
5. Builds trust through a **transparent rating methodology** (Feature Rating + Insurer Rating + Premium Rating)

---

## 🎨 Design System

### Color Palette
```
Primary Teal   : #0D9488  — CTAs, active states, highlights (trust + health)
Deep Navy      : #0F172A  — Hero bg, headings, footer
Light Teal     : #CCFBF1  — Badge backgrounds, section tints
Soft White     : #F8FAFC  — Page background
Card White     : #FFFFFF  — Card bg
Warm Amber     : #F59E0B  — Ratings stars, score badges
Success Green  : #10B981  — Checkmarks, positive indicators
Danger Red     : #EF4444  — Cross marks, exclusions
Border Gray    : #E2E8F0  — Dividers, card borders
Text Primary   : #0F172A  — Headings
Text Secondary : #64748B  — Subtext, labels, captions
```

### Typography
```
Display  : "Plus Jakarta Sans" — Hero, section headings (modern, Indian fintech feel)
Body     : "Inter"             — All body text, UI elements
Mono     : "IBM Plex Mono"    — Premium numbers, plan scores in tables
```

### Type Scale
```
Hero H1  : 3.5rem / 800 weight
Section H2: 2.25rem / 700 weight
Card H3  : 1.375rem / 600 weight
Body     : 1rem / 400 weight
Small    : 0.875rem / 400 weight
Label    : 0.75rem / 600 weight / uppercase / tracking-wide
```

### Visual Style
```
Card radius     : rounded-2xl (16px)
Button radius   : rounded-xl (12px)
Badge radius    : rounded-full
Score badge     : circular, 48px, bold number, colored border
Card shadow     : shadow-md hover:shadow-xl transition
Section divider : thin teal gradient line (not full-width hr)
```

---

## 📁 Project Folder Structure

```
/
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── og-image.png
│   ├── src/
│   │   ├── assets/
│   │   │   └── svgs/            # Trust icons, category icons
│   │   ├── components/
│   │   │   ├── ui/              # shadcn/ui base components
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── MobileDrawer.jsx
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── TrustBar.jsx
│   │   │   │   ├── CategoryCards.jsx
│   │   │   │   ├── HowItWorks.jsx
│   │   │   │   ├── ComparisonBanner.jsx   # Beshak-style "Us vs Others" table
│   │   │   │   ├── Testimonials.jsx
│   │   │   │   └── FAQSection.jsx
│   │   │   ├── plans/
│   │   │   │   ├── PlanScoreBadge.jsx     # Circular score display (e.g. 4.7/5)
│   │   │   │   ├── PlanRankTable.jsx      # Top-5 plans ranked table
│   │   │   │   ├── PremiumTable.jsx       # Premium comparison by profile
│   │   │   │   ├── RatingMethodology.jsx  # Transparent scoring breakdown
│   │   │   │   ├── PlanDetailCard.jsx
│   │   │   │   └── ConsultCTA.jsx         # Inline "Book call / WhatsApp" CTA
│   │   │   ├── consultation/
│   │   │   │   ├── BookingModal.jsx
│   │   │   │   ├── WhatsAppButton.jsx     # Floating WhatsApp button
│   │   │   │   └── ConsultBanner.jsx
│   │   │   └── shared/
│   │   │       ├── ScoreStars.jsx
│   │   │       ├── ProConList.jsx
│   │   │       ├── SectionHeader.jsx
│   │   │       ├── Breadcrumb.jsx
│   │   │       └── Skeleton.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── HealthInsurance/
│   │   │   │   ├── index.jsx              # Category landing page
│   │   │   │   ├── Basics.jsx
│   │   │   │   ├── Plans.jsx              # Top-5 health plans page
│   │   │   │   ├── FamilyCoverage.jsx
│   │   │   │   └── BenefitsFeatures.jsx
│   │   │   ├── TermInsurance/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── Basics.jsx
│   │   │   │   ├── Plans.jsx              # Top-5 term plans page
│   │   │   │   ├── ForYourProfile.jsx
│   │   │   │   └── BenefitsFeatures.jsx
│   │   │   ├── MotorInsurance/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── Basics.jsx
│   │   │   │   ├── Plans.jsx
│   │   │   │   ├── ByVehicle.jsx
│   │   │   │   └── BenefitsFeatures.jsx
│   │   │   ├── Experts.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   ├── data/
│   │   │   ├── healthPlans.js             # Static plan data (can be API later)
│   │   │   ├── termPlans.js
│   │   │   ├── motorPlans.js
│   │   │   └── faqs.js
│   │   ├── hooks/
│   │   │   └── useScrollReveal.js
│   │   ├── utils/
│   │   │   ├── formatCurrency.js          # ₹ formatting with en-IN locale
│   │   │   └── constants.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   ├── models/
│   │   │   ├── Lead.js                    # Consultation booking leads
│   │   │   ├── Plan.js
│   │   │   └── FAQ.js
│   │   ├── routes/
│   │   │   ├── leads.routes.js
│   │   │   └── plans.routes.js
│   │   ├── controllers/
│   │   │   ├── leads.controller.js
│   │   │   └── plans.controller.js
│   │   ├── middleware/
│   │   │   ├── validate.js
│   │   │   └── error.js
│   │   └── utils/
│   │       ├── sendEmail.js
│   │       └── sendWhatsApp.js            # WhatsApp notification on lead
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🗂️ Pages & Sections (Detailed)

---

### 1. 🏠 Home Page (`/`)

#### Navbar
- **Logo** (left) — brand name + small lock icon
- **Nav links:** `Life Insurance ▾ | Health Insurance ▾ | Motor Insurance ▾ | Contact Us`
- Each nav link has a **dropdown mega-menu** with sub-pages (Basics, Plans, Benefits, etc.)
- **CTA button** (right): `Buy Insurance` — Primary Teal, pill-shaped
- Sticky with `backdrop-blur-md bg-white/90` on scroll
- Mobile: hamburger → full-screen slide-in drawer with accordion sub-menus

#### Hero Section
- **Left column (text):**
  - Eyebrow label: `INDIA'S ONLY 100% UNBIASED PLATFORM`
  - H1: "Securing Today, Protecting Tomorrow."
  - Sub: "India's leading insurance specialists ensure you choose wisely, buy correctly, and stay protected for years to come."
  - Rating badge: ⭐ 4.7 on Google + "No Hidden Commission" pill badge
  - Two CTAs: `Book A Free Consultation` (Primary Teal) | `Compare Plans →` (ghost/outline)
- **Right column (visual):**
  - Hero illustration (insurance/family SVG) with subtle floating animation
  - Floating trust card: "India's only 100% Unbiased Platform — No ads/commissions from insurers"
- **Background:** Deep Navy gradient, subtle grid overlay pattern

#### Trust Bar (4 horizontal cards)
Displayed below hero in a 4-column grid:
```
[ Fast & Hassle-Free Claim Support ]
[ Trusted Protection for Every Need ]
[ Affordable Premium Plans          ]
[ 24/7 Customer Assistance          ]
```
Each card: teal icon + bold title + 1-line description. Clean white cards with teal left border.

#### Insurance Categories Section
Heading: "Simple Plans. Strong Protection. Better Future."

3 large clickable category cards:
```
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│  🏥 Health           │  │  🛡️ Life / Term       │  │  🚗 Motor            │
│  Insurance          │  │  Insurance           │  │  Insurance          │
│                     │  │                      │  │                     │
│  Basics →           │  │  Basics →            │  │  Basics →           │
│  Top Plans →        │  │  Top Plans →         │  │  Top Plans →        │
│  Family Coverage →  │  │  For Your Profile →  │  │  By Vehicle →       │
│  Benefits →         │  │  Benefits →          │  │  Benefits →         │
└─────────────────────┘  └──────────────────────┘  └─────────────────────┘
```
Each card: icon + category name + 4 sub-page links + `Explore All →` button. Hover lifts card with teal shadow glow.

#### "Speak Directly With an Advisor" Section (3-step How It Works)
Heading: "Speak Directly With an Advisor"
Sub: "Insurance policies can be confusing, but our experts make them simple and easy to understand."

Numbered steps with image + text (alternating layout on desktop, stacked on mobile):

**Step 01 — Your Ideal Insurance Starts Here**
Share details about yourself and family. Our expert shows suitable plans with full transparency on benefits, coverage, and terms.
→ `Book A Free Consultation` button

**Step 02 — Review Your Options with Confidence**
Take time to review with family. Our expert walks through every detail in a follow-up session.
→ `Book A Free Consultation` button

**Step 03 — Stay Protected with Ongoing Expert Support**
Post-purchase support. Our advisors assist with claims, renewals, and policy changes forever.
→ `Book A Free Consultation` button

**Step 04 — Transparency at Every Step**
We compare options, explain every policy transparently, and recommend based on your goals — not commissions.
→ `Book A Free Consultation` button

#### Bimakey vs Others Comparison Section
Heading: "How Bimakey is Different?"
Sub-heading: "Bimakey VS Other Company"

Split comparison — show image cards (like Bimakey's numbered comparison images) + a table:

| | **Our Platform** ✅ | **Other Platforms** ❌ |
|---|---|---|
| Commission from insurers | Zero | Earn commissions + marketing fees |
| Plans covered | All online plans — widest research | Limited by insurer partnerships |
| Expert experience | Up to 20 yrs, claims-qualified | 3-week trained call center agents |
| Claims support | Personal, ongoing, forever | Cold, transactional toll-free |
| Cost to user | 100% Free | Hidden charges |
| Independence | 100% unbiased | Biased by partnerships |

#### Testimonials Section
Heading: "What Clients Are Saying About Us"

10 user testimonial cards in a horizontal auto-scroll carousel (pause on hover):
- User photo (circular avatar)
- Name + City
- ★★★★★ rating
- Review text (2–3 lines max)
- Plan purchased tag (e.g., "Health Insurance")

Users: Rahul Sharma (Mumbai), Priya Singh (Delhi), Amit Verma (Delhi), Nehal Gupta (Pune), Sandeep Kumar (Hyderabad), Anjali Mehta (Ahmedabad), Vikram Patel (Noida), Pooja Roy (Kolkata), Rakesh Nair (Kochi), Sneha Joshi (Jaipur)

Section background: Soft teal tint (`bg-teal-50`)

#### FAQ Section
Heading: "Frequently Asked Questions (FAQs)"

Accordion-style FAQ — expand on click:
1. What is [Platform Name]?
2. What types of insurance do you cover? (Health, Term Life, Life, Motor)
3. How do you find the right policy for me?
4. Is your service free?
5. Are you affiliated with any insurance company?
6. How do I book a consultation?
7. What happens after I book a consultation?
8. Do you help with claims?

#### Full-Width CTA Banner
"Still confused? Book a free consultation now — Zero Charge, Zero Spam."
Two buttons: `📞 Book a Free Call` | `💬 Chat on WhatsApp`
Background: Primary Teal gradient

#### Footer
4-column layout:
- **Brand:** Logo + "India's only 100% unbiased insurance platform" + Google rating badge
- **Life Insurance:** Life Insurance Basics | Term Insurance Plan | For Your Profile | Benefits & Features
- **Health Insurance:** Health Insurance Basics | Health Insurance Plan | Family Coverage | Benefits & Features
- **Motor Insurance:** Motor Basics | Motor Plans | By Vehicle | Benefits & Features
- **Contact:** Contact Us | WhatsApp Us | Book Consultation | Privacy Policy | Terms

Bottom bar: © 2026 [Platform Name] | IRDAI Disclaimer | "No insurer commissions — ever."

---

### 2. 🏥 Health Insurance Plans Page (`/health-insurance/plans`)

This is the most content-rich page — modelled directly on Bimakey's health plan page.

#### Page Structure:

**Hero banner:** "Best Health Insurance in India: Top 5 Plans" + subtitle about finding the right plan

**Overview section (prose):**
Paragraph explaining how Bimakey's 5-point ranking system works and what year's data is used. List the top 5 plans upfront with scores.

**Inline CTA (after overview):**
> "Confused about which plan fits your needs? Instead of comparing everything yourself, talk to an expert and shortlist the right policy in minutes."
> `Book A Free Consultation` | `WhatsApp Us`

**Top 5 Plans Ranked Table:**

```
┌──────────────────────────────────┬──────────────┐
│ Plan Name                        │ Score        │
├──────────────────────────────────┼──────────────┤
│ HDFC Ergo Optima Secure+         │  ⭐ 4.6 / 5  │
│ Care Supreme                     │  ⭐ 4.5 / 5  │
│ Aditya Birla Activ One MAX       │  ⭐ 4.4 / 5  │
│ Niva Bupa ReAssure 2.0 Platinum+ │  ⭐ 4.3 / 5  │
│ SBI Super Health Platinum ∞      │  ⭐ 4.1 / 5  │
└──────────────────────────────────┴──────────────┘
```
Each row: Plan name (linkable), score badge, `View Details` button

**Rating Methodology Section:**
Heading: "Bimakey's Methodology Rating"

3 criteria cards:
- **Feature Rating (45%)** — Room rent, co-pays, waiting periods, bonuses, restoration, consumables
- **Insurer Rating (45%)** — Claim settlement ratio, complaint volume, hospital network, IRDAI data
- **Premium Rating (10%)** — Affordability for benchmark profile (Delhi, 30yr old, ₹10L sum insured)

Displayed as 3 horizontal stat cards with percentage donut indicator

**Premium Comparison Table:**

| Profile | HDFC Ergo Optima Secure+ | Care Supreme | Aditya Birla Activ One MAX |
|---|---|---|---|
| Individual, Age 25 | ₹13,459 | ₹15,111 | ₹10,149 |
| Family Floater 2A (31, 32) | ₹21,128 | ₹21,528 | ₹16,299 |
| Family Floater 2A+1C (35, 34, 5) | ₹26,017 | ₹27,161 | ₹21,478 |
| Family Floater 2A Senior (62, 63) | ₹75,608 | ₹78,923 | ₹66,505 |

- Cells formatted in ₹ with en-IN locale
- Lowest value per row highlighted in teal
- Footnotes below table explaining premium variables

**Why Choose Us (for health insurance):**
3 icon + text reasons: Trusted Guidance | Affordable Premiums | Expert Support

**Second Inline CTA:**
> "There are 30+ health insurance providers in India. Not sure which one suits you?"
> `📞 Book a Free Call` | `💬 WhatsApp Us`

---

### 3. 🛡️ Term Insurance Plans Page (`/life-insurance/plans`)

Same structure as Health plans page but for Term Insurance.

**Top 5 Plans:**
| Plan | Score |
|---|---|
| Axis Max Life Smart Term Plan Plus | 4.7/5 |
| HDFC Life Click2Protect Supreme Plus | 4.4/5 |
| ICICI Prudential iProtect Smart Plus | 4.3/5 |
| Bajaj Life eTouch II | 4.2/5 |
| Aditya Birla Sun Life Super Term Plan | 4.0/5 |

**Rating Methodology for Term (3 criteria):**
- **Insurer Reliability (60%)** — Average IRDAI data (CSR, ASR, Solvency, Complaints) over 3 years
- **Product Features (30%)** — Fine print analysis: premium deferment, terminal illness benefit, flexibility, riders
- **Pricing (10%)** — Quote comparison across ages, genders, smoking habits

**Riders section:** Critical Illness Cover | Waiver of Premium | Disability Benefits (cards with Yes/No/Optional indicators per plan)

**Important note section:** Entry age limits, senior citizens considerations

---

### 4. 🚗 Motor Insurance Plans Page (`/motor-insurance/plans`)

Same structure. Sub-pages include:
- `/motor-insurance/basics` — What is motor insurance, third-party vs comprehensive
- `/motor-insurance/by-vehicle` — Car vs Bike vs Commercial vehicle guide
- `/motor-insurance/benefits` — Zero depreciation, roadside assistance, engine protection

---

### 5. 📚 Basics Pages (per category)

**URL pattern:** `/health-insurance/basics`, `/life-insurance/basics`, `/motor-insurance/basics`

Long-form educational content:
- What is [X] insurance?
- Why do you need it?
- Key terms glossary (accordion)
- Common mistakes to avoid
- How to read your policy document
- Inline CTA after every major section
- Related plan links at bottom

Content formatted as readable article with:
- Section H2/H3 headers
- Bullet lists with teal check icons
- Info boxes (teal border-left callout)
- Warning boxes (amber border-left callout)
- Table of contents (sticky sidebar on desktop)

---

### 6. 👨‍💼 Contact / Book Consultation Page (`/contact-us`)

Two-column layout:

**Left — Contact Info:**
- Phone number (click to call)
- WhatsApp number (click to open WhatsApp Web)
- Email
- Office hours
- Address (if applicable)
- Google Maps embed

**Right — Consultation Booking Form:**
```
Fields:
- Full Name *
- Phone Number * (with +91 prefix)
- Email Address *
- Insurance Type (dropdown): Health | Term Life | Motor | Other
- Message / Your Query (textarea)
- [ ] I agree to be contacted via WhatsApp
- [ Book Free Consultation ] button (primary teal)
```

On submit: show success toast + trigger email/WhatsApp notification to admin

---

### 7. 📋 "For Your Profile" Page (`/life-insurance/for-your-profile`)

Interactive guide helping users pick term insurance based on life stage:

Profile cards (select one):
- 👶 New Earner (22–28 yrs)
- 💑 Newly Married (25–32 yrs)
- 👨‍👩‍👧 Parent with Young Kids (30–40 yrs)
- 🏠 Home Loan Holder (any age)
- 💼 Business Owner (any age)
- 👴 Nearing Retirement (50–60 yrs)

After selection: show recommended plan(s) with rationale + CTA to book consultation.

---

### 8. 👨‍👩‍👧 Family Coverage Page (`/health-insurance/family-coverage`)

- What is a Family Floater plan?
- Individual vs Family Floater comparison table
- How to calculate right sum insured for your family
- Plan recommendations for different family sizes
- Premium examples (2 adults, 2 adults + 1 child, joint parents, etc.)
- Inline consultation CTAs

---

## 🗄️ Database Schema (MongoDB)

### Lead Schema (Primary — consultation bookings)
```js
{
  _id: ObjectId,
  name: String,                    // required
  phone: String,                   // required, +91XXXXXXXXXX
  email: String,
  insuranceType: {
    type: String,
    enum: ['health', 'term', 'motor', 'other']
  },
  message: String,
  whatsappConsent: Boolean,
  source: String,                  // which page/button triggered it
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'closed'],
    default: 'new'
  },
  createdAt: Date
}
```

### Plan Schema
```js
{
  _id: ObjectId,
  name: String,                    // "HDFC Ergo Optima Secure+"
  insurer: String,                 // "HDFC Ergo"
  type: String,                    // 'health' | 'term' | 'motor'
  score: Number,                   // 4.6
  scoreBreakdown: {
    featureRating: Number,         // out of 5
    insurerRating: Number,
    premiumRating: Number
  },
  premiums: [{
    profile: String,               // "Individual, Age 25"
    amount: Number                 // 13459
  }],
  pros: [String],
  cons: [String],
  keyFeatures: [String],
  claimSettlementRatio: Number,    // 98.5
  networkHospitals: Number,
  waitingPeriod: String,
  sumInsuredOptions: [Number],
  externalUrl: String,             // insurer's official page
  isRecommended: Boolean,
  rank: Number,                    // 1–5 for display order
  year: Number,                    // 2026
  updatedAt: Date
}
```

### FAQ Schema
```js
{
  _id: ObjectId,
  question: String,
  answer: String,
  category: String,                // 'general' | 'health' | 'term' | 'motor'
  order: Number
}
```

---

## 🔌 API Endpoints

### Leads (Consultation Bookings)
```
POST   /api/leads                  — Submit consultation form
GET    /api/leads                  — Get all leads (admin protected)
PATCH  /api/leads/:id/status       — Update lead status (admin)
```

**POST /api/leads body:**
```json
{
  "name": "Akash Kumar",
  "phone": "9876543210",
  "email": "akash@email.com",
  "insuranceType": "health",
  "message": "Looking for family floater plan",
  "whatsappConsent": true,
  "source": "health-plans-page"
}
```

**On submit:**
1. Save to MongoDB
2. Send email notification to admin
3. If whatsappConsent: send WhatsApp message to admin with lead details
4. Send confirmation SMS/WhatsApp to user (optional)

### Plans
```
GET    /api/plans                  — Get all plans (?type=health&year=2026)
GET    /api/plans/top/:type        — Get top 5 plans by type
GET    /api/plans/:id              — Get single plan details
```

---

## 📦 Tech Stack & Dependencies

### Frontend
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "tailwindcss": "^3.x",
  "@radix-ui/react-accordion": "latest",
  "@radix-ui/react-dialog": "latest",
  "@radix-ui/react-tabs": "latest",
  "@radix-ui/react-tooltip": "latest",
  "axios": "^1.x",
  "react-hook-form": "^7.x",
  "zod": "^3.x",
  "framer-motion": "^11.x",
  "lucide-react": "latest",
  "react-hot-toast": "^2.x",
  "embla-carousel-react": "^8.x",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x"
}
```

### Backend
```json
{
  "express": "^4.x",
  "mongoose": "^8.x",
  "cors": "^2.x",
  "dotenv": "^16.x",
  "express-validator": "^7.x",
  "nodemailer": "^6.x",
  "helmet": "^7.x",
  "express-rate-limit": "^7.x",
  "morgan": "^1.x"
}
```

### Environment Variables
```env
# Backend
PORT=5000
MONGODB_URI=mongodb+srv://...
ADMIN_EMAIL=your@email.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
WHATSAPP_ADMIN_NUMBER=919876543210   # for lead notifications
CLIENT_URL=http://localhost:5173

# Frontend
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🎯 Key UI Components (Detailed Spec)

### `<PlanRankTable />` 
Displays the top-5 ranked plans table.
```jsx
// Props
{
  plans: [{
    rank: 1,
    name: "HDFC Ergo Optima Secure+",
    score: 4.6,
    detailUrl: "/health-insurance/plans/hdfc-ergo-optima"
  }],
  type: "health" | "term" | "motor"
}

// Renders a table with:
// - Rank number (bold, teal)
// - Plan name (link)
// - Score badge (circular, color-coded: 4.5+ = green, 4.0+ = amber, below = red)
// - "View Details" button
// - "Book Consultation" link
```

### `<PremiumTable />`
Displays premium comparison by user profile.
```jsx
// Props
{
  plans: Plan[],         // max 3 plans for mobile readability
  profiles: [{
    label: "Individual, Age 25",
    amounts: [13459, 15111, 10149]  // one per plan
  }]
}

// Features:
// - Lowest value per row highlighted in teal bg
// - ₹ formatted with en-IN locale (₹13,459)
// - Horizontally scrollable on mobile
// - Footnote section below table
```

### `<RatingMethodology />`
Shows the transparent scoring system.
```jsx
// Renders 3 criteria cards:
// Each card: criterion name + weight % + description
// Visual: semi-circular progress arc showing weight
// Colors: Feature=Teal, Insurer=Navy, Premium=Amber
```

### `<ConsultCTA />`
Inline CTA component used throughout pages.
```jsx
// Variants: 'inline' | 'banner' | 'floating'
// inline: teal info box with text + two buttons
// banner: full-width dark section
// floating: fixed bottom bar on mobile

// Props
{
  variant: 'inline',
  text: "Not sure which plan suits you?",
  phoneNumber: "+919876543210",
  whatsappNumber: "919876543210"
}
```

### `<WhatsAppButton />`
Fixed floating button bottom-right.
```jsx
// Green circle, WhatsApp icon
// Pre-filled message: "Hi, I need help with insurance advice"
// Opens: https://wa.me/{number}?text={encodedMessage}
// On mobile: opens WhatsApp app
// Show tooltip on hover: "Chat with an expert"
// Pulse animation to draw attention
```

### `<BookingModal />`
Modal triggered by all "Book Free Consultation" CTAs.
```jsx
// Contains the full consultation form
// Fields: Name, Phone (+91), Email, Insurance Type, Message, WhatsApp consent
// Validation: react-hook-form + zod
// On submit: POST /api/leads → show success screen
// Success screen: "We'll call you within 24 hours!" + WhatsApp link
```

### `<FAQSection />`
Accordion FAQ component.
```jsx
// Uses shadcn/ui Accordion
// Animated expand/collapse (framer-motion)
// Search filter input (filter questions in real-time)
// Category tabs: All | Health | Term | Motor | General
```

---

## 📱 Responsive Behavior

```
Mobile  (< 768px):
  - Single column layout everywhere
  - Sticky bottom bar: "📞 Call Us | 💬 WhatsApp" 
  - Category dropdown: full-screen modal
  - Premium table: horizontal scroll
  - Plan rank table: card stack (not table)
  - Floating WhatsApp button: 56px circle

Tablet  (768–1024px):
  - 2-column grids
  - Side-by-side How It Works steps
  - Table layout for plan rankings

Desktop (> 1024px):
  - Full layout, max-width 1280px centered
  - Sticky sidebar TOC on content pages
  - 3-column plan comparison
  - Mega dropdown menu in navbar
```

---

## ✨ Enhanced UX Features (Over Both Reference Sites)

### 1. Sticky Bottom Bar (Mobile Only)
Fixed to bottom on all pages:
```
[ 📞 Call Us Free ]   [ 💬 WhatsApp Us ]
```
Teal background, full width, 60px height. Dismissible with X.

### 2. Table of Contents (Desktop, Content Pages)
Sticky left sidebar on all Basics and Plans pages:
- Auto-generated from H2/H3 headings
- Active section highlighted as user scrolls
- Click to jump smoothly

### 3. Score Badge Component
```
   ┌───┐
   │4.6│  ← bold number
   │ /5│  ← colored circle border
   └───┘
   Score
```
Color: green (≥4.5) | amber (≥4.0) | red (<4.0)

### 4. Highlighted Best Value in Premium Table
Lowest premium per profile row gets a `bg-teal-50 font-bold` highlight + "Best Value" chip on hover.

### 5. Inline "Expert Note" Callout Boxes
Throughout content pages, styled callout boxes:
```
┌─────────────────────────────────┐
│ 💡 Expert Note                  │
│ For families with members above │
│ 60, individual plans often work │
│ better than a floater policy.   │
└─────────────────────────────────┘
```
Teal left border, light teal background.

### 6. Plan Score Explanation Tooltip
Hover over any score badge → tooltip explains: "Feature Rating (45%) + Insurer Rating (45%) + Premium Rating (10%)"

### 7. "Last Updated" Badge on Plan Pages
Since insurance plans change yearly:
```
🔄 Last updated: June 2026 | Based on IRDAI 2025–26 data
```
Shown at top of every plans page.

### 8. WhatsApp Pre-fill per Page
WhatsApp CTA URL varies by page context:
- Health plans page → "Hi, I need help choosing a health insurance plan"
- Term plans page → "Hi, I want to compare term insurance plans"
- Contact page → "Hi, I'd like to book a free consultation"

---

## 🔐 Security Checklist

- [ ] Rate limit lead submission: max 5 per IP per hour
- [ ] Validate phone number format (+91 + 10 digits) server-side
- [ ] Sanitize all text inputs (express-validator)
- [ ] Helmet.js headers on all routes
- [ ] CORS: whitelist only your frontend domain in production
- [ ] Admin routes: JWT-protected
- [ ] `.env` in `.gitignore`
- [ ] No sensitive keys in frontend code

---

## 🚀 Development Phases

### Phase 1 — Core Structure (Week 1)
- [ ] Vite + React + Tailwind + shadcn/ui setup
- [ ] Tailwind config: custom colors, fonts (Plus Jakarta Sans + Inter via Google Fonts)
- [ ] Navbar (with mega dropdown) + Footer
- [ ] React Router v6 routes setup
- [ ] Home page: Hero + Trust Bar + Categories

### Phase 2 — Home Page Complete (Week 2)
- [ ] How It Works section (4 steps)
- [ ] Comparison Banner (Us vs Others table)
- [ ] Testimonials carousel (Embla)
- [ ] FAQ Section (Accordion)
- [ ] CTA Banner
- [ ] Floating WhatsApp button
- [ ] Booking Modal (form + validation)

### Phase 3 — Health Insurance Section (Week 3)
- [ ] `/health-insurance/basics` — full long-form content page with TOC
- [ ] `/health-insurance/plans` — Top-5 table + methodology + premium table
- [ ] `/health-insurance/family-coverage`
- [ ] `/health-insurance/benefits`
- [ ] `<ConsultCTA />` component inline on all pages

### Phase 4 — Term + Motor Sections (Week 4)
- [ ] All Term Insurance sub-pages (same structure as health)
- [ ] `/life-insurance/for-your-profile` — profile selector + recommendations
- [ ] All Motor Insurance sub-pages
- [ ] `/motor-insurance/by-vehicle`

### Phase 5 — Backend + Leads (Week 5)
- [ ] Node + Express + MongoDB setup
- [ ] Lead model + routes + controller
- [ ] Email notification on new lead (Nodemailer)
- [ ] WhatsApp admin notification (wa.me API or third-party)
- [ ] Contact page form → API connected
- [ ] All booking modals → API connected
- [ ] Rate limiting

### Phase 6 — Polish + Launch (Week 6)
- [ ] Mobile responsive audit (all pages)
- [ ] Sticky bottom bar (mobile)
- [ ] SEO: meta tags, OG tags, canonical URLs on all pages
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO)
- [ ] Loading skeletons for async data
- [ ] 404 page
- [ ] Deploy: Frontend → Vercel | Backend → Render
- [ ] Domain + SSL

---

## 🌐 Deployment

### Frontend → Vercel
```bash
npm run build         # Output: dist/
# Vercel auto-detects Vite — just connect GitHub repo
# Set env variable: VITE_API_BASE_URL=https://your-backend.onrender.com/api
```

### Backend → Render
```bash
# Build command: npm install
# Start command: node src/server.js
# Add all .env variables in Render dashboard
```

### MongoDB → Atlas
- M0 free tier for development
- Whitelist Render server IP in Atlas Network Access
- Create DB user with read/write on your database only

---

## 📝 Instructions for AI Agent

1. **Stack is React + Vite + Tailwind CSS + shadcn/ui** — do not use Create React App or Next.js
2. **Color variables** — define all colors in `tailwind.config.js` under `theme.extend.colors`, use them as `text-brand-teal`, `bg-brand-navy`, etc.
3. **Fonts** — load Plus Jakarta Sans and Inter from Google Fonts in `index.html`, configure in Tailwind config
4. **Routing** — use React Router v6 with nested routes for each insurance category
5. **Forms** — use react-hook-form + zod for ALL forms. Never use raw useState for form fields
6. **Currency** — always format with: `new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)` → gives ₹13,459
7. **WhatsApp links** — format: `https://wa.me/91XXXXXXXXXX?text=encodeURIComponent("message here")`
8. **Phone links** — format: `tel:+91XXXXXXXXXX`
9. **Plan data** — start with static data in `/src/data/` files (JS objects). Connect to API in Phase 5
10. **Mobile first** — write all Tailwind classes mobile-first, then `md:` and `lg:` overrides
11. **Animations** — use Framer Motion for: page transitions (fade), card hover lift, section reveal on scroll, accordion expand. Keep subtle — no flashy effects
12. **Accordion FAQ** — use shadcn/ui `<Accordion>` component
13. **Carousel** — use Embla Carousel for testimonials
14. **Tables** — premium comparison tables must be horizontally scrollable on mobile: wrap in `overflow-x-auto`
15. **Images** — use placeholder images from `https://ui-avatars.com/api/?name=Rahul+Sharma&background=0D9488&color=fff` for avatars during dev
16. **Score badge** — build as a reusable component with color logic: score >= 4.5 → green, >= 4.0 → amber, < 4.0 → red
17. **Every CTA button** — "Book Free Consultation" should open the `<BookingModal />` component
18. **Lead API** — backend must send email to admin on every new lead submission. Use nodemailer with Gmail SMTP (App Password)
19. **Error handling** — every API call must have try/catch with toast notification on error
20. **Skeletons** — add `<Skeleton />` loading state for any component that fetches data

---

*Blueprint version: 2.0 — Built from live analysis of beshak.org + bimakey.org | June 2026*
