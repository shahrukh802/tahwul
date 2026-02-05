# UI Assignment – Senior Software Engineer

This project is a frontend-only implementation of the provided UI designs. It focuses on clean architecture, scalability, and close visual alignment with the given screens, using modern React and Next.js best practices.

---

## How to Run the Project

### Prerequisites

- Node.js v18 or higher
- npm / yarn / pnpm

### Steps

```bash
npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How the Code Was Built

- The project is built using Next.js with React functional components and hooks
- TypeScript is used throughout the project for type safety and maintainability
- Tailwind CSS is used for styling, with shadcn/ui for reusable, accessible UI components
- The codebase follows a component-driven and feature-based folder structure, making it scalable and easy to extend
- Layout components such as Sidebar, Header, and Page Containers are shared across screens
- UI elements like cards, tables, status indicators, and progress components are reusable and data-driven
- Routing is handled using the Next.js App Router
- All data is mocked using static JSON/config files, keeping the UI independent of a backend
- The implementation closely follows the provided designs with attention to spacing, typography, colors, and responsiveness

## Assumptions Made

-The scope of the task is focused on frontend UI implementation only

- No real backend or API integration is required
- Static or mocked data is sufficient to demonstrate functionality
- Authentication, authorization, and persistence are out of scope
- A desktop-first approach is acceptable as long as the layout remains usable on smaller screens
- Any missing assets or values were approximated to best match the provided designs

## What I Would Improve With More Time

- Integrate real APIs with proper data fetching and caching (e.g., React Query or SWR)
- Add loading, empty, and error states for all data-driven components
- Improve accessibility (ARIA roles, keyboard navigation, screen reader support)
- Add unit and integration tests (Jest, React Testing Library)
- Introduce global state management if the application scales further
- Add animations and transitions for enhanced user experience
- Implement theme support (dark mode / brand-based theming)
