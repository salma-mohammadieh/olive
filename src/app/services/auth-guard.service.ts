import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectUserStatus } from '../store/user.selector';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';

// class AuthGuard {
//   isLoggedIn$: Observable<boolean>;

//   constructor(private store: Store, private router: Router) {
//     this.isLoggedIn$ = this.store.select(selectUserStatus);
//   }

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.isLoggedIn$) {
//       return true;
//     } else {
//       this.router.navigate(['/']);
//     }
//   }
// }

// export const IsAuthGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): Observable<boolean> | Promise<boolean> | boolean => {
//   return inject(AuthGuard).canActivate(route, state);
// };

export const IsAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const router = inject(Router);

  const store = inject(Store);

  return store.select(selectUserStatus).pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return true;
      } else {
        router.navigate(['/']);
        return false;
      }
    })
  );
};
