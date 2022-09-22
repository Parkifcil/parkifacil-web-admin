import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { AuthGuard } from './auth.guard';


const routes: VexRoutes = [
  {
    path: '',
    component: LoginComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
