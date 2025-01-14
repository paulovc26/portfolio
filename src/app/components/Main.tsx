export default function Main() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-[url('/img/background11.jpg')] bg-cover bg-center z-0" id="inicio">
            <div className="container mx-auto px-4 sm:px-10 py-8 sm:py-16">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <span className="absolute mx-auto py-2 sm:py-4 flex border w-fit bg-gradient-to-r blur-xl bg-white bg-clip-text text-4xl sm:text-6xl box-content font-extrabold text-transparent text-center select-none z-[1]">
                            Olá, sou o Paulo!
                        </span>
                        <h1 className="relative w-fit py-2 sm:py-4 pt-16 sm:pt-20 bg-white bg-clip-text text-4xl sm:text-6xl font-extrabold text-transparent text-center select-auto z-[0]">
                            Olá, sou o Paulo!
                        </h1>
                        <p className="text-lg sm:text-xl text-center pb-6 sm:pb-10 z-[0]">Sejam bem-vindos ao meu portfólio!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}