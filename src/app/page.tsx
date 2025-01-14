import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <main className="overscroll-contain">
        <Nav />
        <section className="flex flex-col items-center justify-center h-screen bg-[url('/img/background1.jpg')] bg-cover bg-center">
          <div className="container mx-auto py-16 px-10">
            {/* Coluna de texto */}
            <div className="flex flex-col items-center justify-center shadow-lg">
              <div className="flex h-screen w-full items-center justify-center">
                <h1 className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-purple-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
                  Olá, sou o Paulo!
                </h1>
                <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                  Olá, sou o Paulo!
                  <p className="text-xl mt-0">Sejam bem-vindos ao meu portfólio!</p>
                </h1>
              </div>
            </div>
          </div>


        </section>
        <section className="flex flex-col items-center justify-center h-screen">
          <div className="container mx-auto py-16 px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Coluna de texto */}
              <div className="space-y-4 py-16">
                <p className="text-xl">Desenvolvedor Full-Stack com 2 anos de experiência | Especialista em Otimização de Processos e ERP | Foco no Back-End</p>
                <p className="text-zinc-400">
                  Com dois anos de experiência como desenvolvedor full-stack, tenho me especializado em otimizar processos e oferecer soluções eficientes para empresas, com forte expertise em desenvolvimento de sistemas ERP. Minha jornada inclui a implementação de melhorias tanto no front-end quanto no back-end, mas com um foco principal em criar e aprimorar a arquitetura e a performance de sistemas de backend robustos e escaláveis.

                  Ao longo dessa trajetória, aprimorei minhas habilidades em diversas tecnologias e metodologias ágeis, com um olhar atento à performance, segurança e automação de processos. Sou apaixonado por resolver problemas complexos e garantir que os sistemas atendam com eficiência e precisão às necessidades dos usuários e das empresas.
                </p>
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
        </section>
      </main>
    </>
  );
}
