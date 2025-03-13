"use server"

import AuthUser from "../Auth";


export default async function BuscarClientesComVenda() {
    try {
        let cliente
        const API_KEY = process.env.API_KEY || '';
        const Authorization = await AuthUser()
        const url = `${process.env.API_IP || process.env.API_PATH}/Pessoas/ConsultarPessoasComVenda`

        cliente = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-INTEGRATION-Authorization": API_KEY,
                "Authorization": Authorization
            },
            body: JSON.stringify({

            })
        }).then((res) => res.json())

        if (!cliente) {
            console.log("Os clientes não foram encontrados")
            return
        }


        console.log("Clientes encontrados com sucesso!")
        cliente = cliente[0].Pessoas.slice(1)
        return cliente

    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar buscar o cliente")
        console.log(error)
        return error
    }
}