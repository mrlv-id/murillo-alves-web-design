import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-medium shadow-lg hover:scale-105 transition-transform duration-200"
      aria-label={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
    >
      {language === "en" ? "PT" : "EN"}
    </button>
  );
};

export default LanguageToggle;
