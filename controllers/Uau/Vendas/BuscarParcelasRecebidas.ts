

"use server"

import AuthUser from "../Auth";
interface Venda {
    obra: string,
    venda: number
}

export default async function BuscarParcelasRecebidas({ obra, venda }: Venda) {
    try {

        let parcelasRecebidas
        const API_KEY = process.env.API_KEY || '';
        const Authorization = await AuthUser()
        const url = `${process.env.API_IP || process.env.API_PATH}/Venda/BuscarParcelasRecebidas`

        parcelasRecebidas = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-INTEGRATION-Authorization": API_KEY,
                "Authorization": Authorization
            },
            body: JSON.stringify({
                "empresa": 1,
                "obra": obra,
                "num_ven": venda
            })
        }).then((res) => res.json())

        if (!parcelasRecebidas) {
            console.log("O cliente não possui parcelas recebidas")
            return
        }


        console.log("As parcelas foram encontradas com sucesso!")
        return parcelasRecebidas[0].Recebidas.slice(1)

    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar buscar as parcelas recebidas")
        console.log(error)
        return error
    }
}