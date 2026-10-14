# Samiullah Khan — Portfolio

A personal portfolio built with Next.js, React, TypeScript, and plain CSS. Warm ivory, forest green, locally bundled DM Sans and Instrument Serif fonts, and the original portrait give the site an editorial feel.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. To use another port: `npm run dev -- --port 3001`.

## Build and validate

```sh
npm run typecheck
npm run build
```

The production website is exported to `out/`, ready for a static web host. Serve that directory over HTTP; opening its HTML files directly will not load the app correctly.

For restricted Windows environments that cannot spawn build helper processes, the configuration supports worker threads and the TypeScript 6 compiler API:

```powershell
$env:NEXT_BUILD_WORKER_THREADS = '1'
npm run build
```

The regular build uses the standard Next.js defaults when that variable is absent.

## Pages and editing

- `app/page.tsx`: homepage, biography, experience, problem-solving progress, and skills.
- `app/contact/page.tsx`: contact details.
- `app/hobbies/page.tsx`: hobbies.
- `app/globals.css`: shared design, responsive layouts, and reduced-motion support.
- `components/`: shared navigation, icons, contact section, and footer.
- `public/images/samiullah.jpeg`: original portrait.
- `legacy/`: preserved original HTML/CSS website, with its image.

The old `/contact.html` and `/hobbies.html` URLs forward to the new pages. The problem-solving count is the original portfolio's 71 of 75; update `problemSolving` in `app/page.tsx` and the count, percentage, and grid stay in sync.

The email button opens the visitor's mail app. The copy button copies the address and announces success; there is no contact form or email server to configure.

## Hosting at a repository subpath

For a GitHub Pages project URL such as `risen62.github.io/My-Portfolio/`, set the base path before building:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/My-Portfolio'
npm run build
```

For a custom domain or root URL, leave that variable unset. Publish the contents of `out/` (including `.nojekyll`) using your hosting provider. No deployment or changes to the GitHub repository are made by this local rebuild.
