'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

type ProdutoRdc = {
    nome: 'RDC-i' | 'RDC-q' | 'RDC-sq';
    taxa: string;
    rentabilidadeMensal: number;
};

type Rendimentos = {
    diario: number;
    mensal: number;
    anual: number;
};

type AliquotaIR = {
    taxa: string;
    fator: number;
    prazo: string;
};

type PrevisaoIR = {
    aliquota: AliquotaIR;
    imposto: Rendimentos;
    liquido: Rendimentos;
};

type Resultado = {
    produto: ProdutoRdc;
    rentabilidadeMensal: number;
    bruto: Rendimentos;
    previsoesIR: PrevisaoIR[];
};

const PRODUTOS: ProdutoRdc[] = [
    // Atualize estas três rentabilidades todos os meses.
    // Exemplo: 1,2152% deve ser informado como 0.012152.
    {
        nome: 'RDC-i',
        taxa: '100% do CDI',
        rentabilidadeMensal: 0.010931,
    },
    {
        nome: 'RDC-q',
        taxa: 'CDI + 0,15% a.a.',
        rentabilidadeMensal: 0.011058,
    },
    {
        nome: 'RDC-sq',
        taxa: 'CDI + 0,35% a.a.',
        rentabilidadeMensal: 0.011226,
    },
];

