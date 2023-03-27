import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup<any> | any;
  error: Error = {
    name: '',
    message: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.userService.logged$.subscribe((response) => {
      console.log('Usuario creado ' + JSON.stringify(response));
    });

    this.userService.error$.subscribe((error) => {
      this.error = error;
    });
  }

  private buildForm(){
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  save(event: Event) {
    this.error = {
      name: '',
      message: '',
    };

    if(this.registerForm?.valid){
      try{
        this.userService.createAccount(this.registerForm.value);
      }catch(error){
        console.log(error)
      }
    }else{
      this.registerForm?.markAllAsTouched();
    }
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

}
