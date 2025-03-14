"use client"

import BaixarBoleto from "@/controllers/Uau/Boleto/BaixarBoleto";
import BuscarBoletosClienteEspecifico from "@/controllers/Uau/Boleto/BuscarBoletosClienteEspecifico";
import { getLocalStorage } from "@/services/localStorage.ts/GetLocalStorage";
import { useEffect, useState } from "react";

interface Boleto {
    dataEmissao?: string;
    valorDocumento?: number;
    codBanco?: number;
    seuNumero?: number;
    dataVencimento?: string;
    localPgto?: string;
    linhaDigitavel?: string;
    dataGeracao?: string;
    agCodCedente?: string;
    nossoNumero?: string;
    instrucao?: string;
    carteira?: string;
    campoLivre?: string;
    nomeBanco?: string;
    descricaoEmpresa?: string;
    descricaoObra?: string;
    codEmpresa?: number;
    obraParcela?: string;
    numeroVenda?: number;
    dataEnvioPorEmail?: string | null;
    dataReenvioPorEmail?: string | null;
    boletoEnviado?: string;
}
export default function SegundaViaBoleto() {
    /* 
    const boletos = [
        { id: 1, data: '28/02/2025', valor: '500,00', multa: '20,00', juros: '10,00', vencido: true },
        { id: 2, data: '01/03/2025', valor: '450,00', multa: '45,00', juros: '5,00', vencido: true },
        { id: 3, data: '2025-03-05', valor: 450.0, multa: 10.5, juros: 5.20, vencido: true },
        { id: 4, data: '15/03/2025', valor: '350,00', multa: '0,00', juros: '0,00', vencido: false },
    ];
 */

    const [boletos, setBoletos] = useState<Boleto[]>([])
    const codPessoa = Number(getLocalStorage('id'))
    useEffect(() => {

        async function getData() {
            const response = await BuscarBoletosClienteEspecifico({ codPessoa, naoMostraBoletoVencido: false })
            setBoletos(response)
        }

        getData()
    }, [codPessoa])

    const handleDownloadBoleto = async ({ codBanco, seuNumero }: Boleto) => {
        try {
            const response = await BaixarBoleto({
                cod_banco: Number(codBanco),
                seu_numero: Number(seuNumero),
                ocultar_dados_pessoais: false
            });

            console.log("Resposta do servidor:", response);

            // Verificar se `response` é um objeto JSON com a chave correta
            const base64String = response.base64 || response.data || response; // Ajuste conforme necessário

            if (!base64String || typeof base64String !== "string") {
                console.error("Erro: Base64 não encontrado ou formato inválido.");
                return;
            }

            console.log("Base64 recebido:", base64String);
            baixarArquivoPDF(base64String, Number(seuNumero));

        } catch (error) {
            console.error("Erro ao baixar boleto:", error);
        }
    };

    const baixarArquivoPDF = (base64String: string, seuNumero: number) => {
        try {
            // Converter Base64 para um array de bytes corretamente
            const byteCharacters = atob(base64String);
            const byteNumbers = new Uint8Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            // Criando um Blob do tipo PDF
            const blob = new Blob([byteNumbers], { type: "application/pdf" });

            // Criando uma URL para o Blob
            const url = URL.createObjectURL(blob);

            // Criando um link para download
            const a = document.createElement("a");
            a.href = url;
            a.download = `boleto_${seuNumero}.pdf`;
            document.body.appendChild(a);
            a.click();

            // Removendo o link e liberando memória
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log("Boleto baixado com sucesso!");
        } catch (error) {
            console.error("Erro ao processar Base64 para PDF:", error);
        }
    };



    console.log(boletos)
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

                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-700">
                            {boletos?.map((boleto) => {

                                if (!boleto.dataVencimento) {
                                    return
                                }
                                const boletoVencido = new Date(boleto.dataVencimento) < new Date() ? true : false
                                console.log(boletoVencido)
                                return <tr
                                    key={boleto.seuNumero}
                                    className={`border-b border-gray-700 ${boletoVencido === true ? 'text-red-400' : 'text-green-300'}`}
                                >
                                    <td className="px-4 py-3">{new Date(boleto.dataVencimento).toLocaleDateString('pt-br')}</td>
                                    <td className="px-4 py-3">R$ {Number(boleto.valorDocumento).toFixed(2)}</td>

                                    <td className={`px-4 py-3 font-semibold ${boletoVencido === true ? 'text-red-400' : 'text-green-400'}`}>{boletoVencido === true ? 'Vencido' : 'Aberto'}</td>
                                    <td className="px-4 py-3 text-center">
                                        <button
                                            onClick={() => handleDownloadBoleto({ codBanco: boleto.codBanco, seuNumero: boleto.seuNumero })}
                                            className="px-4 py-2 bg-gradient-to-r text-black from-orange-400 to-yellow-400 rounded-md hover:opacity-90 transition-opacity">
                                            Baixar
                                        </button>
                                    </td>
                                </tr>
                            })}
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