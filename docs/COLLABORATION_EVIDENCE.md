# GitHub Collaboration: Shared Components

This document demonstrates how our team uses GitHub to collaborate on and share common components across our application.

## 1. Component Organization

### Shared Component Structure
Our shared components are organized in the `src/components` directory, with each component having its own directory containing:
- Component implementation (index.tsx)
- Documentation (README.md)
- Tests (when applicable)

Example of our SearchBar component structure:
```
src/components/SearchBar/
├── README.md         # Component documentation
└── index.tsx         # Component implementation
```

## 2. Documentation and Guidelines

### Component Documentation
Each shared component includes detailed documentation. Here's an example from our SearchBar component:

```markdown
# SearchBar Component

A reusable search bar component with location autocomplete functionality using Mapbox.

## Features
- Location search with autocomplete suggestions
- New Zealand-specific location search
- Customizable styling with Tailwind CSS
- TypeScript support

## Usage
import { SearchBar } from "@/components/SearchBar";
```

## 3. Team Collaboration Process

### Pull Request Template
We use standardized PR templates to ensure consistent code review:

```markdown
# Pull Request Description

## Changes Made
- [ ] New feature
- [ ] Bug fix
- [ ] Breaking change

## Shared Components
- Component(s) modified:
- New component(s) added:
- Breaking changes to existing components:
```

### Component Proposal Template
New shared components are proposed using our component proposal template:

```markdown
# Component Proposal

## Component Name
## Purpose
## Proposed API/Props
## Usage Examples
```

## 4. Git Workflow Evidence

### Feature Branch Creation and Merge
```bash
* b2862e3 feat: create shared SearchBar component
* e82220f changed font size of no stations found
* 2b341ef fixed diagonal colour in main section
```

This shows:
1. Creation of feature branch `feature/shared-search-bar`
2. Development of shared component
3. Successful merge into the `jasmin` branch

## 5. Component Usage Example

### Before: Component in specific feature
```tsx
import SearchBar from "./components/SearchBar";
```

### After: Using shared component
```tsx
import { SearchBar } from "@/components/SearchBar";
```

## 6. Collaboration Guidelines from README

Our main README includes clear guidelines for team collaboration:

1. **Component Structure**
   - All shared components in `/src/components`
   - Each component has its own directory
   - Comprehensive documentation required

2. **Contribution Process**
   - Create feature branch
   - Follow component structure
   - Submit PR with documentation

3. **Code Review Process**
   - All components require review
   - Use PR templates
   - Address feedback

## Summary of Collaboration Benefits

1. **Standardization**
   - Consistent component structure
   - Unified documentation format
   - Standard review process

2. **Reusability**
   - Centralized component location
   - Clear usage documentation
   - TypeScript support

3. **Quality Control**
   - Required code reviews
   - Documentation requirements
   - Testing guidelines

4. **Team Communication**
   - Structured PR process
   - Component proposals
   - Clear guidelines

[Note: Add screenshots of each section when presenting this documentation]
