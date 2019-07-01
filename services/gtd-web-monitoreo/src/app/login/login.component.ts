import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'gtd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onlogin() {
    const valid = this.loginForm.valid;
    if (valid) {
      const values = this.loginForm.value;
      // this.accessService.postAccess$(values).subscribe(resp => {
      //   if (resp) {
      //     console.log(resp);
      //   } else {
      //     console.log(resp);
      //   }
      // });
      this.router.navigate(['/menu']);
      console.log('data', valid, values);
    }
  }

}
