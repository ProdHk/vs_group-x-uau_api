// app/segunda-via-boleto/page.tsx

export default function SegundaViaBoleto() {
    const boletos = [
        { id: 1, data: '28/02/2025', valor: '500,00', multa: '20,00', juros: '10,00', vencido: true },
        { id: 2, data: '01/03/2025', valor: '450,00', multa: '45,00', juros: '5,00', vencido: true },
        { id: 3, data: '2025-03-05', valor: 450.0, multa: 10.5, juros: 5.20, vencido: true },
        { id: 4, data: '15/03/2025', valor: '350,00', multa: '0,00', juros: '0,00', vencido: false },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center py-10">
            <div className="w-full max-w-5xl px-4">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Segunda Via de Boleto
                </h1>
                <p className="text-gray-300 mb-6">Visualize detalhes e solicite rapidamente a segunda via dos seus boletos.</p>

                <div className="overflow-auto rounded-lg shadow-xl">
                    <table className="w-full text-left">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="px-4 py-3">Data de Vencimento</th>
                                <th className="px-4 py-3">Valor (R$)</th>
                                <th className="px-4 py-3">Multa (R$)</th>
                                <th className="px-4 py-3">Juros</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-700">
                            {boletos.map((boleto) => (
                                <tr
                                    key={boleto.id}
                                    className={`border-b border-gray-700 ${boleto.vencido ? 'text-red-400' : 'text-green-300'}`}
                                >
                                    <td className="px-4 py-3">{boleto.data}</td>
                                    <td className="px-4 py-3">R${boleto.valor}</td>
                                    <td className="px-4 py-3">R${boleto.multa}</td>
                                    <td className="px-4 py-3">R${boleto.juros}</td>
                                    <td className={`px-4 py-3 font-semibold ${boleto.vencido ? 'text-red-400' : 'text-green-400'}`}>{boleto.vencido ? 'Vencido' : 'Aberto'}</td>
                                    <td className="px-4 py-3 text-center">
                                        <button className="px-4 py-2 bg-gradient-to-r text-black from-orange-400 to-yellow-400 rounded-md hover:opacity-90 transition-opacity">
                                            Baixar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 text-right">
                    <span className="text-lg font-semibold">Total pendente: R$ 950,00</span>
                </div>
            </div>
        </div>
    );
}