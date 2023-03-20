import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {
constructor(private unlock:ServicService){}
unlockForm= new FormGroup({
   confirmPwd: new FormControl() ,
   email:  new FormControl(),
   newPwd:  new FormControl(),
   tempPwd:  new FormControl()
})
unlockEmailData(){
  this.unlock.unlockData(this.unlockForm.value).subscribe(res=>console.log(res))
}
}
