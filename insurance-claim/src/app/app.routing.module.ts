import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HouseFormComponent } from './house-insurance-claim/house-form/house-form.component';
import { HouseListComponent } from './house-insurance-claim/house-list/house-list.component';
import { AuthGuard } from './guards/auth.guard'; // Import the AuthGuard
import { HouseDetailsComponent } from './house-insurance-claim/house-details/house-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'house-form', component: HouseFormComponent, canActivate: [AuthGuard] },
  { path: 'house-list', component: HouseListComponent, canActivate: [AuthGuard] },
  { path: 'house-details/:id', component: HouseDetailsComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
