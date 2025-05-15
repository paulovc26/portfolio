'use client';
import { useState, ReactNode } from 'react';

export default function Page() {


    const [resultado, setResultado] = useState<ReactNode>(null);
    const [valorBruto, setValorBruto] = useState('');
    const [taxaMensal, setTaxaMensal] = useState('');
    const [dias, setDias] = useState<number | undefined>(undefined);


    const calcularJurosDiario = () => {
        const valor = parseFloat(valorBruto);
        const taxa = parseFloat(taxaMensal);

        if (isNaN(valor) || isNaN(taxa)) {
            setResultado('Preencha os campos corretamente.');
            return;
        }

        const taxaMensalDecimal = taxa / 100;
        const taxaDiariaDecimal = Math.pow(1 + taxaMensalDecimal, 1 / 30) - 1;
        const jurosDiario = valor * taxaDiariaDecimal;

        const taxaFormatada = (taxaDiariaDecimal * 100).toFixed(6);
        const jurosFormatado = jurosDiario.toFixed(2);
        const jurosTotal = dias !== undefined ? parseFloat(jurosFormatado) * dias : 0;

        setResultado(
            <>
                <div>
                    Taxa de juros diária: <strong>{taxaFormatada}%</strong>
                </div>
                <div>
                    Juros diário sobre R${valor.toFixed(2)}: <strong>R${jurosFormatado}</strong>
                </div>
                <div>
                    Juros total em {dias} dias: <strong>R${jurosTotal.toFixed(2)}</strong>
                </div>
                <div>
                    Total com juros aplicado: <strong>R${(valor + jurosTotal).toFixed(2)}</strong>
                </div>
            </>
        );

    };



    return (
        <section className="min-h-screen flex flex-col items-left gap-6 sm:gap-8 p-4 sm:p-8 bg-white bg-cover bg-center font-sans">
            <div className="text-black flex flex-col gap-4">
                <a href="/apoio">Voltar</a>
                <h1 className="text-4xl">
                    Calculadora Juros Diário
                </h1>
                <h2>Calculadora de Juros Diário</h2>

                <label>Valor Bruto/Atual (R$):</label>
                <input
                    type="number"
                    value={valorBruto}
                    onChange={(e) => setValorBruto(e.target.value)}
                    placeholder="Ex: 10340,93"
                    style={{ width: '100%', padding: 8, marginBottom: 10 }}
                />

                <label>Taxa de Juros Mensal (%):</label>
                <input
                    type="number"
                    value={taxaMensal}
                    onChange={(e) => setTaxaMensal(e.target.value)}
                    placeholder="Ex: 1.99"
                    style={{ width: '100%', padding: 8, marginBottom: 10 }}
                />
                <label>Quantos dias: </label>
                <input
                    type="number"
                    value={dias ?? ''}
                    onChange={(e) => setDias(e.target.value === '' ? undefined : parseInt(e.target.value))}
                    placeholder="Ex: 5, 7, 30..."
                    style={{ width: '100%', padding: 8, marginBottom: 10 }}
                />

                <button onClick={calcularJurosDiario} style={{ padding: 10, width: '100%', marginTop: 10 }}>
                    Calcular
                </button>

                {resultado && (
                    <div style={{ marginTop: 20 }}>
                        {resultado}
                    </div>
                )}
            </div>
        </section>
    )
};