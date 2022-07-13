import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmLeaveGuard implements CanDeactivate<unknown> {
  
  canDeactivate(): boolean {
    return window.confirm("Do you really want to leave?");
  }
  
  // Solution to confirm only once:
  // https://github.com/workshops-de/angular-workshop/blob/solve--build-a-can-deactivate-guard/src/app/confirm-leave.guard.ts

}
