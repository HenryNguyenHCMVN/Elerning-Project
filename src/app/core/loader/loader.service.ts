import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loadingService = this.isLoading.asObservable().pipe(delay(3));

  constructor() { }

  show() {
    this.isLoading.next(true);
  }
  hidden() {
    this.isLoading.next(false);
  }
}
