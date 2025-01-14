export default function Projects() {
    return (
        <section className="h-screen" id="projetos">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-bold text-center pt-6">Projetos</h1>
                <div className="container mx-auto py-16 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Projeto 1 */}
                        <div className="bg-slate-200 rounded overflow-hidden shadow-lg">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-full h-48 object-cover" src="/img/background11.jpg" alt="Projeto Bowenhuis" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-black">Bowenhuis</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                </p>
                            </div>
                        </div>

                        {/* Projeto 2 */}
                        <div className="bg-slate-200 rounded overflow-hidden shadow-lg">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-full h-48 object-cover" src="/img/background11.jpg" alt="API Gestão" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-black">API - Gestão Empresarial</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                </p>
                            </div>
                        </div>

                        {/* Projeto 3 */}
                        <div className="bg-slate-200 rounded overflow-hidden shadow-lg">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-full h-48 object-cover" src="/img/background11.jpg" alt="Projeto 3" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-black">Projeto 3</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}