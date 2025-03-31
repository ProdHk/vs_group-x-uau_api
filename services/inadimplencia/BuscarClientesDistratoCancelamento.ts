"use server";

import BuscarClientePorId from "@/controllers/Uau/Cliente/BuscarClientePorId";
import BuscarClientesComVenda from "@/controllers/Uau/Cliente/BuscarClientesComVenda";
import BuscarParcelasECobranca from "@/controllers/Uau/Recebiveis/BuscarParcelasECobranca";
import ClienteTypes from "@/types/ClienteTypes";

export default async function BuscarClientesDistratoCancelamento() {
    try {
        let clientesComVendaAtiva = await BuscarClientesComVenda();
        clientesComVendaAtiva = clientesComVendaAtiva.slice(0, 2560); // Processar em lotes menores

        if (!clientesComVendaAtiva.length) {
            console.log("Nenhuma venda ativa encontrada.");
            return [];
        }

        console.log(`${clientesComVendaAtiva.length} Clientes encontrados!`);

        // Buscar dados dos clientes em paralelo
        const clientesDetalhados = await Promise.all(
            clientesComVendaAtiva.map((cliente: ClienteTypes) =>
                BuscarClientePorId({ codigo_pessoa: cliente.Cod_pes }).catch(() => null)
            )
        );

        // Filtrar clientes válidos e obter CPFs
        const clientesValidos = clientesDetalhados
            .filter(cliente => cliente)
            .map(cliente => cliente!.cpf_pes); // O "!" indica que o valor não será null

        if (!clientesValidos.length) {
            console.log("Nenhum cliente válido encontrado.");
            return [];
        }

        // Buscar parcelas em paralelo
        const vendasInadimplentes = await Promise.all(
            clientesValidos.map(cpf =>
                BuscarParcelasECobranca({
                    Cpf: cpf,
                    ValorReajustado: true,
                    QtdParcelas: 300,
                    DataInicioVencimento: "2020-01-01T00:00:00.000Z"
                }).catch(() => null)
            )
        );

        // Filtrar vendas com parcelas
        return vendasInadimplentes.filter(venda => venda?.ParcelasVenda?.length >= 3);

    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        return [];
    }
}
