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
    console.log(currentState.url, nextState.url);
    if (nextState.url === currentState.url + '/edit') {
      return confirm('Sure you wanna Edit!');
    }
    return true;
  }
}
