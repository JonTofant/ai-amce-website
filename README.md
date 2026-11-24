# AI-AMCe project website

Plain static site in `site/`. There is no build step and no cookies.
Upload the contents of `site/` to any web host. To preview locally:

```bash
python3 -m http.server 8123 --directory site
```

## Common updates

- **Dates and milestones:** edit `site/assets/js/schedule.js`. The Milestones page and the home page
  "Coming up" list are drawn from it, and statuses follow today's date.
- **News:** copy an `<article class="post">` block in `site/news.html`, newest first, and update the
  "Latest news" section in `site/index.html`.
- **Results:** edit `site/results.html` as outputs become available.
- **Logos:** replace the file in `site/assets/logos/`, then update the file name in the pages that use it
  (`index.html` and `consortium.html`). TalTech's file is white, so its tile has the `reversed` class.
- **Colours:** the site follows the visitor's system light or dark setting. The `--band` colours match the banner backgrounds, so change them together.
- **EU emblem:** `site/assets/img/eu-funded.png` (POS) and `eu-funded-dark.png` (NEG) are the official English "Funded by the European Union" files from the Commission's download centre, only scaled down. Do not edit them.
- **Visitor statistics:** GoatCounter (cookieless, no consent banner needed) counts visits for the WP5 KPI of
  at least 1,000 unique visitors. Dashboard: https://ai-amce.goatcounter.com. The script tag is in the
  `<head>` of every page; copy it into any new page.
- **Hosting:** GitHub Pages publishes `site/` on every push to `main` that changes it
  (`.github/workflows/pages.yml`). Address: https://ai-amce.feri.um.si (CNAME to `jontofant.github.io`, set up by RC FERI; the custom domain is
  set in the repository's Pages settings).
- **Privacy page:** `site/privacy.html` describes GoatCounter, GitHub Pages hosting and the contacts. Update it
  (and its "Last updated" date) if you add any tool that handles visitor data, and have it checked by the UM data
  protection officer (dpo@um.si).
- **Search engines:** the site is registered in Google Search Console (verified with
  `site/google1f58336fcafd866f.html`; do not delete it). When you add a page, add it to `site/sitemap.xml` and
  give it a `<link rel="canonical">` like the others.
- **Project logo:** the main page banner is `logo-banner.webp` (light mode) and `logo-banner-dark.webp` (dark mode) in `site/assets/img/`. The header uses `logo-header.webp` and `logo-header-dark.webp`, the AI-AMCe wordmark on a transparent background.


