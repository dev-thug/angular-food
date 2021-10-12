import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.signInForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
      }
    )
  }

  ngOnInit(): void {

  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  submit() {
    this.authService.signIn(this.signInForm.value.email, this.signInForm.value.password)
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
