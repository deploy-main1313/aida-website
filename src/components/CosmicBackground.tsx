import { useEffect, useState } from "react";

export function CosmicBackground() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      const colors = [
        "rgba(236, 72, 153, 0.8)", // Pink
        "rgba(168, 85, 247, 0.8)", // Purple
        "rgba(217, 70, 239, 0.8)", // Violet
        "rgba(244, 114, 182, 0.6)", // Light Pink
        "rgba(196, 181, 253, 0.6)", // Light Purple
      ];

      for (let i = 0; i < 100; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color:
            colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Enhanced pink-purple gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(217, 70, 239, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(244, 114, 182, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 30% 10%, rgba(196, 181, 253, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, #0a0015 0%, #1a0a2e 25%, #2d1b4e 50%, #1a0a35 75%, #000000 100%)
          `,
          animation: "gradient-shift 10s ease infinite",
        }}
      />

      {/* Enhanced constellation lines */}
      <svg className="absolute inset-0 w-full h-full opacity-25">
        <defs>
          <filter id="pinkGlow">
            <feGaussianBlur
              stdDeviation="3"
              result="coloredBlur"
            />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Pink constellation lines */}
        <line
          x1="10%"
          y1="20%"
          x2="30%"
          y2="40%"
          stroke="rgba(236, 72, 153, 0.4)"
          strokeWidth="1"
          filter="url(#pinkGlow)"
        />
        <line
          x1="30%"
          y1="40%"
          x2="50%"
          y2="30%"
          stroke="rgba(168, 85, 247, 0.4)"
          strokeWidth="1"
          filter="url(#pinkGlow)"
        />
        <line
          x1="50%"
          y1="30%"
          x2="70%"
          y2="50%"
          stroke="rgba(217, 70, 239, 0.4)"
          strokeWidth="1"
          filter="url(#pinkGlow)"
        />
        <line
          x1="70%"
          y1="50%"
          x2="90%"
          y2="30%"
          stroke="rgba(244, 114, 182, 0.4)"
          strokeWidth="1"
          filter="url(#pinkGlow)"
        />

        <line
          x1="20%"
          y1="70%"
          x2="40%"
          y2="80%"
          stroke="rgba(168, 85, 247, 0.3)"
          strokeWidth="1"
          filter="url(#pinkGlow)"
        />
        <line
          x1="40%"
          y1="80%"
          x2="60%"
          y2="70%"
          stroke="rgba(236, 72, 153, 0.3)"
          strokeWidth="1"
          filter="url(#pinkGlow)"
        />
        <line
          x1="60%"
          y1="70%"
          x2="80%"
          y2="85%"
          stroke="rgba(217, 70, 239, 0.3)"
          strokeWidth="1"
          filter="url(#pinkGlow)"
        />

        {/* Additional mystical symbols */}
        <circle
          cx="25%"
          cy="25%"
          r="2"
          fill="rgba(236, 72, 153, 0.3)"
          filter="url(#pinkGlow)"
        />
        <circle
          cx="75%"
          cy="75%"
          r="3"
          fill="rgba(168, 85, 247, 0.3)"
          filter="url(#pinkGlow)"
        />
        <circle
          cx="15%"
          cy="60%"
          r="1.5"
          fill="rgba(217, 70, 239, 0.4)"
          filter="url(#pinkGlow)"
        />
      </svg>

      {/* Enhanced floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full cosmic-twinkle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Enhanced orbiting elements */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1">
        <div className="cosmic-orbit">
          <div className="w-2 h-2 bg-pink-400 rounded-full mystical-glow"></div>
        </div>
      </div>

      <div className="absolute top-3/4 right-1/4 w-1 h-1">
        <div
          className="cosmic-orbit"
          style={{
            animationDuration: "25s",
            animationDirection: "reverse",
          }}
        >
          <div className="w-3 h-3 bg-purple-400 rounded-full mystical-glow-purple"></div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/3 w-1 h-1">
        <div
          className="cosmic-orbit"
          style={{ animationDuration: "30s" }}
        >
          <div className="w-2.5 h-2.5 bg-violet-400 rounded-full mystical-glow"></div>
        </div>
      </div>

      {/* Enhanced shooting stars */}
      <div className="absolute top-10 left-0 w-full h-full">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full cosmic-drift"
            style={{
              top: `${Math.random() * 80}%`,
              background:
                i % 2 === 0
                  ? "rgba(236, 72, 153, 1)"
                  : "rgba(168, 85, 247, 1)",
              animationDelay: `${i * 6}s`,
              animationDuration: "18s",
              boxShadow:
                i % 2 === 0
                  ? "0 0 8px 3px rgba(236, 72, 153, 0.8)"
                  : "0 0 8px 3px rgba(168, 85, 247, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Enhanced cosmic nebula effects */}
      <div
        className="absolute top-1/3 left-1/5 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl cosmic-float"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl cosmic-float"
        style={{
          animationDuration: "10s",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-500/12 rounded-full blur-3xl cosmic-float"
        style={{
          animationDuration: "12s",
          animationDelay: "4s",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-pink-400/10 rounded-full blur-2xl cosmic-float"
        style={{
          animationDuration: "14s",
          animationDelay: "6s",
        }}
      />
    </div>
  );
}