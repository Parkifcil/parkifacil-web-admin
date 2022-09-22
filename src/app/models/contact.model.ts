export class ContactModelCreator {
    StrClave: string;
    StrRazonSocial: string;
    StrDomicilio: string;
    IntIdCiudadCat: number;
    StrNombreCliente: string;
    StrTelefono: string;
    StrEmail: string;
    StrRfc: string;
    StrNotas: string;
    IntLicencias: number;
    StrCiudad: string;
    DblCostoLicencia: number;
    StrLatitud: string;
    StrLongitud: string;
    DtmFechaActivacionLicencia: any;
    StrTipo: string;
    cuentas: any[];
    opciones: ContactModelOptions[];
    tarifas: any[];
}

export class ContactModel {
    constructor(parameters) {
        
    }
}

export interface ContactModelOptions {
    id: number;
    strOpcion: string;
    bitStatus: boolean;
}


export interface ContactModelReador {
    id: number;
    strClave: string;
    strRazonSocial?: string;
    strDomicilio: string;
    intIdCiudadCat: number;
    intidciudad: number;
    strCiudad: string;
    strNombreCliente: string;
    strTelefono: string;
    strEmail: string;
    strRfc?: string;
    strNotas?: string;
    strPoligono: string;
    intLicencias: number;
    dblCostoLicencia: any;
    strLatitud: string;
    strLongitud: string;
    dtmFechaIngreso: any;
    dtmFechaActivacionLicencia: any;
    strTipo: string;
    cuentas?: any[];
    opciones?: any[];
    tarifas?: any[];
    bitStatus?: boolean;
}


export interface ContactResponse {
    responseCode: number;
    responseText: string;
    data: ContactModelReador;
}

export interface ContactsResponse {
    responseCode: number;
    responseText: string;
    data: ContactModelReador[];
}