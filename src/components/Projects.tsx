import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight, Globe, Layers, Palette, Code } from "lucide-react";
import ramosAgencyPreview from "@/assets/projects/ramos-agency-preview.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <div id="projetos" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{t("projects.badge")}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                {t("projects.title")}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                {t("projects.description")}
              </p>
            </div>
          </div>
          <div className="w-full max-w-full px-6">
            <Carousel>
              <CarouselContent>
                {/* Projeto Ramos Agency */}
                <CarouselItem>
                  <a
                    href="https://ramosagency.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div 
                      className="relative flex flex-col rounded-md aspect-video items-center justify-center p-6 transition-all border border-border hover:border-white/20 overflow-hidden group"
                      style={{ backgroundImage: `url(${ramosAgencyPreview})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                      {/* Frosted glass overlay with grain */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 group-hover:bg-black/20 group-hover:backdrop-blur-0" />
                      <div 
                        className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-0 mix-blend-overlay"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
                      />
                      
                      {/* Content - hides on hover */}
                      <div className="relative z-10 flex flex-col items-center transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-95">
                        {/* Header com ícone e categoria */}
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="w-4 h-4 text-white" />
                          <span className="text-xs uppercase tracking-widest text-white font-medium">
                            {t("projects.ramos.category")}
                          </span>
                        </div>
                        
                        {/* Título */}
                        <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">
                          Ramos Agency
                        </h3>
                        
                        {/* Descrição */}
                        <p className="text-sm text-white/90 text-center max-w-xs mb-4 drop-shadow-md">
                          {t("projects.ramos.description")}
                        </p>
                        
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
                            <Code className="w-3 h-3 text-white" />
                            <span className="text-xs text-white font-medium">React</span>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
                            <Palette className="w-3 h-3 text-white" />
                            <span className="text-xs text-white font-medium">Tailwind</span>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
                            <Layers className="w-3 h-3 text-white" />
                            <span className="text-xs text-white font-medium">Vercel</span>
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center gap-2 text-sm text-white font-medium">
                          <span>{t("projects.ramos.cta")}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>

                {/* Placeholder para mais projetos */}
                <CarouselItem>
                  <div className="flex flex-col rounded-md aspect-video bg-muted items-center justify-center p-6 border-2 border-dashed border-border">
                    <div className="w-12 h-12 rounded-full bg-border/50 flex items-center justify-center mb-4">
                      <Layers className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground mb-1">
                      {t("projects.coming")}
                    </span>
                    <span className="text-xs text-muted-foreground/60">
                      {t("projects.developing")}
                    </span>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
