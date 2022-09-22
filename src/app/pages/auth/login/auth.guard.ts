import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/login.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree > | Promise<boolean| UrlTree >| boolean | UrlTree  {
        console.log('false');
     if (this.authService.isLoggedIn !== true) {
      Swal.fire({
        icon: 'error',
        title: '¡Acceso no permitido!',
        text: 'Inicia sesión para acceder al sistema',
        timer: 4000,
        timerProgressBar: true,
      })
       this.router.navigate(['/login'])
     }
    return true;
  }
}