import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private RegObj:ServicService){this.getCountryData()}
ngOninit(): void{this.registerData()}
  RegisterForm=new FormGroup({
    
      cityId:new FormControl('')  ,   
      countryId:new FormControl(''),
      dob:new FormControl('') ,
      email:new FormControl('') ,
      fname:new FormControl('') ,
      gender:new FormControl('') ,
      lname:new FormControl('') ,
      phno:new FormControl('') ,
      stateId:new FormControl('')
    
  })
  registerData(){
    this.RegObj.postRegData(this.RegisterForm.value).subscribe(res=>console.log(res))
  }
  country:any;
  getCountryData(){
    this.RegObj.getCountry().subscribe(res=>this.country=res)
  }
  state:any;
  getStateData(countryId:number){
    this.RegObj.getState(countryId).subscribe(res=>this.state=res)
  }
  city:any;
  getCityData(stateId:number){
    this.RegObj.getCity(stateId).subscribe(res=>this.city=res)
  }
  email:any
  getEmailData(email:any){
    this.RegObj.getEmail(email).subscribe(res=>console.log(res))
  }

}
