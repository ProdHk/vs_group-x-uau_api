"use server"

import AuthUser from "../Auth";


export default async function ConsultarVendasPorCpf(CpfCnpj: string) {
    try {
        let vendas
        const API_KEY = process.env.API_KEY || '';
        const Authorization = await AuthUser()
        const url = `${process.env.API_IP || process.env.API_PATH}/Venda/ConsultarUnidadesCompradasPorCPF`

        vendas = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-INTEGRATION-Authorization": API_KEY,
                "Authorization": Authorization
            },
            body: JSON.stringify({
                "CpfCnpj": String(CpfCnpj)
            })
        }).then((res) => res.json())

        if (!vendas) {
            console.log("O cliente não possui vendas")
            return
        }


        console.log("As vendas foram encontradas com sucesso!")
        return vendas[0]?.UnidadesCompradas?.slice(1)

    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar buscar o cliente")
        console.log(error)
        return error
    }
}