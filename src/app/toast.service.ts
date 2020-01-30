import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private state = new BehaviorSubject(false);
  public show$ = this.state.asObservable();
  public allow$ = new Subject();
  constructor() {}
  show() {
    this.state.next(true);
  }
  hide() {
    this.state.next(false);
  }
}
