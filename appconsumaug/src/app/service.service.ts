import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { concat, Observable } from 'rxjs';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private _http:HttpClient) { }

  // Login():Observable<any>{
  //   return this._http.get<any>("https://fxauthenticationdev.azurewebsites.net/api/Login?code=PElhoOgRgiqwn1Mkz0qWGI19XYdUvUTj3xPIonSK85HGotDMU7D9DQ==&user=1020480252&password=W12345678");
  // }
    
  //COMENT: se le pasa como paŕametro un usuario { path: 'camino/:parametro', component: ParametroComponent }
  // COMENT: le quité el parámetro momentáneamente user: User
  Login0(user: User):Observable<any>{
    //var string = "https://fxauthenticationdev.azurewebsites.net/api/Login?code=PElhoOgRgiqwn1Mkz0qWGI19XYdUvUTj3xPIonSK85HGotDMU7D9DQ==&user="+user.name+"&password="+user.pass;
    //console.log(user);
    //string.concat("https://fxauthenticationdev.azurewebsites.net/api/Login?code=PElhoOgRgiqwn1Mkz0qWGI19XYdUvUTj3xPIonSK85HGotDMU7D9DQ==&user=",user.name,"&password=",user.pass);
    //return this._http.get<any>(string);
    return this._http.get<any>("https://fxauthenticationdev.azurewebsites.net/api/Login?code=PElhoOgRgiqwn1Mkz0qWGI19XYdUvUTj3xPIonSK85HGotDMU7D9DQ==&user="+user.name+"&password="+user.pass);
  }

  // addUserToRemote( user:user):Observable<any>{
  //   console.log(user);
  //   return this._http.post<any>("http://localhost:4200/adduser", user);
  // }



 
}



