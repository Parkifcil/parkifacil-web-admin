export interface RendicionCtasResponse {
    responseCode: number;
    responseText: string;
    data:         RendicionCtasModel[];
}

export class RendicionCtasModel{
    no: number;
    intIdMovmiento: number;
    strTipo: string;
    email: string;
    strSo: string;
    dtmFecha: string;
    monto: number;
    strPlaca: string;
}