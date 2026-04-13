# PNGToolzRent — Website

## Folder Structure

```
pngtoolzrent/
├── index.html                        ← Page structure & content (HTML only)
├── README.md                         ← This file
└── assets/
    ├── css/
    │   ├── base.css                  ← Colours, fonts, buttons, animations
    │   ├── navbar.css                ← Navigation bar & mobile menu
    │   ├── hero.css                  ← Hero/banner section
    │   ├── tools.css                 ← Tools for Rent section
    │   └── sections.css             ← About, How to Rent, Payment,
    │                                     Contact, Reviews, Footer
    ├── js/
    │   └── main.js                   ← Mobile menu, scroll animations
    └── images/
        ├── logo.png                  ← ★ REPLACE: Site logo
        ├── favicon.png               ← ★ REPLACE: Browser tab icon
        ├── tools/
        │   ├── unlocktool.png        ← ★ REPLACE: UnlockTool logo
        │   ├── tsmtool.png           ← ★ REPLACE: TSM Tool logo
        │   └── androidmultitool.png  ← ★ REPLACE: Android Multi Tool logo
        └── payments/
            ├── bsp.png               ← ★ REPLACE: BSP Bank logo
            ├── kinabank.png          ← ★ REPLACE: Kina Bank logo
            └── cellmoni.png          ← ★ REPLACE: Digicel Cellmoni logo
```

---

## How to Replace Images

All image slots have automatic fallback. If an image file is missing,
the site shows an emoji instead — nothing breaks.

### Site Logo
- File: `assets/images/logo.png`
- Recommended: PNG with transparent background
- Height: ~80px (width scales automatically)
- Used in: navbar + footer

### Tool Logos
- Files: `assets/images/tools/unlocktool.png` etc.
- Recommended: PNG with transparent background, ~200×200px square
- Appears inside the 60×60px logo box on each tool card
- The image auto-scales to fit with padding

### Payment Logos
- Files: `assets/images/payments/bsp.png` etc.
- Recommended: PNG with transparent or white background, ~200×200px square
- Appears inside the 52×52px logo box on each payment card

---

## What to Edit & Where

| What you want to change         | File to open               |
|----------------------------------|----------------------------|
| Colours / fonts / brand tokens   | `assets/css/base.css`      |
| Navbar links or logo size        | `assets/css/navbar.css`    |
| Hero headline, stats, buttons    | `index.html` (Section 1)   |
| About text & pricing table       | `index.html` (Section 2)   |
| Tool names, features, prices     | `index.html` (Section 3)   |
| Tool card layout & styling       | `assets/css/tools.css`     |
| How to Rent steps                | `index.html` (Section 4)   |
| Payment method names             | `index.html` (Section 5)   |
| Contact links (WhatsApp etc.)    | `index.html` (Section 6)   |
| Customer reviews                 | `index.html` (Section 7)   |
| Footer links                     | `index.html` (Section 8)   |
| Mobile menu / animations / JS    | `assets/js/main.js`        |

---

## Updating Contact Links

Search for these placeholders in `index.html` and replace with real URLs:

```
https://wa.me/6757660835          → your WhatsApp number
https://t.me/pngtoolzrent         → your Telegram admin link
https://t.me/pngtoolzrent         → your Telegram channel link (second one)
https://facebook.com/pngtoolzrent → your Facebook page URL
```

---

## Changing Brand Colours

Open `assets/css/base.css` and edit the `:root` variables at the top:

```css
--orange:       #ff8c00;   /* Primary accent — buttons, highlights */
--cyan:         #00c8d4;   /* Secondary accent — coming soon, hover */
--black:        #0a0a0a;   /* Page background */
--dark:         #111111;   /* Alternate section background */
--card-bg:      #151515;   /* Card backgrounds */
```

---

## WordPress Deployment

1. Upload the entire `pngtoolzrent/` folder contents to your WP theme or use
   a static page plugin (e.g. Simply Static, WP2Static).
2. Install **Rank Math SEO** (free) or **Yoast SEO** (free) for the SEO plugin.
3. Submit your sitemap at: Google Search Console → Sitemaps.
4. Set up your Google Business Profile at: business.google.com

---

## SEO Checklist

- [ ] All images have descriptive filenames (already done above)
- [ ] Add `alt` text to any new images you upload
- [ ] Install Rank Math or Yoast SEO plugin on WordPress
- [ ] Connect to Google Search Console
- [ ] Create Google Business Profile (category: Mobile Phone Repair)
- [ ] Add website URL to all social media bios
- [ ] Enable HTTPS / SSL on hosting

---

*© 2026 PNGToolzRent. Mobile Unlocking Tools For Rent in PNG.*
