import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Injectable({
  providedIn: 'root'
})
export class StayhereGuard implements CanDeactivate<BookDetailsComponent> {
  canDeactivate(
    component: BookDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return confirm('Please don`t go!');
  }
}
