'use client';

import { FormEvent, useState } from 'react';

type ProdutoRdc = {
    nome: 'RDC-i' | 'RDC-q' | 'RDC-sq';
    taxa: string;
    rentabilidadeMensal: number;
    referenciaCdi: number;
};

type Resultado = {
    produto: ProdutoRdc;
    diaria: number;
    mensal: number;
    anual: number;
};

const PRODUTOS: ProdutoRdc[] = [
    {
        nome: 'RDC-i',
        taxa: '100% do CDI',
        rentabilidadeMensal: 0.012152,
        referenciaCdi: 1,
    },
    {
        nome: 'RDC-q',
        taxa: 'CDI + 0,15% a.a.',
        rentabilidadeMensal: 0.012291,
        referenciaCdi: 1.011395,
    },
    {
        nome: 'RDC-sq',
        taxa: 'CDI + 0,35% a.a.',
        rentabilidadeMensal: 0.012475,
        referenciaCdi: 1.026564,
    },
];

const formatarMoeda = (valor: number) =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valor);

const formatarPercentual = (valor: number) =>
    new Intl.NumberFormat('pt-BR', {
        style: 'percent',
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
    }).format(valor);

function identificarProduto(valor: number): ProdutoRdc | null {
    if (valor < 200) return null;
    if (valor < 100_000) return PRODUTOS[0];
    if (valor < 1_000_000) return PRODUTOS[1];

    return PRODUTOS[2];
}

