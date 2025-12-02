import { useState } from "react";
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
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Projetos
            </span>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl text-muted-foreground font-light">
              Uma seleção de trabalhos recentes em design e desenvolvimento web.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-2">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`border border-border p-8 sm:p-10 transition-all duration-500 ${
                  hoveredId === project.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background hover:border-gray-300"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs uppercase tracking-[0.15em] ${
                          hoveredId === project.id
                            ? "text-gray-400"
                            : "text-muted-foreground"
                        }`}
                      >
                        {project.category}
                      </span>
                      <span
                        className={`text-xs ${
                          hoveredId === project.id
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      >
                        01
                      </span>
                    </div>

                    <h3
                      className={`text-2xl sm:text-3xl font-medium tracking-tight transition-colors duration-300 ${
                        hoveredId === project.id
                          ? "text-background"
                          : "text-foreground"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm max-w-lg transition-colors duration-300 ${
                        hoveredId === project.id
                          ? "text-gray-400"
                          : "text-muted-foreground"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredId === project.id
                        ? "bg-background text-foreground"
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        hoveredId === project.id ? "rotate-0" : "-rotate-45"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* Placeholder for future projects */}
          <div className="border border-dashed border-gray-200 p-8 sm:p-10">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Novos projetos em breve</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
