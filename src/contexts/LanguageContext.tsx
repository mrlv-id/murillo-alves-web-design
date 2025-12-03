import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt-BR";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero
    "hero.badge": "Web Designer",
    "hero.word1": "creativity",
    "hero.word2": "modernity",
    "hero.word3": "elegance",
    "hero.word4": "innovation",
    "hero.word5": "exceptionality",
    "hero.description": "Creating digital experiences that transform ideas into memorable and functional interfaces.",
    "hero.contact": "Get in touch",
    "hero.projects": "View projects",
    
    // About
    "about.label": "About me",
    "about.headline": "Digital experience designer focused on creating minimalist, functional, and visually impactful interfaces.",
    "about.bio1": "I'm 22 years old and graduated in Web Development from",
    "about.university": "Salvador University (UNIFACS)",
    "about.bio2": "My approach combines refined aesthetics with intuitive usability.",
    "about.philosophy1": "I believe design should be invisible — when well executed,",
    "about.philosophy2": "it simply works, guiding the user effortlessly through the experience.",
    
    // Certification
    "cert.label": "Certification",
    "cert.title": "Web Development",
    "cert.university": "Salvador University — UNIFACS",
    "cert.status": "Certificate — Available",
    "cert.download": "Download",
    
    // Projects
    "projects.badge": "Projects",
    "projects.title": "A selection of recent work",
    "projects.description": "Projects developed with a focus on minimalist design, user experience and performance. Each work represents a commitment to visual and functional excellence.",
    "projects.ramos.category": "Web Design",
    "projects.ramos.description": "Website developed for a consulting and advisory agency for high-ticket doctors.",
    "projects.ramos.cta": "View project",
    "projects.coming": "More projects coming soon...",
    "projects.developing": "New work being developed",
    
    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's talk",
    "contact.description": "Interested in working together? Get in touch and let's turn your ideas into reality.",
    "contact.email.title": "Email",
    "contact.email.desc": "Contact me directly to discuss your project.",
    "contact.twitter.title": "Twitter",
    "contact.twitter.desc": "Follow my work and updates.",
    "contact.twitter.link": "View profile",
    
    // Footer
    "footer.copyright": "© {year} Murillo Alves",
  },
  "pt-BR": {
    // Header
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    
    // Hero
    "hero.badge": "Web Designer",
    "hero.word1": "criatividade",
    "hero.word2": "modernidade",
    "hero.word3": "elegância",
    "hero.word4": "inovação",
    "hero.word5": "excepcionalidade",
    "hero.description": "Criando experiências digitais que transformam ideias em interfaces memoráveis e funcionais.",
    "hero.contact": "Entrar em contato",
    "hero.projects": "Ver projetos",
    
    // About
    "about.label": "Sobre mim",
    "about.headline": "Designer de experiências digitais com foco em criar interfaces minimalistas, funcionais e visualmente impactantes.",
    "about.bio1": "Tenho 22 anos e sou graduado em Desenvolvimento Web pela",
    "about.university": "Universidade Salvador (UNIFACS)",
    "about.bio2": "Minha abordagem combina estética refinada com usabilidade intuitiva.",
    "about.philosophy1": "Acredito que o design deve ser invisível — quando bem executado,",
    "about.philosophy2": "ele simplesmente funciona, guiando o usuário sem esforço através da experiência.",
    
    // Certification
    "cert.label": "Certificação",
    "cert.title": "Desenvolvimento Web",
    "cert.university": "Universidade Salvador — UNIFACS",
    "cert.status": "Certificado — Disponível",
    "cert.download": "Download",
    
    // Projects
    "projects.badge": "Projetos",
    "projects.title": "Uma seleção de trabalhos recentes",
    "projects.description": "Projetos desenvolvidos com foco em design minimalista, experiência do usuário e performance. Cada trabalho representa um compromisso com a excelência visual e funcional.",
    "projects.ramos.category": "Web Design",
    "projects.ramos.description": "Site desenvolvido para uma agência de assessoria e consultoria para médicos high ticket.",
    "projects.ramos.cta": "Ver projeto",
    "projects.coming": "Mais projetos em breve...",
    "projects.developing": "Novos trabalhos sendo desenvolvidos",
    
    // Contact
    "contact.label": "Contato",
    "contact.title": "Vamos conversar",
    "contact.description": "Interessado em trabalhar juntos? Entre em contato e vamos transformar suas ideias em realidade.",
    "contact.email.title": "Email",
    "contact.email.desc": "Entre em contato diretamente para discutir seu projeto.",
    "contact.twitter.title": "Twitter",
    "contact.twitter.desc": "Acompanhe meu trabalho e novidades.",
    "contact.twitter.link": "Ver perfil",
    
    // Footer
    "footer.copyright": "© {year} Murillo Alves",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt-BR" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
