export class IngresosModel {
  
    id: string;
    bit_status: boolean;
    boolean_auto_recarga: boolean;
    boolean_multa: boolean;
    dt_mora_inicio: Date;
    dtm_fecha_insercion_descuento: Date;
    dtm_fecha_descuento: Date;
    dtm_hora_fin: Date;
    dtm_tiempo: Date;
    flt_moneda_saldo_previo_descuento: number;
    flt_monto: number;
    flt_saldo_previo_descuento: number;
    flt_valor_descuento: number;
    flt_valor_devuelto: number;
    flt_valor_final_descuento: number;
    str_cambio_descuento: string;
    str_codigo_autorizacion: string;
    str_codigo_transaccion: string;
    str_comentarios: string;
    str_hash_tarjeta: string;
    str_instalacion: string;
    str_instalacion_abrv: string;
    str_moneda_valor_descuento: string;
    str_referencia_operacion: string;
    str_so: string;
    str_tipo: string;
    str_versionapp: string;
    int_id_lugar_id: number;
    int_id_saldo_id: number;
    int_id_usuario_id: number;
    int_id_vehiculo_id: number;
    intidconcesion_id : number;
  
  }