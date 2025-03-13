import BuscarParcelasECobranca from "@/controllers/Uau/Recebiveis/BuscarParcelasECobranca";
import BuscarClientesInadimplentes from "@/services/inadimplencia/BuscarClientesInadimplentes";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    try {
        const body = await req.json()
        const Cpf = body.Cpf
        const ValorReajustado = body.ValorReajustado
        const QtdParcelas = body.QtdParcelas
        const DataInicioVencimento = body.DataInicioVencimento
        const DataFimVencimento = body.DataFimVencimento
        const PesquisarPorNaoTitulares = body.PesquisarPorNaoTitulares
        const response = await BuscarParcelasECobranca({ Cpf, ValorReajustado, QtdParcelas, DataInicioVencimento, DataFimVencimento, PesquisarPorNaoTitulares })

        return NextResponse.json({ msg: "All rigth", response })
    } catch (error) {

        return NextResponse.json({ msg: "All bad", error })
    }
}