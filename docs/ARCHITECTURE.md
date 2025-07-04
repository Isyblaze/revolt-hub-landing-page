# Architecture Overview

This document outlines the architecture and design decisions for the Revolt Hub application.

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Revolt Hub Frontend                     │
├─────────────────────────────────────────────────────────────┤
│  React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   External Services                        │
├─────────────────┬─────────────────┬─────────────────────────┤
│  Social Media   │   Gaming Zone   │     Fintech Hub        │
│  Platform       │   (Coming Soon) │   (Coming Soon)        │
│ social.revolt   │ play.revolt     │ wallet.revolt          │
└─────────────────┴─────────────────┴─────────────────────────┘
```

## 📁 Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   │   ├── button.tsx  # Button variants & styling
│   │   ├── card.tsx    # Card layouts
│   │   ├── toast.tsx   # Notification system
│   │   └── ...         # Other UI primitives
│   └── RevoltCard.tsx  # Custom business components
├── pages/              # Page-level components
│   ├── Index.tsx       # Main hub landing page
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile detection
│   └── use-toast.ts    # Toast notifications
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities (cn, etc.)
├── assets/             # Static assets
│   └── revolt-hero.jpg # Hero background image
├── App.tsx            # Root component & routing
├── main.tsx           # Application entry point
└── index.css          # Global styles & design system
```

## 🎨 Design System Architecture

### Color System
```css
:root {
  /* Base semantic colors */
  --background: 220 13% 2%;     /* Dark background */
  --foreground: 0 0% 100%;      /* White text */
  --primary: 191 91% 56%;       /* Revolt cyan */
  --accent: 191 91% 70%;        /* Lighter cyan */
  
  /* Revolt-specific tokens */
  --revolt-brand: 191 91% 56%;
  --revolt-surface: 220 13% 6%;
  
  /* Gradients */
  --gradient-revolt: linear-gradient(135deg, ...);
  --gradient-animated: linear-gradient(-45deg, ...);
}
```

### Component Variants
```typescript
// Button component with revolt variant
const buttonVariants = cva(
  "base-styles",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        revolt: "bg-revolt-brand hover:bg-revolt-brand-hover",
        // ... other variants
      }
    }
  }
)
```

## 🔧 State Management

### Current State Strategy
- **Local Component State**: React useState for component-specific state
- **URL State**: React Router for navigation state
- **Global State**: Context API for shared state (when needed)

### Future Considerations
As the application grows, consider:
- **Zustand** for global state management
- **React Query** for server state management
- **Redux Toolkit** for complex state logic

## 🎯 Routing Architecture

```typescript
// App.tsx routing structure
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,        // Main hub page
    errorElement: <NotFound />  // 404 fallback
  }
  // Future routes for gaming, fintech, etc.
]);
```

### External Route Strategy
- **Social**: Redirects to `social.revoltsrc.online`
- **Gaming**: Will redirect to `play.revoltsrc.online`
- **Fintech**: Will redirect to `wallet.revoltsrc.online`

## 🎭 Animation System

### CSS Animations
```css
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes float-up {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}
```

### Animation Usage
- **Background**: `animate-gradient-shift` for dynamic gradients
- **Elements**: `animate-float-up` for floating geometric shapes
- **Interactions**: `animate-pulse-glow` for hover effects

## 📱 Responsive Strategy

### Breakpoint System
```css
/* Tailwind default breakpoints */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Mobile-First Approach
- Base styles target mobile devices
- Progressive enhancement for larger screens
- Grid layouts adapt from 1 column to 3 columns

## 🔌 Integration Points

### Current Integrations
- **Lovable Platform**: Built and deployed on Lovable
- **Static Assets**: Images served from public directory
- **External Links**: Direct navigation to subdomains

### Future Integration Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Social API    │    │   Gaming API    │    │  Fintech API    │
│                 │    │                 │    │                 │
│ • User profiles │    │ • Game engines  │    │ • Wallet ops    │
│ • Messaging     │    │ • Leaderboards  │    │ • Payments      │
│ • Communities   │    │ • Achievements  │    │ • Trading       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                       │                       │
        └───────────────────────┼───────────────────────┘
                                │
                    ┌─────────────────┐
                    │  Revolt Hub     │
                    │  (Central Auth) │
                    └─────────────────┘
```

## 🚀 Performance Architecture

### Bundle Strategy
- **Vite**: Fast build tool with HMR
- **Code Splitting**: Lazy loading for future pages
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Image optimization and compression

### Loading Strategy
- **Critical CSS**: Inlined for immediate rendering
- **Progressive Loading**: Background animations load after content
- **Preload**: Critical assets preloaded

## 🔒 Security Architecture

### Current Security Measures
- **CSP Headers**: Content Security Policy (when deployed)
- **HTTPS**: Enforced in production
- **Input Sanitization**: React's built-in XSS protection

### Future Security Considerations
- **Authentication**: JWT-based auth system
- **Rate Limiting**: API request throttling
- **CORS**: Properly configured cross-origin requests

## 📊 Monitoring Strategy

### Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Bundle Analysis**: Size and dependency monitoring
- **Runtime Performance**: React DevTools profiling

### Error Tracking
- **Console Errors**: Development debugging
- **Production Errors**: Error boundary implementation
- **User Analytics**: Future integration consideration

## 🔄 Development Workflow

### Build Process
```bash
# Development
npm run dev     # Vite dev server with HMR

# Production
npm run build   # TypeScript compilation + Vite build
npm run preview # Local production preview
```

### Code Quality
- **TypeScript**: Strict type checking
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting (via Lovable)

## 🎯 Scalability Considerations

### Horizontal Scaling
- **Microservices**: Each platform (social, gaming, fintech) as separate service
- **CDN**: Static asset distribution
- **Load Balancing**: Multiple server instances

### Vertical Scaling
- **Component Optimization**: Memoization and optimization
- **State Optimization**: Efficient state updates
- **Bundle Optimization**: Code splitting and lazy loading

---

This architecture provides a solid foundation for the Revolt Hub platform while maintaining flexibility for future growth and feature additions.
