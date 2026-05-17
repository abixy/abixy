# OriginalDuckBucks

E-commerce website for customizable 40mm collectible coins.

## Features

- Browse coin designs by category (animals, vehicles, nature, etc.)
- Customize coins with personalized text (top and bottom curved text)
- Select pack sizes (20, 40, 60, 100 coins) with volume discounts
- Shopping cart and checkout flow
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend**: React + TypeScript
- **Routing**: React Router (Data mode)
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Planned Backend**: Supabase
- **Planned Hosting**: Vercel

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
# Note: The dev server is already running in Figma Make environment
```

## Project Structure

```
src/
├── app/
│   ├── components/     # React components
│   │   ├── Catalog.tsx
│   │   ├── Customize.tsx
│   │   ├── Cart.tsx
│   │   ├── Checkout.tsx
│   │   ├── CoinPreview.tsx  # Coin visualization with curved text
│   │   └── ui/              # Shared UI components
│   ├── context/        # React context providers
│   ├── data/          # Mock data (will be replaced with Supabase)
│   ├── routes.tsx     # React Router configuration
│   └── types.ts       # TypeScript type definitions
└── styles/           # Global styles and Tailwind config
```

## Coin Customization

Each coin features:
- 40mm diameter circular design
- Icon/graphic in the center
- Top and bottom text that curves along the edge
- Metallic golden appearance
- Character limits for personalization

## Future Plans

- Convert to mobile app
- Integrate Supabase for backend
- User authentication
- Order management system
- Payment processing integration
