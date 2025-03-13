import ConsultarVendasPorCpf from "@/controllers/Uau/Vendas/ConsultarVendasPorCpf";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const CpfCnpj = body.CpfCnpj
        const response = await ConsultarVendasPorCpf(CpfCnpj);

        return NextResponse.json({ message: "Tudo certo", response });
    } catch (error) {
        return NextResponse.json({ message: "Algo de errado aqui", error });
    }
}
