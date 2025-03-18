"use server"

import AuthUser from "../Auth"

interface Cliente {
    Cpf?: string
    ValorReajustado?: boolean
    QtdParcelas?: number
    DataInicioVencimento?: string
    DataFimVencimento?: string
    PesquisarPorNaoTitulares?: boolean
}


export default async function BuscarParcelasECobranca({ Cpf, ValorReajustado, QtdParcelas, DataInicioVencimento, PesquisarPorNaoTitulares }: Cliente) {
    try {
        let parcelas
        const API_KEY = process.env.API_KEY || '';
        const Authorization = await AuthUser()
        const url = `${process.env.API_IP || process.env.API_PATH}/Recebiveis/ParcelasECobrancasDoCliente`
        const dataFimVencimento = new Date().toISOString()

        parcelas = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-INTEGRATION-Authorization": API_KEY,
                "Authorization": Authorization
            },
            body: JSON.stringify({
                "Cpf": Cpf,
                "ValorReajustado": ValorReajustado,
                "QtdeParcelas": QtdParcelas,
                "DataInicioVencimento": DataInicioVencimento,
                "DataFimVencimento": dataFimVencimento,
                "PesquisaPorNaoTitulares": PesquisarPorNaoTitulares
            })
        }).then((res) => res.json())

        if (!parcelas) {
            console.log("O cliente não foi encontrado")
            return
        }



        return parcelas[0]

    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar buscar o cliente")
        console.log(error)
        return error
    }
}