# ESG·CRE Knowledge Base — site package

A single navigable knowledge product covering two markets (UK and UAE) for ESG &
compliance technology in commercial real estate. One entry point, a market chooser,
eight deep-dive modules per market, ecosystem atlases, glossaries, and the UK iSBEM
deep-dive — all in one consistent design, with acronym tooltips throughout and a
"Download PDF" button on every page.

---

## You have TWO ways to use this

### Option 1 — The full site (recommended; this is the real product)
The `esg-cre-site/` folder is a complete static website, structured for GitHub Pages.

**To view locally:** keep the folder intact and open `esg-cre-site/index.html` in a
web browser (double-click, or right-click → Open with → Chrome/Safari/Edge).
> IMPORTANT: do not move files out of the folder. The pages share `assets/shared.css`
> and `assets/glossary.js` by relative path. If the folder structure is flattened
> (e.g. a "download all" that dumps everything into one folder), the styling will not
> load and you'll see plain text. If that happens, use Option 2, or re-create the
> structure below.

**To publish as one link (GitHub Pages):**
1. Create a new GitHub repository.
2. Upload the **contents** of `esg-cre-site/` (the `index.html`, `assets/`, `uk/`,
   `uae/` — keep the folders).
3. Repo → Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder
   `/ (root)` → Save.
4. After a minute, your single address is `https://<username>.github.io/<repo>/`.

### Option 2 — The portable single file (fail-safe)
`ESG-CRE-Knowledge-Base-PORTABLE.html` is the entire thing inlined into ONE file —
no folders, no external assets. Open it anywhere, email it, drop it on a USB stick;
it always renders. Use this if folder structure ever gets in your way.

---

## Folder structure (Option 1)

```
esg-cre-site/
├── index.html              ← landing: choose UK or UAE
├── assets/
│   ├── shared.css          ← the whole design system + print/PDF stylesheet
│   └── glossary.js          ← shared acronym dictionary + tooltip engine
├── uk/
│   ├── index.html          ← UK module menu
│   ├── module-01.html … module-08.html
│   ├── isbem.html          ← iSBEM deep-dive
│   ├── ecosystem.html      ← UK RegTech Ecosystem Atlas (interactive)
│   └── glossary.html
└── uae/
    ├── index.html          ← UAE module menu
    ├── module-01.html … module-08.html
    ├── ecosystem.html      ← UAE RegTech Ecosystem Atlas (interactive)
    └── glossary.html
```

---

## How the PDF works
Every module/page has a **⤓ Download PDF** button. It uses the browser's
print-to-PDF (a dedicated print stylesheet strips the navigation/tooltips and lays
the content out cleanly on paper, in the same fonts and styling). When the print
dialog opens, choose "Save as PDF". Text stays crisp and selectable, and the PDF is
always in sync with the page — nothing to regenerate when content changes.

## Editing later
The source of truth for module content is the markdown files in your project.
The HTML is generated from them by a build script (`build_module.py`). When you want
to make this a living, self-updating document, the markdown + a build step is the
foundation to keep — we can wire it to auto-rebuild on GitHub later.

## A note on figures
Items marked **VERIFY** are not yet confirmed against primary sources; items marked
**CONFIRMED** are verified from primary text (e.g. the UAE federal decree-law).
Treat VERIFY figures as directional until checked.
