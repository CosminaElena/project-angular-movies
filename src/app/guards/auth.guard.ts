import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthenticationService } from "../services/authentication/authentication.service";
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private router:Router,
        private authenticationService: AuthenticationService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true;
    }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
    //     if(this.isAuth() === true){
    //         // localStorage.getItem('isAuthenticated');
    //         console.log('true');
    //         return true;
                   
    //         }else {
    //         this.router.navigate(['login']);
    //         return false;
    //     }
    // }

        

    
}