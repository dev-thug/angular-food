import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(response => {
          localStorage.setItem('AUTH-TOKEN', response.token);
          alert("로그인 완료");
        },
        error => alert("로그인 실패"),
        () => {
          this.router.navigate(["/"]);
        }
      )

  }

}
