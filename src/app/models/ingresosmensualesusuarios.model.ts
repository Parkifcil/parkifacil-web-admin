
export interface IngresosMensualesUsuariosResponse {
    responseCode: number;
    responseText: string;
    data: IngresosMensualesUsuariosModel[];
}

export class IngresosMensualesUsuariosModel {
    no: number;
    fechaInicio: any;
    fechaFin: any;
    concesion: string;
    saldoAnterior: any;
    tiempo: any;
    monto: any;
    comision: any;
    cargo: any;
    tiempoDevuelto: any;
    montoDevuelto: any;
    comisionDevuelta: any;
    montoTotalDevolucion: any;
    tiempoTotal: any;
    montoTotal: any;
}
