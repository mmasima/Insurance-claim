import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HouseFormComponent } from './house-insurance-claim/house-form/house-form.component';
import { HouseListComponent } from './house-insurance-claim/house-list/house-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'house-form', component: HouseFormComponent, canActivate: [AuthGuard] },
  { path: 'house-list', component: HouseListComponent, canActivate: [AuthGuard] },
  // { path: 'house-details/:id', component: HouseDetailsComponent, canActivate: [AuthGuard] },
]

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
