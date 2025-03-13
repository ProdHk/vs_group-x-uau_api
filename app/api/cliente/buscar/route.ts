import BuscarClientePorCPF from "@/controllers/Uau/Cliente/BuscarClientePorCPF";
import BuscarClientePorId from "@/controllers/Uau/Cliente/BuscarClientePorId";
import { NextRequest, NextResponse } from "next/server";




// BUSCA CLIENTE POR ID
export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const response = await BuscarClientePorId({ codigo_pessoa: body.codigo_pessoa })
        return NextResponse.json(response);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Algo de errado aqui", error: JSON.stringify(error) });
    }
}

// BUSCA CLIENTE POR CPF
export async function PUT(req: NextRequest) {
    try {
        const body = await req.json()

        const response = await BuscarClientePorCPF({ cpf_cnpj: body.cpf_cnpj })
        return NextResponse.json(response);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Algo de errado aqui", error: JSON.stringify(error) });
    }
}


/* export async function POST(req: NextRequest) {
    try {
        const auth = await AuthUser();
        return NextResponse.json({ message: "Tudo certo", token: auth });
    } catch (error) {
        return NextResponse.json({ message: "Algo de errado aqui", error });
    }
}
 */