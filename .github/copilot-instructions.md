# Copilot Instructions - Portfolio Mathieu Van Damme

## Project Overview

React/TypeScript portfolio with dual-language support (FR/EN), dark mode, and contact form integration with Supabase + EmailJS.

## Architecture Patterns

### Language System

- Uses custom `useLanguage()` hook with intelligent detection (URL params → localStorage → browser/geo detection)
- French-speaking country detection in `src/hooks/useLanguage.tsx` (lines 27-35)
- Translation function: `t(key, language)` from `src/lib/translations.ts`
- All components receive `language` prop and use translation keys

### Theme System

- Custom `useDarkMode()` hook with localStorage persistence and system preference detection
- Tailwind configured with `darkMode: 'class'` - toggle via `document.documentElement.classList`
- Theme state managed at App level and passed down

### Component Structure

- Single-page application with section-based components: `Hero`, `About`, `Projects`, `Skills`, `Formations`, `Contact`
- Each component is self-contained with TypeScript interfaces
- Lucide React for consistent iconography

## Critical Integrations

### Contact Form (Dual Service)

```typescript
// Pattern: Save to Supabase + Send via EmailJS
await supabase.from("contact_submissions").insert([formData]);
await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
```

- Graceful degradation: continues if Supabase fails, prioritizes email delivery
- Environment validation in `App.tsx` with user-friendly warnings

### Environment Variables

Required for contact form functionality:

```
VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
```

## Development Workflows

### Commands

- `npm run dev` - Development server with Vite
- `npm run build` - Production build for Netlify
- `npm run lint` - ESLint validation

### Deployment

- Netlify deployment with SPA redirects in `netlify.toml`
- Assets include PDFs via Vite config: `assetsInclude: ["**/*.pdf"]`

## Code Conventions

### File Organization

```
src/
  components/     # React components (PascalCase)
  hooks/         # Custom hooks (useCamelCase)
  lib/           # Utilities (translations, supabase)
  services/      # External integrations (EmailService)
  types/         # TypeScript interfaces
  assets/        # Static files (images/, documents/)
```

### TypeScript Patterns

- Strict typing with interfaces in `src/types/index.ts`
- Custom hooks return tuples: `[state, setter] as const`
- Environment variables with fallbacks: `import.meta.env.VITE_* || "fallback"`

### Styling Approach

- Tailwind-first with custom color palette (primary blue scale)
- Dark mode classes: `dark:bg-gray-900`, etc.
- Custom animations: `animate-fade-in`, `animate-blob`

## Key Files to Understand

- `src/App.tsx` - Environment validation and main layout
- `src/hooks/useLanguage.tsx` - Complex language detection logic
- `src/services/emailService.ts` - Dual-service contact integration
- `src/lib/translations.ts` - Complete translation dictionary

## External Dependencies

- Supabase: Database with `contact_submissions` table
- EmailJS: Email service with template variables `{{firstname}}`, `{{email}}`, `{{message}}`
- Netlify: Hosting with SPA routing support
