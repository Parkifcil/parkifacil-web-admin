import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { IngresosUsuariosComponent } from './ingresos-usuarios.component';
import { AuthGuard } from '../../pages/auth/login/auth.guard';

//const routes: Routes = [];

const routes: VexRoutes = [
  {
    path: '',
    component: IngresosUsuariosComponent,
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
export class IngresosUsuariosRoutingModule { }
