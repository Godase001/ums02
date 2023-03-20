import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private obj:ServicService){}
  loginForm= new FormGroup({
    email:new FormControl(''),
    pwd:new FormControl('')
  })
  submitData(){
    this.obj.postLoginMethod(this.loginForm.value).subscribe(res=>console.log(res))
  }

}
