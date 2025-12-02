import { Mail, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("contact.email.title"),
      desc: t("contact.email.desc"),
      link: {
        name: "mlvs.dev@gmail.com",
        href: "mailto:mlvs.dev@gmail.com",
      },
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: t("contact.twitter.title"),
      desc: t("contact.twitter.desc"),
      link: {
        name: t("contact.twitter.link"),
        href: "https://x.com/mlvsdev",
      },
    },
  ];

  return (
    <section id="contato" className="py-20 sm:py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 sm:gap-12 flex flex-col lg:flex-row">
        <div className="max-w-md text-center lg:text-left mx-auto lg:mx-0">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            {t("contact.label")}
          </span>
          <h3 className="mt-3 sm:mt-4 text-foreground text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
            {t("contact.title")}
          </h3>
          <p className="mt-3 sm:mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            {t("contact.description")}
          </p>
        </div>
        <div className="flex-1">
          <ul className="mt-8 lg:mt-0 gap-y-6 gap-x-8 lg:gap-x-12 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-x-0">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 py-6 sm:py-0 border-t sm:border-t-0 lg:border-l border-border lg:px-8 xl:px-12 first:border-t-0 first:lg:border-l-0 first:lg:pl-0 flex flex-col items-center sm:items-start"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center text-foreground">
                  {item.icon}
                </div>
                <h4 className="text-foreground text-base sm:text-lg font-medium">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">{item.desc}</p>
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs sm:text-sm text-foreground duration-150 hover:text-muted-foreground font-medium group"
                >
                  {item.link.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
