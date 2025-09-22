import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../serivces/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authGuard = inject(AuthService);
  const router = inject(Router);
  if(authGuard.isLoggedIn()){
    return true;
  }else{
       router.navigate(['/login']);
    return false;
  }
};
