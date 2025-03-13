import AuthUser from "@/controllers/Uau/Auth";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const auth = await AuthUser();
        return NextResponse.json({ message: "Tudo certo", token: auth });
    } catch (error) {
        return NextResponse.json({ message: "Algo de errado aqui", error });
    }
}
