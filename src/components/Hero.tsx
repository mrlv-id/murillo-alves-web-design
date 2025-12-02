const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Overline */}
          <p className="opacity-0 animate-fade-up stagger-1 text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
            Web Designer
          </p>

          {/* Main Name */}
          <h1 className="opacity-0 animate-fade-up stagger-2">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground">
              Murillo
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mt-2">
              Alves
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex justify-center opacity-0 animate-fade-up stagger-3">
            <div className="w-16 h-px bg-gray-300 animate-line-grow" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Tagline */}
          <p className="opacity-0 animate-fade-up stagger-4 text-lg sm:text-xl text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
            Digital Experience Creator
          </p>

          {/* CTA */}
          <div className="opacity-0 animate-fade-up stagger-5 pt-6">
            <a
              href="#projetos"
              className="inline-flex items-center gap-3 text-sm text-foreground hover:text-gray-600 transition-all duration-300 group"
            >
              <span className="tracking-wide">Ver projetos</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
