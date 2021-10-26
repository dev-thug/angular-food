import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;



  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.registerForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      name           : ['', Validators.required],
      email          : ['', [Validators.required, Validators.email]],
      password       : ['', Validators.required],
      passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
    });


  }



  submit() {
    // this.authService.signIn(this.signInForm.value.email, this.signInForm.value.password)
    //   .subscribe(response => {
    //       localStorage.setItem('AUTH-TOKEN', response.token);
    //       alert("로그인 완료");
    //     },
    //     error => alert("로그인 실패"),
    //     () => {
    //       this.router.navigate(["/"]);
    //     }
    //   )

  }



}


/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  if ( !control.parent || !control )
  {
    return null;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('passwordConfirm');

  if ( !password || !passwordConfirm )
  {
    return null;
  }

  if ( passwordConfirm.value === '' )
  {
    return null;
  }

  if ( password.value === passwordConfirm.value )
  {
    return null;
  }

  return {passwordsNotMatching: true};
};
