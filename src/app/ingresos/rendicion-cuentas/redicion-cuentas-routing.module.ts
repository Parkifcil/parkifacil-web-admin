import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { RendicionCuentasComponent } from './rendicion-cuentas.component';
import { AuthGuard } from '../../pages/auth/login/auth.guard';

const routes: VexRoutes = [
  {
    path: '',
    component: RendicionCuentasComponent,
    canActivate: [AuthGuard],
    data: {
      toolbarShadowEnabled: true,
      scrollDisableb: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendicionCuentasRoutingModule { }