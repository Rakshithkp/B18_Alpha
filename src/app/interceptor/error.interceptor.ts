import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {retry,catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request)
    .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {        
          errorMessage = `Error: ${error.error.message}`;      // client-side error
        } else {
          errorMessage = `Error Code: ${error.status}\ Message: ${error.message}`;    // server-side error
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      })
    )
  }
}