export default function RentabilidadeForm() {
    const [valorInvestimento, setValorInvestimento] = useState('');
    const [resultado, setResultado] = useState<Resultado | null>(null);
    const [erro, setErro] = useState('');

    const calcular = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const valor = Number(valorInvestimento);

        if (!Number.isFinite(valor) || valor <= 0) {
            setErro('Informe um valor válido.');
            setResultado(null);
            return;
        }

        const produto = identificarProduto(valor);

        if (!produto) {
            setErro('O investimento mínimo para o RDC-i é de R$ 200,00.');
            setResultado(null);
            return;
        }

        const rendimentoMensal =
            valor * produto.rentabilidadeMensal;

        const rendimentoDiario =
            rendimentoMensal / 30;

        const rendimentoAnual =
            valor *
            (Math.pow(1 + produto.rentabilidadeMensal, 12) - 1);

        setResultado({
            produto,
            diaria: rendimentoDiario,
            mensal: rendimentoMensal,
            anual: rendimentoAnual,
        });

        setErro('');
    };

    const alterarValor = (valor: string) => {
        setValorInvestimento(valor);
        setResultado(null);
        setErro('');
    };

    return (
        <main className="min-h-screen bg-gray-50 p-4 font-sans text-gray-900">
            <div className="mx-auto w-full max-w-3xl py-8">
                <div className="mb-4">
                    <a
                        className="text-lg text-blue-600 hover:text-blue-800"
                        href="/apoio"
                    >
                        ← Voltar
                    </a>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                    <h1 className="mb-2 text-center text-2xl font-bold">
                        Simulador de Rendimento RDC
                    </h1>

                    <p className="mb-6 text-center text-sm text-gray-600">
                        Informe o valor para identificar o produto e calcular
                        os rendimentos estimados.
                    </p>

                    <form onSubmit={calcular}>
                        <label
                            htmlFor="valorInvestimento"
                            className="mb-2 block font-medium"
                        >
                            Valor do investimento
                        </label>

                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                R$
                            </span>

                            <input
                                id="valorInvestimento"
                                type="number"
                                min="0"
                                step="0.01"
                                inputMode="decimal"
                                placeholder="200,00"
                                value={valorInvestimento}
                                onChange={(event) =>
                                    alterarValor(event.target.value)
                                }
                                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {erro && (
                            <p className="mt-2 text-sm font-medium text-red-600">
                                {erro}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-5 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Calcular
                        </button>
                    </form>

                    {resultado && (
                        <section className="mt-6 space-y-5">
                            <div className="rounded-xl bg-blue-50 p-5">
                                <span className="text-sm text-gray-600">
                                    Produto identificado
                                </span>

                                <h2 className="text-2xl font-bold text-blue-800">
                                    {resultado.produto.nome}
                                </h2>

                                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                    <Informacao
                                        titulo="Taxa"
                                        valor={resultado.produto.taxa}
                                    />

                                    <Informacao
                                        titulo="Rentabilidade mensal"
                                        valor={formatarPercentual(
                                            resultado.produto
                                                .rentabilidadeMensal,
                                        )}
                                    />

                                    <Informacao
                                        titulo="Referência CDI"
                                        valor={formatarPercentual(
                                            resultado.produto.referenciaCdi,
                                        )}
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="mb-3 text-lg font-bold">
                                    Rendimentos brutos estimados
                                </h2>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    <Rendimento
                                        titulo="Diário"
                                        valor={resultado.diaria}
                                    />

                                    <Rendimento
                                        titulo="Mensal"
                                        valor={resultado.mensal}
                                    />

                                    <Rendimento
                                        titulo="Anual composto"
                                        valor={resultado.anual}
                                    />
                                </div>
                            </div>

                            <p className="rounded-lg bg-gray-100 p-3 text-xs text-gray-600">
                                O rendimento diário considera 30 dias. A
                                projeção anual repete a rentabilidade mensal por
                                12 meses, com capitalização composta. Os valores
                                são brutos e não incluem IR ou IOF.
                            </p>
                        </section>
                    )}
                </div>
            </div>
        </main>
    );
}

function Informacao({
    titulo,
    valor,
}: {
    titulo: string;
    valor: string;
}) {
    return (
        <div className="rounded-lg bg-white p-3 shadow-sm">
            <p className="text-xs text-gray-500">{titulo}</p>
            <p className="mt-1 font-semibold">{valor}</p>
        </div>
    );
}

function Rendimento({
    titulo,
    valor,
}: {
    titulo: string;
    valor: number;
}) {
    return (
        <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center">
            <p className="text-sm font-medium text-gray-600">{titulo}</p>
            <p className="mt-1 text-xl font-bold text-green-700">
                {formatarMoeda(valor)}
            </p>
        </div>
    );
}

// 'use client';

// import { FormEvent, useState } from 'react';

// type ProdutoRdc = {
//     nome: 'RDC-i' | 'RDC-q' | 'RDC-sq';
//     taxa: string;
// };

// type Resultado = {
//     produto: ProdutoRdc;
//     rentabilidadeMensal: number;
//     diaria: number;
//     mensal: number;
//     anual: number;
// };

// const PRODUTOS: ProdutoRdc[] = [
//     {
//         nome: 'RDC-i',
//         taxa: '100% do CDI',
//     },
//     {
//         nome: 'RDC-q',
//         taxa: 'CDI + 0,15% a.a.',
//     },
//     {
//         nome: 'RDC-sq',
//         taxa: 'CDI + 0,35% a.a.',
//     },
// ];

// const formatarMoeda = (valor: number) =>
//     new Intl.NumberFormat('pt-BR', {
//         style: 'currency',
//         currency: 'BRL',
//     }).format(valor);

// const formatarPercentual = (valor: number) =>
//     new Intl.NumberFormat('pt-BR', {
//         style: 'percent',
//         minimumFractionDigits: 4,
//         maximumFractionDigits: 4,
//     }).format(valor);

// function converterNumero(valor: string): number {
//     const valorLimpo = valor.trim();

//     // Aceita tanto 1,2152 quanto 1.2152
//     const valorNormalizado = valorLimpo.includes(',')
//         ? valorLimpo.replace(/\./g, '').replace(',', '.')
//         : valorLimpo;

//     return Number(valorNormalizado);
// }

// function identificarProduto(valor: number): ProdutoRdc | null {
//     if (valor < 200) return null;
//     if (valor < 100_000) return PRODUTOS[0];
//     if (valor < 1_000_000) return PRODUTOS[1];

//     return PRODUTOS[2];
// }

// export default function RentabilidadeForm() {
//     const [valorInvestimento, setValorInvestimento] = useState('');
//     const [rentabilidadeMensal, setRentabilidadeMensal] = useState('');
//     const [resultado, setResultado] = useState<Resultado | null>(null);
//     const [erro, setErro] = useState('');

//     const limparResultado = () => {
//         setResultado(null);
//         setErro('');
//     };

//     const calcular = (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault();

//         const valor = Number(valorInvestimento);
//         const percentualMensal = converterNumero(rentabilidadeMensal);

//         if (!Number.isFinite(valor) || valor <= 0) {
//             setErro('Informe um valor de investimento válido.');
//             setResultado(null);
//             return;
//         }

//         const produto = identificarProduto(valor);

//         if (!produto) {
//             setErro('O investimento mínimo para o RDC-i é de R$ 200,00.');
//             setResultado(null);
//             return;
//         }

//         if (
//             !Number.isFinite(percentualMensal) ||
//             percentualMensal <= 0
//         ) {
//             setErro('Informe uma rentabilidade mensal válida.');
//             setResultado(null);
//             return;
//         }

//         // Exemplo: 1,2152% passa a ser 0,012152
//         const taxaMensal = percentualMensal / 100;

//         const rendimentoMensal = valor * taxaMensal;
//         const rendimentoDiario = rendimentoMensal / 30;

//         const rendimentoAnual =
//             valor * (Math.pow(1 + taxaMensal, 12) - 1);

//         setResultado({
//             produto,
//             rentabilidadeMensal: taxaMensal,
//             diaria: rendimentoDiario,
//             mensal: rendimentoMensal,
//             anual: rendimentoAnual,
//         });

//         setErro('');
//     };

//     return (
//         <main className="min-h-screen bg-gray-50 p-4 font-sans text-gray-900">
//             <div className="mx-auto w-full max-w-3xl py-8">
//                 <div className="mb-4">
//                     <a
//                         className="text-lg text-blue-600 hover:text-blue-800"
//                         href="/apoio"
//                     >
//                         ← Voltar
//                     </a>
//                 </div>

//                 <div className="rounded-2xl bg-white p-6 shadow-md">
//                     <h1 className="mb-2 text-center text-2xl font-bold">
//                         Simulador de Rendimento RDC
//                     </h1>

//                     <p className="mb-6 text-center text-sm text-gray-600">
//                         Informe o valor aplicado e a rentabilidade mensal
//                         vigente.
//                     </p>

//                     <form onSubmit={calcular}>
//                         <label
//                             htmlFor="valorInvestimento"
//                             className="mb-2 block font-medium"
//                         >
//                             Valor do investimento
//                         </label>

//                         <div className="relative">
//                             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
//                                 R$
//                             </span>

//                             <input
//                                 id="valorInvestimento"
//                                 type="number"
//                                 min="0"
//                                 step="0.01"
//                                 inputMode="decimal"
//                                 placeholder="200,00"
//                                 value={valorInvestimento}
//                                 onChange={(event) => {
//                                     setValorInvestimento(event.target.value);
//                                     limparResultado();
//                                 }}
//                                 className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                             />
//                         </div>

//                         <label
//                             htmlFor="rentabilidadeMensal"
//                             className="mb-2 mt-4 block font-medium"
//                         >
//                             Rentabilidade mensal (%)
//                         </label>

//                         <div className="relative">
//                             <input
//                                 id="rentabilidadeMensal"
//                                 type="text"
//                                 inputMode="decimal"
//                                 placeholder="Ex.: 1,2152"
//                                 value={rentabilidadeMensal}
//                                 onChange={(event) => {
//                                     setRentabilidadeMensal(
//                                         event.target.value,
//                                     );
//                                     limparResultado();
//                                 }}
//                                 className="w-full rounded-lg border border-gray-300 px-3 py-3 pr-10 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                             />

//                             <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
//                                 %
//                             </span>
//                         </div>

//                         <p className="mt-1 text-xs text-gray-500">
//                             Digite 1,2152 para representar 1,2152% ao mês.
//                         </p>

//                         {erro && (
//                             <p className="mt-3 text-sm font-medium text-red-600">
//                                 {erro}
//                             </p>
//                         )}

//                         <button
//                             type="submit"
//                             className="mt-5 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
//                         >
//                             Calcular
//                         </button>
//                     </form>

//                     {resultado && (
//                         <section className="mt-6 space-y-5">
//                             <div className="rounded-xl bg-blue-50 p-5">
//                                 <span className="text-sm text-gray-600">
//                                     Produto identificado
//                                 </span>

//                                 <h2 className="text-2xl font-bold text-blue-800">
//                                     {resultado.produto.nome}
//                                 </h2>

//                                 <div className="mt-4 grid gap-3 sm:grid-cols-2">
//                                     <Informacao
//                                         titulo="Taxa do produto"
//                                         valor={resultado.produto.taxa}
//                                     />

//                                     <Informacao
//                                         titulo="Rentabilidade informada"
//                                         valor={formatarPercentual(
//                                             resultado.rentabilidadeMensal,
//                                         )}
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <h2 className="mb-3 text-lg font-bold">
//                                     Rendimentos brutos estimados
//                                 </h2>

//                                 <div className="grid gap-3 sm:grid-cols-3">
//                                     <Rendimento
//                                         titulo="Diário"
//                                         valor={resultado.diaria}
//                                     />

//                                     <Rendimento
//                                         titulo="Mensal"
//                                         valor={resultado.mensal}
//                                     />

//                                     <Rendimento
//                                         titulo="Anual composto"
//                                         valor={resultado.anual}
//                                     />
//                                 </div>
//                             </div>

//                             <p className="rounded-lg bg-gray-100 p-3 text-xs text-gray-600">
//                                 O rendimento diário considera 30 dias. A
//                                 projeção anual repete a rentabilidade mensal
//                                 informada por 12 meses, com capitalização
//                                 composta. Os resultados não incluem IR ou IOF.
//                             </p>
//                         </section>
//                     )}
//                 </div>
//             </div>
//         </main>
//     );
// }

// function Informacao({
//     titulo,
//     valor,
// }: {
//     titulo: string;
//     valor: string;
// }) {
//     return (
//         <div className="rounded-lg bg-white p-3 shadow-sm">
//             <p className="text-xs text-gray-500">{titulo}</p>
//             <p className="mt-1 font-semibold">{valor}</p>
//         </div>
//     );
// }

// function Rendimento({
//     titulo,
//     valor,
// }: {
//     titulo: string;
//     valor: number;
// }) {
//     return (
//         <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center">
//             <p className="text-sm font-medium text-gray-600">{titulo}</p>

//             <p className="mt-1 text-xl font-bold text-green-700">
//                 {formatarMoeda(valor)}
//             </p>
//         </div>
//     );
// }