import { Component } from '@angular/core';
import { AuthService } from '../../../core/serivces/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../../../shared/ui-components/button/button.component";

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, FormsModule, ButtonComponent,ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  submit(form: NgForm) {
    if (form.invalid) return;

    this.authService.login(form.value).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => this.error = err.error.message || 'Login failed'
    });
  }
}
