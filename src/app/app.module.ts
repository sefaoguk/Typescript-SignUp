import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SignUp} from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
