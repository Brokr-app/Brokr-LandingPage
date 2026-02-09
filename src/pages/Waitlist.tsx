import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Waitlist = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission not implemented yet
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            BROKR
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Waitlist Form Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-md">
          <div className="card-glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="relative">
              <h1 className="text-3xl font-bold mb-8">Get Early Access</h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+46 70 123 45 67"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Join Waitlist
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-xl font-bold tracking-tight">
            BROKR
          </Link>
          <p className="text-muted-foreground text-sm">
            © 2026 Brokr. The social marketplace for real estate.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;
