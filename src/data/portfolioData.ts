import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpeg";
import image6 from "@/assets/image6.jpeg";
import image7 from "@/assets/image7.jpeg";
import image8 from "@/assets/image8.jpeg";
import image9 from "@/assets/image9.jpeg";
import image10 from "@/assets/image10.png";
import image11 from "@/assets/image11.png";
import image12 from "@/assets/image12.png";
import image13 from "@/assets/image13.png";
import image14 from "@/assets/image14.png";

export interface PortfolioItem {
    title: string;
    category: string;
    description: string;
    image: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto elétrico completo em residência de alto padrão",
        image: image1
    },
    {
        title: "Instalação de iluminação por leds",
        category: "Iluminação",
        description: "Instalação de iluminação por leds em residência de alto padrão",
        image: image2
    },
    {
        title: "Instalação de iluminação por leds",
        category: "Iluminação",
        description: "Instalação de iluminação por leds em residência de alto padrão",
        image: image3
    },
    {
        title: "Iluminação externa de Residência",
        category: "Residencial",
        description: "Instalação de iluminação externa em residência",
        image: image4
    },
    {
        title: "Cabeamento Estruturado",
        category: "Comercial",
        description: "Infraestrutura de rede para escritório corporativo",
        image: image5
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto elétrico completo em residência",
        image: image6
    },
    {
        title: "Instalação de ponto de carregamento",
        category: "Comercial",
        description: "Instalação de ponto de carregamento para carros elétricos em empresa",
        image: image7
    },
    {
        title: "Instalação de LEDs em ambiente residencial",
        category: "Residencial",
        description: "Instalação de iluminação por leds para ambientação residencial",
        image: image8
    },
    {
        title: "Iluminação completa em auditório",
        category: "Comercial",
        description: "Instalação de iluminação completa para auditório corporativo",
        image: image9
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto de iluminação completo em residência de alto padrão",
        image: image10
    },
    {
        title: "Instalação completa em escritório corporativo",
        category: "Comercial",
        description: "Projeto elétrico de cabeamento, iluminação e conexão wifi em escritório corporativo",
        image: image11
    },
    {
        title: "Iluminação por LEDs em banheiro residencial",
        category: "Iluminação",
        description: "Instalação de iluminação por leds para banheiro residencial",
        image: image12
    },
    {
        title: "Iluminação por LEDs em cozinha residencial",
        category: "Iluminação",
        description: "Instalação de iluminação por leds para cozinha residencial",
        image: image13
    },
    {
        title: "Instalação Residencial Completa",
        category: "Iluminação",
        description: "Projeto elétrico completo em residência de alto padrão",
        image: image14
    },
];

export const portfolioCategories = [
    "Todos",
    "Residencial",
    "Comercial",
    "Iluminação",
    "Manutenção",
];
