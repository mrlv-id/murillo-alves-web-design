import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight, Globe, Layers, Palette, Code, Cat } from "lucide-react";
import ramosAgencyPreview from "@/assets/projects/ramos-agency-preview.png";
import pawHeroPreview from "@/assets/projects/paw-hero-preview.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <div id="projetos" className="w-full py-16 sm:py-20 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
          <div className="flex gap-3 sm:gap-4 flex-col items-center lg:items-start text-center lg:text-left">
            <div>
              <Badge>{t("projects.badge")}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular">
                {t("projects.title")}
              </h2>
              <p className="text-base sm:text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground">
                {t("projects.description")}
              </p>
            </div>
          </div>
          <div className="w-full min-w-0">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Projeto Ramos Agency */}
                <CarouselItem className="pl-2 md:pl-4">
                  <a
                    href="https://ramosagency.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div 
                      className="relative flex flex-col rounded-md aspect-video items-center justify-center p-4 sm:p-6 transition-all border border-border hover:border-white/20 overflow-hidden group"
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
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white font-medium">
                            {t("projects.ramos.category")}
                          </span>
                        </div>
                        
                        {/* Título */}
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white drop-shadow-lg">
                          Ramos Agency
                        </h3>
                        
                        {/* Descrição */}
                        <p className="text-xs sm:text-sm text-white/90 text-center max-w-xs mb-3 sm:mb-4 drop-shadow-md line-clamp-2 sm:line-clamp-none">
                          {t("projects.ramos.description")}
                        </p>
                        
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-3 sm:mb-4">
                          <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
                            <Code className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                            <span className="text-[10px] sm:text-xs text-white font-medium">React</span>
                          </div>
                          <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
                            <Palette className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                            <span className="text-[10px] sm:text-xs text-white font-medium">Tailwind</span>
                          </div>
                          <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
                            <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                            <span className="text-[10px] sm:text-xs text-white font-medium">Vercel</span>
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
                          <span>{t("projects.ramos.cta")}</span>
                          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>

                {/* Projeto Paw - Cat Blog Hero */}
                <CarouselItem className="pl-2 md:pl-4">
                  <a
                    href="https://kittypawcat.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div 
                      className="relative flex flex-col rounded-md aspect-video items-center justify-center p-4 sm:p-6 transition-all border border-border hover:border-white/20 overflow-hidden group"
                      style={{ backgroundImage: `url(${pawHeroPreview})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <Cat className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white font-medium">
                            {t("projects.paw.category")}
                          </span>
                        </div>
                        
                        {/* Título */}
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white drop-shadow-lg">
                          Paw
                        </h3>
                        
                        {/* Descrição */}
                        <p className="text-xs sm:text-sm text-white/90 text-center max-w-xs mb-3 sm:mb-4 drop-shadow-md line-clamp-2 sm:line-clamp-none">
                          {t("projects.paw.description")}
                        </p>
                        
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-3 sm:mb-4">
                          <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
                            <Code className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                            <span className="text-[10px] sm:text-xs text-white font-medium">React</span>
                          </div>
                          <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
                            <Palette className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                            <span className="text-[10px] sm:text-xs text-white font-medium">Tailwind</span>
                          </div>
                          <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
                            <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                            <span className="text-[10px] sm:text-xs text-white font-medium">Vercel</span>
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
                          <span>{t("projects.paw.cta")}</span>
                          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>

                {/* Placeholder para mais projetos */}
                <CarouselItem className="pl-2 md:pl-4">
                  <div className="flex flex-col rounded-md aspect-video bg-muted items-center justify-center p-4 sm:p-6 border-2 border-dashed border-border">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-border/50 flex items-center justify-center mb-3 sm:mb-4">
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground mb-1">
                      {t("projects.coming")}
                    </span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground/60">
                      {t("projects.developing")}
                    </span>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4 lg:hidden">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
