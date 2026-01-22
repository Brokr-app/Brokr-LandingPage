import { Button } from "@/components/ui/button";
import mockupFeed from "@/assets/mockup-feed.png";
import mockupProfile from "@/assets/mockup-profile.png";
import mockupEquity from "@/assets/mockup-equity.png";
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Trophy, 
  Building2, 
  ChartLine,
  Star,
  Zap
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight">BROKR</span>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Om oss</Button>
            <Button variant="hero" size="sm">Kom igång</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Zap className="w-4 h-4" />
            Den sociala marknadsplatsen för bostäder
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">Brokr</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Live in the market – before Hemnet
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Registrera som mäklare
            </Button>
            <Button variant="heroOutline" size="xl">
              Registrera som användare
            </Button>
          </div>

          {/* Phone Mockups */}
          <div className="flex items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="hidden md:block w-48 lg:w-56 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={mockupEquity} 
                alt="Equity tracking" 
                className="w-full rounded-3xl shadow-2xl animate-float"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
            <div className="w-56 md:w-64 lg:w-72 z-10">
              <img 
                src={mockupFeed} 
                alt="Brokr Feed" 
                className="w-full rounded-3xl shadow-2xl glow-effect animate-float"
              />
            </div>
            <div className="hidden md:block w-48 lg:w-56 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={mockupProfile} 
                alt="Broker profile" 
                className="w-full rounded-3xl shadow-2xl animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bostäder som aktier</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Avanza × TikTok × Airbnb – en plats där man lever i marknaden varje dag
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: "Sneak Peeks",
                description: "Se exklusiva förhandsvisningar innan de når marknaden"
              },
              {
                icon: TrendingUp,
                title: "Equity Tracking",
                description: "Följ din bostads värdeutveckling i realtid"
              },
              {
                icon: Trophy,
                title: "Leaderboards",
                description: "Upptäck toppmäklare baserat på resultat och recensioner"
              },
              {
                icon: ChartLine,
                title: "Simulator",
                description: "Simulera bud och jämför med grannskapet"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="card-glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Users & Brokers */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* For Users */}
            <div className="card-glass rounded-3xl p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">För bostadsköpare</h3>
              <ul className="space-y-4">
                {[
                  "Följ värdeutvecklingen och få försprång via sneak peeks",
                  "Jämför dig med området och simulera ditt aktuella bostadsvärde",
                  "Daglig puls med ticker, equity och streaks"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Brokers */}
            <div className="card-glass rounded-3xl p-8 lg:p-10 border-primary/30">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">För mäklare</h3>
              <ul className="space-y-4">
                {[
                  "Bygg relationer och synlighet mellan affärerna",
                  "Organiska leads via content, inte annonser",
                  "Topplistor & badges för social konkurrenskraft"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-sm text-primary font-medium">
                  Vi bjuder in ett fåtal utvalda mäklare att tidigt kliva in som potentiella partners, rådgivare och/eller aktiva nyckelpersoner i bolaget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Nästa steg</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {[
              { date: "Jan 2026", label: "MVP börjar byggas" },
              { date: "Q1 2026", label: "Första version färdig" },
              { date: "Q3 2026", label: "Full lansering" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4 animate-pulse-glow">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <span className="text-lg font-semibold">{step.date}</span>
                <span className="text-muted-foreground text-sm">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="card-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Redo att börja?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Bli en del av framtidens bostadsmarknad
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl">
                  Registrera som mäklare
                </Button>
                <Button variant="heroOutline" size="xl">
                  Registrera som användare
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold tracking-tight">BROKR</span>
          <p className="text-muted-foreground text-sm">
            © 2026 Brokr. Den sociala marknadsplatsen för bostäder.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
