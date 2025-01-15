import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

export const oauthGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiService);
  const router = inject(Router);

  const token = localStorage.getItem('x-csrf');
  if (token) {
    return true;
  }

  return new Promise<boolean>((resolve) => {
    apiService.viewAllProducts().subscribe({
      next: ({ token }: any) => {
        if (token) {
          localStorage.setItem('x-csrf', token); 
          router.navigateByUrl('/dashboard/home');
          resolve(true); 
        } else {
          router.navigateByUrl('/oauth/login'); 
          resolve(false); 
        }
      },
      error: () => {
        router.navigateByUrl('/oauth/login'); 
        resolve(false); 
      },
    });
  });
};
