import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterData } from '../../../core/models/auth.models';
import { AuthService } from '../../../core/serivces/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports:[ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'] // corrected
})
export class RegisterComponent implements OnInit {
  error: string = '';
registerForm!: FormGroup;

constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  
}
  ngOnInit(): void {
  this.registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    role: ['', Validators.required],
    avatar: ['']
  });  }

  submit() {
    if (this.registerForm.invalid) return;

    const data: RegisterData = this.registerForm.value as RegisterData;

    this.authService.register(data).subscribe({
      next: res => this.router.navigate(['/login']),
      error: err => this.error = err.error?.message || 'Registration failed'
    });
  }
}
