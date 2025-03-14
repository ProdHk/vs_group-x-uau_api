

"use server"

import AuthUser from "../Auth";
interface Venda {
    obra: string,
    venda: number
}

export default async function BuscarParcelasAReceber({ obra, venda }: Venda) {
    try {

        let parcelasAReceber
        const API_KEY = process.env.API_KEY || '';
        const Authorization = await AuthUser()
        const url = `${process.env.API_IP || process.env.API_PATH}/Venda/BuscarParcelasAReceber`

        parcelasAReceber = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-INTEGRATION-Authorization": API_KEY,
                "Authorization": Authorization
            },
            body: JSON.stringify({
                "empresa": 1,
                "obra": obra,
                "num_ven": venda,
                "data_calculo": new Date(),
                "valor_presente": true
            })
        }).then((res) => res.json())

        if (!parcelasAReceber) {
            console.log("O cliente não possui parcelas a receber")
            return
        }


        console.log("As parcelas foram encontradas com sucesso!")
        /* return parcelasAReceber[0].Recebidas.slice(1) */
        return parcelasAReceber.slice(1)

    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar buscar as parcelas a receber")
        console.log(error)
        return error
    }
}


