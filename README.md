# SeaShell Selections

A responsive React app for browsing a locally curated watchlist and activity ideas. The app uses Vite for development and production builds, Material UI (MUI) for its component system, and React Router for navigation. The selections are currently loaded from static data files in `src/data`; the API and server folders are not part of the active frontend experience.

## Requirements

- Node.js 18 or newer
- npm

## Local development

```sh
npm install
npm start
```

Vite prints the local development URL in the terminal (normally `http://localhost:5173`). The app reloads as source files change.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Start the Vite development server |
| `npm test` | Run the component tests once with Vitest |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## App structure

- `src/App.jsx` defines the watchlist and activities routes.
- `src/components/` contains the shared navigation, hero, and selection collections.
- `src/data/entertainment.js` and `src/data/activities.js` are the current local content sources.
- `src/main.jsx` sets up the MUI theme and hash-based routing.
- `vite.config.js` configures the Vite base path and tests.

The watchlist and activities pages share the same collection component, including category filtering and responsive selection cards. To add or edit entries, update the corresponding data file and provide a title, link, poster, and genre tags.

## GitHub Pages deployment

The Vite `base` is configured as `/seashell-selections-fe/`, which matches this repository's GitHub Pages project-site path. The app uses hash routing so page navigation and refreshes continue to work on GitHub Pages without server-side route rewrites.

To publish:

1. Make sure the repository's GitHub Pages source is configured to serve the `gh-pages` branch.
2. Run `npm run deploy` from the repository root.
3. Visit `https://lashell-young.github.io/seashell-selections-fe/`.

The deploy command runs the production build first, then publishes the generated `dist/` directory. If the repository name or Pages URL changes, update the `base` value in `vite.config.js` and the URL in this document.
