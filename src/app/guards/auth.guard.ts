import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthenticationService } from "../services/authentication/authentication.service";
import { Observable } from "rxjs";


@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthGuard implements CanActivate {
   
   
    constructor(private router:Router,
        private authenticationService: AuthenticationService){

    }
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean   {
        if (!this.authenticationService.isAuth()) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }

    
}