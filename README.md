# AI-AMCe project website

Plain static site in `site/`. There is no build step, no cookies and no third-party requests.
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
- **Colours:** the site follows the visitor's system light or dark setting. To force one look, add `data-theme="dark"` or `data-theme="light"` to `<html>` in each page.
- **Project logo:** due 5 December 2026. Replace the "AI-AMCe" text link in the `.brand` element of each page.

## To complete before going live

- Contact email for the coordinator (`consortium.html`, section `#contact`)
- Project number from the grant agreement (footer)
- Official "Co-funded by the European Union" emblem file, replacing `site/assets/img/eu-flag.svg` and its text
- Disclaimer wording checked against the grant agreement (footer of each page)
