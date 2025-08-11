# ZFuel App

ZFuel Finder & Price Comparison App is a modern web application for New Zealand drivers to quickly find nearby fuel stations, compare real-time fuel prices, and make informed decisions. Built with Next.js, TypeScript, and Tailwind CSS, it features a user-friendly interface, interactive map, and secure account management.

## Features

- **Find Fuel Stations:** Search for nearby fuel stations using location or address, with map integration and autocomplete.
- **Price Comparison:** Instantly compare fuel prices (91, 95, Diesel) across stations in your area.
- **Account Management:** Create an account and log in to personalize your experience.
- **Modern UI:** Responsive design, reusable components, and accessibility best practices.
- **Secure & Ethical:** User-initiated location search, no tracking without consent, and secure API endpoints.
- **Collaboration Ready:** Modular codebase, clear documentation, and shared component library.

---

## Getting Started

1. **Install dependencies:**

```bash
pnpm install
# or
npm install
# or
yarn install
```

2. **Run the development server:**

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Folder Structure

```
├── public/                  # Static assets (images, icons)
├── src/
│   ├── app/
│   │   ├── create-account/  # Account creation (UI & API)
│   │   ├── find-fuel-station/ # Find stations (UI, API, components, models)
│   │   ├── home/            # Home page
│   │   ├── login/           # Login (UI & API)
│   │   ├── price-comparison/ # Price comparison (UI & API)
│   │   └── styles/          # Global styles (Tailwind CSS)
│   ├── components/          # Shared UI components (Button, Footer, Header, UI library)
│   ├── db/                  # Database connection & models
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions (API fetchers, helpers)
├── package.json             # Project metadata & dependencies
├── tailwind.config.ts       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
```

---

## Usage

- **Find Stations:** Go to "Find Fuel Station" to search by address or use your location (with consent).
- **Compare Prices:** Use "Price Comparison" to view and compare fuel prices for different stations.
- **Create Account / Login:** Register or log in for a personalized experience.
- **Mobile Friendly:** The app is fully responsive and works on all devices.

---

## Team Collaboration & Shared Components

### Component Sharing Guidelines

- All shared components are in `/src/components`.
- Each component has its own directory, README, and TypeScript types.
- Add new shared components via feature branches and submit PRs for review.

### GitHub Workflow

1. **Branches:**

- `main`: Production
- `develop`: Integration
- `feature/*`: New features/components
- `fix/*`: Bug fixes

2. **Pull Requests:**

- Use PR templates, link issues, request reviews

3. **Issues:**

- Use templates, label, and update status

### Shared Components List

- `Button`: Common button styles and variants
- `Footer`: Site-wide footer
- `Header`: Navigation and branding
- ...and more in `/src/components/ui/`

---

## Ethical & Design Principles

- User privacy: No location tracking without consent
- Accessibility and mobile-first design
- Modular, reusable, and well-documented code

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## License

This project is for educational purposes (Mission Ready Level 5). See LICENSE for details.
