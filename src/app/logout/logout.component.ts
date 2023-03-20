import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
constructor(private forgot:ServicService){

}
forgotForm=new FormGroup({
  emailId:new FormControl()
})
email:any
forgotMail(){
  this.forgot.forgetData(this.forgotForm.value.emailId).subscribe(res=>alert(res))
}
}
