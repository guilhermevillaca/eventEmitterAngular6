import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlashAlertComponent } from './flash-alert/flash-alert.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { AlertModule  } from "../../node_modules/ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    FlashAlertComponent,
    CategoriaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,    
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
