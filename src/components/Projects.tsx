import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight, Globe, Layers, Palette, Code } from "lucide-react";

const Projects = () => {
  return (
    <div id="projetos" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Projetos</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                Uma seleção de trabalhos recentes
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                Projetos desenvolvidos com foco em design minimalista, 
                experiência do usuário e performance. Cada trabalho representa 
                um compromisso com a excelência visual e funcional.
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
                    <div className="flex flex-col rounded-md aspect-video bg-muted items-center justify-center p-6 transition-all hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-900 border border-border hover:border-gray-300 dark:hover:border-gray-700">
                      {/* Header com ícone e categoria */}
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-4 h-4 text-muted-foreground group-hover:text-gray-600 dark:group-hover:text-gray-400" />
                        <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-gray-600 dark:group-hover:text-gray-400">
                          Web Design
                        </span>
                      </div>
                      
                      {/* Título */}
                      <h3 className="text-xl font-medium mb-2">
                        Ramos Agency
                      </h3>
                      
                      {/* Descrição */}
                      <p className="text-sm text-muted-foreground text-center max-w-xs mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                        Site desenvolvido para uma agência de assessoria e consultoria para médicos high ticket.
                      </p>
                      
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/10 border border-border group-hover:border-gray-400 dark:group-hover:border-gray-600">
                          <Code className="w-3 h-3" />
                          <span className="text-xs">React</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/10 border border-border group-hover:border-gray-400 dark:group-hover:border-gray-600">
                          <Palette className="w-3 h-3" />
                          <span className="text-xs">Tailwind</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/10 border border-border group-hover:border-gray-400 dark:group-hover:border-gray-600">
                          <Layers className="w-3 h-3" />
                          <span className="text-xs">Vercel</span>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                        <span>Ver projeto</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                      Mais projetos em breve...
                    </span>
                    <span className="text-xs text-muted-foreground/60">
                      Novos trabalhos sendo desenvolvidos
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
