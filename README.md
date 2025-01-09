This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Folder Structure
```
/root-directory
  ├── .gitignore                  # Specifies files and directories to ignore in version control.
  ├── eslint.config.mjs            # ESLint configuration file.
  ├── next-env.d.ts               # TypeScript declaration file for Next.js.
  ├── next.config.ts              # Configuration file for Next.js (with TypeScript support).
  ├── package.json                # Contains project metadata and dependencies.
  ├── pnpm-lock.yaml              # Lockfile for pnpm package manager.
  ├── postcss.config.mjs          # PostCSS configuration file.
  ├── README.md                   # Project documentation.
  ├── tailwind.config.ts          # Tailwind CSS configuration file (typed with TypeScript).
  ├── tsconfig.json               # TypeScript configuration file.

  /src
    ├── app/                       # Main application code
    │   ├── create-account/        # Account creation feature
    │   │   ├── api/               # API endpoints related to account creation
    │   │   └── page.tsx           # Page component for account creation
    │   ├── find-fuel-station/     # Find fuel station feature
    │   │   ├── api/               # API endpoints related to fuel stations
    │   │   ├── components/        # Components used in the find-fuel-station feature
    │   │   └── page.tsx           # Page component for finding fuel stations
    │   ├── home/                  # Home page feature
    │   │   ├── components/        # Home page components
    │   │   └── page.tsx           # Home page component
    │   ├── login/                 # Login feature
    │   │   ├── api/               # API endpoints related to login
    │   │   └── page.tsx           # Page component for login
    │   ├── price-comparison/      # Price comparison feature (no sub-components yet)
    │   ├── styles/                # Global styles (Tailwind CSS and custom styles)
    │   └── layout.tsx             # Root layout component
    │
    ├── components/                # Shared components across the app
    │   ├── Button.tsx             # Button component
    │   ├── Footer.tsx             # Footer component
    │   └── Header.tsx             # Header component
    │
    ├── db/                        # Database-related code
    │   └── connection.ts          # Database connection setup
    │
    ├── lib/                       # Utility functions and libraries
    │   ├── loginFetch.ts          # Utility function for login API calls
    │   ├── priceFetch.ts          # Utility function for price fetching API calls
    │   └── stationFetch.ts        # Utility function for station fetching API calls
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Team Collaboration & Shared Components

### Component Sharing Guidelines

Our team follows these practices for sharing and maintaining common components:

#### Component Structure
- All shared components are located in the `/src/components` directory
- Each component should:
  - Have its own directory with the component name
  - Include a README.md explaining its usage
  - Include proper TypeScript types
  - Be properly tested

#### Contribution Process
1. **Creating New Components**
   - Create a new branch: `feature/component-name`
   - Follow the component structure guidelines
   - Submit a PR with detailed description

2. **Code Review Process**
   - All components require at least one review
   - Use GitHub's PR review features
   - Address feedback in follow-up commits

3. **Documentation**
   - Update component README
   - Include usage examples
   - Document props and interfaces

### GitHub Workflow

1. **Branches**
   - `main`: Production-ready code
   - `develop`: Integration branch
   - `feature/*`: New features/components
   - `fix/*`: Bug fixes

2. **Pull Requests**
   - Use PR template
   - Link related issues
   - Add appropriate labels
   - Request reviews from team members

3. **Issues**
   - Use issue templates
   - Label appropriately
   - Link to related PRs
   - Update status regularly

### Shared Components List

Key shared components in `/src/components`:
- `Button`: Common button styles and variants
- `Footer`: Site-wide footer component
- `Header`: Navigation and branding header
- Add new components to this list when created

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

