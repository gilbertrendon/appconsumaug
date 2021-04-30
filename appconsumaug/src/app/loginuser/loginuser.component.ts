import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';




@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
  
})
export class LoginuserComponent implements OnInit {
  user = new User();
  //COMENT 
  constructor(private _route:Router, private _service: ServiceService) { }

  ngOnInit(): void {
  }

  async loguserformsubmit()
  {
    //COMENT: le pasé el parámetro momentáneamente this.user debido a que ya no lo pido en el service
    console.log("Antes de entrar al login");

    //this._service.Login0(this.user).subscribe
    const data = await this._service.Login0(this.user).toPromise();
    console.log(data);








    // (

    //   data=>
    //         {
    //          console.log("Logueo completo");
    //          this._route.navigate(['user']) ;
    //         },
            
    //         error=>console.log("error")
    // )
    //this._route.navigate(['user']) 
  }

}
