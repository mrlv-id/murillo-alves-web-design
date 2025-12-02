import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada",
      description: "Obrigado pelo contato. Responderei em breve.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Label */}
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Contato
            </span>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
              Interessado em trabalhar juntos? Envie uma mensagem e vamos
              conversar sobre seu projeto.
            </p>
          </div>

          {/* Form */}
          <div className="md:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-gray-300 focus:border-foreground focus:outline-none transition-colors duration-300"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-gray-300 focus:border-foreground focus:outline-none transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-gray-300 focus:border-foreground focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Conte sobre seu projeto..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
