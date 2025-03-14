"use server"

import BuscarClientePorCPF from "@/controllers/Uau/Cliente/BuscarClientePorCPF"
import { setLocalStorage } from "../localStorage.ts/SetLocalStorage"

interface LoginTypes {
    cpf: string,
    email: string
}

export default async function LoginCliente({ cpf, email }: LoginTypes) {
    try {
        const cliente = await BuscarClientePorCPF({ cpf_cnpj: cpf })

        if (!cliente) {
            return { status: false, message: "O EMAIL ou SENHA informados não são validos" }
        }

        if (cliente.Email_pes != email) {
            return { status: false, message: "O EMAIL ou SENHA informados não são validos" }
        }


        const user = {
            nome: cliente?.nome_pes,
            cpf: cpf,
            email: email,
            id: cliente?.cod_pes
        }

        return { status: true, message: "Autenticado com sucesso!", user }

    } catch (error) {

        console.log(error)
        return { status: false, message: "Algo de errado aconteceu por aqui" }
    }
}