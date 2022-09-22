import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VexRoutes } from '../../@vex/interfaces/vex-route.interface';
import { DashboardComponent } from './dashboard.component';


/**
 * importaciones necesarioas para evitar que los usuarios accedan,
 * sin haber iniciado seción
 */
import { AuthGuard } from '../pages/auth/login/auth.guard';

const routes: VexRoutes = [
    {
      path: '',
      redirectTo: 'all'
    },
    {
      path: '',
      component: DashboardComponent,
      canActivate: [AuthGuard],
      data: {
        scrollDisabled: true,
        toolbarShadowEnabled: false
      }
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
