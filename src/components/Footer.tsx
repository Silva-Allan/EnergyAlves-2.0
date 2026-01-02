import { Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm text-center">
            <Zap className="w-4 h-4 text-primary flex-shrink-0" />
            <span>
              © {new Date().getFullYear()} Energy Alves. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
