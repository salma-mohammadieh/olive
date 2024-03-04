import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../../store/user.actions';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user.type';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store,
    private userService: UserService
  ) {}
  hide = true;
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  formSubmit() {
    if (this.loginForm.valid) {
      // const { email, password } = this.loginForm.value;
      // const userData: User = this.userService.login({email,password});
      // this.store.dispatch(login(userData));
      this.router.navigate(['/home/companies']);
    }
  }
}
