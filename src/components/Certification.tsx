import { Button } from "@/components/ui/button";

const Certification = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Label */}
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Certificação
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-8">
            <div className="bg-background border border-border p-8 sm:p-10 relative overflow-hidden group">
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-100 to-transparent" />

              <div className="relative space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-foreground tracking-tight">
                      Desenvolvimento Web
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Universidade Salvador — UNIFACS
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
                      />
                    </svg>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    Certificado — Disponível em breve
                  </p>
                  <Button variant="disabled" size="sm" disabled>
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
