# Component Documentation

This guide documents all components in the Revolt Hub application.

## 🧱 Component Hierarchy

```
App (Root)
├── Index (Main Page)
│   ├── Header
│   │   ├── Logo (Image)
│   │   ├── Navigation Links
│   │   └── Button (Login)
│   ├── Main (Hero Section)
│   │   ├── Background Image
│   │   ├── Title & Description
│   │   └── RevoltCard Grid
│   │       ├── RevoltCard (Social)
│   │       ├── RevoltCard (Gaming)
│   │       └── RevoltCard (Fintech)
│   └── Footer
└── NotFound (404 Page)
```

## 📦 Core Components

### RevoltCard

**Location**: `src/components/RevoltCard.tsx`

A custom card component for platform navigation.

```typescript
interface RevoltCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}
```

**Features**:
- Hover animations with transform and shadow effects
- Border color transitions using revolt brand colors
- Responsive design
- External link navigation

**Usage**:
```tsx
<RevoltCard
  title="Social Media"
  description="Connect, share, message, and build your community."
  href="https://social.revoltsrc.online"
/>
```

**Styling**:
- Base: `bg-card border border-border rounded-xl p-6`
- Hover: `hover:border-revolt-brand hover:shadow-lg hover:shadow-revolt-brand/20`
- Transform: `transform hover:-translate-y-1`

### Button Component

**Location**: `src/components/ui/button.tsx`

Extended shadcn/ui button with custom revolt variant.

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "revolt";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}
```

**Variants**:
- `default`: Primary brand styling
- `revolt`: Custom revolt brand colors with enhanced shadows
- `outline`: Border with transparent background
- `secondary`: Muted background styling
- `ghost`: Transparent with hover effects
- `link`: Text-only with underline

**Revolt Variant Styling**:
```css
revolt: "bg-revolt-brand text-primary-foreground hover:bg-revolt-brand-hover transition-all duration-300 shadow-lg hover:shadow-xl"
```

## 🎨 UI Components (shadcn/ui)

### Card Components

**Location**: `src/components/ui/card.tsx`

```typescript
// Available card components
Card          // Container with border and padding
CardHeader    // Header section with spacing
CardTitle     // Title with proper typography
CardContent   // Main content area
CardFooter    // Footer section
```

### Toast System

**Location**: `src/components/ui/toast.tsx` & `src/components/ui/toaster.tsx`

```typescript
// Toast hook usage
import { useToast } from "@/hooks/use-toast";

const { toast } = useToast();

toast({
  title: "Success!",
  description: "Your action was completed.",
  variant: "default" | "destructive"
});
```

### Form Components

**Input**: `src/components/ui/input.tsx`
```typescript
<Input 
  type="text" 
  placeholder="Enter text..." 
  className="additional-styles"
/>
```

**Textarea**: `src/components/ui/textarea.tsx`
```typescript
<Textarea 
  placeholder="Enter longer text..." 
  className="min-h-[120px]"
/>
```

**Label**: `src/components/ui/label.tsx`
```typescript
<Label htmlFor="input-id">Field Label</Label>
```

## 📱 Page Components

### Index Page

**Location**: `src/pages/Index.tsx`

The main hub page with animated background and platform navigation.

**Structure**:
```tsx
<div className="min-h-screen bg-background relative overflow-hidden">
  {/* Animated Background Layer */}
  <div className="fixed inset-0 pointer-events-none">
    {/* Gradient animations */}
    {/* Floating geometric elements */}
    {/* Grid pattern overlay */}
  </div>

  {/* Header */}
  <header className="relative z-10 backdrop-blur-sm bg-background/80">
    {/* Logo and navigation */}
  </header>

  {/* Main Content */}
  <main className="relative z-10">
    {/* Hero section with background image */}
    {/* RevoltCard grid */}
  </main>

  {/* Footer */}
  <footer className="relative z-10 backdrop-blur-sm bg-background/80">
    {/* Copyright */}
  </footer>
</div>
```

**Animations**:
- Background gradient shifting
- Floating geometric shapes
- Card hover effects
- Backdrop blur on scroll

### NotFound Page

**Location**: `src/pages/NotFound.tsx`

404 error page with navigation back to home.

## 🎭 Animation Components

### Background Animations

**Gradient Shift**:
```tsx
<div 
  className="absolute inset-0 opacity-30 animate-gradient-shift"
  style={{ 
    background: 'var(--gradient-animated)',
    backgroundSize: '400% 400%'
  }}
/>
```

**Floating Elements**:
```tsx
<div className="absolute top-20 left-10 w-20 h-20 border border-revolt-brand/20 rotate-45 animate-float-up" />
```

**Pulse Glow**:
```tsx
<div className="absolute top-40 right-20 w-16 h-16 border border-accent/30 rounded-full animate-pulse-glow" />
```

## 🔧 Utility Components

### Custom Hooks

**useMobile**: `src/hooks/use-mobile.tsx`
```typescript
const isMobile = useMobile(); // Returns boolean for mobile detection
```

**useToast**: `src/hooks/use-toast.ts`
```typescript
const { toast, dismiss, toasts } = useToast();
```

### Utility Functions

**cn Function**: `src/lib/utils.ts`
```typescript
import { cn } from "@/lib/utils";

// Combines class names with conditional logic
const className = cn(
  "base-classes",
  condition && "conditional-classes",
  anotherCondition ? "true-classes" : "false-classes"
);
```

## 🎨 Styling Guidelines

### Design System Usage

**Colors**:
```tsx
// ✅ Correct - Use design system tokens
<div className="bg-background text-foreground border-border">
<Button variant="revolt">Revolt Action</Button>

// ❌ Incorrect - Direct color values
<div className="bg-black text-white border-gray-800">
<Button className="bg-blue-500">Action</Button>
```

**Spacing & Sizing**:
```tsx
// Use Tailwind's consistent spacing scale
<div className="p-6 gap-4 rounded-xl">
  <h3 className="text-2xl font-semibold mb-2">
  <p className="text-muted-foreground">
</div>
```

**Responsive Design**:
```tsx
// Mobile-first responsive approach
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="text-center md:text-left">
</div>
```

## 📋 Component Checklist

When creating new components:

- [ ] Use TypeScript interfaces for props
- [ ] Implement proper accessibility attributes
- [ ] Use design system tokens (no direct colors)
- [ ] Include responsive design considerations
- [ ] Add proper error boundaries if needed
- [ ] Document component usage and props
- [ ] Test on multiple screen sizes
- [ ] Follow existing naming conventions
- [ ] Use semantic HTML elements
- [ ] Implement proper keyboard navigation

## 🔄 Component Development Workflow

1. **Plan Component Structure**
   - Define props interface
   - Consider responsive behavior
   - Plan accessibility features

2. **Create Component File**
   - Use existing component patterns
   - Implement TypeScript interfaces
   - Add proper imports

3. **Style with Design System**
   - Use semantic color tokens
   - Apply consistent spacing
   - Add responsive classes

4. **Test Component**
   - Test all interactive states
   - Verify responsive behavior
   - Check accessibility compliance

5. **Document Usage**
   - Add to component documentation
   - Include usage examples
   - Document any special considerations

---

For questions about component usage or to request new components, create an issue or reach out to the development team.