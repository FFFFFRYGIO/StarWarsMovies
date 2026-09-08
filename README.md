# Star Wars Movie Catalog

A small React app that lists the Star Wars films from [SWAPI](https://swapi.dev/)
and lets you expand each film to browse its characters.

Built with [Vite](https://vite.dev/) and [Vitest](https://vitest.dev/).

## Requirements

- Node.js 20.19+ or 22.12+ (required by Vite 8)

## Getting started

```bash
npm install
npm start
```

The dev server runs on [http://localhost:3000](http://localhost:3000) and
hot-reloads as you edit.

## Available scripts

| Script | Description |
| --- | --- |
| `npm start` / `npm run dev` | Start the Vite dev server on port 3000. |
| `npm run build` | Build the production bundle into `build/`. |
| `npm run preview` | Serve the built bundle locally to verify a production build. |
| `npm test` | Run the test suite once. |
| `npm run test:watch` | Run the tests in watch mode. |
| `npm run lint` | Lint the project with ESLint. |

## Project layout

```
index.html              Vite entry point
public/                 Static files copied verbatim into the build
src/main.jsx            App bootstrap
src/App.jsx             Film list and search
src/components/         MovieCard and Character
vite.config.js          Vite + Vitest configuration
eslint.config.js        ESLint flat config
```

## Notes on the toolchain

This project previously used Create React App (`react-scripts`). CRA is no longer
maintained and its dependency tree was the source of essentially every dependency
vulnerability reported against this repo. It has been replaced with Vite, which
covers the same ground (dev server, JSX, CSS and asset handling, production
build) with a far smaller and actively maintained dependency tree.

Tests moved from Jest to Vitest. The testing-library APIs are unchanged; the
main difference is that test files import `vi` from `vitest` instead of using
Jest's global `jest` object.
