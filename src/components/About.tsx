import murilloAboutPhoto from "@/assets/murillo-about-photo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 sm:py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 sm:gap-10 md:gap-16">
          {/* Label + Photo */}
          <div className="md:col-span-4 space-y-4 sm:space-y-6 flex flex-col items-center md:items-start">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              {t("about.label")}
            </span>
            <div className="w-[200px] h-[300px] sm:w-[240px] sm:h-[360px] rounded-[10px] overflow-hidden">
              <img 
                src={murilloAboutPhoto} 
                alt="Murillo Alves" 
                className="w-full h-full object-cover object-center grayscale"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-8 space-y-6 sm:space-y-8 text-center md:text-left">
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-snug text-foreground tracking-tight">
              {t("about.headline")}
            </p>

            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                {t("about.bio1")}{" "}
                <span className="text-foreground">{t("about.university")}</span>.{" "}
                {t("about.bio2")}
              </p>
              <p>
                {t("about.philosophy1")}{" "}
                {t("about.philosophy2")}
              </p>
            </div>

            {/* Skills */}
            <div className="pt-6 sm:pt-8 border-t border-border">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {["UI Design", "UX Design", "Web Development", "Branding", "Prototyping", "Motion"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
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
