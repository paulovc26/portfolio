import Link from "next/link";

export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 right-0 w-full border-opacity-20 bg-black bg-opacity-10 backdrop-blur-sm z-1000 drop-shadow-2xl">
            <ul className="flex justify-center items-center gap-5 px-4 py-7 font-bold">
                <li className="flex text-2xl gap-4">
                    <Link href="/">Inicio</Link>
                    <Link href="/">Sobre</Link>
                    <Link href="/">Projetos</Link>
                    <Link href="/">Contato</Link>
                </li>
            </ul>
        </nav>
    )
}