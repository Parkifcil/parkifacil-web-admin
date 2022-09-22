import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { trackById } from '../../../../utils/track-by';
import icPerson from '@iconify/icons-ic/twotone-person';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icMoveToInbox from '@iconify/icons-ic/twotone-move-to-inbox';
import icListAlt from '@iconify/icons-ic/twotone-list-alt';
import icTableChart from '@iconify/icons-ic/twotone-table-chart';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icDoNotDisturb from '@iconify/icons-ic/twotone-do-not-disturb';
import icOfflineBolt from '@iconify/icons-ic/twotone-offline-bolt';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icVerifiedUser from '@iconify/icons-ic/twotone-verified-user';
import icLock from '@iconify/icons-ic/twotone-lock';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import { Icon } from '@visurel/iconify-angular';
import { PopoverRef } from '../../../../components/popover/popover-ref';
import { PasswordUserEditComponent } from '../../../../../app/components/password-user-edit/password-user-edit.component';
/**
 * importación del servicio AuthService para obtener
 * datos del usuario que ha iniciado sesión
 */
import { AuthService } from '../../../../../app/services/login.service';

export interface OnlineStatus {
  id: 'online' | 'away' | 'dnd' | 'offline';
  label: string;
  icon: Icon;
  colorClass: string;
}

@Component({
  selector: 'vex-toolbar-user-dropdown',
  templateUrl: './toolbar-user-dropdown.component.html',
  styleUrls: ['./toolbar-user-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserDropdownComponent implements OnInit {

  items: MenuItem[] = [
    {
      id: '1',
      icon: icAccountCircle,
      label: 'My Profile',
      description: 'Personal Information',
      colorClass: 'text-teal',
      route: '/apps/social'
    },
    {
      id: '2',
      icon: icMoveToInbox,
      label: 'My Inbox',
      description: 'Messages & Latest News',
      colorClass: 'text-primary',
      route: '/apps/chat'
    },
    {
      id: '3',
      icon: icListAlt,
      label: 'My Projects',
      description: 'Tasks & Active Projects',
      colorClass: 'text-amber',
      route: '/apps/scrumboard'
    },
    {
      id: '4',
      icon: icTableChart,
      label: 'Billing Information',
      description: 'Pricing & Current Plan',
      colorClass: 'text-purple',
      route: '/pages/pricing'
    }
  ];

  statuses: OnlineStatus[] = [
    {
      id: 'online',
      label: 'En linea',
      icon: icCheckCircle,
      colorClass: 'text-green'
    },
    /*{
      id: 'away',
      label: 'Ausente',
      icon: icAccessTime,
      colorClass: 'text-orange'
    },
    {
      id: 'dnd',
      label: 'No molestar',
      icon: icDoNotDisturb,
      colorClass: 'text-red'
    },
    {
      id: 'offline',
      label: 'Desconectado',
      icon: icOfflineBolt,
      colorClass: 'text-gray'
    }*/
  ];

  activeStatus: OnlineStatus = this.statuses[0];

  trackById = trackById;
  icPerson = icPerson;
  icSettings = icSettings;
  icChevronRight = icChevronRight;
  icArrowDropDown = icArrowDropDown;
  icBusiness = icBusiness;
  icVerifiedUser = icVerifiedUser;
  icLock = icLock;
  icNotificationsOff = icNotificationsOff;

  // variable para almacenar la contraseña actual
  stridUser: string;
  // arreglo para almacenar los datos del usuario que inicio sesión
  arrcurrentUser: any;

  constructor(private cd: ChangeDetectorRef,
              private popoverRef: PopoverRef<ToolbarUserDropdownComponent>,
              private loginservice: AuthService,
              private dialog: MatDialog) { }

  ngOnInit() {
    if (sessionStorage.getItem('usuario')) {
      let currentUsuer = sessionStorage.getItem('usuario');
      let currentUsuerJ = JSON.parse(currentUsuer);
      console.log('USER AUTH', currentUsuerJ);
                        
      this.arrcurrentUser = {
        strNombre: currentUsuerJ.data.strNombre,
        strApellidos: currentUsuerJ.data.strApellidos
      }
      this.stridUser = currentUsuerJ.data.id;
    }
  }

  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  /**
   * metodo que utiliza el evento click para cargar el componente
   * donde se realizara la actualización de la contraseña
   */
  mtdclickActualizarPassword() {
    if (!this.stridUser) {
      console.log('La contraseña actual no existe :(');
    }
    else {
      this.dialog.open(PasswordUserEditComponent, { height: 'auto', width: '500px', data: this.stridUser });

    }
  }

  close() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
    console.log('Se finalizo la sesión :(');
    this.popoverRef.close();
  }
}
