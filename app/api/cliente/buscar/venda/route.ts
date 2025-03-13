"use server"

import BuscarClientesComVenda from "@/controllers/Uau/Cliente/BuscarClientesComVenda";
import BuscarUnidadesDoCliente from "@/controllers/Uau/Cliente/BuscarUnidadesDoCliente";
import { NextRequest, NextResponse } from "next/server";


// RETORNA TODOS OS CLIENTES QUE POSSUEM VENDA
export async function POST() {
    try {

        const response = await BuscarClientesComVenda()

        return NextResponse.json({ message: "Vendas encontradas", clientes: response })
    } catch (error) {
        return NextResponse.json({ message: "Vendas não encontradas", error })

    }
}


/* RETORNA AS UNIDADES DO CLIENTE INFORMADO */
export async function PUT(req: NextRequest) {
    try {

        const request = await req.json()
        const CodigoPessoa = request.CodigoPessoa
        const CpfCnpj = request.CpfCnpj
        const response = await BuscarUnidadesDoCliente({ CodigoPessoa, CpfCnpj })
        console.log(response)

        return NextResponse.json({ message: "Vendas encontradas", unidades: response })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "VendasSS não encontradas", error })

    }
}
