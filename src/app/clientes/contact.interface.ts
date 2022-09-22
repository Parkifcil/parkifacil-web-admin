/*export interface Contact {
    id: number;
    imageSrc: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    notes?: string;
    birthday?: string;
    selected: boolean;
    starred: boolean;

  }*/
export interface Contact {
  id: number;
  bit_status?: boolean;
  dbl_costo_licencia?: any;
  dtm_fecha_activacion_licencia?: any;
  dtm_fecha_ingreso: any;
  int_licencias?: number;
  intidciudad?: number;
  str_clave?: string;
  str_domicilio?: string;
  str_email?: string;
  str_latitud?: string;
  str_longitud?: string;
  str_nombre_cliente?: string;
  str_notas?: string;
  str_poligono?: string;
  str_razon_social?: string;
  str_rfc?: string;
  str_telefono?: string;
  str_tipo?: string;
  selected?: boolean;
  starred?: boolean;
  imageSrc: any;
}