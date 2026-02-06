import React, { useEffect, useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  delay: number;
  icon: 'heart' | 'star' | 'sparkle';
  size: number;
  color: string;
}

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ['text-primary-300', 'text-secondary-300', 'text-accent-300', 'text-pink-300'];
    const icons: ('heart' | 'star' | 'sparkle')[] = ['heart', 'star', 'sparkle'];
    
    const newParticles: Particle[] = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        icon: icons[Math.floor(Math.random() * icons.length)],
        size: Math.random() * 8 + 12,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(newParticles);
  }, []);

  const renderIcon = (particle: Particle) => {
    const props = {
      className: `particle ${particle.color}`,
      style: {
        width: particle.size,
        height: particle.size,
        left: `${particle.x}%`,
        animationDelay: `${particle.delay}s`,
      },
    };

    switch (particle.icon) {
      case 'heart':
        return <Heart key={particle.id} {...props} className={`${props.className} particle-float`} fill="currentColor" />;
      case 'star':
        return <Star key={particle.id} {...props} className={`${props.className} particle-float`} fill="currentColor" />;
      case 'sparkle':
        return <Sparkles key={particle.id} {...props} className={`${props.className} particle-float`} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map(renderIcon)}
    </div>
  );
};

export default FloatingParticles;