# QuoteHub Frontend

QuoteHub is a multi-step insurance quote flow built with React, TypeScript, MUI, React Hook Form, and `react-i18next`.

The current implementation includes:

- a responsive landing page
- a personal information step
- a coverage selection step
- a summary step
- a result screen
- an English/Spanish language toggle in the header

Note: quote submission is currently mocked for the test environment, so the app can demonstrate loading and error/result behavior without a real backend.

## Live App

The deployed app is available at:

- `https://d2eau8zovo0x4z.cloudfront.net/quote`

## Setup And Run

### Requirements

- Node 22
- Yarn 1.22.22

### Install Dependencies

```bash
yarn install
```

### Run The App In Development

```bash
yarn dev
```

By default, Vite will print the local URL in the terminal.

### Run Tests

```bash
yarn test
```

### Build For Production

```bash
yarn build
```

### Preview The Production Build

```bash
yarn preview
```

### Other Useful Commands

```bash
yarn format
yarn test:watch
yarn test:coverage
```

## CI/CD

The repository includes a GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

Current pipeline behavior:

- triggers on pushes to `main`
- runs on `ubuntu-latest`
- installs dependencies with `yarn install`
- configures AWS credentials from GitHub environment secrets
- runs `yarn deploy` for the `main` environment

The workflow currently uses these deployment secrets:

- `AWS_ACCESS_KEY_ID_HR_DEPLOY`
- `AWS_SECRET_ACCESS_KEY_HR_DEPLOY`

The deployed application is exposed through CloudFront at:

- `https://d2eau8zovo0x4z.cloudfront.net/quote`

## Development Process And Key Decisions

This project was developed as a practical frontend, so the approach favored clear behavior, small targeted changes, and maintainability over unnecessary abstraction.

Main decisions:

- The app is organized with a feature-first structure around `modules/quoteHub` so the quote flow stays cohesive.
- Shared application concerns were kept in `src/core` to avoid mixing reusable app infrastructure with feature-specific logic.
- UI changes were implemented incrementally instead of doing a broad refactor.
- Behavior changes and regressions were covered with tests before or alongside the implementation.
- Internationalization was handled with `react-i18next`, and recent work ensured that translated coverage labels and summaries react correctly to language changes.
- The home page was redesigned as a responsive entry point to the flow, keeping the visual language minimal and direct.
- Form state is persisted in local storage so users do not lose progress when moving through the multi-step quote flow.

## Architecture

The application uses a modular frontend architecture with a clear split between shared app infrastructure and domain-specific code.

### Core Layer

`src/core` contains cross-cutting concerns used by the whole app:

- shared components such as the header and common inputs
- app layouts
- route enums and router setup
- theme configuration
- localization setup and translation dictionaries
- shared utilities and types

This separation keeps reusable app concerns in one place and prevents the QuoteHub feature from becoming tightly coupled to global infrastructure.

### Feature Layer

`src/modules/quoteHub` contains the quote experience itself:

- pages for each route in the flow
- feature components such as forms, summary cards, and steppers
- hooks and provider logic for feature state
- schemas, enums, services, and utilities specific to the quoting domain

This structure was chosen so the quote flow can evolve as a single bounded feature instead of scattering business logic across the app.

### Routing And Layouts

The app uses React Router with route-level composition:

- the home page is loaded at the feature entry route
- step pages are wrapped by a shared steps layout
- pages are lazy-loaded through the feature router

This keeps the route definitions explicit while allowing each feature to own its own navigation structure.

### Forms And State

React Hook Form is used for the multi-step form state.

The QuoteHub provider is responsible for:

- selecting the correct validation schema for the current step
- exposing localized coverage options
- sharing active step metadata
- persisting form state to local storage
- submitting the final payload through the mocked quote service

This approach keeps form logic centralized while allowing page and component layers to stay focused on rendering and step-specific behavior.

## Folder Structure

```text
.
├── docs/
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── core/
│   │   ├── components/
│   │   ├── declarations/
│   │   ├── enums/
│   │   ├── layouts/
│   │   ├── locales/
│   │   ├── router/
│   │   ├── theme/
│   │   ├── types/
│   │   └── utils/
│   ├── modules/
│   │   └── quoteHub/
│   │       ├── components/
│   │       ├── contexts/
│   │       ├── enums/
│   │       ├── hooks/
│   │       ├── layouts/
│   │       ├── pages/
│   │       ├── providers/
│   │       ├── router/
│   │       ├── schemas/
│   │       ├── services/
│   │       ├── types/
│   │       └── utils/
│   ├── test/
│   └── vite-env.d.ts
├── package.json
├── vite.config.ts
├── vitest.config.ts
└── tsconfig.json
```

## Testing And Verification

The project uses Vitest and Testing Library for component, hook, and provider coverage.

Current tests focus on:

- form flow behavior
- quote calculation and persistence utilities
- provider behavior
- summary mapping
- localized behavior regressions
- page-level rendering

Recommended verification before considering a change complete:

```bash
yarn test
yarn build
```

## Notes

- The quote service is mocked intentionally.
- The result flow is useful for validating error and submission states even without a backend.
- The README is intentionally concise and focused on the implemented app rather than the original starter template.
