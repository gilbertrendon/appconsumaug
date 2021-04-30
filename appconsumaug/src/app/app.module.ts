
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { FormsModule } from '@angular/forms'; //Para lo de los formularios(ejm en login)
import { HttpClientModule } from '@angular/common/http';//



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule//

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
