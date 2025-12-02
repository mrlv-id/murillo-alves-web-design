import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ramos Agency",
    description:
      "Site desenvolvido para uma agência de assessoria e consultoria para médicos high ticket.",
    url: "https://ramosagency.vercel.app/",
    category: "Web Design",
  },
  {
    id: 2,
    title: "Em breve",
    description: "Novo projeto em desenvolvimento.",
    url: "#",
    category: "Web Design",
  },
  {
    id: 3,
    title: "Em breve",
    description: "Novo projeto em desenvolvimento.",
    url: "#",
    category: "Web Design",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="w-full py-20 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end gap-10">
          {/* Left Content */}
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge variant="outline" className="text-xs uppercase tracking-[0.15em]">
                Projetos
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-medium text-left text-foreground">
                Uma seleção de trabalhos recentes
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                Projetos desenvolvidos com foco em design minimalista, 
                experiência do usuário e performance. Cada trabalho representa 
                um compromisso com a excelência visual e funcional.
              </p>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="w-full max-w-full px-6">
            <Carousel>
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.id}>
                    <a
                      href={project.url}
                      target={project.url !== "#" ? "_blank" : undefined}
                      rel={project.url !== "#" ? "noopener noreferrer" : undefined}
                      className={`group block ${project.url === "#" ? "pointer-events-none" : ""}`}
                    >
                      <div className="flex flex-col rounded-sm aspect-video bg-muted border border-border items-center justify-center p-6 transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground">
                        <div className="flex flex-col items-center justify-center text-center gap-3">
                          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground group-hover:text-gray-400 transition-colors">
                            {project.category}
                          </span>
                          <h3 className="text-2xl font-medium tracking-tight group-hover:text-background transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground max-w-xs group-hover:text-gray-400 transition-colors">
                            {project.description}
                          </p>
                          {project.url !== "#" && (
                            <div className="mt-4 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-background group-hover:border-background transition-all">
                              <ArrowUpRight className="w-4 h-4 text-foreground transition-transform group-hover:rotate-0 -rotate-45" />
                            </div>
                          )}
                        </div>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
