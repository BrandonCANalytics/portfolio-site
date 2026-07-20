# Portfolio repository guide

## Project overview

This is Brandon Cantrell's personal portfolio for recruiters and hiring teams considering senior or staff-level analytics engineering, BI, data product, and technical analytics candidates. The core narrative is: **Brandon builds technical systems around human decisions.**

`copy.md` is the approved source of truth for V2 homepage messaging. The production homepage is `index.html`; global presentation lives in `styles.css`; public assets live in `assets/` or the repository root.

## Development

The site is plain HTML and CSS with no package manager or build step. Open `index.html` directly or serve the repository with any local static server. There are currently no project-specific install, lint, type-check, test, build, or preview commands. Do not invent them in documentation.

## Conventions

- Prefer semantic HTML, native browser features, and small custom CSS over dependencies.
- Keep reusable design values in `:root`; use descriptive kebab-case class names.
- Keep JavaScript optional and minimal. The page should remain usable without it.
- Store images in `assets/`, include intrinsic dimensions when used, and never expose client-sensitive data.
- Preserve landmarks, logical heading order, keyboard access, visible focus, readable line lengths, and `prefers-reduced-motion` support.
- Test mobile, tablet, laptop, and wide desktop layouts. Avoid horizontal overflow and layout shift.

## Copy and factual integrity

- Treat `copy.md` as approved V2 homepage copy. Tightening for layout is allowed; new professional claims are not.
- Never invent metrics, clients, users, scale, ownership, projects, or integrations.
- Keep work descriptions conservative and flag ambiguity instead of improvising.
- Never expose constituent, campaign, client, credential, URL, ID, or internal architecture data.

## Design constraints

Use fewer, larger sections with varied editorial rhythm. Avoid repeated generic card grids and decorative containers around ordinary text. Do not use generic icon sets for core storytelling; prefer restrained custom system diagrams and real product evidence. Maintain the dark, technical, editorial visual language and the single mint accent family.

## Git safety

- Inspect `git status` before editing and preserve unrelated user changes.
- Keep changes scoped; do not mix unrelated cleanup into redesign work.
- Review the final diff and run all relevant validation before committing.
- Do not knowingly commit broken work, secrets, environment files, caches, or unapproved large assets.
- Use focused commits with clear imperative messages. Do not amend published history, force-push, or push without explicit approval.
- Never use `git reset --hard`, forced checkout, or broad deletion without explicit approval.
- For pushes, confirm the branch and remote first. If hooks modify files, re-run checks and review the final diff.
