"use server"


import AuthUser from "../Auth";

interface Boleto {
    codPessoa: number;
    naoMostraBoletoVencido: boolean;
}

export default async function BuscarBoletosClienteEspecifico({ codPessoa, naoMostraBoletoVencido }: Boleto) {
    try {
        let boletos
        const API_KEY = process.env.API_KEY || '';
        const Authorization = await AuthUser()
        const url = `${process.env.API_IP || process.env.API_PATH}/BoletoServices/ConsultarBoletosDoCliente`

        boletos = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-INTEGRATION-Authorization": API_KEY,
                "Authorization": Authorization
            },
            body: JSON.stringify({
                "codPessoa": codPessoa,
                "naoMostraBoletoVencido": naoMostraBoletoVencido,
                "usuario": "icd",
                "tipo_usuario": 0
            })
        }).then((res) => res.json())

        if (!boletos) {
            console.log("O cliente não foi encontrado")
            return
        }


        console.log("Cliente encontrado com sucesso!")


        return boletos

    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar buscar o cliente")
        console.log(error)
        return error
    }
}
