import { LoginService } from '../../services/login.service';
import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import {FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl,
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    LoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(
    private router: Router,
    private LoginService: LoginService,
    private toastService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.LoginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }
  navigate(){
    this.router.navigate(['login'])
  }

}
