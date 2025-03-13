"use server"

import BuscarBoletosClienteEspecifico from "@/controllers/Uau/Boleto/BuscarBoletosClienteEspecifico";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const codPessoa = Number(body.codPessoa)
        const response = await BuscarBoletosClienteEspecifico({ codPessoa, naoMostraBoletoVencido: false })

        return NextResponse.json({ message: "Boletos encontrados com sucesso", boletos: response })
    } catch (error) {

        return NextResponse.json({ message: "Os boletos não foram encontrados com sucesso", error })
    }
}