const ALIQUOTAS_IR: AliquotaIR[] = [
    {
        taxa: '22,5%',
        fator: 0.225,
        prazo: 'Até 180 dias',
    },
    {
        taxa: '20%',
        fator: 0.2,
        prazo: 'De 181 a 360 dias',
    },
    {
        taxa: '17,5%',
        fator: 0.175,
        prazo: 'De 361 a 720 dias',
    },
    {
        taxa: '15%',
        fator: 0.15,
        prazo: 'Acima de 720 dias',
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

function calcularImposto(
    rendimentoBruto: Rendimentos,
    aliquota: AliquotaIR,
): PrevisaoIR {
    const imposto: Rendimentos = {
        diario: rendimentoBruto.diario * aliquota.fator,
        mensal: rendimentoBruto.mensal * aliquota.fator,
        anual: rendimentoBruto.anual * aliquota.fator,
    };

    const liquido: Rendimentos = {
        diario: rendimentoBruto.diario - imposto.diario,
        mensal: rendimentoBruto.mensal - imposto.mensal,
        anual: rendimentoBruto.anual - imposto.anual,
    };

    return {
        aliquota,
        imposto,
        liquido,
    };
}

export default function RentabilidadeForm() {
    const [valorInvestimento, setValorInvestimento] = useState('');
    const [resultado, setResultado] = useState<Resultado | null>(null);
    const [erro, setErro] = useState('');

    const limparResultado = () => {
        setResultado(null);
        setErro('');
    };

    const calcular = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const valor = Number(valorInvestimento);

        if (!Number.isFinite(valor) || valor <= 0) {
            setErro('Informe um valor de investimento válido.');
            setResultado(null);
            return;
        }

        const produto = identificarProduto(valor);

        if (!produto) {
            setErro('O investimento mínimo para o RDC-i é de R$ 200,00.');
            setResultado(null);
            return;
        }

        const taxaMensal = produto.rentabilidadeMensal;

        const rendimentoMensal = valor * taxaMensal;

        const rendimentoBruto: Rendimentos = {
            diario: rendimentoMensal / 30,
            mensal: rendimentoMensal,
            anual:
                valor *
                (Math.pow(1 + taxaMensal, 12) - 1),
        };

        const previsoesIR = ALIQUOTAS_IR.map((aliquota) =>
            calcularImposto(rendimentoBruto, aliquota),
        );

        setResultado({
            produto,
            rentabilidadeMensal: taxaMensal,
            bruto: rendimentoBruto,
            previsoesIR,
        });

        setErro('');
    };

    return (
        <main className="min-h-screen bg-gray-50 p-4 font-sans text-gray-900">
            <div className="mx-auto w-full max-w-5xl py-8">


                <div className="rounded-2xl bg-white p-6 shadow-md">
                    <h1 className="mb-2 text-center text-2xl font-bold">
                        Simulador de Rendimento RDC
                    </h1>

                    <p className="mb-6 text-center text-sm text-gray-600">
                        Informe o valor aplicado para identificar o produto e
                        calcular os rendimentos.
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
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setValorInvestimento(event.target.value);
                                    limparResultado();
                                }}
                                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {erro && (
                            <p className="mt-3 text-sm font-medium text-red-600">
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
                        <section className="mt-6 space-y-6">
                            <div className="rounded-xl bg-blue-50 p-5">
                                <span className="text-sm text-gray-600">
                                    Produto identificado
                                </span>

                                <h2 className="text-2xl font-bold text-blue-800">
                                    {resultado.produto.nome}
                                </h2>

                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                    <Informacao
                                        titulo="Taxa do produto"
                                        valor={resultado.produto.taxa}
                                    />

                                    <Informacao
                                        titulo="Rentabilidade informada"
                                        valor={formatarPercentual(
                                            resultado.rentabilidadeMensal,
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
                                        valor={resultado.bruto.diario}
                                    />

                                    <Rendimento
                                        titulo="Mensal"
                                        valor={resultado.bruto.mensal}
                                    />

                                    <Rendimento
                                        titulo="Anual composto"
                                        valor={resultado.bruto.anual}
                                    />
                                </div>
                            </div>

                            <p className="rounded-lg bg-gray-100 p-3 text-xs text-gray-600">
                                O rendimento diário considera 30 dias. A
                                projeção anual utiliza capitalização composta
                                por 12 meses.
                            </p>

                            <div>
                                <h2 className="mb-1 text-lg font-bold">
                                    Previsão de Imposto de Renda
                                </h2>

                                <p className="mb-4 text-sm text-gray-600">
                                    O IR abaixo é calculado exclusivamente
                                    sobre o rendimento bruto, e não sobre o
                                    valor investido.
                                </p>

                                <div className="grid gap-4 lg:grid-cols-2">
                                    {resultado.previsoesIR.map((previsao) => (
                                        <PrevisaoIRCard
                                            key={previsao.aliquota.taxa}
                                            previsao={previsao}
                                        />
                                    ))}
                                </div>
                            </div>

                            <p className="rounded-lg bg-amber-50 p-3 text-xs text-amber-900">
                                Esta é uma estimativa. O cálculo não considera
                                IOF, resgates parciais ou alterações futuras na
                                tributação.
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

function PrevisaoIRCard({
    previsao,
}: {
    previsao: PrevisaoIR;
}) {
    return (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm text-gray-600">
                        Alíquota estimada
                    </p>
                    <p className="text-2xl font-bold text-amber-800">
                        {previsao.aliquota.taxa}
                    </p>
                </div>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
                    {previsao.aliquota.prazo}
                </span>
            </div>

            <div className="overflow-hidden rounded-lg border border-amber-100 bg-white">
                <div className="grid grid-cols-3 bg-amber-100 px-3 py-2 text-xs font-semibold text-gray-700">
                    <span>Período</span>
                    <span className="text-right">Desconto de IR</span>
                    <span className="text-right">Rendimento líquido</span>
                </div>

                <LinhaPrevisao
                    titulo="Diário"
                    imposto={previsao.imposto.diario}
                    liquido={previsao.liquido.diario}
                />

                <LinhaPrevisao
                    titulo="Mensal"
                    imposto={previsao.imposto.mensal}
                    liquido={previsao.liquido.mensal}
                />

                <LinhaPrevisao
                    titulo="Anual"
                    imposto={previsao.imposto.anual}
                    liquido={previsao.liquido.anual}
                />
            </div>
        </div>
    );
}

function LinhaPrevisao({
    titulo,
    imposto,
    liquido,
}: {
    titulo: string;
    imposto: number;
    liquido: number;
}) {
    return (
        <div className="grid grid-cols-3 border-t border-gray-100 px-3 py-2 text-sm">
            <span className="font-medium text-gray-700">{titulo}</span>
            <span className="text-right font-medium text-red-600">
                - {formatarMoeda(imposto)}
            </span>
            <span className="text-right font-semibold text-green-700">
                {formatarMoeda(liquido)}
            </span>
        </div>
    );
}
