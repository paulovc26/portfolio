
export default function Page() {


    return (
        <section className="min-h-screen flex flex-col items-left gap-6 sm:gap-8 p-4 sm:p-8 bg-white bg-cover bg-center">
            <div className="text-black flex flex-col gap-4">
                <a href="/apoio">Home</a>
                <h1 className="text-4xl">
                    Apoio Operacional
                </h1>
                <ul className="list-disc pl-5 gap-4">
                    <li>
                        <a href="/apoio/simulador">
                            Calculadora de Prazo
                        </a>
                    </li>
                    <li>
                        <a href="/apoio/calculadorajuros">
                            Calculadora de Juros/dia
                        </a>
                    </li>
                    <li>
                        <a href="/apoio/rentabilidade">
                            Rentabilidade investimentos
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
};
