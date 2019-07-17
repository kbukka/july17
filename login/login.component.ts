import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private registrationService : RegistrationService) { }

  loginForm=this.fb.group({
    userName:['',Validators.required],
    password:['']
  });

  onSubmit(){
    console.log(this.loginForm.value);
    this.registrationService.login(this.loginForm.value)
    .subscribe(
      response =>alert('Registration Successfull!'),
      error =>console.log('Error!',error)
      );
  }
      
  


  ngOnInit() {
  }
}


