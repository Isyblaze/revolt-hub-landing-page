import { Button } from "@/components/ui/button";
import { RevoltCard } from "@/components/RevoltCard";
import heroImage from "@/assets/revolt-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/29395206-f994-4813-9c93-37e943a93ba1.png" 
            alt="Revolt Logo" 
            className="h-8 w-8"
          />
          <h1 className="text-2xl font-bold text-revolt-brand">Revolt</h1>
        </div>
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
      <main className="text-center py-20 px-4 relative">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" id="fintech">
            <RevoltCard
              title="Fintech Hub"
              description="Wallets, payments, P2P trades, crypto and more."
              href="https://wallet.revoltsrc.online"
            />
            
            <RevoltCard
              title="Social Media"
              description="Connect, share, message, and build your community."
              href="https://social.revoltsrc.online"
              className="md:mt-4"
            />
            
            <RevoltCard
              title="Gaming Zone"
              description="Play web games, track scores, and win rewards."
              href="https://play.revoltsrc.online"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-muted-foreground text-sm py-8 border-t border-border">
        © 2025 Revolt. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
