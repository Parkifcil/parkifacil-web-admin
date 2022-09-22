export interface ConcesionResponse {
    responseCode: number;
    responseText: string;
    data: ConcesionModel[];
}

export class ConcesionModel {

    id: number;
    strClave: string ;
    strRazonSocial: string;
    strDomicilio: string;
    strNombreCliente: string;
    strTelefono: string;
    strEmail: string;
    strRfc: string;
    strNotas: string;
    strPoligono: string;
    intLicencias: number;
   // latitud: "19.20022669999967",
   // longitud: "-96.13952279090883",
    costoLicencia: number;
    dtmFechaActivacionLicencia: Date;
    strTipo: string;
    intidciudad: number;
    dtmFechaIngreso: Date;
    bitStatus: boolean;

        
    }