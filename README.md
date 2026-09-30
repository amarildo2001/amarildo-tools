# Amarildo Tools

A responsive collection of browser-based calculators, converters, and developer utilities created by [Amarildo Prendi](https://amarildoprendi.com/).

Search tools by name or category, open dedicated tool pages, and get immediate results with formulas, instructions, and frequently asked questions.

## Features

- Calculators across Math, Everyday, Finance, Business, Construction, Converters, and Developer categories.
- Interactive calculations and browser-based utilities, including percentage calculations, loan estimates, unit conversion, and JSON formatting.
- Searchable tool directory, category pages, and responsive layouts.
- Dedicated tool URLs, page metadata, generated sitemap, and robots configuration.
- About, privacy, terms, and contact pages.

## Technologies used

| Technology | Purpose |
| --- | --- |
| React 19 and TypeScript | Interactive components and typed application code |
| Next.js 16 APIs and vinext | App Router structure executed through vinext |
| Vite 8 | Development and production build tooling |
| Tailwind CSS 4 and custom CSS | Styling and responsive layouts |
| shadcn, Radix UI, and Base UI | Included UI component library |
| Lucide React | Interface icons |
| Cloudflare Vite plugin and Wrangler | Worker runtime and local serving |
| Drizzle ORM | Included optional database scaffolding; no D1 binding is configured |
| pnpm | Dependency management |

Additional dependencies are listed in `package.json`; inclusion does not imply every library is used by the calculator pages.

## Getting started

Requires Node.js 22.13.0 or newer and pnpm 11.25.0 (the version specified in `package.json`).

```bash
pnpm install
pnpm dev
```

A clean checkout uses the portable vinext execution profile. The development server defaults to port 5173.

```bash
pnpm build
pnpm start
```

The start command serves the generated Cloudflare Worker locally. This repository retains the original Sites hosting configuration; publishing to GitHub alone does not deploy the website. See [DEVELOPMENT.md](DEVELOPMENT.md) for the original runtime and hosting instructions.

## Project structure

```text
app/                         Pages, categories, tool routes, metadata, and styles
components/calculator-engine.tsx  Calculator and utility implementations
components/ui/               Reusable UI components
lib/tool-data.ts              Tool catalog, formulas, descriptions, and FAQs
public/                       Static assets
scripts/                      Installation and runtime helpers
build/                        Hosting integration plugin
vendor/                       Vendored styles and license files
```

## Author

[Amarildo Prendi](https://amarildoprendi.com/) · [Upwork](https://www.upwork.com/freelancers/amarildoprendi)

No project license has been added. Existing third-party license files are retained.
