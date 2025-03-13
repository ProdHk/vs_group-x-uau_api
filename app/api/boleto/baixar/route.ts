"use server"

import BaixarBoleto from "@/controllers/Uau/Boleto/BaixarBoleto";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const cod_banco = Number(body.cod_banco)
        const seu_numero = Number(body.seu_numero)
        const ocultar_dados_pessoais = body.ocultar_dados_pessoais
        const response = await BaixarBoleto({ cod_banco, seu_numero, ocultar_dados_pessoais })

        return NextResponse.json({ message: "Boleto encontrados com sucesso", boleto: response })
    } catch (error) {

        return NextResponse.json({ message: "Os boleto não foram encontrados com sucesso", error })
    }
}