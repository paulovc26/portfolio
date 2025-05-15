'use client';

import { useState } from 'react';

export default function RentabilidadeForm() {
    const [valorBruto, setValorBruto] = useState<number | undefined>(undefined);
    const [rentabilidadeAnual, setRentabilidadeAnual] = useState<number | undefined>(undefined);
    const [resultados, setResultados] = useState<{
        diaria: number;
        mensal: number;
        anual: number;
    } | null>(null);

    const calcular = () => {
        if (!valorBruto || !rentabilidadeAnual || rentabilidadeAnual <= 0) return;

        const diaria = Math.pow(rentabilidadeAnual, 1 / 252) - 1;
        const mensal = Math.pow(rentabilidadeAnual, 1 / 12) - 1;
        const anual = rentabilidadeAnual - 1;

        setResultados({
            diaria: valorBruto * diaria,
            mensal: valorBruto * mensal,
            anual: valorBruto * anual,
        });
    };

    return (
        <main className="min-h-screen flex items-center text-black justify-center bg-gray-50 p-4 font-sans">

            <div>
                <div className='pb-4'>

                    <a className="text-lg text-blue-500 mb-4" href="/apoio">voltar</a>
                </div>


                <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Calculadora de Rentabilidade
                    </h1>

                    <label className="block mb-2 font-medium">Valor Bruto (R$)</label>
                    <input
                        type="number"
                        value={valorBruto ?? ''}
                        onChange={(e) => setValorBruto(Number(e.target.value))}
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block mb-2 font-medium">
                        Rentabilidade Anual (ex: 1.1472 = 14,72% a.a)
                    </label>
                    <input
                        type="number"
                        step="0.0001"
                        value={rentabilidadeAnual ?? ''}
                        onChange={(e) => setRentabilidadeAnual(Number(e.target.value))}
                        className="w-full p-2 border rounded mb-4"
                    />

                    <button
                        onClick={calcular}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Calcular
                    </button>

                    {resultados && (
                        <div className="mt-4 space-y-2 text-lg font-semibold">
                            <p>📅 Rendimento diário: R$ {resultados.diaria.toFixed(2)}</p>
                            <p>📆 Rendimento mensal: R$ {resultados.mensal.toFixed(2)}</p>
                            <p>📈 Rendimento anual: R$ {resultados.anual.toFixed(2)}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
