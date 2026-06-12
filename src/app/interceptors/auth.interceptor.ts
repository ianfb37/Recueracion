import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Petición mandada hacia: ' + req.url);

  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer TokenAgility2026')
  });

  return next(authReq);
};
