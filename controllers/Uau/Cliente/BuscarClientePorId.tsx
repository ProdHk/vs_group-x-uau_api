"use server"

import AuthUser from "../Auth"

interface Cliente {
    codigo_pessoa?: number | string
}

export default async function BuscarClientePorId({ codigo_pessoa }: Cliente) {
    try {
        let cliente
        const API_KEY = process.env.API_KEY || '';
        const Authorization = await AuthUser()
        const url = `${process.env.API_IP || process.env.API_PATH}/Pessoas/ConsultarPessoaPorChave`

        cliente = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-INTEGRATION-Authorization": API_KEY,
                "Authorization": Authorization
            },
            body: JSON.stringify({
                codigo_pessoa
            })
        }).then((res) => res.json())

        if (!cliente) {
            console.log("O cliente não foi encontrado")
            return
        }


        console.log("Cliente encontrado com sucesso!")
        cliente = cliente[0].MyTable[1]
        return cliente

    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar buscar o cliente")
        console.log(error)
        return error
    }
}