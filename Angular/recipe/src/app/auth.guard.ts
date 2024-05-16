import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (route, state) => {

  //Dependency Injection for EmpService
  let service = inject(UserService);

  return service.getLoginStatus();
};