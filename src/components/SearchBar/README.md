# SearchBar Component

A reusable search bar component with location autocomplete functionality using Mapbox.

## Features
- Location search with autocomplete suggestions
- New Zealand-specific location search
- Customizable styling with Tailwind CSS
- TypeScript support

## Usage

```tsx
import { SearchBar } from "@/components/SearchBar";

export default function YourComponent() {
  const handleLocationSelect = (lat: number, lng: number) => {
    console.log(`Selected location: ${lat}, ${lng}`);
  };

  return (
    <SearchBar onLocationSelect={handleLocationSelect} />
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| onLocationSelect | `(lat: number, lng: number) => void` | Callback function called when a location is selected |

## Dependencies
- Mapbox GL JS
- Lucide React (for icons)
- Tailwind CSS

## Notes
- Requires `NEXT_PUBLIC_MAPBOX_TOKEN` environment variable
- Only searches within New Zealand
