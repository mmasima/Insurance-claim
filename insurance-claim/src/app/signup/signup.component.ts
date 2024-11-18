import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  message = '';
  isError = false;

  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match';
      this.isError = true;
      return;
    }

    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.authService.signUp(userData).subscribe({
      next: (response: any) => {
        this.message = 'Registration successful! Please log in.';
        this.isError = false;
        setTimeout(() => this.router.navigate(['/login']), 3000); // Redirect after 3 seconds
      },
      error: (error: any) => {
        this.message = 'Registration failed. Try again.';
        this.isError = true;
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
