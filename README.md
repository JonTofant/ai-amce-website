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
- **EU emblem:** `site/assets/img/eu-cofunded.png` and `eu-cofunded-dark.png` are the official English "Co-funded by the European Union" files from the Commission's download centre, only scaled down. Do not edit them.
- **Visitor statistics:** GoatCounter (cookieless, no consent banner needed) counts visits for the WP5 KPI of
  at least 1,000 unique visitors. Dashboard: https://jontofant.goatcounter.com. The script tag is in the
  `<head>` of every page; copy it into any new page.
- **Hosting:** GitHub Pages publishes `site/` on every push to `main` that changes it
  (`.github/workflows/pages.yml`). Current address: https://jontofant.github.io/ai-amce-website/
- **Project logo:** the main page banner is `logo-banner.webp` (light mode) and `logo-banner-dark.webp` (dark mode) in `site/assets/img/`. The header uses `logo-header.webp` and `logo-header-dark.webp`, the AI-AMCe wordmark on a transparent background.

## To complete before going live

1. **Project number** from the grant agreement, in the form `2026-1-SI01-KA220-HED-000…`, in the footer.
   `KA220-HED-0E425335` is only the application form ID.
2. **Link previews.** Once the domain is known, add these two lines below the other `og:` tags in each page,
   with the real domain and that page's file name:
   `<meta property="og:url" content="https://DOMAIN/index.html">` and
   `<meta property="og:image" content="https://DOMAIN/assets/img/og-image.jpg">`.
   Social networks ignore an `og:image` without the full address.
3. **Consortium approval of the logo.** The logo and visual identity are UNI's WP5 task (due 5 December 2026),
   with the approval procedure agreed at the kick-off.
4. **Combined promotional event.** The site shows it together with the SAUM special session (Serbia,
   April 2029). The application has it as a separate event led by STU in Slovakia. Confirm which is right
   and update `site/assets/js/schedule.js`.
5. **Disclaimer wording** in the footer, checked against the grant agreement.
6. **Record of consent.** The people in the kick-off photo and the Management Board members named on the site
   have agreed verbally. Get a short written confirmation from each (an email reply is enough) and keep it with
   the project records, not in this repository.
