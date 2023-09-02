
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })

  }

  onLogin() {
    console.warn(this.loginForm.value);
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).
        subscribe({
          next: (res) => {
            alert(res.message);
            localStorage.setItem('token','K9HCG3KX0');
            this.loginForm.value.email=='teacher@gmail.com' ? localStorage.setItem('userType','admin'):localStorage.setItem('userType','user')

            this.router.navigate(['../admin/admin-dashboard']);
          },
          error: (err) => {
            alert(err?.error.message)
          }
        }
      )
    }

  }

}
