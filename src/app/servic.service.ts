import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicService {
baseUrl:string='http://15.206.171.20:9090'
  constructor(private http:HttpClient) { }
//login
postLoginMethod(body:any){
  return this.http.post(`${this.baseUrl}/login`,body,{responseType:'text'})
}
// forget
forgetData(emailId:any){
  return this.http.get(`${this.baseUrl}/forgotPwd/${emailId}`,{responseType:'text'})
}
//unlock
unlockData(body:any){
  return this.http.post(`${this.baseUrl}/unlock`,body,{responseType:'text'})
}
//registaration
postRegData(body:any){
  return this.http.post(`${this.baseUrl}/saveUser`,body,{responseType:'text'})
}
getCountry(){
  return this.http.get(`${this.baseUrl}/countries`)
}
getState(countryId:number){
  return this.http.get(`${this.baseUrl}/states/${countryId}`)
}
getCity(stateId:number){
  return this.http.get(`${this.baseUrl}/cities/${stateId}`)
}
getEmail(email:any){
  return this.http.get(`${this.baseUrl}/emailcheck/${email}`,{responseType:'text'})
}

}
