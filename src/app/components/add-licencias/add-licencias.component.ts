import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { AddLicenciasService } from 'src/app/services/add-licencias.service';
import { ValidadoresService } from '../../services/validadores.service';

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

import Swal from 'sweetalert2';
import { AddLicenciasModule } from './add-licencias.module';

@Component({
  selector: 'vex-add-licencias',
  templateUrl: './add-licencias.component.html',
  styleUrls: ['./add-licencias.component.scss']
})
export class AddLicenciasComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddLicenciasComponent>,
    private fb: FormBuilder,
    private addLicserv: AddLicenciasService,
    private cd: ChangeDetectorRef,
    private validadoreservice: ValidadoresService) { }


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

  form = this.fb.group({
    email: ['', [this.validadoreservice.emailValid]],
    passwordHash: ['', [Validators.minLength(8), Validators.maxLength(16)]],
    strClaveAgente: ['', [Validators.required]]
  });

  agente: any;
  modo: any;
  inputType = 'password';
  visible = false;
  isClose = 'AFECTA';

  ngOnInit(): void {
    //this.modo = this.addLicserv.getMode();
    console.log('modo desde apps', this.data);
    if (this.data.cuenta !== null) {
      if (this.data?.cuenta?.id) {
          this.form.get('passwordHash').disable();
      } else {
        this.form.get('passwordHash').enable();
      }
      this.form.patchValue({
        email: this.data?.cuenta?.email,
        passwordHash: this.data?.cuenta?.passwordHash,
        strClaveAgente: this.data?.cuenta?.strClaveAgente
      });
    }

  }

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

  save(email, pass, clave, isClose?) {
    
    if (this.data.modo === 'update') {
        this.addLicserv.setEmail(email);
        this.addLicserv.setPassword(pass);
        this.addLicserv.setClave(clave);
        this.addLicserv.setIsclose(isClose);
        this.dialogRef.close();
    } else {
        this.addLicserv.setEmail(email);
        this.addLicserv.setPassword(pass);
        this.addLicserv.setClave(clave);
        this.addLicserv.setIsclose(isClose);
        this.dialogRef.close();
    }
  }


  //metodo para actualizar los agentes
  updateLic(email, clave, password?, isClose?) {
    this.addLicserv.setEmail(email);
    this.addLicserv.setPassword(password);
    this.addLicserv.setClave(clave);
    this.dialogRef.close();
  }

}
