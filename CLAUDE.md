# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ByteBeasts is a Web3-focused gaming studio website built with React, TypeScript, and Vite. The project includes a marketing landing page with newsletter subscription functionality integrated with Mailchimp.

## Development Commands

All commands should be run from the `client/` directory:

```bash
cd client

# Development
npm run dev          # Starts Vite dev server on port 5174

# Build
npm run build        # TypeScript check + Vite production build

# Linting
npm run lint         # Run ESLint

# Preview production build
npm run preview      # Preview built site

# Backend server (for subscription API)
node server.cjs      # Starts Express server on port 3000
```

## High-Level Architecture

### Frontend Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS with custom animations (GSAP, Framer Motion)
- **Analytics**: Mixpanel integration for visitor tracking
- **Router**: React Router v7 for navigation

### Backend Services
- **Express Server** (`server.cjs`): Handles newsletter subscriptions via Mailchimp API
- **API Proxy**: Vite dev server proxies `/api/subscribe` to `http://localhost:3000`

### Key Architectural Patterns

1. **Component Structure**:
   - Layout components: `Header.tsx`, `Footer.tsx`
   - Section components: `Hero.tsx`, `About.tsx`, `Games.tsx`, `Team.tsx`, `Community.tsx`
   - UI components: Reusable components like `Button.tsx`, `GameCard.tsx`, etc.

2. **Page Architecture**:
   - Single Page Application with `Home.tsx` as the main page
   - GSAP ScrollTrigger for scroll-based animations
   - Particle effects and dynamic backgrounds

3. **Data Flow**:
   - Newsletter subscriptions go through Express server to Mailchimp
   - Mixpanel tracks visitor analytics
   - Environment variables handle API keys and configuration

### Environment Variables

Required for full functionality:
- `VITE_MIXPANEL_TOKEN`: Mixpanel analytics token
- `MAILCHIMP_API_KEY`: Mailchimp API key
- `MAILCHIMP_SERVER_PREFIX`: Mailchimp server prefix (e.g., "us10")
- `MAILCHIMP_LIST_ID`: Mailchimp audience list ID

### Important Implementation Notes

1. **Animation System**: The site uses GSAP for scroll animations and particle effects. Be careful when modifying animation code to ensure proper cleanup on component unmount.

2. **Newsletter Integration**: The subscription form submits to `/api/subscribe` which is handled by the Express server using Mailchimp's API.

3. **Responsive Design**: The site uses Tailwind CSS with custom theme configuration. Maintain mobile-first approach when adding new components.

4. **TypeScript Configuration**: Uses project references with separate configs for app (`tsconfig.app.json`) and node (`tsconfig.node.json`).

5. **Git Status**: Currently has uncommitted changes in `package-lock.json` and `yarn.lock`. Be aware of potential dependency conflicts.