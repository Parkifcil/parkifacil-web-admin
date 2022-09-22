import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VexRoutes } from '../../@vex/interfaces/vex-route.interface';
import { DashboardAnalyticsComponent } from './dashboard-analytics.component';

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
    component: DashboardAnalyticsComponent,
    canActivate: [AuthGuard],
    data: {
      scrollDisabled: false,
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAnalyticsRoutingModule {
}
