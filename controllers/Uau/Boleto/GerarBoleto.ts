"use server"


import AuthUser from "../Auth";

interface Boleto {
    cod_banco: number
    seu_numero: number
    ocultar_dados_pessoais: boolean

}

export default async function GerarBoleto({ cod_banco, seu_numero, ocultar_dados_pessoais }: Boleto) {
    try {

        let boleto

        const API_KEY = process.env.API_KEY || '';
        const Authorization = await AuthUser()
        const url = `${process.env.API_IP || process.env.API_PATH}/Proposta/GerarBoleto`

        boleto = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-INTEGRATION-Authorization": API_KEY,
                "Authorization": Authorization
            },
            body: JSON.stringify({
                "cod_banco": cod_banco,
                "seu_numero": seu_numero,
                "ocultar_dados_pessoais": ocultar_dados_pessoais
            })
        }).then((res) => res.json())

        if (!boleto) {
            console.log("O boleto não foi encontrado")
            return
        }


        console.log("Boleto encontrado com sucesso!")


        return boleto

    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar buscar o cliente")
        console.log(error)
        return error
    }
}
