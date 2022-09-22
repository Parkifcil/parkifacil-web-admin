import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icPeople from '@iconify/icons-ic/twotone-people';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icPlay_arrow from '@iconify/icons-ic/twotone-play-arrow';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserModelCreator, UserModelReador, UsersResponse } from '../models/register.model';
import { RegistroUsuarioService } from '../services/registro-usuario.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import {  UntilDestroy ,untilDestroyed } from '@ngneat/until-destroy';
import { UsuarioCrearActualizarComponent } from './usuario-crear-actualizar/usuario-crear-actualizar.component';
import { RolesService } from '../services/roles.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import Swal from 'sweetalert2';

//animaciones
import { fadeInRight400ms } from '../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from '../../@vex/animations/scale-in.animation';
import { UsuarioActualizarContraseniaComponent } from './usuario-actualizar-contrasenia/usuario-actualizar-contrasenia.component';




//doracion de UntilDestroy
@UntilDestroy( )
@Component({
  selector: 'vex-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuariosComponent implements OnInit, AfterViewInit {

  // con esto se accede al elemento MatTable para usar .renderRows y actualizar la tabla
  @ViewChild(MatTable, {static: true}) table: MatTable<Element>;



  icAdd = icAdd;
  icDelete = icDelete;
  icSearch = icSearch;
  icMoreHoriz = icMoreHoriz;
  icEdit = icEdit;
  icPersonAdd = icPersonAdd;
  icContacts = icContacts;
  icPeople = icPeople;
  icPlay_arrow = icPlay_arrow;

  searchCtrl = new FormControl();
  layoutCtrl = new FormControl('boxed');

  arruser: any[] = [];
  arruseremail: any[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 30, 50];
  displayedColumns: string[] = ['strNombreCliente','strNombre', 'userName', 'email', 'strTipoUsuario', 'bitStatus', 'actions'];
  selection = new SelectionModel<UserModelReador>(true, []);
  dataSource = new MatTableDataSource<UserModelReador>(DATOS);

 
  arrdatausuarios: UserModelReador[] = [];
  arrUserloginNoList: any [] = [];

  //propiedad para ocultar un boton
  boton = false;
  boton2 = false; 

  //varible para almecenar el id del usuario
  intidUsuario: any;
  // arreglo para almacenar los datos del usuario que inicio sesión
  arrcurrentUser: any;



  constructor(private registrarUsuarioService: RegistroUsuarioService,
              public rolService: RolesService,
              public fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private dialog: MatDialog ) { }

  ngOnInit() {
    
    if (sessionStorage.getItem('usuario')) {

      let currentUsuer = sessionStorage.getItem('usuario');
      let currentUsuerJ = JSON.parse(currentUsuer);
      console.log('USER AUTH', currentUsuerJ);
                        
      this.arrcurrentUser = {
        strNombre: currentUsuerJ.data.strNombre,
        strApellidos: currentUsuerJ.data.strApellidos
      }

      // se obtienen id de la conseción a la que pertenece el usuario
      this.intidUsuario = currentUsuerJ.data.id;
      console.log(this.intidUsuario + ' id de usuario en login');
    }

    this.registrarUsuarioService.mtdrefreshdata$.subscribe(() => {
      this.getTodosUsuarios();
    });

    this.boton = true;
    this.boton2 = true;


    this.getTodosUsuarios();
    // Filtro de la tabla
    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));

  }
    // paginador
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    // mtd Obtener todos los usuarios
    // se modifico el mtd para que solo se puedan obtener todos los usuarios con bit_status en true
  getTodosUsuarios() {
    this.registrarUsuarioService.getTodosUsuarios().subscribe( (todos: UsersResponse) => {
      this.arrdatausuarios = todos.data;

      console.log('Hola usuarios',this.arrdatausuarios);

     // this.arrUserloginNoList = this.arrdatausuarios.filter(arrdatausuarios => arrdatausuarios.id !== this.intidUsuario);

      this.dataSource.data = this.arrdatausuarios;
      console.log('USuarios :D ',this.dataSource);
      this.boton = true;
      this.boton2 = false;
      console.log(this.arrdatausuarios);
    });
  }

   // mtd Obtener todos los usuarios en bit_status en false
   getTodosUsuariosFalse(){
    this.registrarUsuarioService.getTodosUsuariosFalse().subscribe( (todos: UsersResponse) => {
      this.arrdatausuarios = todos.data;
      this.dataSource.data = this.arrdatausuarios;
      this.boton = false;
      this.boton2 = true;
      console.log('Hola inactivos',this.arrdatausuarios);
    });
   }


  // mtd de filtrado de la tabla 
  // mtd de filtrado de la tabla 
  onFilterChange(value: string) {
    if (!this.dataSource) {
          return;
        }
        value = value.trim();
        value = value.toLowerCase();
        this.dataSource.filter = value;
      }

  actualizarContrasenia(usuario: UserModelReador){
    console.log(usuario);
    this.dialog.open(UsuarioActualizarContraseniaComponent,{
      data: usuario
    }).afterClosed().subscribe( nuevaContrasenia => {
      if(nuevaContrasenia){
        usuario.password = nuevaContrasenia;
        this.registrarUsuarioService.mtdputPasswordUsuario(usuario.id, usuario)
          .subscribe((res: any) => {
            Swal.fire({
              icon: "success",
              title: "La contraseña se ha cambiado correctamente",
              showConfirmButton: false,
              timer: 1500
            })
          },
            (err:any) => {
              Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al cambiar la contraseña',
                showConfirmButton: false,
                timer: 1500
              });
            }
          )
      }
    })
  }
      

  actualizarUsuario(usuario: UserModelReador) {
        console.log(usuario);
        this.dialog.open(UsuarioCrearActualizarComponent, {
          data: usuario
        }).afterClosed().subscribe(actializarUsuario => {
          /**
           * Customer is the updated customer (if the user pressed Save - otherwise it's null)
           */
          if (actializarUsuario) {
            /**
             * Here we are updating our local array.
             * You would probably make an HTTP request here.
             */console.log('Update ', actializarUsuario);
             this.registrarUsuarioService.actualizarUsuario(actializarUsuario).subscribe((res:any)=>{
              Swal.fire({
                icon: 'success',
                title: 'El usuario ha sido actualizado',
                showConfirmButton: false,
                timer: 1500
              });
              console.log(res);
             },
             err=>{
              console.log(err)
              if(err){
                Swal.fire({
                  icon: 'error',
                  title: 'Por favor verifique sus datos',
                  showConfirmButton: false,
                  timer: 1500 
                });
              }
            }
             );
           
          }
        });
  }

      crearUsuario() {
        this.dialog.open(UsuarioCrearActualizarComponent).afterClosed().subscribe((usuario: UserModelCreator) => {
          /**
           * Customer is the updated customer (if the user pressed Save - otherwise it's null)
           */
          if (usuario) {
            /**
             * Here we are updating our local array.
             * You would probably make an HTTP request here.
             */
            console.log('Datos usuario',usuario);
            this.registrarUsuarioService.registrarUserPost(usuario).subscribe(( response: any )=> {
              Swal.fire({
                icon: 'success',
                title: 'El usuario ha sido guardado',
                showConfirmButton: false,
                timer: 1500
              });
              console.log(response);
            },
            err=>{
              console.log(err)
              if(err){
                Swal.fire({
                  icon: 'error',
                  title: 'Por favor verifique sus datos',
                  showConfirmButton: false,
                  timer: 1500 
                });
              }
            });
          }
        });
      }

    deleteUsuario(usuario: UserModelReador ) {
      console.log('Usuario Baja', usuario);
      this.registrarUsuarioService.deleteUsuario(usuario).subscribe((res: any)=>{
      Swal.fire({
            icon: 'success',
            title: 'El usuario esta inactivo',
            showConfirmButton: false,
            timer: 1500
          });
          console.log(res);
        });
    }

    activarUsuario(customer: UserModelReador){
      console.log(customer);
        this.registrarUsuarioService.activarUsuario(customer).subscribe((res:any)=>{
          Swal.fire({
            icon: 'success',
            title: 'El usuario esta inactivo',
            showConfirmButton: false,
            timer: 1500
          });
        console.log(res);
       });
     }

    ngOnDestroy() {}
}
 const DATOS: UserModelReador[] = [];

 //AURG 17/12/2020


