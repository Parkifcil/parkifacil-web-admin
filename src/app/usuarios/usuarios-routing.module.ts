import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { VexRoutes } from '../../@vex/interfaces/vex-route.interface';
import { UsuariosComponent } from './usuarios.component';
import { AuthGuard } from '../pages/auth/login/auth.guard';





const routes: VexRoutes = [
  {
    path: '',
    component: UsuariosComponent,
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
export class UsuariosRoutingModule { }
