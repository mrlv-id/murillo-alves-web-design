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
        href: "https://twitter.com/murilloalves",
      },
    },
  ];

  return (
    <section id="contato" className="py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 gap-12 lg:flex">
        <div className="max-w-md">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            {t("contact.label")}
          </span>
          <h3 className="mt-4 text-foreground text-3xl font-medium sm:text-4xl tracking-tight">
            {t("contact.title")}
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t("contact.description")}
          </p>
        </div>
        <div className="flex-1">
          <ul className="mt-12 gap-y-6 gap-x-12 items-start md:flex lg:gap-x-0 lg:mt-0">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 border-t border-border py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none first:lg:border-l-0 first:lg:pl-0"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground">
                  {item.icon}
                </div>
                <h4 className="text-foreground text-lg font-medium">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-foreground duration-150 hover:text-muted-foreground font-medium group"
                >
                  {item.link.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
