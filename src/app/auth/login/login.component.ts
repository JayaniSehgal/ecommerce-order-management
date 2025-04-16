import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService
      .login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Login error:', error);
        this.errorMessage = error.message;
      });
  }
}
