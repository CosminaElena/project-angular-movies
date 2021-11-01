import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  customReq: any;


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let customReq = req.clone({
      params: req.params.append('api_key', '3fb7a02a89713e12956a6ebf4db798ce')
    });


    return next.handle(customReq);
  }
}

