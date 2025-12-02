import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";

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
                    <div className="flex flex-col rounded-md aspect-video bg-muted items-center justify-center p-6 transition-colors hover:bg-muted/80">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Web Design
                      </span>
                      <h3 className="text-xl font-medium mb-2">Ramos Agency</h3>
                      <p className="text-sm text-muted-foreground text-center max-w-xs mb-4">
                        Site desenvolvido para uma agência de assessoria e consultoria para médicos high ticket.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <span>Ver projeto</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                </CarouselItem>

                {/* Placeholder para mais projetos */}
                <CarouselItem>
                  <div className="flex rounded-md aspect-video bg-muted items-center justify-center p-6 border-2 border-dashed border-border">
                    <span className="text-sm text-muted-foreground">
                      Mais projetos em breve...
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
