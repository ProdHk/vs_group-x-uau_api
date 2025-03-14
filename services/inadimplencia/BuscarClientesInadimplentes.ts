
/* 
import BuscarBoletosClienteEspecifico from "@/controllers/Uau/Boleto/BuscarBoletosClienteEspecifico"
import BuscarClientePorId from "@/controllers/Uau/Cliente/BuscarClientePorId"
import BuscarClientesComVenda from "@/controllers/Uau/Cliente/BuscarClientesComVenda"
import ConsultarVendasPorCpf from "@/controllers/Uau/Vendas/ConsultarVendasPorCpf"
 */
export default async function BuscarClientesInadimplentes() {

    try {


/*         let clientesComVendasAtivas: any = []
 */        const vendasInadimplentes = ''



        // Busca os clientes que possuem vendas
        /*         const clientesComVendas = await BuscarClientesComVenda().then((res) => res)
         */
        const clientesComVendas = [
            {
                "Cod_pes": 21655,
                "Nome_pes": "JULIO GOMES DE SOUSA",
                "NomeFant_Pes": ""
            },
            {
                "Cod_pes": 21657,
                "Nome_pes": "SHIRLEI ALVES COTA",
                "NomeFant_Pes": "SHIRLEI ALVES COTA"
            },
            {
                "Cod_pes": 21658,
                "Nome_pes": "TIARA DE JESUS PEREIRA",
                "NomeFant_Pes": "null"
            },
            {
                "Cod_pes": 22283,
                "Nome_pes": "KLEIDE XAVIER SANTOS",
                "NomeFant_Pes": ""
            },
            {
                "Cod_pes": 22284,
                "Nome_pes": "MARIA DA JUDA XAVIER SANTOS",
                "NomeFant_Pes": ""
            },
            {
                "Cod_pes": 22285,
                "Nome_pes": "HAYANDRA SANTANA SILVEIRA",
                "NomeFant_Pes": "HAYANDRA SANTANA SILVEIRA"
            },
            {
                "Cod_pes": 22286,
                "Nome_pes": "HTD GESTAO DE PARCERIAS LTDA.",
                "NomeFant_Pes": "HTD GESTAO DE PARCERIAS LTDA."
            },
            {
                "Cod_pes": 22288,
                "Nome_pes": "EDNA DE ALMEIDA RICARDO",
                "NomeFant_Pes": ""
            },
            {
                "Cod_pes": 22289,
                "Nome_pes": "ELIENE DE ALMEIDA",
                "NomeFant_Pes": ""
            },
            {
                "Cod_pes": 22291,
                "Nome_pes": "RODRIGO CÉSAR CORDEIRO",
                "NomeFant_Pes": "RODRIGO CÉSAR CORDEIRO"
            },
            {
                "Cod_pes": 22292,
                "Nome_pes": "LUIZ FERNANDO ALVES DAMASIO",
                "NomeFant_Pes": "LUIZ FERNANDO ALVES DAMASIO"
            },
            {
                "Cod_pes": 22293,
                "Nome_pes": "MAYCON GILBERTO FRANCELINO SILVA",
                "NomeFant_Pes": ""
            },
            {
                "Cod_pes": 22294,
                "Nome_pes": "JESSICA ALLEN ALVES SILVA",
                "NomeFant_Pes": ""
            },
            {
                "Cod_pes": 15082,
                "Nome_pes": "CLEUDIMAR MARIA GONCALVES",
                "NomeFant_Pes": "CLEUDIMAR MARIA GONCALVES"
            },
            {
                "Cod_pes": 15083,
                "Nome_pes": "MAIS ENGENHARIA LTDA ME",
                "NomeFant_Pes": "MAIS ENGENHARIA LTDA ME"
            },
            {
                "Cod_pes": 15084,
                "Nome_pes": "JANETE DOS SANTOS",
                "NomeFant_Pes": "JANETE DOS SANTOS"
            },
            {
                "Cod_pes": 11751,
                "Nome_pes": "LUCIANO DE ALMEIDA DA SILVA SOUZA",
                "NomeFant_Pes": "LUCIANO DE ALMEIDA DA SILVA SOUZA"
            },
            {
                "Cod_pes": 11752,
                "Nome_pes": "FERNANDA DE OLIVEIRA SOUZA SILVA",
                "NomeFant_Pes": "FERNANDA DE OLIVEIRA SOUZA SILVA"
            },
        ]


        if (!clientesComVendas) {
            console.log("Não foi encontrado nenhuma venda de nenhum cliente")
            return
        }


        // RESPONSAVEL POR AGRUPAR INFO DO CLIENTE
        // BUSCANDO INFORMAÇÕES DA VENDA
        /*         for (const cliente of clientesComVendas) {
                            const infoCliente: any = await BuscarClientePorId({ codigo_pessoa: cliente.Cod_pes })      
                    await ConsultarVendasPorCpf(infoCliente.cpf_pes).then((res) => res.filter((venda: { Status_Ven: number }) => Number(venda.Status_Ven) === 0).map(async (venda: any) => {
        
                        const parcelas = await BuscarBoletosClienteEspecifico({ codPessoa: infoCliente.cod_pes, naoMostraBoletoVencido: false })
        
                        let parcelasVencidas: any = []
        
                        parcelas?.map((parcela) => {
        
                            if (new Date(parcela.dataVencimento) < new Date()) {
                                parcelasVencidas.push(parcela);
                            }
        
                        })
        
        
                        vendasInadimplentes.push({
                            nome: infoCliente.nome_pes,
                            id: infoCliente.cod_pes,
                            cpf: String(infoCliente.cpf_pes),
                            venda: {
                                empresa: venda.Empresa_ven,
                                obra: venda.Obra_Ven,
                                numVenda: venda.Num_Ven,
                                statusVenda: venda.Status_Ven,
                            },
                            parcelasVencidas
                        })
        
                    }))        
                }
        
         */

        return vendasInadimplentes
    } catch (error) {
        return error

    }
}
