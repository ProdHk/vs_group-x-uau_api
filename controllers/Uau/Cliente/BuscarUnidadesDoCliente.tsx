"use server"

import AuthUser from "../Auth";

interface Cliente {
    CodigoPessoa: number
    CpfCnpj: string
}

export default async function BuscarUnidadesDoCliente({ CodigoPessoa, CpfCnpj }: Cliente) {

    try {
        let unidades

        const API_KEY = process.env.API_KEY || '';
        const Authorization = await AuthUser()
        const url = `${process.env.API_IP || process.env.API_PATH}/Pessoas/ConsultarUnidades`

        unidades = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-INTEGRATION-Authorization": API_KEY,
                "Authorization": Authorization
            },
            body: JSON.stringify({
                "CodigoPessoa": Number(CodigoPessoa),
                "CpfCnpj": String(CpfCnpj)
            })
        }).then((res) => res.json())

        if (!unidades) {
            console.log("O cliente não possui nenhuma venda ativa")
            return
        }

        console.log("Informações encontrados com sucesso!")

        return unidades

    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar buscar o cliente")
        console.log(error)
        return error
    }
}