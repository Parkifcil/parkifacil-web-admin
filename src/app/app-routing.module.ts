import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const childrenRoutes: VexRoutes = [
  {
    path: '',
   // redirectTo: 'clientes',
   redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard-analytics/dashboard-analytics.module').then(m => m.DashboardAnalyticsModule),
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule),
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: 'ingresos',
    loadChildren: () => import('./ingresos/ingresos-mensuales/ingresos-mensuales.module').then(m => m.IngresosMensualesModule),
  },
  {
    path: 'rendicion',
    loadChildren: () => import('./ingresos/rendicion-cuentas/redicion-cuentas-routing.module').then(m => m.RendicionCuentasRoutingModule),
  },
  {
    path: 'ingresosUsuarios',
    loadChildren: () => import('./ingresos/ingresos-usuarios/ingresos-usuarios-routing.module').then(m => m.IngresosUsuariosRoutingModule),
  },
  {
    path: 'informes',
    loadChildren: () => import('./ingresos/informes/informes-routing.module').then(m => m.InformesRoutingModule),
  }
];

const routes: Routes = [
  {
   path: 'login',
   loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule ),
  },
  {
    path: '',
    component: CustomLayoutComponent,
    children: childrenRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
