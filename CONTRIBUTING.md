# Contributing to Revolt Hub

Thank you for considering contributing to Revolt Hub! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Development Setup

1. Fork the repository on GitHub
2. Clone your forked repository:
```bash
git clone https://github.com/YOUR_USERNAME/revolt-hub.git
cd revolt-hub
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:8080](http://localhost:8080) in your browser

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow the existing code formatting
- Use semantic HTML elements
- Write accessible components
- Follow React best practices

### Design System
- **Always use design system tokens** from `src/index.css` and `tailwind.config.ts`
- **Never use direct colors** like `text-white`, `bg-black`, etc.
- Use semantic color tokens: `text-foreground`, `bg-background`, `border-border`
- Utilize the revolt brand colors: `revolt-brand`, `revolt-surface`, etc.

### Component Guidelines
- Create small, focused components
- Use TypeScript interfaces for props
- Follow the existing component structure in `/src/components/ui/`
- Write responsive components that work on all screen sizes
- Use proper accessibility attributes

### File Organization
```
src/
├── components/
│   ├── ui/           # shadcn/ui components (shared)
│   └── ...           # Custom components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── assets/           # Images and static files
```

## 🎨 Design System Usage

### Colors
```tsx
// ✅ Good - Using design system tokens
<div className="bg-background text-foreground border-border">
<Button variant="revolt">Action</Button>

// ❌ Bad - Direct colors
<div className="bg-black text-white border-gray-800">
<Button className="bg-blue-500">Action</Button>
```

### Animations
Use the predefined animations from `tailwind.config.ts`:
- `animate-gradient-shift` - For background gradients
- `animate-float-up` - For floating elements
- `animate-pulse-glow` - For glowing effects

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 📋 Pull Request Process

1. **Create a feature branch**:
```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes**:
- Follow the coding guidelines
- Test your changes thoroughly
- Ensure responsive design
- Update documentation if needed

3. **Commit your changes**:
```bash
git add .
git commit -m "feat: add your feature description"
```

4. **Push to your fork**:
```bash
git push origin feature/your-feature-name
```

5. **Create a Pull Request**:
- Provide a clear title and description
- Reference any related issues
- Include screenshots for UI changes
- Ensure all checks pass

### Commit Message Format
Use conventional commits format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions or changes
- `chore:` - Build process or auxiliary tool changes

## 🐛 Bug Reports

When reporting bugs, please include:
- **Description**: Clear description of the issue
- **Steps to Reproduce**: Step-by-step instructions
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable
- **Environment**: Browser, OS, etc.

## 💡 Feature Requests

For feature requests, please provide:
- **Problem Statement**: What problem does this solve?
- **Proposed Solution**: How should it work?
- **Alternatives**: Other solutions considered
- **Additional Context**: Screenshots, mockups, etc.

## 🎯 Areas for Contribution

### High Priority
- **Gaming Zone**: Web game integration and features
- **Fintech Hub**: Wallet and payment features
- **Social Features**: Enhanced social media functionality
- **Performance**: Optimization and performance improvements

### Medium Priority
- **Documentation**: Improve and expand documentation
- **Testing**: Add unit and integration tests
- **Accessibility**: Improve accessibility features
- **Mobile**: Enhanced mobile experience

### Good First Issues
- **UI Components**: Create new shadcn/ui component variants
- **Animations**: Add new animation effects
- **Responsive**: Fix responsive design issues
- **Documentation**: Update component documentation

## 🔒 Security

If you discover a security vulnerability, please email security@revoltsrc.online instead of creating a public issue.

## 📄 License

By contributing to Revolt Hub, you agree that your contributions will be licensed under the MIT License.

## 🙋‍♀️ Questions?

- Create an issue for general questions
- Join our Discord community for real-time chat
- Email us at support@revoltsrc.online

---

Thank you for contributing to Revolt Hub! 🚀