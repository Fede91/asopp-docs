# ASO++ Docs Site

Next.js documentation site converted from the Mintlify source.

## Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **next-themes** — light/dark mode

## Development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Structure

```
src/
  app/                    # All routes (App Router)
    page.tsx              # Home / index page
    quickstart/           # /quickstart
    portal/               # /portal/*
    mcp-setup/            # /mcp-setup/*
    layout.tsx            # Root layout with theme provider + docs layout
  components/
    docs/                 # Layout components (Navbar, Sidebar, TOC, Footer, PageNav)
    mdx/                  # Custom MDX-equivalent components
      Card.tsx            # <Card> and <CardGroup>
      Accordion.tsx       # <Accordion> and <AccordionGroup>
      Steps.tsx           # <Steps> and <Step>
      Tabs.tsx            # <Tabs> and <Tab>
      Callouts.tsx        # <Note>, <Tip>, <Warning>, <Info>
      Icons.tsx           # All SVG icons used in docs
  lib/
    navigation.ts         # Nav structure derived from docs.json
public/
  logo/                   # light.svg and dark.svg logos
  images/                 # Hero images
  favicon.svg
```

## Adding a new page

1. Create a new `page.tsx` in the appropriate `app/` directory
2. Wrap content in `<DocPage title="..." description="..." href="/your-path">`
3. Add the page to `src/lib/navigation.ts` in the correct group
