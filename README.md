# Shri Param Hans Electrical And Electronics — Website

A complete, production-ready multi-page business website built with **HTML5, CSS3, and vanilla JavaScript only** — no frameworks, no build step. Designed for a local electrical & electronics shop in Dinanagar, Punjab.

## Design Language

**"Circuit Board"** — a dark navy, electric-blue and gold visual identity inspired by the shop's own product world (switchboards, wiring, spec plates). Key motifs:
- Dark navy surfaces with electric-blue glow accents and gold "authorized dealer" highlights
- Animated circuit-trace lines in the hero
- "Spec plate" panels with corner rivets, echoing an MCB/switchboard panel
- Glassmorphism cards, smooth scroll-reveal animations, and hover micro-interactions

Fonts: **Space Grotesk** (display), **Inter** (body), **IBM Plex Mono** (labels/data), loaded from Google Fonts.

## Folder Structure

```
Shri-Param-Hans-Electrical/
├── index.html          Home page
├── about.html           Company story, mission, vision, timeline
├── products.html        10 product categories
├── services.html        6 core services
├── brands.html           14 authorized brands
├── gallery.html          Filterable photo gallery + lightbox
├── projects.html         Residential / commercial / lighting projects
├── contact.html          Contact info, Google Map, contact form
├── faq.html               Accordion FAQ grouped by topic
├── privacy.html           Privacy Policy
├── terms.html             Terms & Conditions
├── assets/
│   ├── css/
│   │   ├── style.css        Design tokens, layout, all core sections
│   │   ├── components.css   Small reusable UI pieces (badges, pills, tables)
│   │   ├── animations.css   Keyframes & motion
│   │   └── responsive.css   Tablet & mobile breakpoints
│   ├── js/
│   │   ├── navbar.js    Sticky header, mobile hamburger menu, active link
│   │   ├── main.js       Smooth scroll, back-to-top, scroll reveal, FAQ accordion, contact form
│   │   ├── counter.js    Animated statistic counters
│   │   ├── gallery.js    Gallery filtering + lightbox
│   │   └── slider.js     Testimonial dots + brand marquee hover-pause
│   └── images/
│       ├── logo/  hero/  products/  gallery/  brands/  projects/
│       (empty — see "Adding Real Photos" below)
└── README.md
```

## Adding Real Photos

The site currently uses styled SVG placeholders instead of photos so it works out of the box with zero broken images. To add real photography:

1. Drop your images into the matching `assets/images/<folder>/` directory.
2. In the relevant HTML file, replace the placeholder `<div class="placeholder-icon">...</div>` or `<div class="plate-frame">...</div>` block with an `<img>` tag, e.g.:
   ```html
   <img src="assets/images/gallery/shop-front-1.jpg" alt="Shop front at Shiv Market, Dinanagar" loading="lazy">
   ```
3. Always include descriptive `alt` text for SEO and accessibility.
4. Recommended sizes: hero banner 1600×1000px, gallery/product photos 800×600px, logo 200×200px (transparent PNG).

## Business Information Used

- **Name:** Shri Param Hans Electrical And Electronics
- **Phone / WhatsApp:** +91 8527074300
- **Address:** Shiv Market, G.T. Road, Near Petrol Pump, Dinanagar, Punjab 143531
- **Hours:** 9:00 AM – 9:00 PM, daily
- **Brands:** Philips, Polycab, Jaquar, Goldmedal, Standard, Orient, KEI, Greatwhite, Veto, Fybrous, Pollar, DEC, Kathan, Lazer

To update any of these, search for the phone number `8527074300` or address text across all HTML files and replace consistently — they appear in the top bar, header, footer, hero, contact page, floating WhatsApp button, and the structured-data (`LocalBusiness`) JSON-LD block in `index.html`.

## Functional Features

- Sticky navigation with scroll shadow
- Mobile hamburger menu with slide-in panel
- Smooth scroll for in-page anchors
- Scroll-reveal animations (`IntersectionObserver`, with a fallback for older browsers)
- Animated statistics counters
- Filterable gallery with keyboard-accessible lightbox (arrow keys + Escape)
- FAQ accordion
- Contact form that assembles a pre-filled WhatsApp message (no backend required)
- Floating WhatsApp button and back-to-top button
- `prefers-reduced-motion` respected throughout

## SEO

Every page includes a unique `<title>`, meta description, meta keywords, canonical URL, Open Graph tags, and semantic HTML (`<header>`, `<main>`, `<footer>`, proper heading hierarchy). `index.html` also includes `ElectronicsStore` (LocalBusiness) structured data (JSON-LD).

**Before going live:** replace `https://www.shriparamhanselectrical.in/` in the canonical/OG tags across all pages with your actual domain.

## Running Locally

No build step is required. Either:
- Open `index.html` directly in a browser, or
- Serve the folder with any static file server, e.g. `python3 -m http.server` from inside the project folder, then visit `http://localhost:8000`.

## Browser Support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Uses CSS custom properties, `backdrop-filter`, and `IntersectionObserver` — all have graceful degradation or wide support.
