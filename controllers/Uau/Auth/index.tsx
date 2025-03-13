"use server"

export default async function AuthUser() {

    try {
        const url = `${process.env.API_IP || process.env.API_PATH}/Autenticador/AutenticarUsuario`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                ...(process.env.API_KEY && { "X-INTEGRATION-Authorization": process.env.API_KEY }),
            },
            body: JSON.stringify({
                "login": process.env.API_USER,
                "Senha": process.env.API_SENHA,
                "UsuarioUAUSite": process.env.API_USER,
            })
        }).then((res) => res.json())

        console.log("Token de auth gerado com sucesso!!!")

        return response
    } catch (error) {
        console.log("Não foi possivel gerar o Token de auth!!!")
        console.log(error)

    }
}