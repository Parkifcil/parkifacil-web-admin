import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { contactsData } from '../../clientes/contacts';
import { FormArray, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Contact } from '../../clientes/contact.interface';

// iconos
import face from '@iconify/icons-ic/twotone-face';
import person from '@iconify/icons-ic/twotone-person';
import icDia from '@iconify/icons-ic/twotone-today';
import icCar from '@iconify/icons-ic/twotone-time-to-leave';
import icModel from '@iconify/icons-ic/twotone-subtitles';
import icColor from '@iconify/icons-ic/twotone-format-color-fill';
import icDomain from '@iconify/icons-ic/twotone-domain';
import icStar from '@iconify/icons-ic/twotone-star';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icEmail from '@iconify/icons-ic/twotone-mail';
import icPerson from '@iconify/icons-ic/twotone-person';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import icClave from '@iconify/icons-ic/twotone-vpn-key';
import icHome from '@iconify/icons-ic/twotone-home';
import icColumnas from '@iconify/icons-ic/twotone-remove-red-eye';
import icLicencias from '@iconify/icons-ic/phone-iphone';
import icNoLicencias from '@iconify/icons-ic/format-list-numbered';
import icCosto from '@iconify/icons-ic/monetization-on';
import icCuenta from '@iconify/icons-ic/person-add';
import icContraseña from '@iconify/icons-ic/lock';
import icTarifas from '@iconify/icons-ic/monetization-on';
import icTiempo from '@iconify/icons-ic/timer';
import icAdd from '@iconify/icons-ic/twotone-add';
import icLocalizacion from '@iconify/icons-ic/location-on';
import icEdit from '@iconify/icons-ic/edit';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import icLock from '@iconify/icons-ic/twotone-lock';
import icCity from '@iconify/icons-ic/location-city';
import icIdentity from '@iconify/icons-ic/perm-identity';

import icSearch from '@iconify/icons-ic/twotone-search';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icPeople from '@iconify/icons-ic/twotone-people';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icPlay_arrow from '@iconify/icons-ic/twotone-play-arrow';


import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MapaComponent } from '../mapa/mapa.component';
import { CoordenasClienteService } from '../../services/coordenas-cliente.service';
import { ClientesService } from '../../services/clientes.service';
import { ValidadoresService } from '../../services/validadores.service';
import { ContactModel, ContactModelOptions, ContactModelReador, ContactResponse } from '../../models/contact.model';
import Swal from 'sweetalert2';
import { PasswordContactsEditComponent } from '../password-contacts-edit/password-contacts-edit.component';
import { RegistroUsuarioService } from '../../services/registro-usuario.service';
import { CiudadesModel, CiudadResponseReador, CiudadReador } from '../../models/ciudades.model';
import { AddLicenciasComponent } from '../add-licencias/add-licencias.component';
import { AddLicenciasService } from '../../services/add-licencias.service';
import { Subject } from 'rxjs';

export let contactIdCounter = 50;

@Component({
  selector: 'vex-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss']
})

