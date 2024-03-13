  import { Component, inject } from '@angular/core';
  import { UserService } from '../../services/user.service';
  import { Router } from '@angular/router';
  import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
  })
  export class LoginComponent {
    form:FormGroup;

    constructor(private fb:FormBuilder, 
                 private userService: UserService, 
                 private router: Router) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    login() {
        const val = this.form.value;

        if (val.email && val.password) {
            this.userService.login(val.email,val.password)
                .subscribe(
                    () => {
                        console.log("User is logged in");
                        this.router.navigateByUrl('/dashboard');
                    }
                );
        }
    }
}
