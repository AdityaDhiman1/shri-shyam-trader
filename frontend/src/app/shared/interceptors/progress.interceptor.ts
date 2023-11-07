import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {

  constructor(public ls:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.ls.isLoadingProgressBar.next(true);
    return next.handle(request).pipe(
      finalize(
        () => {
          this.ls.isLoadingProgressBar.next(false);
        }
      )
    )
  }
}
