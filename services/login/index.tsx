"use server";

import BuscarClientePorCPF from "@/controllers/Uau/Cliente/BuscarClientePorCPF";

interface LoginTypes {
    cpf: string;
    email: string;
}

export default async function LoginCliente({ cpf, email }: LoginTypes) {
    try {
        const cliente = await BuscarClientePorCPF({ cpf_cnpj: cpf });

        if (!cliente) {
            return { status: false, message: "O EMAIL ou SENHA informados não são válidos" };
        }

        // Separar os e-mails por ";", remover espaços extras e transformar em um array
        const emailsLista = cliente.Email_pes?.split(";").map((email: string) => email.trim()) || [];

        // Verificar se o email digitado está na lista
        const emailValido = emailsLista.some((emailExistente: string) => emailExistente.toLowerCase() === email.toLowerCase());

        if (!emailValido) {
            return { status: false, message: "O EMAIL ou SENHA informados não são válidos" };
        }

        // Criar o objeto do usuário autenticado
        const user = {
            nome: cliente?.nome_pes,
            cpf: cpf,
            email: email,
            id: cliente?.cod_pes,
        };

        return { status: true, message: "Autenticado com sucesso!", user };

    } catch (error) {
        console.log(error);
        return { status: false, message: "Algo de errado aconteceu por aqui" };
    }
}
