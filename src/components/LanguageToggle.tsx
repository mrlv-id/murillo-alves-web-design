import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-medium shadow-lg overflow-hidden"
      aria-label={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={language}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {language === "en" ? "PT" : "EN"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default LanguageToggle;
