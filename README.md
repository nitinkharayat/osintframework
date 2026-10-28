# Fieldnotes — Open-source OSINT & Security Tools

A dependency-free, static directory of **75 open-source OSINT and security tools** across eight fields. The design uses a restrained dark field-journal aesthetic: soft rounded surfaces, subtle atmospheric gradients, handwritten/cursive accents, and different muted accent tones for each field. A brief animated loading screen introduces each page. Tool entries include commands, usage notes, install/access guidance, documentation and repository links.

## Dark theme, loading screen, and category-specific animated artwork

- Every category now has its own local SVG illustration in `assets/`; reconnaissance uses a scanning camera lens, scanning uses radar, web testing uses a browser/code scan, cryptography opens a lock, network analysis moves packet markers across a graph, forensics sweeps an evidence file with a magnifier, frameworks animates a relationship graph, and utilities combines a blinking terminal cursor with a rotating gear.
- Homepage cards use the corresponding illustration, and each category page opens with a short animated loading screen followed by a smooth reveal. The loading animation respects reduced-motion preferences. The interface uses rounded, capsule-like controls and soft, uneven card corners rather than sharp rectangular blocks. There is no shared camera animation across categories.
- The vector files are bundled locally, crisp at any scale, and need no third-party image host. Their SVG animation respects reduced-motion preferences in supporting browsers.
- These are original decorative vector illustrations rather than screenshots of the tools themselves; each tool’s official website, documentation and source repository remain linked in its details.

## What changed in this version

- Plain home page with eight clear category choices.
- Eight separate category pages: `recoo.html`, `scanning.html`, `web-testing.html`, `cryptography.html`, `network-analysis.html`, `forensics.html`, `frameworks.html`, and `utilities.html`.
- Each field page has a different visual identity and context-specific note/method.
- Every tool expands into a guide with a quick-start command or access path, a copy button, a short usage routine, installation notes, official site, documentation, and source-code repository.
- Homepage search links directly to the matching tool in its category page.
- Open-source-first curation. Where a project also offers a hosted or commercial edition, that distinction is noted rather than treating the editions as identical.
- No backend, framework, telemetry, account, database, API key, or remote font dependency.

## Run locally

You can open `index.html` in a browser. For best results, run a local HTTP server from this folder:

```bash
python3 -m http.server 8080
```

Then visit <http://localhost:8080>.

## Deploy to Vercel

1. Upload the folder to a Git repository or import the ZIP contents into a new repository.
2. In Vercel, create a project from that repository.
3. Choose the **Other** framework preset (static site).
4. No build command is required. Serve the project root as the output directory.
5. Deploy.

`vercel.json` is included for static clean URLs. The pages are ordinary HTML and work without a build step.

## Project files

- `index.html` — homepage and eight category choices.
- `styles.css` — foundational homepage styling.
- `theme-night.css` — dark palette, cursive accent typography, rounded surfaces, motion, and loader styling.
- `loading-screen.js` — short animated intro screen on each page.
- `home.js` — category cards and instant tool search.
- `recoo.html`, `scanning.html`, `web-testing.html`, `cryptography.html`, `network-analysis.html`, `forensics.html`, `frameworks.html`, `utilities.html` — individual field pages.
- `category.css` — responsive shared layout plus each field's bespoke design.
- `category-page.js` — tool filtering, expanded usage guides, copy commands and install tabs.
- `tools-data.js` — all 75 tool records and category metadata.
- `assets/field-*.svg` — eight locally bundled category illustrations with category-specific animations.
- `assets/README.md` — artwork inventory.
- `vercel.json` — static deployment settings.
- `LICENSE` — license for this directory's own code (third-party tools retain their own licenses).

## Editing the data

Edit `tools-data.js`. Each entry has a stable `id`, `name`, category, topic, summary, purpose, platform metadata, install/access examples, a `command`, `commandNote`, official URL, documentation URL, repository URL, pricing/license context, and suggested related tools.

Keep the project's links pointed at upstream sources wherever possible. Verify release status, license, package names, supported OS versions and command flags with the official documentation before using or redistributing a tool. Some example commands use `127.0.0.1`, a sample domain, local files or help screens deliberately. Do not replace these guardrails with commands against public systems unless a written authorization and defined scope explicitly allow it.

## Responsible use

This is a reference directory, not an endorsement. OSINT collection can expose personal information; scanning and testing can disrupt services; packet captures and forensic images can contain sensitive data. Only investigate within lawful, explicit authorization, preserve evidence, avoid publishing secrets, and document the limits of every finding.
