export interface IngresosResumenUsuariosResponse {
    responseCode: number;
    responseText: string;
    data: IngresosResumenUsuariosModel[];
}

export class IngresosResumenUsuariosModel {
    usuario: string;
    saldoMesAnterior: any;
    saldo: any;
    comision: any;
    totalCobrado: any;
    saldoDelMes: any;
    cargos: any;
    comisionMov: any;
    comisionTotal: any;
    saldoFinal: any;
}