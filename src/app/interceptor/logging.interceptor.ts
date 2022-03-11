import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, retry} from 'rxjs/operators'
;


@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime=(new Date()).getTime();
    return next.handle(request).pipe(
      retry(2),
      map(event=>{
        if(event instanceof HttpResponse){
          const endTime=(new Date()).getTime();
          const diff=endTime-startTime;
         console.log(event.url + 'succeded in' + diff + 'ms');}
          return event;
      })
    );
  }
}
