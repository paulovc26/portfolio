import Image from "next/image";

export default function About() {
    return (
        <section className="min-h-screen" id="sobre">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl sm:text-6xl text-center font-bold pt-6">Sobre mim</h1>
                <div className="container mx-auto py-8 sm:py-16 px-4 sm:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Coluna de texto */}
                        <div className="space-y-4">
                            <p className="text-lg sm:text-xl">
                                Desenvolvedor Full-Stack com 2 anos de experiência | Especialista em Otimização de Processos e ERP | Foco no Back-End
                            </p>
                            <p className="text-zinc-400 text-base sm:text-lg">
                                Com dois anos de experiência como desenvolvedor full-stack, tenho me especializado em otimizar processos e oferecer soluções eficientes para empresas, com forte expertise em desenvolvimento de sistemas ERP. Minha jornada inclui a implementação de melhorias tanto no front-end quanto no back-end, mas com um foco principal em criar e aprimorar a arquitetura e a performance de sistemas de backend robustos e escaláveis.
                            </p>
                        </div>

                        {/* Coluna da imagem */}
                        <div className="flex justify-center">
                            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-full">
                                <Image
                                    src="/img/photo.jpeg"
                                    alt="paulopontojpg :)"
                                    width={384}
                                    height={384}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}