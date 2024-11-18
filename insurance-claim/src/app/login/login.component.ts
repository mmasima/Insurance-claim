import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';
  isError = false;

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    const credentials = { email: this.email, password: this.password };

    this.authService.login(credentials).subscribe({
      next: (response: any) => {
        this.message = 'Login successful!';
        this.isError = false;
        
        // Navigate to house-list after successful login
        this.router.navigate(['/house-list']);
      },
      error: (error: any) => {
        this.message = 'Invalid credentials. Please try again.';
        this.isError = true;
      }
    });
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
