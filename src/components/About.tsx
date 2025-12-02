import murilloAboutPhoto from "@/assets/murillo-about-photo.png";

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Label + Photo */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Sobre mim
            </span>
            <div className="w-full max-w-[280px] rounded-lg overflow-hidden">
              <img 
                src={murilloAboutPhoto} 
                alt="Murillo Alves" 
                className="w-full h-auto grayscale"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-8 space-y-8">
            <p className="text-2xl sm:text-3xl font-light leading-snug text-foreground tracking-tight">
              Designer de experiências digitais com foco em criar interfaces minimalistas, 
              funcionais e visualmente impactantes.
            </p>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Tenho 22 anos e sou graduado em Desenvolvimento Web pela{" "}
                <span className="text-foreground">Universidade Salvador (UNIFACS)</span>. 
                Minha abordagem combina estética refinada com usabilidade intuitiva.
              </p>
              <p>
                Acredito que o design deve ser invisível — quando bem executado, 
                ele simplesmente funciona, guiando o usuário sem esforço através 
                da experiência.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {["UI Design", "UX Design", "Web Development", "Branding", "Prototyping", "Motion"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
