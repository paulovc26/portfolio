import Link from "next/link";

export default function Footer() {

    function anoAtual() {
        const data = new Date();
        const ano = data.getFullYear();
        return ano;
    }

    return (
        <footer className=" py-8 sm:py-12 bg-gray-100 border-t-black/15 border-t-2">

            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                    <span className="text-center text-sm sm:text-base text-black py-2">
                        © {anoAtual()}. Paulo Carvalho {' '}

                    </span>
                    <span className="text-center text-sm sm:text-base text-black py-2">
                        <span className="gap-2">
                            •
                        </span>
                        <span className="gap-2">Desenvolvido por </span>
                        <Link href="https://www.github.com/paulovc26" target="_blank" className="text-black font-black hover:text-gray-700 cursor-pointer">
                            DEV Paulo Carvalho.
                        </Link>
                    </span>
                </div>
            </div >
        </footer >
    )
};
