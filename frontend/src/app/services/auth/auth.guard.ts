import {Injectable} from '@angular/core'
import { Router , CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean>|boolean {
    if(this.authService.isLogin !== true){
        window.alert("Login terlebih dahulu")
        this.router.navigate([''])
    }
    return true
  }
}
