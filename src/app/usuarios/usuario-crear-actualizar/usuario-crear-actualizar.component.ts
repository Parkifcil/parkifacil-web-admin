import { Component, Inject, OnInit, ChangeDetectorRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import  icPeople  from '@iconify/icons-ic/twotone-people';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import icEmail from '@iconify/icons-ic/twotone-mail';
import icCollections_bookmark from '@iconify/icons-ic/twotone-collections-bookmark';
import icExplore from '@iconify/icons-ic/twotone-explore';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icApps from '@iconify/icons-ic/twotone-apps';
import icNavigation from '@iconify/icons-ic/twotone-navigation';
import icAccount_circle from '@iconify/icons-ic/twotone-account-circle';
import { UserModelCreator } from '../../models/register.model';
import icLock from '@iconify/icons-ic/twotone-lock';
import { RolesService } from '../../services/roles.service';
import { RolModel } from '../../models/rol.model';
import { MatTableDataSource } from '@angular/material/table';
import { ConcesionesService } from '../../../app/services/concesiones.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ConcesionModel } from '../../models/concesion.model';
import { TiposUsuariosService } from '../../services/tipos-usuarios.service';
import { TiposUsuariosModel } from '../../models/tipos-usuarios-model';
import { CiudadesService } from '../../services/ciudades.service';
import { CiudadesModel, CiudadReador, CiudadResponseReador } from '../../models/ciudades.model';
import { ValidadoresService } from 'src/app/services/validadores.service';
import { RegistroUsuarioService } from 'src/app/services/service.index';


@Component({
  selector: 'vex-usuario-crear-actualizar',
  templateUrl: './usuario-crear-actualizar.component.html',
  styles: []
})

export class UsuarioCrearActualizarComponent implements OnInit {

  roles: RolModel[];
  concesiones: ConcesionModel[];
  usuarios: TiposUsuariosModel[];
  ciudades: CiudadReador[];
 
  arruser: any[] = [];
  arruseremail: any[] = [];

  arrTodos: any[] = [];
  arrAgente: any[] = [];

  arrTodas: any[] = [];
  arrConce: any[] = [];
 
  form: FormGroup;
  mode: 'create' | 'actualizar' = 'create';

  visible = false;
  inputType = 'password';
  icMoreVert = icMoreVert;
  icClose = icClose;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icEmail = icEmail;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icPerson = icPerson;
  icPeople = icPeople;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icCollections_bookmark = icCollections_bookmark;
  icPhone = icPhone;
  icLock = icLock;
  icExplore = icExplore;
  icBusiness = icBusiness;
  icApps = icApps;
  icNavigation = icNavigation;
  icAccount_circle = icAccount_circle;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<UsuarioCrearActualizarComponent>,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private rolService: RolesService,
              private concesionService: ConcesionesService,
              private tipoUsuariosService: TiposUsuariosService,
              private ciudadesService: CiudadesService,
              private validador: ValidadoresService,
              private userservice: RegistroUsuarioService) {
  }


  ngOnInit() {
    this.form = this.fb.group({
      /*id: '',*/
      // imageSrc: this.defaults.imageSrc,
      StrNombre: ['', [Validators.required, Validators.minLength(3),this.validador.soloLetras]],
      StrApellidos: ['',[Validators.required, Validators.minLength(3),this.validador.soloLetras]],
      Email: ['', [Validators.required, this.validador.emailValid]],
      PhoneNumber: ['',[Validators.required, this.validador.phoneValid]],
      Rol:['',[Validators.required, Validators.min(1)]],
      //intIdTipoUsuario: this.defaults.intIdTipoUsuario || '',
      IntIdCiudad: ['', [Validators.required]],
      IntIdconcesionId: ['', [Validators.required]],
      UserName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10) ,this.validador.userValid]],
      Password: ['',[Validators.required, this.validador.passwordValid]],
      StrRfc: ['', this.validador.rfcValid],
      StrDireccion: ['',[Validators.required, Validators.maxLength(100), Validators.minLength(5)]],
      StrCP: ['',[Validators.required, this.validador.cpValid]],
      StrRazonSocial: ['', this.validador.razonValida]
    });

    if (this.defaults) {
      this.mode = 'actualizar';
      console.log('User Update ',this.defaults);
      this.form.get('Password').disable();
      this.form.patchValue({
        StrNombre: this.defaults.strNombre,
        StrApellidos: this.defaults.strApellidos,
        Email: this.defaults.email,
        PhoneNumber: this.defaults.phoneNumber,
        IntIdCiudad: this.defaults.intIdCiudad,
        IntIdconcesionId: this.defaults.intIdConcesion,
        UserName: this.defaults.userName,
        StrRfc: this.defaults.strRfc,
        StrDireccion: this.defaults.strDireccion,
        StrCP: this.defaults.strCp,
        StrRazonSocial: this.defaults.strRazonSocial,
        Password: 'D3sarrollo2020$',
        Rol: this.defaults.strTipoUsuario
      });
    } else {
      this.form.get('Password').enable();
      this.defaults = {} as UserModelCreator;
    }
   /*this.rolService.getTodosRoles().subscribe(datos => {
      this.roles = datos;
    });*/

    this.concesionService.getTodosConcesiones().subscribe((datos:any) => {
      this.arrTodas = datos.data;
      console.log('CONCESIONES ',this.arrTodas);
      this.arrConce = this.arrTodas.filter(arrTodas => arrTodas.bitStatus !== false );
    });

    this.tipoUsuariosService.getTodosTiposUsuarios().subscribe((datos:any) => {
      this.arrTodos = datos.data;
      console.log('ROLES ', this.arrTodos);

      this.arrTodos = this.arrTodos.filter(arrTodos => arrTodos.id !== 3 && arrTodos.id !== 6);
    });

    this.ciudadesService.getCuidades().subscribe((datos: CiudadResponseReador) => {
      this.ciudades = datos.data;
      console.log('CIUDADES ',this.ciudades);
    });
    
  }
  


  save() {
    if (this.mode === 'create') {
      this.crearUsuario();
    } else if (this.mode === 'actualizar') {
      this.actualizarUsuario();
    }
  }

  crearUsuario() {
    const usuario = this.form.value;

    console.log(usuario);
    if ( usuario !== '') {
      this.dialogRef.close(usuario);
    }
  }

  actualizarUsuario() {
    const usuario = this.form.value;
    usuario.id = this.defaults.id;

    this.dialogRef.close(usuario);
  }

  modoCrear() {
    return this.mode === 'create';
  }
    modoActualizar() {
    return this.mode === 'actualizar';
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

  //Validaciones
 get NombreInvalido(){
    return this.form.get('StrNombre').invalid
  }

 get apellidoInvalido(){
    return this.form.get('StrApellidos').invalid
  }

 get emailInvalido(){
    return this.form.get('Email').invalid 
  }

  get UserNameInvalido(){
    return this.form.get('UserName').invalid
  }
  
  get telfonoInvalido(){
    return this.form.get('PhoneNumber').invalid 
  }

  get rolInvalido(){
    return this.form.get('Rol').invalid 
  }

  get ciudadInvalida(){
    return this.form.get('IntIdCiudad').invalid 
  }

  get concesionInvalida(){
    return this.form.get('IntIdconcesionId').invalid 
  }

  get passwordInvalido(){
    return this.form.get('Password').invalid 
  }

  get rfcInvalido(){
    return this.form.get('StrRfc').invalid 
  }

  get direccInvalida(){
    return this.form.get('StrDireccion').invalid 
  }

  get cpInvalido(){
    return this.form.get('StrCP').invalid 
  }

  get razonInvalida(){
    return this.form.get('StrRazonSocial').invalid 
  }

  get pwdInvalida(){
    return this.form.get('Password').invalid
  }

 onBlurEmail( email?: string) {
   this.arruseremail = [];
    this.userservice.getTodosUsuarios().subscribe((responseuser: any) => {
      this.arruser = responseuser.data;
      this.arruseremail = this.arruser.filter(arruser => arruser.email === email);
      if(this.arruseremail.length !== 0) {
        this.mtduniqueemail(this.arruseremail);
      }
    });
  }

  onBlurUser(UserName?: string){
   this.arruseremail = [];
    this.userservice.getTodosUsuarios().subscribe((responseuser: any) => {
      this.arruser = responseuser.data;
      this.arruseremail = this.arruser.filter(arruser => arruser.UserName === UserName);
      if(this.arruseremail.length !== 0) {
        this.mtduniqueUser(this.arruseremail);
      }
    });
  }  

  mtduniqueemail(email: any): boolean {
    const matched = email;
    if (!matched) {
        this.form.controls['email'].setErrors(null)
    } else {
        this.form.controls['email'].setErrors({
           notMatched: true
        });
    }

    return matched;
}

mtduniqueUser(UserName: any): boolean {
  const matched = UserName;
  if (!matched) {
      this.form.controls['UserName'].setErrors(null)
  } else {
      this.form.controls['UserName'].setErrors({
         notMatched: true
      });
  }

  return matched;
}

  get formularioValido() {
    if(
      this.form.get('StrNombre').value === '' ||
      this.form.get('StrApellidos').value === '' ||
      this.form.get('StrCP').value === '' ||
      this.form.get('StrDireccion').value === '' ||
      this.form.get('Email').value === '' ||
      this.form.get('Email').value === '' ||
      this.form.get('UserName').value === '' ||
      this.form.get('PhoneNumber').value === '' ||
      this.form.get('IntIdconcesionId').value === '' ||
      this.form.get('IntIdCiudad').value === '' ||
      this.form.get('Rol').value === '' ||
      this.form.get('Password').value === ''

      ) return false;
    
    return true;
    // return this.form.valid
  }


}
