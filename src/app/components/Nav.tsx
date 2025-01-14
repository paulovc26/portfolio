import Link from "next/link";

export default function Nav() {
    return (
        <nav className="fixed top-0 w-full backdrop-blur-sm bg-black/20 z-50">
            <div className="container mx-auto px-4 sm:px-6 py-3">
                <div className="flex items-center justify-center sm:justify-around">
                    <div className="flex space-x-2 sm:space-x-4 text-base sm:text-xl gap-2 sm:gap-5 px-2 sm:px-4 py-2">
                        <Link href="#inicio" className="text-white hover:text-gray-300 whitespace-nowrap">Início</Link>
                        <Link href="#sobre" className="text-white hover:text-gray-300">Sobre</Link>
                        <Link href="#projetos" className="text-white hover:text-gray-300">Projetos</Link>
                        <Link href="#contato" className="text-white hover:text-gray-300">Contato</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}