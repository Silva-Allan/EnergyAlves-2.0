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
        title: "Quadro de Distribuição Industrial",
        category: "Comercial",
        description: "Instalação de quadro de força para indústria",
        image: image2
    },
    {
        title: "Iluminação LED Comercial",
        category: "Iluminação",
        description: "Retrofit de iluminação em loja de shopping",
        image: image6
    },
    {
        title: "Manutenção Predial",
        category: "Manutenção",
        description: "Manutenção preventiva em condomínio residencial",
        image: image3
    },
    {
        title: "Cabeamento Estruturado",
        category: "Comercial",
        description: "Infraestrutura de rede para escritório corporativo",
        image: image4
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto elétrico completo em residência de alto padrão",
        image: image5
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto elétrico completo em residência de alto padrão",
        image: image7
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto elétrico completo em residência de alto padrão",
        image: image8
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto elétrico completo em residência de alto padrão",
        image: image9
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto elétrico completo em residência de alto padrão",
        image: image10
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto elétrico completo em residência de alto padrão",
        image: image11
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto elétrico completo em residência de alto padrão",
        image: image12
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
        description: "Projeto elétrico completo em residência de alto padrão",
        image: image13
    },
    {
        title: "Instalação Residencial Completa",
        category: "Residencial",
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
