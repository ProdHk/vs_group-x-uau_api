'use client'

import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import ResumoDoContrato from '@/services/valores/recebidos';


interface Parcela {
    id?: string
    // Define the properties of a single parcela here
}

interface ResumoVenda {
    parcelasRecebidas?: Parcela[]
    parcelasPendentes?: Parcela[]
    valorRecebido?: number
    valorMulta?: number

}
export default function ExtratoFinanceiro() {

    const [resumoContrato, setResumoContrato] = useState<ResumoVenda>()

    useEffect(() => {
        async function getData() {
            const response = await ResumoDoContrato()
            setResumoContrato(response)
        }
        getData()
    }, [])


    const pagamentos = [
        { data: 'Jan', valor: 450 },
        { data: 'Fev', valor: 400 },
        { data: 'Mar', valor: 500 },
        { data: 'Abr', valor: 450 },
        { data: 'Mai', valor: 480 },
        { data: 'Jun', valor: 460 },
    ];
    return (

        <div className="min-h-screen w-full  bg-gray-900 text-white flex justify-center py-10">
            <div className="w-full max-w-5xl px-4">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Extrato Financeiro
                </h1>
                <p className="text-gray-300 mb-6">Veja a evolução financeira do seu contrato, seus pagamentos e progresso geral.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle>Pagamentos Mensais</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={250}>
                                <AreaChart data={pagamentos}>
                                    <XAxis dataKey="data" stroke="#8884d8" />
                                    <YAxis stroke="#8884d8" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="valor" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle>Progresso do Contrato</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-400 mb-2">Você já pagou 55% do seu contrato.</p>
                            <Progress value={55} className="h-3 bg-gray-700 " />
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700 col-span-1 lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Resumo dos valores pagos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <div className="p-4 bg-gray-700 rounded-lg">
                                    <h3 className="text-lg font-semibold">Numero de parcelas</h3>
                                    <p className="text-2xl font-bold">{resumoContrato?.parcelasRecebidas?.length ?? ""}</p>
                                </div>
                                <div className="p-4 bg-gray-700 rounded-lg">
                                    <h3 className="text-lg font-semibold">Valor pago</h3>
                                    <p className="text-2xl font-bold">R$ {Number(resumoContrato?.valorRecebido ?? 0).toLocaleString('pt-br')}</p>
                                </div>
                                <div className="p-4 bg-gray-700 rounded-lg">
                                    <h3 className="text-lg font-semibold">Valor de multa</h3>
                                    <p className="text-2xl font-bold">R$ {Number(resumoContrato?.valorMulta ?? 0).toLocaleString('pt-br')}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-800 border-gray-700 col-span-1 lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Resumo dos valores em aberto</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <div className="p-4 bg-gray-700 rounded-lg">
                                    <h3 className="text-lg font-semibold">Saldo devedor</h3>
                                    <p className="text-2xl font-bold">R$ 4.500,00</p>
                                </div>
                                <div className="p-4 bg-gray-700 rounded-lg">
                                    <h3 className="text-lg font-semibold">Parcelas restantes</h3>
                                    <p className="text-2xl font-bold">R$ 3.700,00</p>
                                </div>
                                <div className="p-4 bg-gray-700 rounded-lg">
                                    <h3 className="text-lg font-semibold">Parcelas Restantes</h3>
                                    <p className="text-2xl font-bold">8 parcelas</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
