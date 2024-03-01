import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class customInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    const authHeader = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const modifiedRequest = request.clone({ headers: authHeader });

    return next.handle(modifiedRequest);
  }
}
