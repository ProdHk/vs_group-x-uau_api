"use server"

import AuthUser from "../Auth"

interface Cliente {
    codigo_pessoa?: number | string
    cpf_cnpj?: number | string
}

interface ClienteDetalhes {
    cod_pes: number,
    nome_pes: string,
    tipo_pes: number,
    cpf_pes: string,
    dtcad_pes: string,
    dtnasc_pes: string,
    IntExt_pes: number,
    UsrCad_pes: string,
    UsrAlt_pes: string,
    Status_pes: number,
    Tratamento_pes: string,
    SiglaObr_pes: string,
    Email_pes: string,
    EndWWW_pes: string,
    Matricula_Pes: string | null,
    AtInat_pes: number,
    DataAlt_pes: string | null,
    NomeFant_Pes: string,
    Anexos_pes: number,
    InscrMunic_pes: string,
    inscrest_pes: string,
    SiglaEmp_pes: number,
    Login_pes: string,
    Senha_pes: string,
    CNAE_pes: string | null,
    DataCadPortal_pes: string,
    CadastradoPrefeituraGyn_pes: boolean,
    HabilitadoRiscoSacado_pes: boolean,
    CEI_Pes: string | null
}

export default async function BuscarClientePorCPF({ cpf_cnpj }: Cliente) {
    try {
        let cliente
        const API_KEY = process.env.API_KEY || '';
        const Authorization = await AuthUser()
        const url = `${process.env.API_IP || process.env.API_PATH}/Pessoas/ConsultarPessoasPorCPFCNPJ`

        cliente = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-INTEGRATION-Authorization": API_KEY,
                "Authorization": Authorization
            },
            body: JSON.stringify({
                "cpf_cnpj": cpf_cnpj,
                "status": 0
            })
        }).then((res) => res.json())

        if (!cliente) {
            console.log("O cliente não foi encontrado")
            return
        }


        console.log("Cliente encontrado com sucesso!")
        cliente = cliente[0].Pessoas[1]

        return cliente

    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar buscar o cliente")
        console.log(error)
        return error
    }
}