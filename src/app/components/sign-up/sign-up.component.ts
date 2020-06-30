import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  signUpForm: FormGroup;
  formErrors = {
    'email': '',
    'name': '',
    'password': '',
    'confirmPassword': ''
  };
  errorMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Invalid email format',
    },
    'name': {
      'required': 'Name is required.',
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password must be at least 8 characters long'
    },
    'confirmPassword': {
      'required': 'Confirm password is required'
    },
  };


  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatches });

    this.signUpForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  
  onValueChanged(data?: any) {
    if (!this.signUpForm) {
      return;
    }
    const form = this.signUpForm;
    for (const field in this.formErrors) {
      // Remove any previous error message
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const errorMessages = this.errorMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += errorMessages[key] + ' ';
        }
      }
    }
  }

  passwordMatches(control: AbstractControl): { mismatch: boolean } {
    if (control.get('password').value !== control.get('confirmPassword').value) {
      return { mismatch: true };
    }
  }

  onSignUp() {
    if (!this.signUpForm.valid) {
      return;
    }
    const user = this.signUpForm.value;
    this.auth.signUp(user.email, user.password, user.name).subscribe(res => {
      this.router.navigate(['/signIn']);
    });
  }

}
