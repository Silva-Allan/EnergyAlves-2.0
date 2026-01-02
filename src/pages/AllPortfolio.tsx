import { Footer } from "@/components/Footer";
import { PortfolioSection } from "@/components/PortfolioSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllPortfolio = () => {
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950">
            {/* Botão voltar */}
            <div className="container mx-auto px-4 pt-8">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-800/80 hover:border-gray-600 transition-all duration-300 group"
                >
                    <svg className="w-5 h-5 text-blue-500 transition-colors duration-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="text-sm md:text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">Voltar para Início</span>
                </button>
            </div>

            <main>
                <PortfolioSection isFullPage={true} />
            </main>
            <Footer />
        </div>
    );
};

export default AllPortfolio;
