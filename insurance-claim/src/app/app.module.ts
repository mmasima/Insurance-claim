import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; 
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HouseFormComponent } from './house-insurance-claim/house-form/house-form.component';
import { HouseListComponent } from './house-insurance-claim/house-list/house-list.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { HouseDetailsComponent } from './house-insurance-claim/house-details/house-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HouseFormComponent,
    HouseListComponent,
    HouseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    RouterOutlet,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  providers: [
    provideIonicAngular({}),
    AuthService,
    provideHttpClient(
      withFetch(),
    )
  ]
})
export class AppModule {}
