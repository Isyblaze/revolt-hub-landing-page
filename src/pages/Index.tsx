import { Button } from "@/components/ui/button";
import { RevoltCard } from "@/components/RevoltCard";
import heroImage from "@/assets/revolt-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 opacity-30 animate-gradient-shift"
          style={{ 
            background: 'var(--gradient-animated)',
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-revolt-brand/20 rotate-45 animate-float-up" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-accent/30 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-revolt-brand/25 animate-float-up" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 right-1/3 w-8 h-8 bg-accent/20 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-revolt-brand/15 rotate-12 animate-float-up" style={{ animationDelay: '3s' }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--revolt-brand)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--revolt-brand)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-border backdrop-blur-sm bg-background/80">
        <img 
          src="/lovable-uploads/29395206-f994-4813-9c93-37e943a93ba1.png" 
          alt="Revolt Logo" 
          className="h-12 w-auto"
        />
        <nav className="flex items-center space-x-4">
          <a href="#fintech" className="hover:text-revolt-brand transition-colors">
            Fintech
          </a>
          <a href="#social" className="hover:text-revolt-brand transition-colors">
            Social
          </a>
          <a href="#gaming" className="hover:text-revolt-brand transition-colors">
            Gaming
          </a>
          <Button variant="revolt" className="ml-4">
            Login
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 text-center py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Enter the Revolt Hub
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Your all-in-one space for finance, gaming, and digital connection.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" id="social">
            <RevoltCard
              title="Social Media"
              description="Connect, share, message, and build your community."
              href="https://social.revoltsrc.online"
            />
            
            <RevoltCard
              title="Gaming Zone"
              description="Play web games, track scores, and win rewards. Coming soon."
              href="https://play.revoltsrc.online"
              className="md:mt-4"
            />
            
            <RevoltCard
              title="Fintech Hub"
              description="Wallets, payments, P2P trades, crypto and more. Coming soon."
              href="https://wallet.revoltsrc.online"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center text-muted-foreground text-sm py-8 border-t border-border backdrop-blur-sm bg-background/80">
        © 2025 Revolt. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
