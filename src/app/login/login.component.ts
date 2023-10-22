import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthServiceService } from '../auth-service.service';
import {Router} from '@angular/router'
import {baseUrl} from "../../../environments/environment"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formGroup!: FormGroup;
  jsonToken: any;
  userPhone: any;

  constructor(private authService:AuthServiceService, private router: Router){};
  ngOnInit() {
    this.initForm();
   };
  initForm(){
    this.formGroup = new FormGroup({
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  loginProces(){
    if(this.formGroup.valid){
      try{
        this.authService.login(this.formGroup.value).subscribe(result =>{
          console.log("-=-=-=-result : ", result);
          if(result.success){
            alert(result.message)
            this.jsonToken = result.jsonToken
            this.userPhone = this.formGroup.value.phone;
            this.router.navigate(['/notes'])
          }else{
            alert(result.message)
          }
        })
      }catch(err){
        console.log("Error at login: ", err);
        alert("Invalid userId or Password.")
      }
    }
  }
}
