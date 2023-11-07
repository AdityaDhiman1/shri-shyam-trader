import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoadingProgressBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showLoading() {
    this.isLoadingSubject.next(true);
  }
  hideLoading() {
    this.isLoadingSubject.next(false);
  }
  constructor() { }

  get isLoading() {
    return this.isLoadingSubject.asObservable();
  }
}
