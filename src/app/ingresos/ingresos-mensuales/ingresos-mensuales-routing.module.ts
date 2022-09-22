import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { IngresosMensualesComponent } from './ingresos-mensuales.component';
import { AuthGuard } from '../../pages/auth/login/auth.guard';

// const routes: Routes = [];

const routes: VexRoutes = [
  {
    path: '',
    component: IngresosMensualesComponent,
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
export class IngresosMensualesRoutingModule { }
