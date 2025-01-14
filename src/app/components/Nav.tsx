import Link from "next/link";

export default function Nav() {
    return (
        <nav className="fixed top-0 w-full backdrop-blur-sm bg-black/20 z-50">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-around">
                    <div className="flex space-x-4 text-xl gap-5 px-4 py-2">
                        <Link href="#inicio" className="text-white hover:text-gray-300">Início</Link>
                        <Link href="#sobre" className="text-white hover:text-gray-300">Sobre</Link>
                        <Link href="#projetos" className="text-white hover:text-gray-300">Projetos</Link>
                        <Link href="#contato" className="text-white hover:text-gray-300">Contato</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}