export class ContactsEditComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public id: number,
    private dialogRef: MatDialogRef<ContactsEditComponent>,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private coordenasservices: CoordenasClienteService,
    private clienteservice: ClientesService,
    private userservice: RegistroUsuarioService,
    private validadoreservice: ValidadoresService,
    private addLiscSer: AddLicenciasService) {

    this.columnsSelected = 0;
    this.mtdobtnerColumnasOpciones();
    this.mtdobtenerCiudades();
  }

  /**
   * propidad para mostrar la ciudad
   */
  selectedCity: any;
  /**
   * propiedades para mostrar la latitud y longitud desde el componente mapa
   */
  strLatitud: string;
  strLongitud: string;
  /**
   * priedades para hacer un form array del tarifario y las columnas haderibles
   */
  tarifas: FormArray;

  /**
   * difinicion de la la tabla para mostrar los intervalos
   */
  displayedColumns: string[] = ['Concepto', 'Inicio', 'Fin', 'Unidad', 'Tiempo', 'P/U', 'Costo'];
  LicenciasColumns: string[] = ['Cuenta', 'ClaveAgente', 'Acciones',];

  dataSource = null;

  form = this.fb.group({
    StrClave: [null,
      [

        /*Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
      this.validadoreservice.mtdclaveValidate*/
      ]],
    StrRazonSocial: [null,
      [ /*Validators.minLength(2),
        this.validadoreservice.mtdrazonsocialValidate*/
      ]],
    StrDomicilio: [null,
      [ /*Validators.required,
        Validators.minLength(2),
        this.validadoreservice.mtddomicilioValidate*/
      ]],
    IntIdCiudad: [null, /*[Validators.required]*/],
    IntIdCiudadCat: [null, [Validators.required]],
    StrCiudad: null,
    StrNombreCliente: [null,
      [ /*Validators.required,
      Validators.minLength(2),
      this.validadoreservice.mtdnombreclienteValidate*/
      ]],
    StrTelefono: [null,
      [ /*Validators.minLength(10),
      Validators.maxLength(15),
      this.validadoreservice.mtdtelefonoValidate*/
      ]],
    StrEmail: [null,
      [ /*Validators.required,
      this.validadoreservice.mtdemailValidate*/
      ]],
    StrRfc: [null,
      [
        Validators.minLength(12),
        Validators.maxLength(13),
        Validators.pattern('[A-Z,Ñ,&]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z,0-9]?[A-Z,0-9]?[0-9,A-Z]?')
      ]
      /*Validators.maxLength(13),
      Validators.minLength(10),
      this.validadoreservice.mtdrfcValidate*/
      ],
    StrNotas: [null,
      [ /*Validators.minLength(2),
      this.validadoreservice.mtdnotasValidate*/
      ]],
    IntLicencias: [null,
      [ /*Validators.required,
      this.validadoreservice.mtdnumerolicenciasValidate*/
      ]],
    DblCostoLicencia: [null,
      [ /*Validators.required,
      this.validadoreservice.mtdcostolicenciaValidate*/
      ]],
    StrLatitud: [null, /*[this.validadoreservice.mtdlocalizacionValidate]*/],
    StrLongitud: [null, /*[this.validadoreservice.mtdlocalizacionValidate]*/],
    DtmFechaIngreso: [null],
    DtmFechaActivacionLicencia: [null],
    StrTipo: null,
    cuentas: null,
    opciones: this.fb.group({
      IntIdOpcion: [null]
    }),
    tarifas: this.fb.array([this.mtdaddtarifas()])
  });

  // arrglegos utilizados
  selectedOptions = [];
  checkedValues = [];
  arrCtasLicencia = [];
  arrPassLicencia = [];
  arrTfIntervalos: any[] = [];
  arrColumsOpcions: ContactModelOptions[] = [];
  arropcionesTodoxCliente: any[] = [];
  arrtarifasTodoxCliente: any[] = [];
  arrOpciones: any[] = [];
  arrCuentasTodoxCliente: any[] = [];
  arrCuentasNuevasTodoxCliente: any[] = [];
  displayedColumns2: string[] = ['position', 'Cuenta Agente', 'Clave Agente', 'edit', 'actions'];
  //arridCuentas: any[] = [];

  // arreglos para evaluar que el email de las cuentas de acceso
  // y que sean unicos los emails
  arruser: any[] = [];
  arruseremail: any[] = [];

  // arreglo para obtener las ciudades
  arrciudades: CiudadReador[] = [];
  // propiedad para obtener el nombre de la ciudad
  selectedCiudad: any;

  columnsSelected: number;
  item;

  contact: Contact;
  cliente: ContactModelReador;
  mode: 'create' | 'update' = 'create';

  // iconos
  icFace = face;
  icPersona = person;
  icDia = icDia;
  icCar = icCar;
  icColor = icColor;
  icDomain = icDomain;
  icModel = icModel;
  icStar = icStar;
  icStarBorder = icStarBorder;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icBusiness = icBusiness;
  icPerson = icPerson;
  icEmail = icEmail;
  icPhone = icPhone;
  icClave = icClave;
  icHome = icHome;
  icColumnas = icColumnas;
  icLicencias = icLicencias;
  icNoLicencias = icNoLicencias;
  icCosto = icCosto;
  icCuenta = icCuenta;
  icPass = icContraseña;
  icTarifas = icTarifas;
  icTiempo = icTiempo;
  icAdd = icAdd;
  icLocalizacion = icLocalizacion;
  icEdit = icEdit;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icLock = icLock;
  icCity = icCity;
  icIdentity = icIdentity;


  icSearch = icSearch;
  icMoreHoriz = icMoreHoriz;
  icPersonAdd = icPersonAdd;
  icContacts = icContacts;
  icPeople = icPeople;
  icPlay_arrow = icPlay_arrow;
  /**
   * propiedades para mostrar el input tipo password
   */
  inputType = 'password';
  visible = false;

  colSelected: string;
  concesionCompleta: any;
  concesionParcial: any;

  ngOnInit() {

    if (this.id) {
      //console.log(this.id);

      this.arrOpciones = [];

      this.clienteservice.mtdgetClientexId(this.id).subscribe((responsecliente: ContactResponse) => {
        this.cliente = responsecliente.data;
        console.log('Conseción parcial :3', this.cliente);

        this.form.patchValue({
          StrTipo: this.cliente.strTipo,
          StrClave: this.cliente.strClave,
          StrRazonSocial: this.cliente.strRazonSocial,
          StrDomicilio: this.cliente.strDomicilio,
          StrLatitud: this.cliente.strLatitud,
          StrLongitud: this.cliente.strLongitud,
          IntIdCiudadCat: this.cliente.intIdCiudadCat,
          StrNombreCliente: this.cliente.strNombreCliente,
          StrTelefono: this.cliente.strTelefono,
          StrEmail: this.cliente.strEmail,
          StrRfc: this.cliente.strRfc,
          DtmFechaIngreso: this.cliente.dtmFechaIngreso,
          StrNotas: this.cliente.strNotas,
          IntLicencias: this.cliente.intLicencias,
          DblCostoLicencia: this.cliente.dblCostoLicencia,
          DtmFechaActivacionLicencia: this.cliente.dtmFechaActivacionLicencia,
          IntIdCiudad: this.cliente.intIdCiudadCat,
          StrCiudad: this.cliente.strCiudad
        });
        this.selectedCity = this.cliente.strCiudad;
        //console.log(this.selectedCity);
        //console.log(this.cliente);
      });

      this.clienteservice.mtdgetClienteTodoxId(this.id).subscribe(({ data: responsetodoxcli }: ContactResponse) => {
        this.concesionCompleta = responsetodoxcli;
        console.log('Todos los datos :3', responsetodoxcli);
        this.arropcionesTodoxCliente = responsetodoxcli.opciones;
        this.arrtarifasTodoxCliente = responsetodoxcli.tarifas;
        this.arrCuentasTodoxCliente = responsetodoxcli.cuentas.filter(cuenta => cuenta?.bitStatus !== false);
        // console.log('CUENTAS ',this.arrCuentasTodoxCliente);
        //console.log(this.arropcionesTodoxCliente);

        /**
         * ciclo for para obtener las columnas selecionadas por el usuario
         */
        for (let opcion in this.arropcionesTodoxCliente) {
          // console.log(this.arrTodoxCliente[arr][opcion].int_id_opcion);
          this.arrOpciones.push(this.arropcionesTodoxCliente[opcion].intIdOpcion);
        }
        this.form.controls['opciones'].patchValue({
          IntIdOpcion: this.arrOpciones
        });


        this.columnsSelected = this.arrOpciones.length;

        // Búsca las colmunas seleccionadas y las muestra.
        // Itera hasta encontrar la cantidad de opciones seleccionadas.
        let agregados: number = 0;
        this.arrColumsOpcions.forEach(opcion => {
          if (agregados === this.arrOpciones.length) return
          if (this.arrOpciones.includes(opcion.id)) {
            this.checkedValues.push(opcion.strOpcion)
            agregados++;

          }
        })

        /**
         * ciclos for para obtener las cuentas de acceso generdas por el usuario
         */
        /* for ( let cuenta in this.arrCuentasTodoxCliente ) {
           const strClaveAgente = this.arrCuentasTodoxCliente[cuenta].strClaveAgente
           const auxClave = strClaveAgente ? strClaveAgente : ''
           this.cuentas.push(this.mtdaddcuentasData(
                         this.arrCuentasTodoxCliente[cuenta].email, 
                         this.arrCuentasTodoxCliente[cuenta].passwordHash,
                         auxClave
                         ));
           // this.mtdclickEliminarCuenta(this.arrCuentasTodoxCliente[arrC][cuenta].id);
         }*/

        /**
         *  ciclos for para obtener las tarifas guardadas por el usuario
         */
        for (let tarifa in this.arrtarifasTodoxCliente) {
          //console.log(this.arrtarifasTodoxCliente[arr][tarifa].flt_tarifa_min, 'tarifa minima');
          const tarifaActual = this.arrtarifasTodoxCliente[tarifa];
          this.form.controls['tarifas'].patchValue([{
            FltTarifaMin: tarifaActual.fltTarifaMin,
            IntTiempoMinimo: tarifaActual.intTiempoMinimo,
            FltTarifaMax: tarifaActual.fltTarifaMax,
            IntTiempoMaximo: tarifaActual.intTiempoMaximo,
            FltTarifaIntervalo: tarifaActual.fltTarifaIntervalo,
            IntIntervaloMinutos: tarifaActual.intIntervaloMinutos,
          }]);
          // Calcular tarifario utilizando el metodo mtdonBluCostos.
          this.mtdonBlurCosto(
            tarifaActual.intTiempoMinimo,
            tarifaActual.fltTarifaMin,
            tarifaActual.intTiempoMaximo,
            tarifaActual.fltTarifaMax,
            tarifaActual.intIntervaloMinutos
          )
        }

        //console.log(this.arrOpciones);
        //console.log('CUENTAS',this.cuentas);

      });
      this.mode = 'update';
    }
    else {
      this.cliente = {} as ContactModelReador;
      //console.log(this.form);
    }
  }

  /**
   * metodo get que permite acceder a la propidad cuentas del formulario
   * y manejarlo como una array
   */
  /*get cuentas() {
    return this.form.get('cuentas') as FormArray;
  }*/

  toggleStar() {
    /*if (this.id) {
      this.cliente.starred = !this.cliente.starred;
    }*/
  }

  save() {

    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
      Swal.fire({
        icon: 'info',
        title: 'Por favor completa los campos requeridos',
        showConfirmButton: false,
        timer: 1700
      });
      return;

    }

    if (this.mode === 'create') {
      //console.log('Entro en el if :3');
      this.mtdcrearcliente();
    }
    else if (this.mode === 'update') {
      this.mtdactulizarcliente();
    }
    /*if (!this.contact) {
      this.contact = {
        ...form,
        id: contactIdCounter++
      };
      console.log(this.form);
    }*/
    /*if( this.form.invalid ) {
      console.log("Formulario invalido");
      return;
    }*/

    //console.log(form);

    /*this.contact.name = form.name;
    this.contact.email = form.email;
    this.contact.phone = form.phone;
    this.contact.company = form.company;
    this.contact.notes = form.notes;
    this.contact.birthday = form.birthday;*/

    // this.dialogRef.close();
  }

  mtdcrearcliente() {
    if (this.arrCuentasTodoxCliente.length === 0) {
      console.log('Vacio cuentas');
      this.form.get('cuentas').setValue(null);
    } else {
      this.form.get('cuentas').setValue(this.arrCuentasTodoxCliente);
      console.log('Vacio cuentas');

    }
    const cliente = this.form.value;

    console.log('Cliente POST', cliente);
    this.clienteservice.mtdpostInsertarClientes(cliente)
      .subscribe((responseclient: any) => {
        //console.log(responseclient);
        this.dialogRef.close();
      });

    if (cliente !== '') {
      this.dialogRef.close(cliente);
    }
  }

  mtdactulizarcliente() {
    /*this.arrCuentasTodoxCliente = this.arrCuentasTodoxCliente.map((cuenta) => {
      cuenta = {
        email: cuenta?.email,
        passwordHash:  cuenta?.passwordHash,
        strClaveAgente: cuenta?.strClaveAgente
      };
      return cuenta;
    });*/
    /*this.arrCuentasNuevasTodoxCliente = this.arrCuentasTodoxCliente.filter(cuenta => !cuenta.id);
    this.clienteservice.mtdputCuentaAgente(this.arrCuentasNuevasTodoxCliente, this.id).subscribe((data: any) => {
      console.log('Cuenta agregada ', data);
    });
    this.arrCuentasTodoxCliente = this.arrCuentasTodoxCliente.filter(cuenta => cuenta.id);*/

    // console.log('Nuevas cuentas', this.arrCuentasNuevasTodoxCliente);
    // console.log('cuentas ya registradas', this.arrCuentasTodoxCliente);
    if (this.arrCuentasTodoxCliente.length === 0) {
      console.log('Vacio cuentas');
      this.form.get('cuentas').setValue(null);
    } else {
      this.form.get('cuentas').setValue(this.arrCuentasTodoxCliente);
      console.log('Vacio cuentas');

    }
    const cliente = this.form.value;

    //console.log('ACTUALIZACION',cliente);
    cliente.id = this.cliente.id;

    this.dialogRef.close(cliente);
  }

  modoCrear() {
    return this.mode === 'create';
  }

  modoActualizar() {
    return this.mode === 'update';
  }

  onSelectionCols(e, v) {
    this.checkedValues = [];
    this.selectedOptions = v;
    //this.opciones.clear();

    for (let i = 0; i < this.selectedOptions.length; i++) {
      this.checkedValues.push(this.selectedOptions[i]._text.nativeElement.innerText);

    }
    this.columnsSelected = this.checkedValues.length;

  }

  /**
   * metodo que permite definir y retornar las propidades para cada una
   * de las cuentas de los clientes
   */
  /*mtdaddcuentas(): FormGroup {
    return this.fb.group({
      Email: ['', [Validators.required, this.validadoreservice.mtdemailValidate]],
      PasswordHash: ['', [Validators.required, this.validadoreservice.passwordValid]],
    });
  }*/


  /**
   * metodo que permite definir y retornar las propidades para cada uno
   * de los elementos de la pestaña de tarifas
   */
  mtdaddtarifas(): FormGroup {
    return this.fb.group({
      FltTarifaMin: [null, [Validators.required, this.validadoreservice.mtdtarifacostoValidate]],
      IntTiempoMinimo: [null, [Validators.required, this.validadoreservice.mtdtarifaminutosValidate]],
      FltTarifaMax: [null, [Validators.required, this.validadoreservice.mtdtarifacostoValidate]],
      IntTiempoMaximo: [null, [Validators.required, this.validadoreservice.mtdtarifaminutosValidate]],
      FltTarifaIntervalo: [null, [Validators.required]],
      IntIntervaloMinutos: [null, [Validators.required, this.validadoreservice.mtdtarifaminutosValidate]],
      int_intervalo_numero: [{ value: null, disabled: true }],
      BoolCobroFraccion: false
    });
  }

  mtdaddarrFormTaficas() {
    this.tarifas = this.form.get('tarifas') as FormArray;
    this.tarifas.push(this.mtdaddtarifas());
  }

  /**
   * metodo que permite generar los campos para registrar las cuentas de acceso
   * de acuerdo a la cantidad especificada por el usuario
   */
  /*onBlurCantidad( e, v ){
    console.log(v);
    this.cuentas.clear();

    for (let index = 0; index < v; index++) {
      this.cuentas.push( this.mtdaddcuentas() );
    }
    console.log(this.arrCtasLicencia);
    console.log(this.arrPassLicencia);
  }*/

  onBlurEmail(email?: string) {
    // console.log(email);
    this.arruseremail = [];
    this.userservice.getTodosUsuarios().subscribe((responseuser: any) => {
      this.arruser = responseuser;
      this.arruseremail = this.arruser.filter(arruser => arruser.email === email);

      if (this.arruseremail.length !== 0) {
        //console.log(this.arruseremail);
        //console.log('Este correo no se encuentra disponible.' + email);
        Swal.fire({
          icon: 'warning',
          title: 'Este correo no se encuentra disponible',
          text: email,
          showConfirmButton: true
        });
      }
    });
  }

  /**
   * metodo que utiliza el evento click para cargar el componente
   * donde se realizara la actualización de la contraseña
   */
  mtdclickEditarCuenta(cuenta?: any, indice?: number, modo?: any) {
    //console.log('Esta funcionando', emailcuenta);
    this.dialog.open(PasswordContactsEditComponent, { height: 'auto', width: '500px', data: cuenta?.email });
  }

  /**
   * metodo que utiliza el evento click para eliminar una cuenta de acceso
   */
  mtdclickEliminarCuenta(cuenta: any, indice?: number, modo?: any) {
    console.log('cuenta ', cuenta);
    console.log('indice ', indice);
    console.log('modo ', modo);
    if (!cuenta.id) {
      this.arrCuentasTodoxCliente = this.arrCuentasTodoxCliente.filter(cuentaTabla => cuentaTabla !== cuenta);
      console.log('Cuentas push', this.arrCuentasTodoxCliente);
      this.form.get('IntLicencias').setValue(this.arrCuentasTodoxCliente.length);
      this.table.renderRows();
      return;
    } else {
      Swal.fire({
        title: '¿Desea desactivar esta cuenta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.clienteservice.mtddeleteCuentaAcceso(cuenta.email).subscribe((response: any) => {
            //console.log(response);
            this.clienteservice.mtdgetClienteTodoxId(this.id).subscribe(({ data: responsetodoxcli }: ContactResponse) => {
              this.arrCuentasTodoxCliente = responsetodoxcli.cuentas.filter(cuenta => cuenta?.bitStatus !== false);
              this.cd.markForCheck();
              this.table.renderRows();
              this.form.get('IntLicencias').setValue(this.arrCuentasTodoxCliente.length);

              console.log('Es agregar actualizar :D',);
            });
            Swal.fire({
              icon: 'success',
              title: 'La cuenta esta inactiva',
              showConfirmButton: false,
              timer: 1700
            });
          },
            err => {
              //console.log(err);
              if (err) {
                Swal.fire({
                  icon: 'error',
                  title: 'Error al eliminar',
                  showConfirmButton: false,
                  timer: 1700
                });
                this.dialogRef.close();
              }
            });
        }
      });
    }
  }

  /**
   * mtdonBlurCosto permite calcular el costo de el tiempo enn minutos
   * con base al costo de la tarifa minima, y el tiempo minimo aceptado en minutos
   */
  mtdonBlurCosto(intCantidadMinutosMinima, strCostoTarifaMinima, intCantidadMinutosMaxima,
    strCostoTarifaMaxima, intMinutosCantidad) {

    if (intMinutosCantidad === '') {
      return;
    }
    if (intMinutosCantidad === 0) {
      return;
    }

    let totalcosto: any;
    let nIntervalos: any;

    let Iintervalo: number = 0;
    let Fintervalo: number = intCantidadMinutosMinima;
    let PUintervalo: any = (strCostoTarifaMinima / intCantidadMinutosMinima);
    let PUintervalodecimal = PUintervalo.toFixed(2);
    let Tintervalo: number = (Number(Fintervalo) - Number(Iintervalo));
    let Cintervalo: any = (Tintervalo * PUintervalo);
    Cintervalo.toFixed();

    this.arrTfIntervalos = [];

    totalcosto = (strCostoTarifaMinima / intCantidadMinutosMinima) * intMinutosCantidad;
    nIntervalos = (intCantidadMinutosMaxima - intCantidadMinutosMinima) / intMinutosCantidad;

    let totaldecimal = totalcosto.toFixed(2);
    let nIntervalosdecimal = nIntervalos.toFixed();

    this.form.controls['tarifas'].patchValue([{
      FltTarifaIntervalo: `${totaldecimal}`,
      int_intervalo_numero: nIntervalosdecimal
    }]);

    this.arrTfIntervalos.push({
      concepto: 'Tiempo minimo',
      inicio: Iintervalo,
      fin: Fintervalo,
      unidad: 'minutos',
      tiempo: Tintervalo,
      PU: PUintervalodecimal,
      costo: Cintervalo
    });

    for (let index = 0; index < nIntervalosdecimal; index++) {

      Iintervalo = (Number(Fintervalo) + 1);
      Fintervalo = (Number(Iintervalo) + Number(intMinutosCantidad) - 1);
      Tintervalo = (Number(Fintervalo) - Number(Iintervalo) + 1);
      Cintervalo = (Tintervalo * PUintervalo);
      //console.log( Iintervalo, Fintervalo, Tintervalo, Cintervalo);

      this.arrTfIntervalos.push({
        concepto: `Intervalo ${index + 1}`,
        inicio: Iintervalo,
        fin: Fintervalo,
        unidad: 'minutos',
        tiempo: Tintervalo,
        PU: PUintervalodecimal,
        costo: Cintervalo.toFixed()
      });
      this.dataSource = new MatTableDataSource<any>(this.arrTfIntervalos);
    }
    //console.log(this.arrTfIntervalos);

  }

  /**
   * mtdonClickCoorde permite obtener las coodernas del cliente a registrar con ayuda
   * de un mapa
   */
  mtdonClickCoorde() {//Hello
    //console.log('Hola mundo');
    this.dialog.open(MapaComponent, { height: 'auto' }).afterClosed().subscribe((customer: any) => {
      //console.log('Este es el cliente');
      this.mtdobtenerCoorde();
    });
  }

  /**
   * metodo que permite recuperar las coodenadas seleccionadas por el usuario
   * en el componente mapa
   */
  mtdobtenerCoorde() {
    this.strLatitud = this.coordenasservices.getLatitud();
    this.strLongitud = this.coordenasservices.getLongitud();
    this.form.controls['StrLatitud'].setValue(this.strLatitud);
    this.form.controls['StrLongitud'].setValue(this.strLongitud);

  }

  openDialogAdd() {
    this.dialog.open(AddLicenciasComponent, { height: 'auto', width: '355px', data: { cuenta: null, modo: this.mode } }).afterClosed().subscribe((agente: any) => {
      //console.log('Hola',agente);

      if (this.addLiscSer.getIsclose()) {
        console.log('Hola :D si existe ', this.addLiscSer.getIsclose());
        this.mtdaddcuentasData();
      } else {
        console.log('Hola :D no existe ', this.addLiscSer.getIsclose());
      }
      this.addLiscSer.setIsclose(undefined);
    });
  }

  indice: any;
  /**
   * metodo para editar los registros de licencias 
   */
  editLicencias(cuenta: any, indice?: any, mode?: any) {
    console.log('Cuenta ', cuenta);
    console.log('indice ', indice);
    console.log('modo ', mode);
    this.addLiscSer.setMode(mode);
    this.indice = indice;
    console.log('cuenta', cuenta);
    console.log('indice', this.indice);
    this.dialog.open(AddLicenciasComponent, { height: 'auto', width: '355px', data: { cuenta: cuenta, modo: this.mode } }).afterClosed().subscribe((agente: any) => {
      
      if (this.addLiscSer.getIsclose()) {
        console.log('Hola :D si existe ', this.addLiscSer.getIsclose());
        this.mtdEditarcuentasData();
      } else {
        console.log('Hola :D no existe ', this.addLiscSer.getIsclose());
      }
      this.addLiscSer.setIsclose(undefined);
    });
  }

  /**
 * metodo que permite definir y retornar las propidades para cada una
 * de las cuentas de los clientes con sus datos guardados
 * este metodo se cambio para poder insertar cuentas en un arreglo 
 */
  mtdaddcuentasData() {
    //estas son las propuestas que tenia antes el metodo email?: any, password?: any, claveCuenta?: an
    if (this.addLiscSer.getEmail() === null ||
      this.addLiscSer.getPassword() === null ||
      this.addLiscSer.getClave() === null) {
      Swal.fire({
        icon: 'info',
        title: 'Por favor completar todos los campos',
        showConfirmButton: true
      });
      return;
    }
    if (this.addLiscSer.getEmail() === "" ||
      this.addLiscSer.getPassword() === "" ||
      this.addLiscSer.getClave() === "") {
      Swal.fire({
        icon: 'info',
        title: 'Por favor completar todos los campos',
        showConfirmButton: true
      });
      return;
    }
    if (this.addLiscSer.getEmail() === undefined ||
      this.addLiscSer.getPassword() === undefined ||
      this.addLiscSer.getClave() === undefined) {
      Swal.fire({
        icon: 'info',
        title: 'Por favor completar todos los campos',
        showConfirmButton: true
      });
      return;
    }
    
    const dataCuentas = {
      cuentas : [{
        UserName: "",
        Email: this.addLiscSer.getEmail(),
        passwordHash: this.addLiscSer.getPassword(),
        strClaveAgente: this.addLiscSer.getClave(),
        IntidconcesionId: this.id,
        StrRfc: "",
        StrDireccion: "",
        StrCp: "",
        StrRazonSocial: ""
      }]
    };

    if (this.modoActualizar()) {         
        this.clienteservice.mtdputCuentaAgente(dataCuentas, this.id).subscribe((data: any) => {           
          console.log("data ", data)
          this.clienteservice.mtdgetClienteTodoxId(this.id).subscribe(({ data: responsetodoxcli }: ContactResponse) => {
            this.arrCuentasTodoxCliente = responsetodoxcli.cuentas.filter(cuenta => cuenta?.bitStatus !== false);
            this.cd.markForCheck();
            console.log('Es agregar actualizar :D',);
          });
        });          
        //this.arrCuentasTodoxCliente.push(datosCuenta);
        this.table.renderRows();
    } else {
      console.log('Es agregar crear :D',);
      this.arrCuentasTodoxCliente.push(dataCuentas);
      this.table.renderRows();
    }
    console.log('Cuentas push', this.arrCuentasTodoxCliente);
    this.form.get('IntLicencias').setValue(this.arrCuentasTodoxCliente.length);
  }

  mtdEditarcuentasData() {

    if (this.addLiscSer.getEmail() === null ||
      this.addLiscSer.getPassword() === null ||
      this.addLiscSer.getClave() === null) {
      Swal.fire({
        icon: 'info',
        title: 'Por favor completar todos los campos',
        showConfirmButton: true
      });
      return;
    }
    if (this.addLiscSer.getEmail() === "" ||
      this.addLiscSer.getPassword() === "" ||
      this.addLiscSer.getClave() === "") {
      Swal.fire({
        icon: 'info',
        title: 'Por favor completar todos los campos',
        showConfirmButton: true
      });
      return;
    }
    if (this.addLiscSer.getEmail() === undefined ||
      this.addLiscSer.getPassword() === undefined ||
      this.addLiscSer.getClave() === undefined) {
      Swal.fire({
        icon: 'info',
        title: 'Por favor completar todos los campos',
        showConfirmButton: true
      });
      return;
    } else {
      const datosCuenta = {
        email: this.addLiscSer.getEmail(),
        passwordHash: this.addLiscSer.getPassword(),
        strClaveAgente: this.addLiscSer.getClave()
      };
      /*if (this.modoActualizar()) {
        console.log('Es agregar actualizar :D',);
      } else {
        console.log('Es agregar crear :D',);
      }*/
      this.arrCuentasTodoxCliente.splice(this.indice, 1, datosCuenta);
      this.table.renderRows();

      console.log('Cuenta editar', this.arrCuentasTodoxCliente);
      this.form.get('IntLicencias').setValue(this.arrCuentasTodoxCliente.length);
    }
  }

  /**
   * metodo que obtiene las columnas disponibles
   */
  mtdobtnerColumnasOpciones() {
    this.clienteservice.mtdgetColumnasOpciones().subscribe((responsecol: any) => {
      this.arrColumsOpcions = responsecol.data;
      //console.log('Col ', responsecol);
    });
  }

  // metodo que permite recuperas las ciudades registradas
  mtdobtenerCiudades() {
    this.clienteservice.mtdgetCiudadesDisponibles()
      .subscribe((response: CiudadResponseReador) => {
        //console.log('CIDADES ', response);
        this.arrciudades = response.data;
      });
  }

  mtdchangeNombreCiudad(event, variable) {
    //console.log(this.form.value);
    this.selectedCiudad = variable;
    //console.log(this.selectedCiudad);
    const ciudades = this.arrciudades.filter(arrciudades => arrciudades.id == this.selectedCiudad);
    console.log( 'cuidad ',ciudades);
    this.selectedCity = ciudades[0].strCiudad;
    this.form.controls['StrCiudad'].setValue(ciudades[0].strCiudad);
    this.form.controls['IntIdCiudad'].setValue(ciudades[0].id);
    this.form.controls['IntIdCiudadCat'].setValue(ciudades[0].id);
  }

  /**
   * mtdonClickEliminarClient permite eliminar un cliente a partir de su id
   */

  mtdonClickEliminarClient(event?: any) {
    if (this.id) {
      //console.log(this.id);
      this.clienteservice.mtddeleteEliminarCliente(this.id).subscribe((response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'El cliente esta inactivo',
          showConfirmButton: false,
          timer: 1700
        });
        //console.log(response);
      },
        err => {
          //console.log(err);
          if (err) {
            Swal.fire({
              icon: 'error',
              title: 'Error al guardar',
              showConfirmButton: false,
              timer: 1700
            });
          }
        });
      this.dialogRef.close();
    }
    else {
      Swal.fire({
        icon: 'warning',
        title: 'No es posible eliminar el cliente.',
        showConfirmButton: true
      });
    }
  }

  mtdonClickImprimir(event?: any) {
    Swal.fire({
      icon: 'info',
      title: 'Esta opción no se encuentra disponible',
      showConfirmButton: true
    });
  }

  mtdonClickExportar(event?: any) {
    Swal.fire({
      icon: 'info',
      title: 'Esta opción no se encuentra disponible',
      showConfirmButton: true
    });
  }

  // Visualizar el password
  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
