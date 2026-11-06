<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md: AIB site

Marketing site for the AIB product family at **aib.smnl.dev**. Product apps live in sibling repos (`../aib-camera`, `../aib-sitac`).

## Product constraints

- **Public audience.** Never imply membership, affiliation, or restricted access.
- **Unofficial.** No Protezione Civile / VVF / Regione logos or endorsement language.
- **Camera family design system.** Match AIB Camera + AIB SITAC web tokens (`aib-*` colors, radii `12`/`16`, primary = dark/light fill not brand-red CTAs; brand `#AF2525` is identity/destructive only).
- **Wider layout** than the old narrow column: shell `max-w-5xl`; feature grids on product homes.
- **i18n.** Site-wide IT default + EN via `?lang=en` (and `localStorage` `aib-site-lang`). Copy: `lib/ui-copy.ts` (chrome/hub), `lib/camera/copy.ts`, `lib/sitac/copy.ts`.
- **Always format** edited code with Prettier before finishing (`npm run format` / `format:check`).
- **Accessibility / mobile.** Follow `.cursor/rules/accessibility.mdc` and `.cursor/rules/mobile.mdc` (landmarks, focus, contrast, safe areas, touch targets).
- **License.** PolyForm Noncommercial 1.0.0. Do not relicense without an explicit owner request.

## Stack rules

- Next.js App Router under `app/`. Shared UI in `components/`; copy and helpers in `lib/`.
- shadcn primitives in `components/ui/*` restyled to AIB tokens.
- Marketing copy for Camera: `lib/camera/copy.ts` + `content/camera/` (+ bodies). SITAC: `lib/sitac/copy.ts`.
- Canonical host: `https://aib.smnl.dev` (`lib/site.ts`). Old `smnl.dev/aib-*` paths redirect from the personal site.

## Commands

```bash
npm ci
npm run dev
npm run build
npm run typecheck
npm run format
npm run docs:camera-guide
npm run docs:camera-changelog
```

## Do not

- Add code comments (`//`, `/* */`, JSDoc, JSX comments). Prefer clear names.
- Leave dead code, duplicates, or careless perf/security debt.
- Edit marketing pages inside `aib-camera`, `aib-sitac`, or `mono-lo-repo/apps/site`. This repo is the source of truth.
