import Image from "next/image";

export default function About() {
    return (
        <section className="h-screen" id="sobre">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-6xl text-center font-bold pt-6">Sobre mim</h1>
                    <div className="container mx-auto py-16 px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Coluna de texto */}
                            <div className="space-y-4 py-16">
                                <p className="text-xl">Desenvolvedor Full-Stack com 2 anos de experiência | Especialista em Otimização de Processos e ERP | Foco no Back-End</p>
                                <p className="text-zinc-400">
                                    Com dois anos de experiência como desenvolvedor full-stack, tenho me especializado em otimizar processos e oferecer soluções eficientes para empresas, com forte expertise em desenvolvimento de sistemas ERP. </p>
                                <p className="text-zinc-400">Minha jornada inclui a implementação de melhorias tanto no front-end quanto no back-end, mas com um foco principal em criar e aprimorar a arquitetura e a performance de sistemas de backend robustos e escaláveis. </p>
                                <p className="text-zinc-400">Ao longo dessa trajetória, aprimorei minhas habilidades em diversas tecnologias e metodologias ágeis, com um olhar atento à performance, segurança e automação de processos. Sou apaixonado por resolver problemas complexos e garantir que os sistemas atendam com eficiência e precisão às necessidades dos usuários e das empresas. </p>

                            </div>

                            {/* Coluna da imagem */}
                            <div className="flex justify-center">
                                <div className="w-96 h-96 overflow-hidden rounded-full">
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
            </div>
        </section >
    )
}