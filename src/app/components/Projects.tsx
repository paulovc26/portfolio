export default function Projects() {
    return (
        <section className="min-h-screen py-16 sm:py-24" id="projetos">
            <div className="flex flex-col items-center justify-start h-full">
                <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8 sm:mb-12">Projetos</h1>
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Projeto 1 */}
                        <div className="bg-slate-200 rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-full h-40 sm:h-48 object-cover" src="/img/background11.jpg" alt="Projeto Bowenhuis" />
                            <div className="px-4 sm:px-6 py-4">
                                <div className="font-bold text-lg sm:text-xl mb-2 text-black">Bowenhuis</div>
                                <p className="text-gray-700 text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                </p>
                            </div>
                        </div>

                        {/* Projeto 2 */}
                        <div className="bg-slate-200 rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-full h-40 sm:h-48 object-cover" src="/img/background11.jpg" alt="API Gestão" />
                            <div className="px-4 sm:px-6 py-4">
                                <div className="font-bold text-lg sm:text-xl mb-2 text-black">API - Gestão Empresarial</div>
                                <p className="text-gray-700 text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                </p>
                            </div>
                        </div>

                        {/* Projeto 3 */}
                        <div className="bg-slate-200 rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-full h-40 sm:h-48 object-cover" src="/img/background11.jpg" alt="Projeto 3" />
                            <div className="px-4 sm:px-6 py-4">
                                <div className="font-bold text-lg sm:text-xl mb-2 text-black">Projeto 3</div>
                                <p className="text-gray-700 text-sm sm:text-base">
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