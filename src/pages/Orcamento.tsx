import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Orcamento() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        service: "",
        property: "",
        rooms: "",
        intervention: [] as string[],
        urgency: "",
        location: "",
        name: "",
    });

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => setIsLoaded(true), []);

    // Captura de localização automática
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

                    try {
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );
                        const data = await response.json();

                        const address = data.address;
                        const suburb = address.suburb || address.neighbourhood || "";
                        const city = address.city || address.town || address.village || "";
                        const state = address.state_district || address.state || "";

                        // Construct readable location string
                        let locationString = "";
                        if (suburb && city) {
                            locationString = `${suburb} - ${city}/${state}`;
                        } else if (city) {
                            locationString = `${city}/${state}`;
                        } else {
                            locationString = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
                        }

                        setForm((prev) => ({
                            ...prev,
                            location: `${locationString} (${mapsLink})`,
                        }));
                    } catch (error) {
                        console.error("Erro ao buscar endereço:", error);
                        setForm((prev) => ({
                            ...prev,
                            location: `Loc: ${latitude.toFixed(5)}, ${longitude.toFixed(5)} (${mapsLink})`,
                        }));
                    }
                },
                (error) => console.error("Erro ao pegar localização", error)
            );
        }
    }, []);

    const toggleIntervention = (item: string) => {
        setForm((prev) => ({
            ...prev,
            intervention: prev.intervention.includes(item)
                ? prev.intervention.filter((i) => i !== item)
                : [...prev.intervention, item],
        }));
    };

    const generateWhatsAppLink = () => {
        const message = `
Olá, gostaria de solicitar um orçamento.

Tipo de serviço: ${form.service || "Não informado"}
Tipo de imóvel: ${form.property || "Não informado"}
Ambientes envolvidos: ${form.rooms || "Não informado"}
Intervenções necessárias: ${form.intervention.length ? form.intervention.join(", ") : "Não informado"
            }
Urgência: ${form.urgency || "Não informado"}
Localização: ${form.location || "Não informado"}

Nome: ${form.name || "Não informado"}
    `.trim();

        return `https://wa.me/5547920006964?text=${encodeURIComponent(message)}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.location) {
            alert("Por favor, preencha pelo menos seu nome e localização.");
            return;
        }
        window.open(generateWhatsAppLink(), "_blank");
    };

    const handleBack = () => navigate(-1);

    const interventions = [
        "Troca de fiação",
        "Ajuste no quadro elétrico",
        "Quebra de parede",
        "Novos pontos de energia",
        "Instalação de tomadas",
        "Sistema de iluminação",
    ];

    const urgencyOptions = [
        { value: "Pode ser agendado", label: "Pode ser agendado", color: "bg-green-900/30 border-green-700", ring: "ring-green-500" },
        { value: "Até 48h", label: "Até 48h", color: "bg-yellow-900/30 border-yellow-700", ring: "ring-yellow-500" },
        { value: "Emergência hoje", label: "Emergência hoje", color: "bg-red-900/30 border-red-700", ring: "ring-red-500" },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-zinc-900 to-gray-950 text-white py-8 md:py-24 md:px-6 relative overflow-hidden">
            {/* Elementos de fundo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-48 h-48 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 md:w-80 md:h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container w-full max-w-full md:max-w-3xl mx-auto relative z-10">
                {/* Botão voltar ajustado mobile */}
                <div className="mb-4 md:mb-8 flex justify-start">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-800/80 hover:border-gray-600 transition-all duration-300"
                    >
                        <svg className="w-5 h-5 text-blue-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-sm md:text-base font-medium text-gray-300 transition-colors duration-300">Voltar</span>
                    </button>
                </div>

                {/* Logo centralizada */}
                <div className="flex justify-center mb-6 md:mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-2xl ring-2 ring-blue-500/30 ring-offset-2 ring-offset-gray-900 hover:ring-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                        <img
                            src="/src/assets/logo-energy-alves.png"
                            alt="Energy Alves"
                            className="w-[90%] h-[90%] object-contain p-0.5"
                            onError={(e) => {
                                e.currentTarget.src =
                                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230ea5e9'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z' /%3E%3C/svg%3E";
                            }}
                        />
                    </div>
                </div>

                {/* Título */}
                <div className={`text-center mb-6 md:mb-8 transform transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">
                        Solicitar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Orçamento</span>
                    </h1>
                    <p className="text-gray-300 max-w-md mx-auto text-sm md:text-lg">
                        Preencha as informações abaixo para avaliarmos sua necessidade com precisão e retornarmos com orientação técnica personalizada.
                    </p>
                </div>

                {/* Formulário */}
                <form
                    onSubmit={handleSubmit}
                    className={`bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-4 md:p-8 transition-all duration-500 ${isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                >
                    <div className="space-y-4 md:space-y-6">
                        {/* Serviço */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">
                                Tipo de serviço <span className="text-blue-400">*</span>
                            </label>
                            <select
                                className="w-full p-3 md:p-4 bg-gray-900/60 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300 hover:border-gray-600"
                                onChange={(e) => setForm({ ...form, service: e.target.value })}
                                value={form.service}
                                required
                            >
                                <option value="" disabled>Selecione o tipo de serviço</option>
                                <option value="Instalação elétrica">Instalação elétrica</option>
                                <option value="Reforma / adequação">Reforma / adequação</option>
                                <option value="Manutenção">Manutenção</option>
                                <option value="Emergência">Emergência</option>
                            </select>
                        </div>

                        {/* Tipo de imóvel */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">
                                Tipo de imóvel <span className="text-blue-400">*</span>
                            </label>
                            <select
                                className="w-full p-3 md:p-4 bg-gray-900/60 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300 hover:border-gray-600"
                                onChange={(e) => setForm({ ...form, property: e.target.value })}
                                value={form.property}
                                required
                            >
                                <option value="" disabled>Selecione o tipo de imóvel</option>
                                <option value="Apartamento">Apartamento</option>
                                <option value="Casa">Casa</option>
                                <option value="Casa de alto padrão">Casa de alto padrão</option>
                                <option value="Comercial">Comercial</option>
                            </select>
                        </div>

                        {/* Ambientes */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">
                                Quantidade de ambientes envolvidos
                            </label>
                            <select
                                className="w-full p-3 md:p-4 bg-gray-900/60 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300 hover:border-gray-600"
                                onChange={(e) => setForm({ ...form, rooms: e.target.value })}
                                value={form.rooms}
                            >
                                <option value="" disabled>Selecione a quantidade</option>
                                <option value="1 a 2">1 a 2 ambientes</option>
                                <option value="3 a 5">3 a 5 ambientes</option>
                                <option value="Mais de 5">Mais de 5 ambientes</option>
                                <option value="Não sei informar">Não sei informar</option>
                            </select>
                        </div>

                        {/* Intervenções */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-300">
                                Intervenções necessárias
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                                {interventions.map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => toggleIntervention(item)}
                                        className={`w-full text-left p-2 md:p-3 rounded-lg border-2 transition-all duration-300 ${form.intervention.includes(item)
                                            ? "border-blue-500 bg-blue-500/10 text-blue-300"
                                            : "border-gray-700 bg-gray-900/50 hover:border-gray-600 hover:bg-gray-800/30"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className={`flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center ${form.intervention.includes(item) ? "bg-blue-500 border-blue-500" : "bg-gray-800 border-gray-600"}`}>
                                                {form.intervention.includes(item) && (
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="text-xs md:text-sm">{item}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Urgência */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">
                                Urgência do serviço
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                                {urgencyOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setForm({ ...form, urgency: option.value })}
                                        className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${form.urgency === option.value
                                            ? `${option.color} ring-2 ring-offset-2 ring-offset-gray-900 ${option.ring}`
                                            : "border-gray-700 bg-gray-900/50 hover:border-gray-600 hover:bg-gray-800/30"
                                            }`}
                                    >
                                        <div className="text-center text-xs md:text-sm">{option.label}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Localização */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">
                                Localização <span className="text-blue-400">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <input
                                    placeholder="Bairro / Cidade"
                                    className="w-full pl-12 md:pl-14 p-3 md:p-4 bg-gray-900/60 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300 hover:border-gray-600"
                                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                                    value={form.location}
                                    required
                                />
                            </div>
                        </div>

                        {/* Nome */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">
                                Seu nome <span className="text-blue-400">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <input
                                    placeholder="Seu nome completo"
                                    className="w-full pl-12 md:pl-14 p-3 md:p-4 bg-gray-900/60 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300 hover:border-gray-600"
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    value={form.name}
                                    required
                                />
                            </div>
                        </div>

                        {/* Botão WhatsApp */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="group relative w-full bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                            >
                                <div className="flex items-center justify-center gap-2 md:gap-3">
                                    <span className="text-sm md:text-lg">Enviar para WhatsApp</span>
                                </div>
                            </button>
                            <p className="text-center text-gray-400 text-xs md:text-sm mt-2">
                                Após enviar, você será redirecionado para o WhatsApp.
                            </p>
                        </div>
                    </div>
                </form>

                {/* Rodapé */}
                <div className="text-center text-gray-400 text-xs md:text-sm mt-6">
                    <p>Seu orçamento será respondido em até <span className="font-semibold text-blue-400">24 horas úteis</span>.</p>
                    <p className="mt-1">Dúvidas? Entre em contato: <span className="font-semibold text-blue-400">(+55) 47 92000-6964</span></p>
                </div>
            </div>
        </section>
    );
}
