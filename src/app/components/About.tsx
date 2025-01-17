
import { IconBrandAngular, IconBrandAngularFilled, IconBrandCss3, IconBrandDocker, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandPhp, IconBrandSupabase, IconBrandTypescript, IconFileTypeCss, IconSql } from "@tabler/icons-react";
import Image from "next/image";

export default function About() {
    return (
        <section className="min-h-screen py-16 sm:py-24" id="sobre">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl sm:text-6xl text-center font-black pt-6">Sobre mim</h1>
                <div className="container mx-auto py-8 sm:py-16 px-4 sm:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Coluna de texto */}
                        <div className="space-y-4">
                            <b className="text-lg sm:text-xl text-white">
                                Desenvolvedor Full-Stack com 2 anos de experiência | Especialista em Otimização de Processos e ERP | Foco no Back-End
                            </b>
                            <p className="text-slate-300 font-extralight sm:text-lg">
                                Com dois anos de experiência como desenvolvedor full-stack, tenho me especializado em otimizar processos e oferecer soluções eficientes para empresas, com forte expertise em desenvolvimento de sistemas ERP. <br /><br /> Minha jornada inclui a implementação de melhorias tanto no front-end quanto no back-end, mas com um foco principal em criar e aprimorar a arquitetura e a performance de sistemas de backend robustos e escaláveis.
                            </p>
                            <hr className="bg-black/20" />
                            <span className="flex flex-col text-slate-300 pt-5 font-extrabold sm:text-lg py-2">
                                Stacks que eu já trabalhei:
                                <span className="flex flex-row gap-2 py-2">
                                    <IconBrandHtml5 title="HTML" className="bg-red-500 text-white rounded-lg" stroke={1.5} size={30} />
                                    <IconBrandCss3 title="CSS" className="bg-sky-700 text-grey-200 rounded-lg" stroke={1.75} size={30} />
                                    <IconBrandJavascript title="Javascript" className="bg-yellow-500 text-black rounded-lg" stroke={1.5} size={30} />
                                    <IconBrandTypescript title="Typescript" className="bg-indigo-500 text-white rounded-b-lg rounded-t-lg" stroke={1.5} size={30} />
                                    <IconBrandMysql title="MySQL" className="bg-slate-500 text-slate-200 rounded-lg" stroke={1.5} size={30} />
                                    <IconBrandPhp title="PHP" className="bg-indigo-400/50 text-slate-100 text-2xl rounded-full" stroke={1.5} size={30} />
                                    <IconSql title="Structured Query Language" className="bg-black text-white rounded-lg" stroke={1.5} size={30} />
                                    <IconBrandNextjs title="Next.js" className="bg-white text-black rounded-lg" stroke={1.5} size={30} />
                                    <IconBrandNodejs title="Node.js" className="bg-yellow-400 text-black rounded-lg" stroke={1.5} size={30} />
                                    <IconBrandAngularFilled title="Angular" className="text-red-500" stroke={2} size={30} />
                                    <IconBrandDocker title="Docker" className="bg-sky-600 text-white rounded-lg" stroke={1.5} size={30} />
                                    <IconBrandSupabase title="Supabase" className="bg-black text-teal-600 rounded-lg" stroke={3} size={30} />
                                    <IconBrandMongodb title="MongoDB" className="bg-black text-teal-600 rounded-lg" stroke={3} size={30} />
                                </span>
                            </span>
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