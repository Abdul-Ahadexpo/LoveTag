import React, { useState } from 'react';
import { Heart, Home, PenLine, Search, Menu, X, Info } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col heart-bg">
      <FloatingParticles />
      <header className="bg-white bg-opacity-90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 z-20">
              <Heart className="h-6 w-6 text-primary-500 heart-beat pulse-glow bounce-in" fill="currentColor" />
              <span className="text-2xl font-script font-bold text-primary-600 bounce-in">LoveTag</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-20 p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex gap-6 items-center">
              <a href="/" className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-comic">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </a>
              <a href="/post" className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-comic">
                <PenLine className="h-5 w-5" />
                <span>Post a Note</span>
              </a>
              <a href="/search" className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-comic">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </a>
              <a href="/about" className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-comic">
                <Info className="h-5 w-5" />
                <span>About</span>
              </a>
            </nav>

            {/* Mobile navigation */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white md:hidden z-10">
                <nav className="flex flex-col items-center justify-center h-full gap-8 text-xl">
                  <a 
                    href="/" 
                    className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors font-comic"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Home className="h-6 w-6" />
                    <span>Home</span>
                  </a>
                  <a 
                    href="/post" 
                    className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors font-comic"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PenLine className="h-6 w-6" />
                    <span>Post a Note</span>
                  </a>
                  <a 
                    href="/search" 
                    className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors font-comic"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Search className="h-6 w-6" />
                    <span>Search</span>
                  </a>
                  <a 
                    href="/about" 
                    className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors font-comic"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Info className="h-6 w-6" />
                    <span>About</span>
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <div className="relative overflow-hidden">
        <div className="absolute -left-4 bottom-8 opacity-10">
          <Heart className="h-16 w-16 text-primary-300 floating-heart" />
        </div>
        <div className="absolute left-1/4 bottom-16 opacity-10">
          <Heart className="h-12 w-12 text-secondary-300 floating-heart" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute left-2/4 bottom-12 opacity-10">
          <Heart className="h-14 w-14 text-accent-300 floating-heart" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute right-1/4 bottom-20 opacity-10">
          <Heart className="h-10 w-10 text-primary-300 floating-heart" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="absolute -right-4 bottom-10 opacity-10">
          <Heart className="h-16 w-16 text-secondary-300 floating-heart" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
      
      <footer className="bg-white bg-opacity-90 backdrop-blur-sm py-6 mt-10">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-2 font-comic italic">
            "A place where love hides in plain sight. Maybe someone's thinking of you too…"
          </p>
          <p className="text-center text-gray-400 text-sm font-comic">
            © {new Date().getFullYear()} LoveTag - Send anonymous love notes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;