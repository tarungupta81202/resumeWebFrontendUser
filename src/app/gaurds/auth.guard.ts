import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, map, take } from "rxjs";
import { ApiService } from "../services/api.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private apiService: ApiService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.apiService.isAuthenticated$.pipe(
      take(1), // take only one value, then complete
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        } else {
          // Redirect to the login page if not authenticated
          return this.router.createUrlTree(["/login"]);
        }
      })
    );
  }
}
