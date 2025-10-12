# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start the Next.js development server (http://localhost:3000)
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint on the codebase

### Package Management
- `npm install` - Install all dependencies
- `pnpm install` - Alternative package manager (pnpm-lock.yaml present)

### Component Development
- `npx shadcn@latest add [component-name]` - Add new shadcn/ui components
- Components are configured with "new-york" style and Lucide icons

## Architecture Overview

### Project Structure
This is a **Next.js 15 App Router** project for "Forum ENIT Entreprise 2025" - a French conference/forum website connecting companies with students.

### Key Architecture Patterns

**App Router Structure:**
- `/app` - Next.js App Router pages and layouts
  - `/app/layout.tsx` - Root layout with Navbar, Footer, and French locale
  - `/app/page.tsx` - Homepage composed of multiple sections
  - Route-based pages: `/about`, `/contact`, `/exposants`, `/inscription`, `/participants`, `/programme`

**Component Architecture:**
- `/components` - Feature components (hero-section, countdown-timer, navbar, footer, etc.)
- `/components/ui` - shadcn/ui reusable components (57+ components available)
- `/hooks` - Custom React hooks (`use-mobile`, `use-toast`)
- `/lib` - Utilities (`utils.ts` with `cn()` for className merging)

**Styling & UI:**
- **Tailwind CSS 4.1.9** with CSS variables and neutral base color
- **shadcn/ui** with Radix UI components
- **Montserrat font** as primary typography
- **Responsive design** with mobile breakpoint at 768px

**Key Dependencies:**
- React 19.1.0 with Next.js 15.5.4
- TypeScript with strict mode
- Form handling: react-hook-form + zod validation
- Analytics: Vercel Analytics
- Icons: Lucide React + Font Awesome

### Development Notes

**Configuration:**
- TypeScript paths configured with `@/*` aliases
- ESLint and TypeScript errors ignored during builds (development setup)
- Images unoptimized for deployment flexibility
- French language content throughout

**Component Patterns:**
- Server Components by default (RSC enabled)
- Suspense boundaries for loading states
- Modular section-based homepage composition
- Custom hooks for responsive behavior and UI state

**Testing Setup:**
- Jest DOM testing library configured
- Web vitals monitoring included

This project follows modern Next.js patterns with a focus on component reusability and French localization for an enterprise forum/conference website.