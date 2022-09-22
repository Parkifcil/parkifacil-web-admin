import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PopoverService } from '../../../components/popover/popover.service';
import { ToolbarUserDropdownComponent } from './toolbar-user-dropdown/toolbar-user-dropdown.component';
import icPerson from '@iconify/icons-ic/twotone-person';
import { AuthService } from '../../../../app/services/login.service';
import theme from '../../../utils/tailwindcss'
@Component({
  selector: 'vex-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserComponent implements OnInit {

  dropdownOpen: boolean;
  icPerson = icPerson;
  
  arrcurrentUser: any;

  theme = theme;

  constructor(private popover: PopoverService,
              private cd: ChangeDetectorRef,
              private loginservice: AuthService) { }

  ngOnInit() { 
    if (!sessionStorage.getItem('usuario')) {
      // console.log( this.loginservice.currentUser );
      let currentuser = JSON.stringify(this.loginservice.currentUser);
      sessionStorage.setItem('usuario', currentuser);
      let currentUsuer = sessionStorage.getItem('usuario');
      let currentUsuerJ = JSON.parse(currentUsuer);
      console.log('USER AUTH', currentUsuerJ);

      this.arrcurrentUser = {
        strNombre: currentUsuerJ.data.strNombre,
        strApellidos: currentUsuerJ.data.strApellidos
      }
    } else {
            
      let currentUsuer = sessionStorage.getItem('usuario');
      let currentUsuerJ = JSON.parse(currentUsuer);
      console.log('USER AUTH', currentUsuerJ);
            
      this.arrcurrentUser = {
        strNombre: currentUsuerJ.data.strNombre,
        strApellidos: currentUsuerJ.data.strApellidos
      }
    }
  }

  showPopover(originRef: HTMLElement) {
    this.dropdownOpen = true;
    this.cd.markForCheck();

    const popoverRef = this.popover.open({
      content: ToolbarUserDropdownComponent,
      origin: originRef,
      offsetY: 12,
      position: [
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]
    });

    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }
}
