
import BuscarParcelasAReceber from "@/controllers/Uau/Vendas/BuscarParcelasAReceber";
import BuscarParcelasRecebidas from "@/controllers/Uau/Vendas/BuscarParcelasRecebidas";
import ConsultarVendasPorCpf from "@/controllers/Uau/Vendas/ConsultarVendasPorCpf"
import { getLocalStorage } from "@/services/localStorage.ts/GetLocalStorage"

interface Venda {
    Empresa_ven: number;
    Obra_Ven: string;
    Num_Ven: number;
    Status_Ven: number;
    Data_Ven: string;
    Produto_Itv: number;
    CodPerson_Itv: number;
    Descricao_psc: string;
    Empresa_unid: number;
    Prod_unid: number;
    NumPer_unid: number;
    Obra_unid: string;
    Qtde_unid: number;
    Vendido_unid: number;
    Codigo_Unid: string | null;
    PorcentPr_Unid: number;
    C1_unid: string;
    C2_unid: string;
    anexos_unid: number;
    Identificador_unid: string;
    UsrCad_unid: string;
    DataCad_unid: string;
    ValPreco_unid: string | null;
    FracaoIdeal_unid: number;
    NumObe_unid: string | null;
    ObjEspelhoTop_unid: string | null;
    ObjEspelhoLeft_unid: string | null;
    PorcentComissao_unid: string | null;
    CodTipProd_unid: string | null;
    NumCategStatus_unid: string | null;
    FracaoIdealDecimal_unid: number;
    DataEntregaChaves_unid: string | null;
    DataReconhecimentoReceitaMapa_unid: string | null;
    UnidadeVendidaDacao_unid: string | null;
}
export default async function ResumoDoContrato() {
    try {

        const cpf = getLocalStorage('cpf')

        const vendasCliente = await ConsultarVendasPorCpf(String(cpf)).then((res) => res.filter((item: Venda) => item.Status_Ven === 0))

        const obra = vendasCliente[0].Obra_Ven
        const venda = vendasCliente[0].Num_Ven

        const parcelasRecebidas = await BuscarParcelasRecebidas({ obra, venda }).then((res) => res)
        const parcelasAReceber = await BuscarParcelasAReceber({ obra, venda }).then((res) => res)

        let valorRecebido: number = 0
        let valorReceber: number = 0
        let valorJuros: number = 0
        let valorMulta: number = 0

        for (const parcela of parcelasRecebidas) {
            valorRecebido += Number(parcela.ValorConf_Rec) + Number(parcela.VlCorrecao_Rec) + Number(parcela.VlCorrecaoConf_Rec) + Number(parcela.VlMulta_Rec) + Number(parcela.VlMultaConf_Rec) + Number(parcela.VlJurosParc_Rec) + Number(parcela.VlJurosParcConf_Rec) + Number(parcela.VlJuros_Rec) + Number(parcela.VlJurosConf_Rec) + Number(parcela.VlDesconto_Rec) + Number(parcela.VlDescontoConf_Rec) + Number(parcela.VlAcresConf_Rec) + Number(parcela.VlCorrecaoAtrConf_Rec) + Number(parcela.VlTaxaBolConf_Rec)
            valorJuros += Number(parcela.VlJurosParc_Rec) + Number(parcela.VlJurosParcConf_Rec) + Number(parcela.VlJuros_Rec) + Number(parcela.VlJurosConf_Rec)
            valorMulta += Number(parcela.VlMulta_Rec) + Number(parcela.VlMultaConf_Rec)
        }


        for (const parcela of parcelasAReceber) {
            valorReceber += Number(parcela.ValorConf_Rec) + Number(parcela.VlCorrecao_Rec) + Number(parcela.VlCorrecaoConf_Rec) + Number(parcela.VlMulta_Rec) + Number(parcela.VlMultaConf_Rec) + Number(parcela.VlJurosParc_Rec) + Number(parcela.VlJurosParcConf_Rec) + Number(parcela.VlJuros_Rec) + Number(parcela.VlJurosConf_Rec) + Number(parcela.VlDesconto_Rec) + Number(parcela.VlDescontoConf_Rec) + Number(parcela.VlAcresConf_Rec) + Number(parcela.VlCorrecaoAtrConf_Rec) + Number(parcela.VlTaxaBolConf_Rec)

        }




        return { parcelasRecebidas, parcelasAReceber, valorRecebido, valorJuros, valorMulta }
    } catch (error) {

    }
}