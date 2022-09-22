export enum API_URLS {
    
    // CATALOGOS
    GET_CIUDADES_CAT = 'api/Ciudades/mtdConsultarCiudades',
    GET_OPCIONES_MOV = 'api/CatOpciones/mtdConsultarOpciones',

    // CUENTAS - USUARIOS
    POST_LOGIN = 'api/Cuentas/Login',
    POST_SUPER_ADM = 'api/Cuentas/CrearUsuarioSuperAdmin',
    POST_USUARIO = 'api/Cuentas/Crear',
    POST_USUARIO_MOVIL = 'api/Cuentas/CrearUsuarioMovil',
    POST_RESTABLECER_PASSWORD = 'api/Cuentas/ForgotPassword',
    POST_RESETEAR_PASSWORD = 'api/Cuentas/ResetPassword',
    PUT_USUARIO = 'api/Cuentas/mtdEditarUsuario?id=',
    PUT_REACTIVAR_AGENTE = 'api/Cuentas/mtdReactivarAgente/',
    PUT_CAMBIAR_PASSWORD = 'api/Cuentas/CambiarPassword?id=',
    PUT_CAMBIAR_PASSWORD_X_CORREO = 'api/Cuentas/CambiarPasswordXCorreo?email=',
    PUT_REACTIVAR_USUARIO = 'api/Cuentas/mtdReactivarUsuario?id=',
    PUT_RECARGAR_SALDO = 'api/Cuentas/mtdRecargarSaldo',
    GET_CONFIRMAR_EMAIL = 'api/Cuentas/ConfirmarEmail/',
    GET_RESETEAR_PASSWORD = 'api/Cuentas/ResetPassword/',
    GET_SALDO_X_USUARIO = 'api/Cuentas/mtdConsultarSaldoXIdUsuario/',
    GET_USUARIOS_WEB_TRUE = 'api/Cuentas/mtdConsultarUsuariosWeb?status=true',
    GET_USUARIOS_WEB_FALSE = 'api/Cuentas/mtdConsultarUsuariosWeb?status=false',
    GET_USUARIOS = 'api/Cuentas/mtdConsultarUsuarios',
    GET_USUARIO_ID = 'api/Cuentas/mtdConsultarUsuariosXId?id=',
    GET_TIPOS_USUARIOS = 'api/TiposUsuarios/mtdObtenerTiposUsuarios',
    GET_TIPOS_ROLES = 'api/Roles/mtdObtenerRoles',
    DELETE_AGENTE = 'api/Cuentas/mtdBajaAgente?email=',
    DELETE_USUARIO = 'api/Cuentas/mtdBajaUsuario?id=',
    
    // CIUDADES 
    GET_CIUDADES = 'api/Ciudades/mtdConsultarCiudades',
    GET_CIUDADES_ID = 'api/Ciudades/mtdConsultarCiudadesXId/',
    POST_CIUDADES = 'api/Ciudades/mtdIngresarCiudad',
    PUT_CIUDADES = 'api/Ciudades/mtdActualizaCiudad/',
    PUT_CIUDAD_UP = 'api/Ciudades/mtdReactivarCiudad/',
    DELETE_CIUDAD = 'api/Ciudades/mtdBajaCiudad/',

    // CONCESIONES 
    GET_CONCESIONES = 'api/Concesiones/mtdConsultarConcesiones',
    GET_CONCESION_ID = 'api/Concesiones/mtdConsultarConcesionesXId?id=',
    GET_CONCESION_STATUS = 'api/Concesiones/mtdConsultarStatusConcesion/',
    GET_CONCESION_TODO_ID = 'api/Concesiones/mtdConsultarTodoConcesion?intIdConcesion=',
    GET_CONCESION_POLIGONO_ID = 'api/Concesiones/mtdConsultarPoligonoXIdCiudad/',
    GET_CONCESIONES_OPCIONES = 'api/ConcesionesOpc/mtdConsultarComisionesXId/',
    POST_CONCESIONES = 'api/Concesiones/mtdIngresarConcesiones',
    PUT_CONCESIONES = 'api/Concesiones/mtdActualizaConcesion?id=',
    PUT_CONCESION_LICENCIAS = 'api/Concesiones/mtdAgregarLicencias?intidConcesion=',
    PUT_CONCESION_UP = 'api/Concesiones/mtdReactivarConcesiones/',
    DELETE_CONCESION = 'api/Concesiones/mtdInabilitarConcesion?id=',

    // MULTAS
    GET_MULTAS = 'api/DetalleMulta/mtdConsultarDetMultaXId',

    // DASHBOARD
    GET_MOVIMIENTOS_ADMIN = 'api/Movimientos/mtdObtenerDatosDashboardAdmin',
    GET_MOVIMIENTOS_COMPA_ADMIN = 'api/Movimientos/mtdObtenerCompIngresosAdmin',
    GET_MOVIMIENTOS_COMPA_TRANS_ADMIN = 'api/Movimientos/mtdObtenerCompTransacionesAdmin',
    GET_MOVIMIENTOS_RESUMEN_ADMIN = 'api/Movimientos/mtdObtenerResumenIngresosMensualAdmin',

    // MOVIMIENTOS INGRESOS MENSUALES
    GET_INGRESO_MENSUAL_RESUMEN = 'api/Movimientos/mtdObtenerIngresosMensuales?mes=',
    GET_INGRESO_MENSUAL_CONCESION = 'api/Movimientos/mtdObtenerIngresosMensualesXConcesion?mes=',
    GET_INGRESO_MENSUAL_CONCESION_MES = 'api/Movimientos/mtdObtenerMovimientosXConcesionXMes?intIdConcesion=',

    // INFORMES 
    GET_INGRESOS_MENSUALES_CONSECION_INFORMES = 'api/Movimientos/mtdObtenerIngresosMensualesXConcesionInforme',
    GET_INGRESOS_CONCESION_INFORME_MES = 'api/Movimientos/mtdObtenerIngresosMensualesXConcesionInformeMes',
    GET_INGRESOS_CONCESION_INFORME_RANGO = 'api/Movimientos/mtdObtenerIngresosMensualesXConcesionInformeRango'
}