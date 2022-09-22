import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { InformesComponent } from './informes.component';
import { AuthGuard } from '../../pages/auth/login/auth.guard';

const routes: VexRoutes = [
  {
    path: '',
    component: InformesComponent,
    canActivate: [AuthGuard],
    data: {
      toolbarShadowEnabled: true,
      //containerEnabled: true,
      scrollDisableb: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformesRoutingModule { }
