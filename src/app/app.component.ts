import { AppEventService } from './app-event.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alertar: boolean = false;
  tipoAlerta: string;
  navigate: string;
  msg: string;
  constructor(){
    AppEventService.alert.subscribe(data => {
      this.onAlertListener(data);    
    });
  }

  onAlertListener(data){
    this.alertar = true;
    this.tipoAlerta = data.tipo;
    this.navigate = data.navigate;
    this.msg = data.msg;
  }

}
