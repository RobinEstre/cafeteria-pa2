import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loading = false;
  form = this.fb.group({
    username: ['admin', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: ToastService) {}

  submit() {
    if (this.form.invalid || this.loading) return;
    this.loading = true;
    const { username, password } = this.form.value;
    this.auth.login(username!, password!).subscribe({
      next: () => { this.toast.ok('Bienvenido'); this.router.navigateByUrl('/productos'); },
      error: () => this.toast.err('Usuario o clave incorrecta'),
      complete: () => this.loading = false
    });
  }
}
