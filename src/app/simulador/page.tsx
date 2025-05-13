'use client';

import { useState } from 'react';

export default function SimuladorPage() {
    const [prazo, setPrazo] = useState(12);
    const [primeiraParcela, setPrimeiraParcela] = useState('');
    const [beneficio, setBeneficio] = useState('sim');
    const [mesAniversario, setMesAniversario] = useState(1);
    interface Parcela {
        parcela: number;
        vencimento: Date;
    }

    const [cronograma, setCronograma] = useState<Parcela[]>([]);

    function gerarCronogramaParcelas(inicio: Date, meses: number, mesAniversario: number, aplicarBeneficio: boolean) {
        const cronograma = [];
        const mesAtual = new Date(inicio);
        let parcelasGeradas = 0;

        while (parcelasGeradas < meses) {
            const mes = mesAtual.getMonth() + 1;
            if (!aplicarBeneficio || mes !== mesAniversario) {
                cronograma.push({
                    parcela: parcelasGeradas + 1,
                    vencimento: new Date(mesAtual),
                });
                parcelasGeradas++;
            }
            mesAtual.setMonth(mesAtual.getMonth() + 1);
        }

        return cronograma;
    }

    function handleCalcular() {
        if (!primeiraParcela) return;
        const dataInicio = new Date(primeiraParcela);
        const aplicarBeneficio = beneficio === 'sim';
        const resultado = gerarCronogramaParcelas(dataInicio, prazo, mesAniversario, aplicarBeneficio);
        setCronograma(resultado);
    }

    return (
        <section className="min-h-screen flex flex-col items-left gap-6 sm:gap-8 p-4 sm:p-8 bg-white bg-cover bg-center">

            <div style={{ padding: 24, backgroundColor: '#fff', color: '#000', fontFamily: 'Arial' }}>
                <h1 className="text-4xl">Simulador de Parcelas</h1>

                <label>
                    Prazo (meses):
                    <input type="number" value={prazo} onChange={(e) => setPrazo(Number(e.target.value))} />
                </label>
                <br /><br />

                <label>
                    Data da 1ª parcela:
                    <input type="date" value={primeiraParcela} onChange={(e) => setPrimeiraParcela(e.target.value)} />
                </label>
                <br /><br />

                <label>Benefício de Aniversário:</label>
                <input type="radio" name="beneficio" value="sim" checked={beneficio === 'sim'} onChange={() => setBeneficio('sim')} /> Sim
                <input type="radio" name="beneficio" value="nao" checked={beneficio === 'nao'} onChange={() => setBeneficio('nao')} /> Não
                <br /><br />

                <label>
                    Mês de Aniversário:
                    <select value={mesAniversario} onChange={(e) => setMesAniversario(Number(e.target.value))}>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </label>
                <br /><br />

                <button onClick={handleCalcular}>Calcular</button>

                {cronograma.length > 0 && (
                    <div style={{ marginTop: 24 }}>
                        <h2>Resultado</h2>
                        <p><strong>Data da 1ª parcela:</strong> {new Date(primeiraParcela).toLocaleDateString('pt-BR')}</p>
                        <p><strong>Data da última parcela:</strong> {cronograma[cronograma.length - 1].vencimento.toLocaleDateString('pt-BR')}</p>

                        <h3>Parcelas:</h3>
                        <ul>
                            {cronograma.map((p) => (
                                <li key={p.parcela}>
                                    Parcela {p.parcela} - {p.vencimento.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
