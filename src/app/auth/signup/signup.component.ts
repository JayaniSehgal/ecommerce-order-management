import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    this.authService
      .signup(this.email, this.password)
      .then(() => {
        // After a successful signup, redirect to profile page to collect extra details
        this.router.navigate(['/profile']);
      })
      .catch((error) => {
        console.error('Signup error:', error);
        this.errorMessage = error.message;
      });
  }
}
