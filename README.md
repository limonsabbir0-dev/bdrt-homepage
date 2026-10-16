# BDRT Holdings — Full Website (Static)

Dark Luxury Editorial concept for the BDRT Premium Homepage Redesign brief, expanded to a full static site.

## How to open
Open `index.html` in any browser. No build step, no server needed. All pages, CSS, JS and images use relative paths, so the whole `full-site/` folder can be moved or zipped as-is.

## File list
- `index.html` — Homepage: Hero (VOXA / VOXA House primary), BDRT intro, Featured Businesses (6 cards), Selected Work, Growing toward 2027, Connect, Footer
- `about.html` — BDRT history + commercial vision + 2027 expansion
- `businesses.html` — Detail for all 6 businesses: iMERGE Advertising, Involia, Academic Elements, VOXA House, VOXA Brand, Emerging Brands & Ventures
- `portfolio.html` — Selected work grid
- `brands.html` — Our Brands: VOXA House, VOXA Brand + Emerging
- `contact.html` — Business inquiry form (front-end only, no backend) + Client Login / Donor Portal as links only, per brief — no login systems
- `styles.css` — Shared stylesheet (charcoal #0E0E0C, cream #F5F0E8, champagne gold #C9A86A, Georgia serif headlines + Inter/Arial body), responsive desktop + mobile
- `script.js` — Mobile menu toggle, smooth scroll (CSS), contact-form demo message only
- `https://images.pexels.com/photos/33989223/pexels-photo-33989223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`, `https://images.pexels.com/photos/19906681/pexels-photo-19906681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1` — Editorial photography (see note below)

## Design
- Header/footer identical across pages. Nav: Home | About | Businesses | Portfolio | Our Brands | Contact + Client Login / Donor Portal buttons.
- Involia subtitle is **"Construction & project execution"** (corrected from the mockup's incorrect label).

## Photography note
Images are Pexels stock placeholders per the brief. **No AI-generated photography was used as final imagery.** Replace `assets/*.jpg` with licensed / client brand photography before launch. Keep filenames or update the `src` references in the HTML files.

## What is NOT included (per brief)
No backend, no login systems, no functioning integrations, no CMS. The contact form shows a demo message and sends nothing.
