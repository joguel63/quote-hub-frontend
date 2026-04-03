# React Templates

Opinionated starter built with Vite, React 18, TypeScript, and React Router to help you spin up front-end apps quickly.

## Key Features

- Fast dev experience powered by Vite with hot module reloading.
- Modular architecture (`src/modules`) that keeps domains and routes separated.
- Declarative routing with `react-router-dom` and lazy loading for pages.
- Ready-to-extend shared hooks (e.g., `useColorScheme`) and reusable components.
- ESLint and Prettier already configured for consistent code quality.

## Prerequisites

- Node.js 18 or newer.
- A package manager; examples below use `yarn`, but `npm` or `pnpm` work as well.

## Installation

```bash
yarn install
# or
npm install
```

## Available Scripts

```bash
yarn dev       # Start the dev server with hot reload
yarn build     # Produce the optimized production build (TypeScript + Vite)
yarn preview   # Serve the production build locally for validation
yarn lint      # Run ESLint on src (fails on warnings)
yarn format    # Format the project with Prettier
```

## Project Structure

```php
src/
  App.tsx                # Main routes entry point
  main.tsx               # React bootstrap with StrictMode
  core/                  # Shared resources (router, hooks, common types)
  modules/
    getStarted/          # Example module with its own 
      /pages 
      /components
      /hooks
  assets/                # Static assets (e.g., logos)
public/                  # Static files served by Vite
```

## Recommended Workflow

1. Run `yarn dev` and open http://localhost:5173/.
2. Extend or create modules inside `src/modules` for new features.
3. Run `yarn lint` and `yarn format` before opening a pull request.
4. Use `yarn build` and `yarn preview` to validate the production output.

## Quick Customization

- **Theme:** `useColorScheme` stores the current theme (light/dark) in localStorage. Extend it to detect system preferences or add more themes.
- **Routes:** Register new routes in `src/core/router` and add matching modules under `src/modules`.
- **Styling:** The template relies on CSS Modules; create `*.module.css` files to keep styles scoped per component.

## Suggested Best Practices

- Re-export public items from each domain via `index.ts` files to keep imports clean.
- Document new shared hooks and components in `src/core` for clarity.
- Add tests or Storybook stories as the project grows.

---

You’re set to build on top of React Templates—happy coding!
