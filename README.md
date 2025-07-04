# Revolt Hub 🚀

A modern, futuristic web platform serving as the central hub for social media, gaming, and fintech applications built with React, TypeScript, and Tailwind CSS.

![Revolt Hub](./src/assets/revolt-hero.jpg)

## 🌟 Features

- **Social Media Platform** - Connect, share, message, and build your community
- **Gaming Zone** - Play web games, track scores, and win rewards (Coming Soon)
- **Fintech Hub** - Wallets, payments, P2P trades, crypto and more (Coming Soon)
- **Responsive Design** - Beautiful UI that works on all devices
- **Animated Background** - Futuristic animated elements and gradients
- **Dark Theme** - Modern dark theme with accent colors

## 🚀 Live Demo

- **Main Hub**: [Revolt Hub](https://revolthub.lovable.app)
- **Social Platform**: [social.revoltsrc.online](https://social.revoltsrc.online)
- **Gaming Zone**: [play.revoltsrc.online](https://play.revoltsrc.online) (Coming Soon)
- **Fintech Hub**: [wallet.revoltsrc.online](https://wallet.revoltsrc.online) (Coming Soon)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **UI Components**: Radix UI primitives
- **Animations**: CSS animations and Tailwind animations
- **Development**: ESLint, TypeScript strict mode

## 📁 Project Structure

```
revolt-hub/
├── public/                     # Static assets
│   ├── lovable-uploads/       # Uploaded images and assets
│   └── robots.txt
├── src/
│   ├── assets/                # Images and static files
│   │   └── revolt-hero.jpg
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ...
│   │   ├── RevoltCard.tsx    # Custom card component
│   │   └── ...
│   ├── hooks/                # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                  # Utility functions
│   │   └── utils.ts
│   ├── pages/                # Page components
│   │   ├── Index.tsx         # Main hub page
│   │   └── NotFound.tsx      # 404 page
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   ├── index.css            # Global styles & design system
│   └── vite-env.d.ts        # Vite type definitions
├── .gitignore
├── package.json
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md               # Project documentation
```

## 🎨 Design System

The project uses a comprehensive design system defined in `src/index.css` and `tailwind.config.ts`:

### Color Palette
- **Primary**: Revolt brand cyan (`#3DD8FF`)
- **Background**: Dark theme with subtle gradients
- **Accents**: Complementary blues and cyans
- **Text**: High contrast white on dark backgrounds

### Animations
- **Gradient Shift**: Animated background gradients
- **Float Up**: Floating geometric elements
- **Pulse Glow**: Glowing effects on UI elements

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd revolt-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Roadmap

### Phase 1 - Foundation ✅
- [x] Main hub interface
- [x] Responsive design
- [x] Animated backgrounds
- [x] Navigation structure

### Phase 2 - Social Platform (In Progress)
- [x] Social media integration
- [ ] User profiles
- [ ] Messaging system
- [ ] Community features

### Phase 3 - Gaming Zone (Coming Soon)
- [ ] Web game integration
- [ ] Score tracking
- [ ] Reward system
- [ ] Leaderboards

### Phase 4 - Fintech Hub (Coming Soon)
- [ ] Wallet integration
- [ ] Payment processing
- [ ] P2P trading
- [ ] Cryptocurrency support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use the existing design system tokens
- Write responsive, accessible components
- Test on multiple screen sizes
- Follow the existing code style

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered web development
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by Tailwind CSS

## 📞 Support

For support, email support@revoltsrc.online or join our Discord community.

---

<div align="center">
  <strong>Built with ❤️ by the Revolt team</strong>
</div>