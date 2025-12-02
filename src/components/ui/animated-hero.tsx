import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

function AnimatedHero() {
  const { t } = useLanguage();
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [t("hero.word1"), t("hero.word2"), t("hero.word3"), t("hero.word4"), t("hero.word5")],
    [t]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 sm:gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground font-medium px-3 sm:px-4 py-1.5 sm:py-2 border border-border rounded-full">
              {t("hero.badge")}
            </span>
          </div>
          <div className="flex gap-3 sm:gap-4 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-2xl tracking-tight text-center">
              <span className="font-light">Murillo</span>{" "}
              <span className="font-medium">Alves</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 h-[1.2em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-light text-muted-foreground text-3xl sm:text-4xl md:text-6xl"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4 sm:px-0">
              {t("hero.description")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
            <Button size="lg" className="gap-4 w-full sm:w-auto" variant="outline" asChild>
              <a href="#contato">
                {t("hero.contact")} <Mail className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-4 w-full sm:w-auto" asChild>
              <a href="#projetos">
                {t("hero.projects")} <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
